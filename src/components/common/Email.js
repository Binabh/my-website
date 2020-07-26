import React, { useState } from "react";
function Email() {
  const [isAlertVisible, setAlertVisible] = useState(false);
  const handleClick = () => {
    setAlertVisible(true);
    navigator.clipboard.writeText("info@binabh.com.np");
  };
  return (
    <>
      <div className="row pt-4 px-3">
        <h2 className="text-light text-monospace">Email</h2>
      </div>
      {isAlertVisible && (
        <div className="row px-3">
          <div className="alert alert-success" role="alert">
            <strong>Email</strong> copied to clipboard!{"         "}
            <span
              onClick={() => setAlertVisible(false)}
              className="fa fa-check-circle mr-2"
            ></span>
          </div>
        </div>
      )}
      <div className="row py-1">
        <div className="col-xl-6">
          <input
            disabled
            type="email"
            className="form-control"
            value="info@binabh.com.np"
          />
        </div>
        <div className="col-xl-3">
          <button
            className="btn btn-block btn-outline-info"
            onClick={() => handleClick()}
          >
            <span className="fa fa-paste mr-2"></span>
            Copy
          </button>
        </div>
        <div className="col-xl-3">
          <a
            href="mailto:info@binabh.com.np"
            className="btn btn-block btn-outline-info"
          >
            <span className="fa fa-envelope mr-2"></span>
            Mail
          </a>
        </div>
      </div>
    </>
  );
}

export default Email;
