import React from "react";
import "./Spinner.css";

export default function Spinner() {
  return (
    <div className="p">
      <div className="loader"></div>
      <p className="font-mono">Loading....</p>
    </div>
  );
}
