"use client";

import ObjectDetection from "./components/object-detection";

let canvas;
let video;
let detector;
let detections = [];

export default function Home() {
  return (
    <div>
      <h2>Object Detection</h2>
      <ObjectDetection />
    </div>
  );
}
