import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full  flex flex-col justify-between p-8">
      <h2 className="bg-white rounded-full flex justify-center items-center h-12 w-12 text-2xl font-bold">
        {props.id+1}
      </h2>
      <div>
        <p className="text-lg leading-relaxed text-white mb-10  ">
          {props.intro}
        </p>
        <div className="flex justify-between ">
          <button style={{backgroundColor:props.color}} className="rounded-full px-8 py-2 text-white font-lg">
            {props.tag}
          </button>
          <button className="bg-blue-600 rounded-full px-3 py-2 text-white font-lg">
            <i class="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
