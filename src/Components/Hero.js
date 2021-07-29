import React from "react";
import HeroImg from "././../illustrations/stay-home.svg";
import { Button, Hidden } from "@material-ui/core";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    // <div className="pt-36" style={{backgroundColor: "#003F63"}}>
    //   <div class="pt-24 container hero " id="hero">
    // <div className="pt-32 align-middle items-center " style={{backgroundColor: "#003F63"}}>
    <div style={{ backgroundColor: "#003F63" }}>
      <Hidden only="xs">
        <div
          class=" px-3 flex flex-wrap flex-col md:flex-row items-center"
          style={{ height: "20em" }}
        >
          <div class="flex flex-col" style={{ width: "30em" }}>
            <h1
              class="text-4xl font-bold text-white"
              style={{
                fontFamily: "'League Spartan Bold', arial",
                textTransform: "capitalize",
                textAlign: "justify",
                lineHeight: "40px",
                marginLeft: "5em",
                width: "12em",
              }}
            >
              Want Us To Build An App or Website for you?
            </h1>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#F2B138",
                width: "10em",
                marginLeft: "13em",
                color: "#fff",
                fontWieght: "bolder",
                outline: "none",
                border: "none",
              }}
            >
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Lets Talk
              </Link>
            </Button>
          </div>
          <div class=" md:w-3/5 py-6 text-center">
            <img src={HeroImg} style={{ width: "25em", marginLeft: "25em" }} />
          </div>
        </div>
      </Hidden>

      <Hidden only="lg">
        <div class=" px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div class="flex flex-col w-full md:w-2/5 justify-center items-center text-center md:text-left">
            <h1
              class="my-4 text-4xl font-bold leading-tight text-white"
              style={{
                fontFamily: "'League Spartan Bold', arial",
                textTransform: "capitalize",
                textAlign: "justify",
              }}
            >
              Want Us To Build An App or Website for you?
            </h1>
            <p class="leading-normal text-2xl mb-8"></p>
            <button
              style={{
                backgroundColor: "rgb(241, 185, 0)",
                borderRadius: "10px",
                padding: "10px 30px",
              }}
              class="mx-auto text-white lg:mx-0 hover:underline  font-bold rounded-full my-6 py-8 px-6 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Lets Talk
            </button>
          </div>
          <div class=" md:w-3/5 py-6 text-center">
            <img class="w-full md:w-4/5 z-50" src={HeroImg} />
          </div>
        </div>
      </Hidden>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
        <path
          fill="#ccc"
          fill-opacity="1"
          d="M0,288L60,277.3C120,267,240,245,360,229.3C480,213,600,203,720,218.7C840,235,960,277,1080,293.3C1200,309,1320,299,1380,293.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
