import { useState, useEffect, useRef } from 'react';

import './styles.scss';

function ErrorAnimation() {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  const eyeLeft = useRef();

  function calcAngle(element) {
    if (!element.current) return;

    let elX = element.current.offsetLeft + element.current.clientWidth / 2;
    let elY = element.current.offsetTop + element.current.clientHeight / 2;

    var rad = Math.atan2(mouseCoordinates.x - elX, mouseCoordinates.y - elY);
    var rot = rad * (180 / Math.PI) * -1 + -180;

    return rot;
  }

  const handleMouseMove = (event) => {
    setMouseCoordinates({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="error-animation">
      <div className="eye-container">
        <div
          ref={eyeLeft}
          style={{
            transform: `rotate(${calcAngle(eyeLeft)}deg)`
          }}
          className="eye-error"></div>
      </div>
    </div>
  );
}

export default ErrorAnimation;
