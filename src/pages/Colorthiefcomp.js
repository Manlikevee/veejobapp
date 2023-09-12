import React, { useEffect, useRef } from 'react';
import ColorThief from 'colorthief';

const Colorthiefcomp = () => {
  const topDivRef = useRef(null);
  const topImgRef = useRef(null);
  const colorThief = new ColorThief();

  useEffect(() => {
    const { current: topDiv } = topDivRef;
    const { current: topImg } = topImgRef;

    const loadBackground = () => {
      if (topImg.complete) {
        updateGradient(topImg);
      } else {
        topImg.addEventListener('load', () => {
          updateGradient(topImg);
        });
      }
    };

    const updateGradient = (img) => {
      const color = colorThief.getColor(img);
      const gradientStyle = {
        background: `linear-gradient(to bottom, rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.8), rgba(0, 0, 0, 0.8))`,
      };
      topDiv.style.background = gradientStyle.background;
    };

    loadBackground();
  }, []);

  return (
    <div>
      <div className="content active">
        <div className="background" id="background" ref={topDivRef}>
          <img
            id="apiimg"
            src="https://images.unsplash.com/photo-1693922874336-fd3c4b0084b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
            crossOrigin="anonymous"
            ref={topImgRef}
          />
        </div>
      </div>
    </div>
  );
};

export default Colorthiefcomp;
