import React from "react";

const RequestDemo = () => {
  return (
    <>
      <div id="myModal" className="modal fade request-demo">
        <div className="modal-dialog modal-dialog-scrollable modal-lg  modal-dialog-centered">
          <div className="modal-content modal-wrapper">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div className="modal-iframe-cont">
              <iframe
                title="Request Demo Page"
                className="modal-iframe"
                height="400"
                src="https://share.hsforms.com/1WJl1Ro4JRLay2l0e64eeeg4ti6m"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestDemo;
