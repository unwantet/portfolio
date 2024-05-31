import { useState } from 'react';
import Card from "./Card";
import { useEffect } from "react";


export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://online-json-server-api.up.railway.app/project/6659f86a4a1552ef80d177e8/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data.data));
      setIsLoading(false);
  }, []);
  if (isLoading) {
    console.log("sasasa");
  }

  console.log(projects);
  return (
    <div className="flex flex-col-reverse items-center gap-10">
      {projects.map((project) => (
        <div>
          <Card project={project} />
        </div>
      ))}
    </div>
  );
}
