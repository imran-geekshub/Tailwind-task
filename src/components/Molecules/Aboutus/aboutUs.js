import React from "react";

export const Aboutus = (props) => {
  return (
    <>
      <div className="flex flex-col md:flex-row pr-4 pl-4  pt-8 md:pt-20">
        <div className="md:w-2/5 w-full pr-4 pl-2 ">
          <div>
            <p className="text-black text-3xl font-bold md:text-lg lg:text-4xl md:font-extrabold  lg:font-extrabold lg:leading-10">About US</p>
          </div>
          <div>
            <p className="text-lg text-gray-600 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="md:w-3/5 w-full mt-4 md:mt-0">
          {/**Team Crad start */}
          <div className="flex pr-4 pb-4">
            <div className="w-2/4">
              <img src="1.jpg" alt="team" className=" border rounded-lg " />
            </div>
            <div className="w-3/4 pl-2">
            <div className="text-xl font-semibold"><p>Alberto Del Rio</p></div>
            <div className="font-medium text-indigo-700 pt-2"><p>Co-Founder / CEO</p></div>
            <div className="pt-4 ">
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex pt-2">
            <i className="fa fa-twitter mr-2" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            </div>
            </div>
          </div> 
          {/**Team Crad ends*/}
          <hr />
          {/**Team Crad start */}
          <div className="flex pr-4 pb-4 pt-4">
            <div className="w-2/4 ">
              <img src="1.jpg" alt="team" className=" border rounded-lg " />
            </div>
            <div className="w-3/4 pl-2">
            <div className="text-xl font-semibold"><p>Josef aldeno</p></div>
            <div className="font-medium text-indigo-700 pt-2"><p>Co-Founder / CEO</p></div>
            <div className="pt-4 ">
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex pt-2">
            <i className="fa fa-twitter mr-2" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            </div>
            </div>
          </div> 
          {/**Team Crad ends*/}
          <hr />
          {/**Team Crad start */}
          <div className="flex pr-4 pb-4 pt-4">
            <div className="w-2/4 ">
              <img src="1.jpg" alt="team" className=" border rounded-lg " />
            </div>
            <div className="w-3/4 pl-2">
            <div className="text-xl font-semibold"><p>Romeo Alexander</p></div>
            <div className="font-medium text-indigo-700 pt-2"><p>Co-Founder / CEO</p></div>
            <div className="pt-4 ">
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex pt-2">
            <i className="fa fa-twitter mr-2" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            </div>
            </div>
          </div> 
          {/**Team Crad ends*/}
        </div>
      </div>
    </>
  );
};
