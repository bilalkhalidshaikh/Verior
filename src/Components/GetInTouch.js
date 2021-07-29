// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import ContactMailIcon from '@material-ui/icons/ContactMail';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';

// function Copyright() {
//   const link = window.location.href
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href={link}>
//         Verior Inc
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: '100vh',
//   },
//   image: {
//     backgroundImage: 'url(https://source.unsplash.com/random)',
//     backgroundRepeat: 'no-repeat',
//     backgroundColor:
//       theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   },
//   paper: {
//     margin: theme.spacing(8, 4),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: "#174361",
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     backgroundColor: "rgb(241, 185, 0)",
//     fontWeight: "bolder"
//   },
// }));

// export default function GetInTouch() {
//   const classes = useStyles();

//   return (
//     <div id="contact" className="w-full">

// <Grid container component="main" className={classes.root}>
//       <CssBaseline />
//       {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
//       <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <ContactMailIcon />
//           </Avatar>
//           <Typography  component="h1" variant="h3" style={{color: "rgb(241, 185, 0)",fontWeight:"bolder"}}>
//            Contact Us
//           </Typography>
//           <form className={classes.form} noValidate>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="name"
//               label="Full Name"
//               name="name"
//               autoComplete="name"
//               autoFocus
//             />
//              <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="I Agreed The Terms & Conditions"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Submit
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                  Terms & Conditions
//                 </Link>
//               </Grid>
//               {/* <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid> */}
//             </Grid>
//             <Box mt={5}>
//               <Copyright />
//             </Box>
//           </form>
//         </div>
//       </Grid>
//     </Grid>

//     </div>

//  );
// }

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Hidden, Button } from "@material-ui/core";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import "./Styles/Contact.css";
import { Form, Input } from "antd";

const HorizontalLoginForm = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

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
              {/* <HorizontalLoginForm /> */}
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
                // className="form-control "
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
                // className="form-control "
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
              {/* <div className="text-center mt-4"> */}
              {/* <MDBBtn color="warning" >
                  Send
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn> */}
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
              {/* </div> */}
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
