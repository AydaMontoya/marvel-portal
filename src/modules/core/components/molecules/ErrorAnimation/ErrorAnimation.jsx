import React from 'react';

import './styles.scss';

function ErrorAnimation() {
  return (
    <div className="mlv-main-error-div">
      <div className="textIzquierdo">
        <h1>404 PAGE NOT FOUN </h1>
        <h3>Not even the Eye Uatu sees your request ...</h3>
        <p>
          Check that you typed the address correctly, go back to your previous page or try using our
          site search to find something specific
        </p>
      </div>
      <div className="mlv-background">{/* <div className="mlv-eye"></div> */}</div>
    </div>
  );
}

export default ErrorAnimation;
