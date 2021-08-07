import React from "react";
import AppDeve from "./../illustrations/team-work.svg";
import WebDeve from "../illustrations/analytics.svg";
import UiUx from "../illustrations/creativity.svg";
import Digi from "../illustrations/newsletter.svg";
import { Hidden } from "@material-ui/core";

export default function WhatWeDo() {
  return (
    <div className="our-team" id="wwd">
      <section className=" py-8 text-white">
        <div className="container max-w-5xl mx-auto m-8">
          <h1
            className="w-full my-2 text-5xl font-bold leading-tight text-center"
            style={{
              color: "rgb(241, 185, 0)",
              fontFamily: "League Spartan Bold",
            }}
          >
            What We Do ?
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
          </div>
          <div></div>

          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <picture
                className="relative block w-full h-0 pb  overflow-hidden "
                style={{ paddingTop: "75%" }}
              >
                <img
                  src={AppDeve}
                  alt=""
                  style={{ width: "20em", height: "20em" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </picture>
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3
                  className="text-3xl font-bold leading-none mb-3"
                  style={{
                    color: "rgb(241, 185, 0)",
                    fontFamily: "League Spartan Bold",
                  }}
                >
                  App Development
                </h3>
                <p
                  className=" mb-8 "
                  style={{
                    textAlign: "left",
                    fontFamily: "Libre Baskerville",
                    color: "rgb(180, 180, 180)",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6 ">
              <h3
                className="text-3xl  font-bold leading-none mb-3 "
                style={{
                  color: "rgb(241, 185, 0)",
                  fontFamily: "League Spartan Bold",
                }}
              >
                Web Development
              </h3>
              <p
                className="mb-8"
                style={{
                  textAlign: "left",
                  fontFamily: "Libre Baskerville",
                  color: "rgb(180, 180, 180)",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu
                nunc commodo posuere et sit amet ligula. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
                commodo posuere et sit amet ligula. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo
                posuere et sit amet ligula. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo
                posuere et sit amet ligula. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo
                posuere et sit amet ligula.
                <br />
                <br />
              </p>
            </div>
            <Hidden only="xs">
              <div className="w-full sm:w-1/2 p-6">
                <picture
                  className="relative block w-full h-0 pb overflow-hidden "
                  style={{ paddingTop: "75%" }}
                >
                  <img
                    src={WebDeve}
                    alt=""
                    className="absolute inset-0 object-cover"
                    style={{
                      width: "20em",
                      height: "20em",
                      marginLeft: "10em",
                    }}
                  />
                </picture>
              </div>
            </Hidden>
            <Hidden only="lg">
              <div className="w-full sm:w-1/2 p-6">
                <picture
                  className="relative block w-full h-0 pb overflow-hidden "
                  style={{ paddingTop: "75%" }}
                >
                  <img
                    src={WebDeve}
                    alt=""
                    className="absolute inset-0 object-cover"
                    style={{ width: "20em", height: "20em" }}
                  />
                </picture>
              </div>
            </Hidden>
          </div>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <picture
                className="relative block w-full h-0 pb overflow-hidden"
                style={{ paddingTop: "75%" }}
              >
                <img
                  src={UiUx}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ width: "20em", height: "20em" }}
                />
              </picture>
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3
                  className="text-3xl  font-bold leading-none mb-3"
                  style={{
                    color: "rgb(241, 185, 0)",
                    fontFamily: "League Spartan Bold",
                  }}
                >
                  UI/UX DESIGNING
                </h3>
                <p
                  className="mb-8"
                  style={{
                    textAlign: "left",
                    fontFamily: "Libre Baskerville",
                    color: "rgb(180, 180, 180)",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3
                className="text-3xl  font-bold leading-none mb-3"
                style={{
                  color: "rgb(241, 185, 0)",
                  fontFamily: "League Spartan Bold",
                }}
              >
                DIGITAL MARKETING
              </h3>
              <p
                className=" mb-8"
                style={{
                  textAlign: "left",
                  fontFamily: "Libre Baskerville",
                  color: "rgb(180, 180, 180)",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu
                nunc commodo posuere et sit amet ligula. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
                commodo posuere et sit amet ligula. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo
                posuere et sit amet ligula. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo
                posuere et sit amet ligula. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo
                posuere et sit amet ligula.
                <br />
                <br />
              </p>
            </div>

            <Hidden only="xs">
              <div className="w-full sm:w-1/2 p-6">
                <picture
                  className="relative block w-full h-0 pb  overflow-hidden"
                  style={{ paddingTop: "75%" }}
                >
                  <img
                    src={Digi}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      width: "20em",
                      height: "20em",
                      marginLeft: "10em",
                    }}
                  />
                </picture>
              </div>
            </Hidden>
            <Hidden only="lg">
              <div className="w-full sm:w-1/2 p-6">
                <picture
                  className="relative block w-full h-0 pb  overflow-hidden"
                  style={{ paddingTop: "75%" }}
                >
                  <img
                    src={Digi}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ width: "20em", height: "20em" }}
                  />
                </picture>
              </div>
            </Hidden>
          </div>
        </div>
      </section>
    </div>
  );
}
