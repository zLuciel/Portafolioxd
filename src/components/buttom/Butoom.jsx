import React from "react";
import "./Butoom.css";
const Butoom = () => {
  return (
    <button className="button-about">
      <span>Sobre mi</span>
      <svg
    width={34}
    height={34}
    viewBox="0 0 74 74"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx={37} cy={37} r={35.5} stroke="#000" strokeWidth={3} />
    <path
      d="M25 35.5a1.5 1.5 0 0 0 0 3v-3Zm24.06 2.56a1.5 1.5 0 0 0 0-2.12l-9.545-9.547a1.5 1.5 0 1 0-2.122 2.122L45.88 37l-8.486 8.485a1.5 1.5 0 1 0 2.122 2.122l9.546-9.546ZM25 38.5h23v-3H25v3Z"
      fill="#000"
    />
  </svg>
    </button>
  );
};

export default Butoom;
