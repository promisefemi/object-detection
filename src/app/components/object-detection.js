import React, { useRef, useEffect } from "react";
import p5 from "p5";
import ml5 from "ml5";

const ObjectDetection = () => {
  const sketchRef = useRef();

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
      p.createCanvas(640, 480);
      video = p.createCapture(p.VIDEO);
      video.size("100%", "100%");
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
      console.log("Model Loaded!");
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
    <div>
      <div ref={sketchRef}></div>
    </div>
  );
};

export default ObjectDetection;
