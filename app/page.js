"use client";

import React, { useState } from "react";
import Modal from "./modal";
import Element from "./Element";

const Page = () => {
  return (
    <div className="max-w-full md:max-w-5xl max-h-max h-screen flex items-center justify-center mx-auto p-3 md:p-24 relative">
      <div className="w-full h-full grid grid-cols-1 md:flex md:flex-wrap overflow-y-auto">
        <Element
          bgClass="bg-img1 bg-cover"
          Tittle="Lorem Ipsum"
          txt="Description about project"
        />
        <Element
          bgClass="bg-img2 bg-contain bg-center"
          Tittle="LOGICOM"
          txt="Description about project"
        />
        <Element
          bgClass="bg-img3 bg-cover"
          Tittle={
            <div className="relative md:right-5">
              <div className="relative md:right-[22px]">Coral</div>
              <div className="md:-m-3 md:p-0">Coalition</div>
            </div>
          }
        />
        <Element
          bgClass="bg-img4 bg-contain bg-center"
          Tittle="GOODBODI"
          txt="Description about project"
        />
        <div className="m-auto md:absolute md:bottom-10 md:right-24">
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default Page;
