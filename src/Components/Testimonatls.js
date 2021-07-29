// // import React from "react";
// // import { makeStyles, useTheme } from "@material-ui/core/styles";
// // import MobileStepper from "@material-ui/core/MobileStepper";
// // import Paper from "@material-ui/core/Paper";
// // import Typography from "@material-ui/core/Typography";
// // import Button from "@material-ui/core/Button";
// // import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
// // import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// // import SwipeableViews from "react-swipeable-views";
// // import { autoPlay } from "react-swipeable-views-utils";

// // const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// // const tutorialSteps = [
// //   {
// //     label: "San Francisco – Oakland Bay Bridge, United States",
// //     imgPath:
// //       "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
// //   },
// //   {
// //     label: "Bird",
// //     imgPath:
// //       "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
// //   },
// //   {
// //     label: "Bali, Indonesia",
// //     imgPath:
// //       "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
// //   },
// //   {
// //     label: "NeONBRAND Digital Marketing, Las Vegas, United States",
// //     imgPath:
// //       "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
// //   },
// //   {
// //     label: "Goč, Serbia",
// //     imgPath:
// //       "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
// //   },
// // ];

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     maxWidth: 400,
// //     flexGrow: 1,
// //     marginLeft: "auto",
// //     marginRight: "auto",
// //   },
// //   header: {
// //     display: "flex",
// //     alignItems: "center",
// //     height: 50,
// //     paddingLeft: theme.spacing(4),
// //     backgroundColor: theme.palette.background.default,
// //   },
// //   img: {
// //     height: 255,
// //     display: "block",
// //     maxWidth: 400,
// //     overflow: "hidden",
// //     width: "100%",
// //   },
// // }));

// // function SwipeableTextMobileStepper() {
// //   const classes = useStyles();
// //   const theme = useTheme();
// //   const [activeStep, setActiveStep] = React.useState(0);
// //   const maxSteps = tutorialSteps.length;

// //   const handleNext = () => {
// //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
// //   };

// //   const handleBack = () => {
// //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
// //   };

// //   const handleStepChange = (step) => {
// //     setActiveStep(step);
// //   };

// //   return (
// //     <div className={classes.root}>
// //       <Paper square elevation={0} className={classes.header}>
// //         <Typography>{tutorialSteps[activeStep].label}</Typography>
// //       </Paper>
// //       <AutoPlaySwipeableViews
// //         axis={theme.direction === "rtl" ? "x-reverse" : "x"}
// //         index={activeStep}
// //         onChangeIndex={handleStepChange}
// //         enableMouseEvents
// //       >
// //         {tutorialSteps.map((step, index) => (
// //           <div key={step.label}>
// //             {Math.abs(activeStep - index) <= 2 ? (
// //               <img
// //                 className={classes.img}
// //                 src={step.imgPath}
// //                 alt={step.label}
// //               />
// //             ) : null}
// //           </div>
// //         ))}
// //       </AutoPlaySwipeableViews>
// //       <MobileStepper
// //         steps={maxSteps}
// //         position="static"
// //         variant="text"
// //         activeStep={activeStep}
// //         nextButton={
// //           <Button
// //             size="small"
// //             onClick={handleNext}
// //             disabled={activeStep === maxSteps - 1}
// //           >
// //             Next
// //             {theme.direction === "rtl" ? (
// //               <KeyboardArrowLeft />
// //             ) : (
// //               <KeyboardArrowRight />
// //             )}
// //           </Button>
// //         }
// //         backButton={
// //           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
// //             {theme.direction === "rtl" ? (
// //               <KeyboardArrowRight />
// //             ) : (
// //               <KeyboardArrowLeft />
// //             )}
// //             Back
// //           </Button>
// //         }
// //       />
// //     </div>
// //   );
// // }

