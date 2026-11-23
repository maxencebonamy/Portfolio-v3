import React from "react";
import "./Circle.scss";


function Circle({x, y, radius, color}) {
    const circleStyle = {
        width: 2 * radius,
        height: 2 * radius,
        backgroundColor: color,
        borderRadius: "50%"
    };

    const containerStyle = {
        width: 2 * radius * 1.5,
        height: 2 * radius * 1.5,
        position: "absolute"
    }

    if (x >= 0) {
        containerStyle.left = (x - radius).toString() + "px";
    }
    else {
        containerStyle.right = (-x - radius*2).toString() + "px";
    }

    if (y >= 0) {
        containerStyle.top = (y - radius).toString() + "px";
    }
    else {
        containerStyle.bottom = (-y - radius*2).toString() + "px";
    }

    return (
        <div className="circle" style={containerStyle}>
            <div className="circle_content" style={circleStyle} />
        </div>
    );
}


export default Circle;