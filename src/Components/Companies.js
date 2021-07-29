import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./Styles/companies.css";
import { Hidden } from "@material-ui/core";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

const CardExample = () => {
  return (
    <MDBCol style={{ maxWidth: "22rem", border: "1px solid white" }}>
      <MDBCard>
        <MDBCardImage
          className="img-fluid"
          src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
          waves
        />
        <MDBCardBody>
          <MDBCardTitle>App Bakery</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

const gridExamplesPage = () => {
  return (
    <MDBContainer>
      <Hidden only="xs">
        <h1
          style={{
            color: "#F2B138",
            fontFamily: "League Spartan Bold",
            fontSize: "28pt",
            textAlign:"center"
          }}
        >
          COMPANIES WE HAVE WORKED WITH
        </h1>
      </Hidden>
      <Hidden only="lg">
        <h1
          style={{
            color: "#F2B138",
            fontFamily: "League Spartan Bold",
            fontSize: "16pt",
            textAlign:"center"
          }}
        >
         COMPANIES WE HAVE WORKED WITH
        </h1>
      </Hidden>
      <MDBRow>
        <MDBCol>
          <CardExample />
        </MDBCol>
        <MDBCol>
          <CardExample />
        </MDBCol>
        <MDBCol>
          <CardExample />
        </MDBCol>
        <MDBCol>
          <CardExample />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default gridExamplesPage;
