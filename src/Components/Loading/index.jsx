import React from "react";
import './loading.css'
const Loading = () => {
  return (
    <div className="preloader">
        <div className="lds-ripple">
            <div></div>
            <div></div>
        </div>
    </div>
  );
};

export default Loading;
