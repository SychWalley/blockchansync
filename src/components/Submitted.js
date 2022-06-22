import React from "react";
import barcode from "../assets/IMG-20210702-WA0026.jpg";

function Submitted() {
  return (
    <div className="mt-5 mb-5">
      <div className="text-center">
        {" "}
        <img className="col-8 mx-auto" src={barcode} alt="" />
      </div>
      <h2 className="text-center">Imported Successfully! </h2>
    </div>
  );
}

export default Submitted;
