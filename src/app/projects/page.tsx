import ProjectExperience from "@/model/project-experience";

const fetchProjects = async (): Promise<ProjectExperience[]> => {
  const response = await fetch("http://localhost:3000/api/projects");
  return response.json();
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
