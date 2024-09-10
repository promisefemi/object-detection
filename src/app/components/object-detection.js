"use client";
import React, { useRef, useEffect, useState } from "react";
import p5 from "p5";
import ml5 from "ml5";

const ObjectDetection = () => {
  const sketchRef = useRef();
  const [modelLoading, setModelState] = useState(true);

  useEffect(() => {
    let myp5 = new p5(sketch, sketchRef.current);

    return () => {
      myp5.remove();
    };
  }, []);

  const sketch = (p) => {
    let video;
    let detector;
    let detections = [];

    p.setup = () => {
      p.createCanvas(640, 380);
      video = p.createCapture(p.VIDEO);
      video.size("640", "480");
      video.hide();

      detector = ml5.objectDetector("cocossd", modelReady);
    };

    p.draw = () => {
      p.image(video, 0, 0);

      for (let i = 0; i < detections.length; i++) {
        let object = detections[i];
        p.stroke(0, 255, 0);
        p.strokeWeight(4);
        p.noFill();
        p.rect(object.x, object.y, object.width, object.height);
        p.noStroke();
        p.fill(255);
        p.textSize(24);
        p.text(object.label, object.x + 10, object.y + 24);
      }
    };

    function modelReady() {
      setModelState(false);
      detect();
    }

    function detect() {
      detector.detect(video, gotDetections);
    }

    function gotDetections(error, results) {
      if (error) {
        console.error(error);
        return;
      }
      detections = results;
      detect();
    }
  };

  return (
    <div className="relative">
      {modelLoading ? (
        <div className="absolute text-center bg-purple/50 w-full h-full flex justify-center items-center ">
          <span className="text-white">Loading Model...</span>
        </div>
      ) : null}
      <div ref={sketchRef}></div>
    </div>
  );
};

export default ObjectDetection;
