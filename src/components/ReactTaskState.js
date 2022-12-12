import React, { useState } from "react";

import shadowme from "../images/Frame 13.png";
import shadowbody from "../images/secondshadowbody.png";
import shadowfooter from "../images/shadowfooter.png";
import fullshadow from "../images/fullshadow.png";

const face = "<face>";
const body = "<body>";
const footer = "<footer>";

export default function ReactTaskState() {
  const [text, setText] = useState("");

  return (
    <div className="notgonnawork">
      {text !== "face" && (
        <button className="btn1" onClick={() => setText("face")}>
          {face}
        </button>
      )}
      {text !== "body" && (
        <button className="btn2" onClick={() => setText("body")}>
          {body}
        </button>
      )}
      {text !== "footer" && (
        <button className="btn3" onClick={() => setText("footer")}>
          {footer}
        </button>
      )}

      {text === "face" && <img className="faceimg" src={shadowme} />}
      {text === "body" && <img className="bodyimg" src={shadowbody} />}
      {text === "footer" && <img className="footerimg" src={shadowfooter} />}
      {!text && ShowImage()}
    </div>
  );
}

export function ShowImage() {
  return (
    <div>
      <img src={fullshadow} className="shadowMain" />
    </div>
  );
}

