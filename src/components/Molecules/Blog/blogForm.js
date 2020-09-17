import React from "react";

const BlogForm = (props) => {
  return (
    <>
      <div className="">
        <div className="pt-8 md:pt-20">
          <div className="flex justify-center">
            <p className="text-3xl font-bold md:text-lg lg:text-4xl md:font-extrabold  lg:font-extrabold lg:leading-10">From the blog</p>
          </div>
          <div className="flex justify-center text-center text-gray-600 text-xl pr-2 pl-2 md:pr-0 md:pl-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </div>
        </div>
        <div className=" flex flex-col  md:flex-row md:pr-20 md:pl-20 pr-2 pl-2 justify-between ">
          {/**card start */}
          <div className="md:w-1/4 w-full mt-6 border rounded-lg">
            <div className="card-img w-full ">
              <img
                src="internal-factors-affect-business-organization.jpg"
                alt="cards"
                className="w-full rounded-t-lg"
              />
            </div>
            <div className="pr-4 pl-4 card-content w-full  ">
              <p className="pt-2 pb-2 text-indigo-700 text-base font-medium">
                blog
              </p>
              <p className="text-xl font-semibold">
                Boost Your conversion rate for blogs
              </p>
              <div className="pt-4 pb-4">
                <p className="text-gray-500 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          {/**card ends */}
          {/**card start */}
          <div className="md:w-1/4 w-full mt-6 border rounded-lg">
            <div className="card-img w-full ">
              <img
                src="business-meeting_Large-1.jpg"
                alt="cards"
                className="w-full rounded-t-lg"
              />
            </div>
            <div className="pr-4 pl-4 card-content w-full  ">
              <p className="pt-2 pb-2 text-indigo-700 text-base font-medium">
                blog
              </p>
              <p className="text-xl font-semibold">
                Boost Your conversion rate for blogs
              </p>
              <div className="pt-4 pb-4">
                <p className="text-gray-500 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          {/**card ends */}
          {/**card start */}
          <div className="md:w-1/4 w-full mt-6 border rounded-lg">
            <div className="card-img w-full ">
              <img
                src="5-Pro-Tips-to-Boost-Attendee-Engagement-on-Business-Meetings.jpg"
                alt="cards"
                className="w-full rounded-t-lg"
              />
            </div>
            <div className="pr-4 pl-4 card-content w-full  ">
              <p className="pt-2 pb-2 text-indigo-700 text-base font-medium">
                blog
              </p>
              <p className="text-xl font-semibold">
                Boost Your conversion rate for blogs
              </p>
              <div className="pt-4 pb-4">
                <p className="text-gray-500 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          {/**card ends */}
        </div>
      </div>
    </>
  );
};

export default BlogForm;
