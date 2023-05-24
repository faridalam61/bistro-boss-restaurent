import React from "react";

function MenuSection({ cover, title, description }) {
  console.log("cover", cover);
  return (
    <div
      className="px-20 py-32"
      style={{
        background: `url("${cover}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black opacity-50 w-3/4 mx-auto p-16  text-center">
        <h2 className="text-5xl text-white mb-5 uppercase">{title}</h2>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}

export default MenuSection;
