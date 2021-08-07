import React from "react";
import "./Styles/OurTeam.css";
import Founder from "../Images/haseb.png";

function Cards() {
  return (
    <div className="container">
      <h1
        className="w-full my-2 text-5xl font-bold leading-tight text-center"
        style={{
          color: "rgb(241, 185, 0)",
          fontFamily: "League Spartan Bold",
        }}
      >
        Our Team
      </h1>
      <br />
      <main className="grid">
        <article>
          <img src={Founder} alt="Sample photo" />
          <div className="text">
            <h3 style={{ color: "#eee", fontFamily: "League Spartan Bold" }}>
              Abdul Haseeb
            </h3>
            <p
              style={{
                color: "rgb(180, 180, 180)",
                fontFamily: "League Spartan Bold",
              }}
            >
              App Developer
            </p>
          </div>
        </article>
        <article>
          <img src={Founder} alt="Sample photo" />
          <div className="text">
            <h3 style={{ color: "#eee", fontFamily: "League Spartan Bold" }}>
              Abdul Haseeb
            </h3>
            <p
              style={{
                color: "rgb(180, 180, 180)",
                fontFamily: "League Spartan Bold",
              }}
            >
              Co-Founder
            </p>
          </div>
        </article>
        <article>
          <img src={Founder} alt="Sample photo" />
          <div className="text">
            <h3 style={{ color: "#eee", fontFamily: "League Spartan Bold" }}>
              Abdul Haseeb
            </h3>
            <p
              style={{
                color: "rgb(180, 180, 180)",
                fontFamily: "League Spartan Bold",
              }}
            >
              Co-Founder
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}

export default function OurTeam() {
  return (
    <div style={{ backgroundColor: "rgb(50, 55, 59)" }}>
      <Cards />
    </div>
  );
}
