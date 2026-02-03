"use client";
import React from "react";
import { ReactTyped } from "react-typed";

export const TypingTitle = () => {
  return (
    <div className="text-center mt-2">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
        <ReactTyped
          strings={[
            "MERN Stack Developer",
            "Frontend Enthusiast",
            "Backend Problem Solver",
            "Clean Code Lover",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </h1>
    </div>
  );
};