// // export default function Testimonatls() {
// //   return (
// //     <div
// //       className="align-center p-24"
// //       style={{ backgroundColor: "whitesmoke" }}
// //     >
// //       <h1
// //         className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
// //         style={{ color: "rgb(241, 185, 0)", fontWeight: "bolder" }}
// //       >
// //         TESTIMONAILS
// //       </h1>
// //       {/*
// //       <section className="bg-gray-100 py-8">
// //         <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
// //           <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
// //             TESTIMONAILS
// //           </h1>
// //           <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
// //             <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
// //               <div className="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
// //                 <button className="w-3 h-3 mx-2 bg-blue-500 rounded-full md:mx-0 focus:outline-none" />
// //                 <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500" />
// //                 <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500" />
// //                 <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500" />
// //               </div>
// //               <div className="max-w-lg md:mx-12 md:order-2">
// //                 <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">
// //                   Farooque Ahmed
// //                 </h1>
// //                 <p className="mt-4 text-gray-600 dark:text-gray-300">
// //                   I'm very happy with the work of verior agency and I really
// //                   loved the way they work. Much Apperciatable Keep going.
// //                 </p>
// //                 <div className="mt-6">
// //                   <a
// //                     href="#"
// //                     className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400"
// //                   >
// //                     Read feedback
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="flex items-center justify-center w-full h-96 md:w-1/2">
// //               <img
// //                 className="object-cover w-full h-full max-w-2xl rounded-md"
// //                 src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
// //                 alt="apple watch photo"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //   */}
// //       <SwipeableTextMobileStepper />
// //     </div>
// //   );
// // }

// import React from "react";
// import "./Styles/testimonatls.css";

// export default function Testimonatls() {
//   return (
//     <div className="container p-24 " style={{ padding: "30px" }}>
//       <div>
//         <h1
//           className="w-full my-2 text-4xl font-bold leading-tight text-center "
//           style={{ color: "rgb(241, 185, 0)", fontWeight: "bolder" }}
//         >
//           TESTIMONAILS
//         </h1>
//         <div id="homepage-slider" className="st-slider">
//           <input
//             type="radio"
//             className="cs_anchor radio"
//             name="slider"
//             id="slide1"
//           />
//           <input
//             type="radio"
//             className="cs_anchor radio"
//             name="slider"
//             id="slide2"
//           />
//           <input
//             type="radio"
//             className="cs_anchor radio"
//             name="slider"
//             id="slide3"
//           />
//           <input
//             type="radio"
//             className="cs_anchor radio"
//             name="slider"
//             id="play1"
//             defaultChecked
//           />
//           <div className="images">
//             <div className="images-inner">
//               <div className="image-slide">
//                 <div className="image text-black">
//                   <h1 class="aligned">
//                     “Your brand is what other people say about you when you’re
//                     not in the room.”
//                   </h1>
//                   <p class="quoted">Rodney Dangerfield</p>
//                 </div>
//               </div>
//               <div className="image-slide">
//                 <div className="image ">
//                   <h1 class="aligned">
//                     “It takes humility to seek feedback. it takes wisdom to
//                     understand it, analyze it, and appropriately act on it.”
//                   </h1>
//                   <p class="quoted">Andrew Buner</p>
//                 </div>
//               </div>
//               <div className="image-slide">
//                 <div className="image">
//                   <h1 class="aligned">
//                     “Focus on how the end-user customers perceive the impact of
//                     your innovation – rather than on how you, the innovators,
//                     perceive it.”
//                   </h1>
//                   <p class="quoted">Mike George</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="labels">
//             <label htmlFor="slide1" className="label">
//               Toronto - Canada
//             </label>
//             <label htmlFor="slide2" className="label">
//               Istanbul - Turkey
//             </label>
//             <label htmlFor="slide3" className="label">
//               Tokyo - Japan
//             </label>
//             <div className="fake-radio">
//               <label htmlFor="slide1" className="radio-btn" />
//               <label htmlFor="slide2" className="radio-btn" />
//               <label htmlFor="slide3" className="radio-btn" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
import {Hidden} from "@material-ui/core"
import feedback from "./../Images/feedback.PNG";

const CarouselPage = () => {
  return (
    <div style={{ backgroundColor: "#F2B138" ,textAlign:"center",paddingTop:"40px "}} >
      {/* <MDBContainer> */}
   <Hidden only="xs">
   <h1
        style={{ color: "#003F63", fontFamily: "League Spartan Bold" ,fontSize:"32pt"}}
      >
        TESTIMONAILS
      </h1>
   </Hidden>
   <Hidden only="lg">
   <h1
        style={{ color: "#003F63", fontFamily: "League Spartan Bold" ,fontSize:"16pt"}}
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
                <img
                  className="d-block w-100"
                  src={feedback}
                  alt="First slide"
                />
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
                <img
                  className="d-block w-100"
                  src={feedback}
                  alt="Third slide"
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      {/* </MDBContainer> */}
    </div>
  );
};

export default CarouselPage;
