import React from "react";
import MainLayout from "../layout/MainLayout";

function AboutUs() {
  return (
    <MainLayout>
      <div className="flex w-full flex-col">
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
          content
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
          content
        </div>
      </div>
    </MainLayout>
  );
}

export default AboutUs;
