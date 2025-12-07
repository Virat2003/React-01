import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
      <div className="h-full shrink-0 overflow-hidden relative w-80 bg-red-500 rounded-4xl">
        <img
          className="h-full w-full shrink-0 object-cover "
          src={props.img}
          alt=""
        />
        <RightCardContent id = {props.id} tag={props.tag} intro={props.intro} color={props.color} />
 
      </div>

  );
};

export default RightCard;
