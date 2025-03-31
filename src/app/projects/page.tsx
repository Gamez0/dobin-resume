import ProjectExperience from "@/model/project-experience";

const fetchProjects = async (): Promise<ProjectExperience[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/projects`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
};
export default async function Page() {
  const projects = await fetchProjects();

  return (
    <div>
      <h1>Page of Projects</h1>
      {projects.map((project) => (
        <div key={project.name}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>
            {project.startDate} - {project.endDate}
          </p>
          <p>Technologies: {project.technologies.join(", ")}</p>
        </div>
      ))}
      {/* Add your project components or content here */}
    </div>
  );
}
