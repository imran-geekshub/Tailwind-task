import React from "react";

const Heroimage = () => {
  return (
    <>
      <div className="hero-image flex flex-col md:flex-row ">
        <div className="bg-blue-100 md:w-1/2 w-full flex justify-center items-center">
          <div className="md:pl-4 md:pr-8 pt-4 pb-4 pr-6 pl-6 md:pt-0 md:pb-0">
            <p className="text-black text-xl font-bold md:text-lg lg:text-4xl md:font-extrabold  lg:font-extrabold lg:leading-10">
              Data to enrich 
            </p>
            <p className="text-blue-700 text-xl font-bold md:text-lg md:font-extrabold lg:text-4xl lg:font-extrabold lg:leading-10">
              <span className="text-black">your</span> Online
            </p>
            <p className="text-blue-700 text-xl font-bold md:text-lg lg:text-4xl md:font-extrabold lg:font-extrabold lg:leading-10">
              business
            </p>
            <p className="pt-2 pb-2 w-42 text-gray-500 lg:font-semibold md:pt-0 md:pb-0">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <div className="flex md:mt-1">
            <button className="mr-2 bg-indigo-700 text-white p-3 md:p-2 lg:p-3 lg:font-medium rounded outline-none hover:bg-indigo-600">Get started </button>
            <button className="mr-2 bg-white text-purple-600 p-3 md:p-2 lg:p-3 lg:font-medium rounded outline-none hover:bg-indigo-300 hover:text-white">Live demo</button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <img src="tail-wind.jpg" alt="hero-pic" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Heroimage;
