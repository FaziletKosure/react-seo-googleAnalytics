import React from "react";

const FooterModal = () => {
  return (
    <>
      <div id="footerModal" className="modal fade request-demo">
        <div className="modal-dialog modal-dialog-scrollable modal-lg  modal-dialog-centered">
          <div className="modal-content modal-wrapper">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div className="modal-iframe-cont">
              <iframe
                title="newsletter Demo Page"
                className="modal-iframe"
                frameborder="0"
                // scrolling={isTabletOrMobile ? "yes" : "no"}
                height="400"
                src="https://share.hsforms.com/1lebDce3hRkuZdZS-EiaWng4ti6m"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterModal;
