"use client";

import ProjectExperience from "@/model/project-experience";
import { useState } from "react";

export default function Page() {
  const [projects, setProjects] = useState<ProjectExperience[]>([]);

  // TODO: fetch projects from API
  return (
    <div>
      <h1>Page of Projects</h1>
      {/* Add your project components or content here */}
    </div>
  );
}
