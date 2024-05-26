import React from "react";
import "../../style/card.css";

export default function Card({ project }) {
  return (
    <>
      <div class="card">
        <div
          className="background"
          style={{
            backgroundImage: `url(${project.bgImg})`,
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div class="logo">
          <div className="logo-svg flex items-center">
            <button className="text-white button">{project.title}</button>
          </div>
        </div>
        <a href={project.vercel} target="_blank" class="box box1">
          <span class="icon">
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path fill-rule="evenodd" d="M256,48,496,464H16Z" />
            </svg>
          </span>
        </a>
        <a href={project.github} target="_blank" class="box box2">
          {" "}
          <span class="icon">
            <svg
              height="32"
              viewBox="0 0 32 32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
              className="svg"
            >
              <path d="m16 .396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183.803.151 1.093-.344 1.093-.772 0-.38-.009-1.385-.015-2.719-4.453.964-5.391-2.151-5.391-2.151-.729-1.844-1.781-2.339-1.781-2.339-1.448-.989.115-.968.115-.968 1.604.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328.14-1.031.557-1.74 1.011-2.135-3.552-.401-7.287-1.776-7.287-7.907 0-1.751.62-3.177 1.645-4.297-.177-.401-.719-2.031.141-4.235 0 0 1.339-.427 4.4 1.641 1.281-.355 2.641-.532 4-.541 1.36.009 2.719.187 4 .541 3.043-2.068 4.381-1.641 4.381-1.641.859 2.204.317 3.833.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891.556.479 1.077 1.464 1.077 2.959 0 2.14-.02 3.864-.02 4.385 0 .416.28.916 1.104.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
            </svg>
          </span>
        </a>
        <a class="box box3">
          <span class="icon">
            <svg
            className="svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m12 2c5.5228475 0 10 4.4771525 10 10s-4.4771525 10-10 10-10-4.4771525-10-10 4.4771525-10 10-10zm0 2c-4.418278 0-8 3.581722-8 8s3.581722 8 8 8 8-3.581722 8-8-3.581722-8-8-8zm0 6c.5522847 0 1 .4477153 1 1v6c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-6c0-.5522847.4477153-1 1-1zm0-4c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1-1-.44771525-1-1 .4477153-1 1-1z"
                fill-rule="evenodd"
              />
            </svg>
          </span>
        </a>
        <div class="box box4"></div>
      </div>
    </>
  );
}
