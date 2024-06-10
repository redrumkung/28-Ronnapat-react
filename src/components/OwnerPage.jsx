import React from "react";

const OwnerPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="p-12 text-3xl font-bold">Ronnapat - GROUP G - 28</h1>
      <img
        className="w-64 h-64 rounded-md object-cover"
        src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Jaguar_head_shot-edit2.jpg"
      ></img>
      <p className="p-8 font-bold">Short Biography:</p>
      <p className="px-32">
        I am a graduate of Generation’s Junior Software Developer Bootcamp and
        Software Park’s Full Stack Developer CodeCamp, seeking a Business
        Analyst position. Previously, I worked in other fields, but now I have a
        passion for business analysis. This career change has equipped me with
        new skills and diverse perspectives, inspiring me to work happily and
        efficiently. I believe self-improvement is crucial for growth and
        achieving true professional success.
      </p>
    </div>
  );
};

export default OwnerPage;
