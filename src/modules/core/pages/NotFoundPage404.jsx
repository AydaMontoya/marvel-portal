import React from 'react';
import './NotFoundPage404.scss';
import ErrorAnimation from '../components/molecules/ErrorAnimation/ErrorAnimation';

const NotFoundPage404 = () => {
  return (
    <>
      <div className="error_container">
        <div className="error_flex">
          <div className="error_info">
            <div>
              <h2>404 PAGE NOT FOUND</h2>
              <br />
              <h4>Not even the Eye of Uatu sees your request...</h4>
              <br />
              <p>
                Check that you typed the address correctly, go back to your previous page or try
                using our site searchg to find something specific.
              </p>
            </div>
          </div>
          <div className="error_img">
            <div className="error-animation">
              <ErrorAnimation />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage404;
