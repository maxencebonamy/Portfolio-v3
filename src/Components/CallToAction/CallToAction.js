import React from "react";
import "./CallToAction.css";
import star from "../../Assets/Images/Star.png";
import {ReactCurvedText} from "react-curved-text";


function CallToAction() {
    return (
        <a className="call_to_action" href="https://maxencebonamy.fr">
            <div className="call_to_action_text">
                <ReactCurvedText width='250'
                                 height='250'
                                 cx='125'
                                 cy='125'
                                 rx={75}
                                 ry='75'
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