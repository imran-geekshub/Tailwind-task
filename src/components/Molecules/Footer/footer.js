import React from 'react';

const Footer=(props)=> {
    return (
        <>
          <div className="flex flex-col md:flex-row  md:pr-6 md:pl-6 pb-6 pt-20">
          {/**Footer section 1 */}
          <div className=" md:w-3/5 w-full flex flex-col md:flex-row">
          <div className=" w-full  md:w-1/4 pr-6 pl-6">
          <p className="pt-4 text-gray-500 font-medium cursor-pointer">SOLUTIONS</p>
          <div className="pt-2 text-gray-700 font-semibold  cursor-pointer"><p>Marketing</p></div>
          <div className="pt-2 text-gray-700 font-semibold  cursor-pointer"><p>Analytics</p></div>
          <div className="pt-2 text-gray-700 font-semibold  cursor-pointer"><p>Commerce</p></div>
          <div className="pt-2 text-gray-700 font-semibold cursor-pointer"><p>Insight</p></div>
          </div>
          {/**Footer section 1 end */}
          {/**Footer section 2  */}
          <div className="w-full  md:w-1/4 pr-6 pl-6">
          <p className="pt-4 text-gray-500 font-medium cursor-pointer">SUPPORT</p>
          <div className="pt-2 text-gray-700 font-semibold  cursor-pointer"><p>Pricing</p></div>
          <div className="pt-2 text-gray-700 font-semibold cursor-pointer"><p>Documentation</p></div>
          <div className="pt-2 text-gray-700 font-semibold  cursor-pointer"><p>Guides</p></div>
          <div className="pt-2 text-gray-700 font-semibold  cursor-pointer"><p>API Status</p></div>
          </div>
          {/** Footer section 2 end*/}
          {/**Footer section 2  */}
          <div className="w-full  md:w-1/4 pr-6 pl-6">
          <p className="pt-4 text-gray-500 font-medium cursor-pointer">COMPANY</p>
          <div className="pt-2 text-gray-700 font-semibold  cursor-pointer"><p>About</p></div>
          <div className="pt-2 text-gray-700 font-semibold  cursor-pointer"><p>Blog</p></div>
          <div className="pt-2 text-gray-700 font-semibold cursor-pointer"><p>Jobs</p></div>
          <div className="pt-2 text-gray-700 font-semibold cursor-pointer"><p>Press</p></div>
          <div className="pt-2 text-gray-700 font-semibold cursor-pointer"><p>Partners</p></div>
          </div>
          {/** Footer section 2 end*/}          {/**Footer section 2  */}
          <div className="w-full  md:w-1/4 pr-6 pl-6">
          <p className="pt-4 text-gray-500 font-medium cursor-pointer">LEGAL</p>
          <div className="pt-2 text-gray-700 font-semibold cursor-pointer"><p>Claim</p></div>
          <div className="pt-2 text-gray-700 font-semibold cursor-pointer"><p>Privacy</p></div>
          <div className="pt-2 text-gray-700 font-semibold cursor-pointer"><p>Terms</p></div>
          </div>
          {/** Footer section 2 end*/}
          </div>
          <div className="w-full md:w-2/5 pr-6 pl-6">
          <div className=" w-full md:w-full">
           <div className="pt-4 text-gray-500 font-medium"><p>SUBSCRIBE TO OUR NEWSLETTER</p></div>
           <div className="pt-2 text-gray-700 font-semibold "><p>The latest news, articles, and resourses, sent to your inbox weekly.</p></div>
           <div className="flex pt-4">
           <div><input type="text" placeholder="Enter Your Email" className="mr-2 border rounded p-2 "/></div>
           <div><button className="mr-2 bg-indigo-700  text-white p-2 font-medium rounded outline-none"> Get Started</button>
           </div>
           </div>
          </div>
          </div>  
          </div>  
        </>
    );
}

export default Footer;