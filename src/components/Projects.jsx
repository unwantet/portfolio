import React, { useState, useEffect } from 'react';
import Card from "./Card";
import { useFetch } from '../hooks/useFetch';
import { data } from 'autoprefixer';

export default function Projects() {
  const {
    data: projects,
    isPending: isDataPending,
    error,
  } = useFetch(
    "https://online-json-server-api.up.railway.app/project/6659f86a4a1552ef80d177e8/projects"
  );

  const [isPending, setIsPending] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPending(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [data]);

  if (isPending || isDataPending) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!projects || !projects.data) {
    return <div>No data</div>;
  }

  return (
    <div className="flex flex-col-reverse items-center gap-10">
      {projects.data.map((project) => (
        <div key={project.id}>
          <Card project={project} />
        </div>
      ))}
    </div>
  );
}
