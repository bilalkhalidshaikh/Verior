import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Hidden, Button } from "@material-ui/core";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import "./Styles/Contact.css";
import { Form, Input } from "antd";

const HorizontalLoginForm = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <Form
        form={form}
        name="horizontal_login"
        layout="inline"
        onFinish={onFinish}
      >
        <label
          htmlFor="defaultFormContactEmailEx"
          style={{
            marginTop: "10px",
            color: "#ccc",
            fontWeight: "bold",
            fontSize: "12pt",
          }}
        >
          First Name
        </label>
        &nbsp; &nbsp; &nbsp;
        <Form.Item
          name="First Name"
          rules={[
            {
              required: true,
              message: "Please input your FIrst Name!",
            },
          ]}
        >
          <Input
            type="name"
            style={{ padding: "15px 70px", backgroundColor: "transparent" }}
          />
        </Form.Item>
        &nbsp;
        <Hidden only="lg">
          <br />
        </Hidden>
        <label
          htmlFor="defaultFormContactEmailEx"
          style={{
            marginTop: "10px",
            color: "#ccc",
            fontWeight: "bold",
            fontSize: "12pt",
          }}
        >
          Last Name
        </label>
        &nbsp; &nbsp; &nbsp;
        <Form.Item name="Last Name">
          <Input
            type="name"
            style={{ padding: "15px 70px", backgroundColor: "transparent" }}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

const FormPage = () => {
  const useStyles = makeStyles((theme) => ({
    input: {
      [theme.breakpoints.up("xs")]: {
        width: "21em",
      },
      [theme.breakpoints.up("md")]: {
        width: "40em",
      },
      [theme.breakpoints.up("lg")]: {
        width: "40em",
      },
      backgroundColor: "transparent",
      border: "1px solid #ccc",
      width: "30em",
      height: "2em",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="10">
            <form>
              <label
                htmlFor="defaultFormContactEmailEx"
                style={{
                  marginTop: "10px",
                  color: "#ccc",
                  fontWeight: "bold",
                  fontSize: "12pt",
                }}
              >
                Full Name
              </label>
              <br />
              <input
                type="name"
                id="defaultFormContactEmailEx"
                className={classes.input}
                style={{ padding: "25px 0px " }}
              />
              <br />
              <br />
              <label
                htmlFor="defaultFormContactEmailEx"
                style={{
                  marginTop: "10px",
                  color: "#ccc",
                  fontWeight: "bold",
                  fontSize: "12pt",
                }}
              >
                Your email
              </label>
              <br />
              <input
                type="email"
                id="defaultFormContactEmailEx"
                className={classes.input}
                style={{ padding: "25px 0px " }}
              />
              <br />
              <br />
              <label
                htmlFor="defaultFormContactSubjectEx"
                style={{
                  marginTop: "10px",
                  color: "#ccc",
                  fontWeight: "bold",
                  fontSize: "12pt",
                }}
              >
                Subject
              </label>
              <br />
              <input
                type="text"
                id="defaultFormContactSubjectEx"
                className={classes.input}
                style={{ padding: "25px 0px" }}
              />

              <br />
              <br />
              <label
                htmlFor="defaultFormContactMessageEx"
                style={{
                  marginTop: "10px",
                  color: "#ccc",
                  fontWeight: "bold",
                  fontSize: "12pt",
                }}
              >
                Your message
              </label>
              <textarea
                type="text"
                id="defaultFormContactMessageEx"
                className="form-control"
                rows="6"
                style={{ backgroundColor: "transparent" }}
              />
              <br />
              <br />
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#003F63",
                  color: "#fff",
                  padding: "15px 50px",
                }}
              >
                Send
              </Button>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

const ContactUS = () => {
  return (
    <div className="contact" id="contact">
      <h1
        className="w-full my-2 text-5xl font-bold leading-tight text-center"
        style={{
          color: "rgb(241, 185, 0)",
          fontFamily: "League Spartan Bold",
          textAlign: "center",
        }}
      >
        Contact Us
      </h1>
      <FormPage />
    </div>
  );
};

export default ContactUS;
