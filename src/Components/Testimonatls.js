import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
import { Hidden } from "@material-ui/core";
import feedback from "./../Images/feedback.PNG";

const CarouselPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#F2B138",
        textAlign: "center",
        paddingTop: "40px ",
      }}
    >
      <Hidden only="xs">
        <h1
          style={{
            color: "#003F63",
            fontFamily: "League Spartan Bold",
            fontSize: "32pt",
          }}
        >
          TESTIMONAILS
        </h1>
      </Hidden>
      <Hidden only="lg">
        <h1
          style={{
            color: "#003F63",
            fontFamily: "League Spartan Bold",
            fontSize: "16pt",
          }}
        >
          TESTIMONAILS
        </h1>
      </Hidden>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100" src={feedback} alt="First slide" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={feedback}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100" src={feedback} alt="Third slide" />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
};

export default CarouselPage;
