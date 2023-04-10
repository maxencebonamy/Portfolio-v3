import React from "react";
import "./CallToAction.css";
import star from "../../Assets/Images/Star.png";
import {ReactCurvedText} from "react-curved-text";


function CallToAction() {
    return (
        <a className="call_to_action" href="https://maxencebonamy.fr">
            <div className="call_to_action_text">
                <ReactCurvedText width={window.innerWidth > 1280 ? "250" : "150"}
                                 height={window.innerWidth > 1280 ? "250" : "150"}
                                 cx={window.innerWidth > 1280 ? "125" : "75"}
                                 cy={window.innerWidth > 1280 ? "125" : "75"}
                                 rx={window.innerWidth > 1280 ? 75 : 50}
                                 ry={window.innerWidth > 1280 ? 75 : 50}
                                 startOffset='0'
                                 reversed={true}
                                 text="HIRE ME - HIRE ME - HIRE ME - "
                                 textProps={{"style": {"fontSize": "28", "color": "#ffffff"}}}
                                 textPathProps={{"fill": "#ffffff"}}
                                 tspanProps={null}
                                 ellipseProps={{"style": "fill: transparent"}}
                                 svgProps={null} />
            </div>
            <img src={star} />
        </a>
    );
}


export default CallToAction;