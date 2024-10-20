"use client";

import React, { useState } from "react";
import Modal from "./modal";
import Element from "./Element";
import img1 from "../public/images/1.png";
import img2 from "../public/images/44.png";
import img3 from "../public/images/3.png";
import img4 from "../public/images/4.png";

const Page = () => {
  return (
    <div className="max-w-full mx-auto md:max-w-5xl max-h-screen h-full flex items-center justify-center">
      <div className="w-full flex flex-col md:flex-row sm:flex-wrap gap-5">
        <Element
          imageUrl={img1}
          Tittle="Lorem Ipsum"
          txt="Description about project"
        />
        <Element
          imageUrl={img2}
          Tittle="LOGICOM"
          txt="Description about project"
        />
        <Element
          imageUrl={img3}
          Tittle="Coral"
          txt="Description about project"
        />
        <Element
          imageUrl={img4}
          Tittle="GOODBODI"
          txt="Description about project"
        />
      </div>
      {/* <div className="m-auto absolute md:bottom-10 md:right-24">
        <Modal />
      </div> */}
    </div>
  );
};

export default Page;
