import React from "react";
import { MDBSpinner } from "mdb-react-ui-kit";

const Loader = () => {
  return (
    <div className="loader">
      <MDBSpinner role="status">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>{" "}
    </div>
  );
};

export default Loader;
