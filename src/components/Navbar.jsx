import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 mb-20 align-content px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="">
              <Dropdown />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">
                  <a>Homepage</a>
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Unwantet's Portfolio</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
            <img  src="/public/icon.png" alt="" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
