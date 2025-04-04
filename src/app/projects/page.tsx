import ProjectExperience from "@/model/project-experience";

const fetchProjects = async (): Promise<ProjectExperience[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/projects`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};
export default async function Page() {
    let projects: ProjectExperience[] = [];

    try {
        projects = await fetchProjects();
    } catch (error) {
        console.error("Error fetching projects", error);
        return <div>Error: Failed fetching projects</div>;
    }

    return (
        <div>
            <h1>Page of Projects</h1>
            {projects.length > 0 ? (
                projects.map((project) => (
                    <div key={project.name}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <p>
                            {project.startDate} - {project.endDate}
                        </p>
                        <p>Technologies: {project.technologies.join(", ")}</p>
                    </div>
                ))
            ) : (
                <p>No projects found.</p>
            )}
            {/* Add your project components or content here */}
        </div>
    );
}
