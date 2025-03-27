"use client";

import ProjectExperience from "@/model/project-experience";
import { useEffect, useState } from "react";

export default function Page() {
  const [projects, setProjects] = useState<ProjectExperience[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch("/api/projects"); // 절대 경로로 수정
      const data = await response.json();
      setProjects(data);
    };
    console.log("herer");

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Page of Projects</h1>
      {projects.length > 0
        ? projects.map((project) => (
            <div key={project.name}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <p>
                {project.startDate} - {project.endDate}
              </p>
              <p>Technologies: {project.technologies.join(", ")}</p>
            </div>
          ))
        : "Loading..."}
      {/* Add your project components or content here */}
    </div>
  );
}
