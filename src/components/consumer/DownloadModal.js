import React from "react";

const DownloadModal = () => {
  return (
    <>
      <div id="downloadModal" className="modal fade request-demo">
        <div className="modal-dialog modal-dialog-scrollable modal-lg  modal-dialog-centered">
          <div className="modal-content modal-wrapper">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div className="modal-iframe-cont">
              <iframe
                title="Download Demo Page"
                className="modal-iframe"
                height="370"
                src="https://share.hsforms.com/1DOFLcghnSEWetYjj4Iu4cg4ti6m"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadModal;
