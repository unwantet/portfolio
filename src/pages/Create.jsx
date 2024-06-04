import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Create() {
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [github, setGithub] = useState("");
  const [vercel, setVercel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      title,
      description,
      img,
      github: github,
      vercel: vercel,
    };
    useEffect(() => {
      fetch(
        "https://online-json-server-api.up.railway.app/project/6659f86a4a1552ef80d177e8/projects",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProject),
        }
      );
    }, []);
    window.location.href = "/";
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-bold mb-10">
        Create New Project
      </h1>

      <form
        className="flex items-center flex-col gap-5 "
        onSubmit={handleSubmit}
      >
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">TITLE</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            required
            onChange={(e) => settitle(e.target.value)}
            value={title}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">GitHub</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            required
            onChange={(e) => setGithub(e.target.value)}
            value={github}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Vercel</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            required
            onChange={(e) => setVercel(e.target.value)}
            value={vercel}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Image URL:</span>
          </div>
          <input
            type="url"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            required
            onChange={(e) => setImg(e.target.value)}
            value={img}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Write Description"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </label>

        <button className="btn btn-secondary w-full max-w-xs">Submit</button>
      </form>
    </div>
  );
}

export default Create;
