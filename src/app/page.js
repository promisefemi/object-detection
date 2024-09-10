"use client";
import dynamic from "next/dynamic";

import Header from "./components/header";

const ObjectDetection = dynamic(() => import("./components/object-detection"), {
  ssr: false,
  loading: () => <p>Loading object detection...</p>,
});

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5 flex justify-center items-center ">
        <div className="w-4/5 bg-white rounded-xl  p-10">
          <h2 className="font-bold text-2xl mb-2">System check</h2>
          <p className="text-md">
            We utilize your camera image to ensure fairness for all
            participants, and we also employ both your camera and microphone for
            a video questions where you will be prompted to record a response
            using your camera or webcam, so it's essential to verify that your
            camera and microphone are functioning correctly and that you have a
            stable internet connection. To do this, please position yourself in
            front of your camera, ensuring that your entire face is clearly
            visible on the screen. This includes your forehead, eyes, ears,
            nose, and lips. You can initiate a 5-second recording of yourself by
            clicking the button below.
          </p>
          <div className="m-2 mt-10 rounded-2xl overflow-hidden border-purple w-1/2">
            <ObjectDetection />
          </div>
        </div>
      </div>
    </div>
  );
}
