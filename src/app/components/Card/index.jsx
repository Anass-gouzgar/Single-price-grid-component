import React from "react";

const index = () => {
  return (
    <div className="w-[85%] h-[85%] md:h-[550px] md:w-[790px] overflow-hidden rounded-lg md:shadow-2xl">
      {/* first card */}
      <div className="h-[40%]j md:h-1/2 bg-[#FFFFFF] p-6 md:p-12 flex flex-col gap-6">
        <h1 className="text-2xl text-Cyan font-bold md:font-black">
          {" "}
          Join our community
        </h1>
        <h2 className="text-BrightYellow text-xl font-bold md:font-black">
          {" "}
          30-day, hassle-free money back guarantee
        </h2>
        <p className="text-GrayishBlue text-sm md:text-xl leading-7">
          {" "}
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>

      {/* sec card */}
      <div className="md:h-1/2 md:w-full flex flex-col md:flex-row  ">
        {/* first comp */}
        <div className="h-1/2 md:h-full md:w-1/2 bg-Cyan flex flex-col gap-6 md:gap-3 md:p-9  p-6">
          <h1 className="text-white text-2xl">Monthly Subscription</h1>
          <div className=" flex flex-col gap-3">
            <div className="flex gap-6 md:gap-3">
              <h1 className="text-white text-3xl font-bold"> $29</h1>
              <p className="text-LightGray self-center font-thin">per month </p>
            </div>

            <p className="text-white text-lg font-thin">
              Full access for less than $1 a day{" "}
            </p>
          </div>
          <div className="md:w-[80%]e w-full md:flex md:justify-centerd">
            <button className="text-white  w-full md:w-[80%]  bg-BrightYellow rounded-lg py-3 hover:text-black transition duration-300 mt-2 shadow-xl">
              Sign Up
            </button>
          </div>
        </div>

        {/* sec component */}
        <div className="md:h-full md:w-1/2 bg-[#4ABEBD] p-6 flex flex-col gap-5 md:p-9 md:gap-3 md:pl-10">
          <h1 className="text-white text-2xl ">Why Us</h1>
          <p className="text-LightGray/70 font-thin md:font-bold w-[60%] md:w-[80%] text-balance leading-6">
            Tutorials by industry experts Peer & expert code review Coding
            exercises Access to our GitHub repos Community forum Flashcard decks
            New videos every week
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
