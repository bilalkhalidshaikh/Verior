// import React from "react";
// import { Box, Heading, Text, HStack, SimpleGrid } from "@chakra-ui/react";
// import Lottie from "react-lottie";
// import umbrella from "../Animations/umbrella.json";
// import scan from "../Animations/scan.json";
// import fallingParcel from "../Animations/parcel.json";

// // function CardsSection() {
// //   return (
// //     <div>
// //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
// //         <path
// //           fill="#eee"
// //           fill-opacity="1"
// //           d="M0,160L60,144C120,128,240,96,360,80C480,64,600,64,720,80C840,96,960,128,1080,160C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
// //         ></path>
// //       </svg>
// //       <div id="about" className="p-24">
// //         <section className="bg-transparent border-b py-8">
// //           <div className="container mx-auto flex flex-wrap pt-4 pb-12">
// //             <div className="w-full mb-4">
// //               <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
// //             </div>
// //             <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink card-box">
// //               <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
// //                 <a
// //                   href="#"
// //                   className="flex flex-wrap no-underline hover:no-underline"
// //                 >
// //                   <span className="object-center rounded-md cursor-pointer mb-10 justify-center">
// //                     <img
// //                       style={{ marginLeft: "7em", width: "100px" }}
// //                       src="https://img.icons8.com/ios-filled/50/000000/double-tick.png"
// //                     />
// //                   </span>
// //                   <div className="w-full font-bold text-xl text-gray-800 px-6">
// //                     Sincirerity
// //                   </div>
// //                   <p className="text-gray-800 text-base px-6 mb-5 align-middle items-center justify-center">
// //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// //                     Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
// //                   </p>
// //                 </a>
// //               </div>
// //               <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
// //                 <div className="flex items-center justify-start">
// //                   <button className="mx-auto lg:mx-0 hover:underline gradient text-yellow font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
// //                     Action
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink card-box">
// //               <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
// //                 <a
// //                   href="#"
// //                   className="flex flex-wrap no-underline hover:no-underline"
// //                 >
// //                   <span className="object-center rounded-md cursor-pointer mb-10 justify-center">
// //                     <img
// //                       style={{ marginLeft: "7em", width: "100px" }}
// //                       src="https://img.icons8.com/dotty/80/000000/heart-health.png"
// //                     />
// //                   </span>
// //                   <div className="w-full font-bold text-xl text-gray-800 px-6">
// //                     Commitment
// //                   </div>
// //                   <p className="text-gray-800 text-base px-6 mb-5">
// //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// //                     Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
// //                   </p>
// //                 </a>
// //               </div>
// //               <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
// //                 <div className="flex items-center justify-center">
// //                   <button className="mx-auto lg:mx-0 hover:underline gradient text-blue font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
// //                     Action
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink card-box">
// //               <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
// //                 <a
// //                   href="#"
// //                   className="flex flex-wrap no-underline hover:no-underline"
// //                 >
// //                   <span className="object-center rounded-md cursor-pointer mb-10 justify-center">
// //                     <img
// //                       style={{ marginLeft: "7em", width: "100px" }}
// //                       src="https://img.icons8.com/dotty/80/000000/light.png"
// //                     />
// //                   </span>
// //                   <div className="w-full font-bold text-xl text-gray-800 px-6">
// //                     Integrity
// //                   </div>
// //                   <p className="text-gray-800 text-base px-6 mb-5">
// //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// //                     Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
// //                   </p>
// //                 </a>
// //               </div>
// //               <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
// //                 <div className="flex items-center justify-end">
// //                   <button className="mx-auto lg:mx-0 hover:underline gradient text-yellow font-bold rounded-full my-6 py-4 px-8 shadow-lg  focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
// //                     Action
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="relative -mt-12 lg:-mt-24"></div>
// //         </section>
// //       </div>
// //     </div>
// //   );
// // }

// function Feature({ title, desc, ...rest }) {
//   return (
//     <Box
//       p={5}
//       shadow="md"
//       borderWidth="1px"
//       flex="1"
//       borderRadius="md"
//       {...rest}
//     >
//       <Heading fontSize="xl">{title}</Heading>
//       <Text mt={4}>{desc}</Text>
//     </Box>
//   );
// }

// function StackEx() {
//   return (
//     <SimpleGrid columns={[2, null, 3]} spacing="40px">
//       <Box bg="tomato" height="80px">
//         {" "}
//         <Feature
//           title="Plan Money"
//           desc="The future can be even brighter but a goal without a plan is just a wish"
//         />
//       </Box>
//       <Box bg="tomato" height="80px">
//         {" "}
//         <Feature
//           title="Plan Money"
//           desc="The future can be even brighter but a goal without a plan is just a wish"
//         />
//       </Box>
//       <Box bg="tomato" height="80px">
//         {" "}
//         <Feature
//           title="Plan Money"
//           desc="The future can be even brighter but a goal without a plan is just a wish"
//         />
//       </Box>
//     </SimpleGrid>
//   );
// }

// const Card = ({ children, icon, title }) => {
//   return (
//     <div style={{ margin: "auto", maxWidth: "300px" }}>
//       <Lottie
//         options={{
//           animationData: icon,
//         }}
//         height={"100%"}
//         width={"100%"}
//         style={{
//           width: "100%",
//           height: "100%",
//           maxWidth: "700px",
//         }}
//       />
//       <h3
//         style={{
//           color: "rgb(241, 185, 0)",
//           padding: "1px",
//           fontWeight: "bold",
//         }}
//       >
//         {title}
//       </h3>
//       <p>{children}</p>
//     </div>
//   );
// };

// export default function CardSection() {
//   return (
//     <div id="about" >
//       <div className="w-full">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//           <path
//             fill="#D9D9D9"
//             fill-opacity="1"
//             d="M0,256L48,213.3C96,171,192,85,288,64C384,43,480,85,576,128C672,171,768,213,864,218.7C960,224,1056,192,1152,154.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
//           ></path>
//         </svg>
//       </div>
//       {/*
//       <div>
//         <h1
//           className="w-full my-2 text-5xl font-bold leading-tight text-center"
//           style={{ color: "rgb(241, 185, 0)", fontWeight: "bolder" }}
//         >
//           Services
//         </h1>
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             width: "100%",
//             margin: "auto",
//             marginTop: "2rem",
//           }}
//         >
//           <Card title="Sincirerity " icon={scan}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
//             luctus erat. Praesent pulvinar, ante non fringilla hendrerit, augue
//             mi mollis diam, vel finibus metus urna nec metus. Sed efficitur enim
//             ut neque rutrum, tincidunt blandit purus hendrerit. Fusce in iaculis
//             turpis.
//           </Card>
//           <Card title="Commitment" icon={fallingParcel}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
//             luctus erat. Praesent pulvinar, ante non fringilla hendrerit, augue
//             mi mollis diam, vel finibus metus urna nec metus. Sed efficitur enim
//             ut neque rutrum, tincidunt blandit purus hendrerit. Fusce in iaculis
//             turpis.
//           </Card>
//           <Card title="Integrity" icon={umbrella}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
//             luctus erat. Praesent pulvinar, ante non fringilla hendrerit, augue
//             mi mollis diam, vel finibus metus urna nec metus. Sed efficitur enim
//             ut neque rutrum, tincidunt blandit purus hendrerit. Fusce in iaculis
//             turpis.
//           </Card>
//         </div>
//       </div> */}
//         <div className="p-28">

//       <StackEx />
//         </div>
//     </div>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {Hidden} from "@material-ui/core"
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Styles/CssCards.css";
import heart from "../Images/heart-removebg-preview.png";
import tick from "../Images/tick-removebg-preview.png";
import light from "./../Images/light-removebg-preview.png";

const useStylesCard = makeStyles({
  root: {
    minWidth: 275,
    padding: "42px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function OutlinedCard() {
  const classes = useStylesCard();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

function CssCards() {
  return (
    <div style={{paddingBottom:"10em",paddingTop:"10em"}}>
        <Hidden only="xs">
<div  className="p-24">
  
<main className="grid">
        <article className="item-center">
          <img
            src={tick}
            style={{
              width: "16em",
              height: "12em",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <div className="text">
            <h3
              style={{
                color: "#003F63",
                fontWeight: "bold",
                fontFamily: "'League Spartan Bold', arial",
                fontSize: "20pt",
              }}
            >
              Sincirerity
            </h3>
            <p
              style={{
                color: "#999",
                textAlign: "justify",
                fontFamily: "Libre Baskerville",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
          </div>
        </article>
        <article>
          <img
            src={heart}
            style={{
              width: "16em",
              height: "13em",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <div className="text text-center">
            <h3
              style={{
                color: "#003F63",
                fontWeight: "bold",
                fontFamily: "'League Spartan Bold', arial",
                fontSize: "20pt",
              }}
            >
              Commitment
            </h3>
            <p
              style={{
                color: "#999",
                textAlign: "justify",
                fontFamily: "Libre Baskerville",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
          </div>
        </article>
        <article style={{ marginTop: "-25px" }}>
          <img
            src={light}
            style={{
              width: "16em",
              height: "14em",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <div className="text">
            <h3
              style={{
                color: "#003F63",
                fontWeight: "bold",
                fontFamily: "'League Spartan Bold', arial",
                fontSize: "20pt",
              }}
            >
              Integrity
            </h3>
            <p
              style={{
                color: "#999",
                textAlign: "justify",
                fontFamily: "Libre Baskerville",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
          </div>
        </article>
      </main>
  
</div>

        </Hidden>

        <Hidden only="lg">
          
      <main className="grid">
        <article className="item-center">
          <img
            src={tick}
            style={{
              width: "16em",
              height: "12em",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <div className="text">
            <h3
              style={{
                color: "#003F63",
                fontWeight: "bold",
                fontFamily: "'League Spartan Bold', arial",
                fontSize: "20pt",
              }}
            >
              Sincirerity
            </h3>
            <p
              style={{
                color: "#999",
                textAlign: "justify",
                fontFamily: "Libre Baskerville",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
          </div>
        </article>
        <article>
          <img
            src={heart}
            style={{
              width: "16em",
              height: "13em",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <div className="text text-center">
            <h3
              style={{
                color: "#003F63",
                fontWeight: "bold",
                fontFamily: "'League Spartan Bold', arial",
                fontSize: "20pt",
              }}
            >
              Commitment
            </h3>
            <p
              style={{
                color: "#999",
                textAlign: "justify",
                fontFamily: "Libre Baskerville",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
          </div>
        </article>
        <article style={{ marginTop: "-25px" }}>
          <img
            src={light}
            style={{
              width: "16em",
              height: "14em",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <div className="text">
            <h3
              style={{
                color: "#003F63",
                fontWeight: "bold",
                fontFamily: "'League Spartan Bold', arial",
                fontSize: "20pt",
              }}
            >
              Integrity
            </h3>
            <p
              style={{
                color: "#999",
                textAlign: "justify",
                fontFamily: "Libre Baskerville",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
          </div>
        </article>
      </main>
  
        </Hidden>
        
    </div>
  );
}

// function CssCards(){
//   return(

//   <div className="container">
//   <main className="grid">
//     <article>
//       <img src="https://picsum.photos/600/400?image=1083" alt="Sample photo" />
//       <div className="text">
//         <h3>Seamlessly visualize quality</h3>
//         <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
//         <a href="https://codepen.io/collection/XdWJOQ/" className="btn btn-primary btn-block">Here's why</a>
//       </div>
//     </article>
//     <article>
//       <img src="https://picsum.photos/600/400?image=1063" alt="Sample photo" />
//       <div className="text">
//         <h3>Completely Synergize</h3>
//         <p>Dramatically engage seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.</p>
//         <a href="https://codepen.io/collection/XdWJOQ/" className="btn btn-primary btn-block">Here's how</a>
//       </div>
//     </article>
//     <article>
//       <img src="https://picsum.photos/600/400?image=1056" alt="Sample photo" />
//       <div className="text">
//         <h3>Dynamically Procrastinate</h3>
//         <p>Completely synergize resource taxing relationships via premier niche markets.</p>
//         <a href="https://codepen.io/collection/XdWJOQ/" className="btn btn-primary btn-block">Read more</a>
//       </div>
//     </article>

//     <article>
//       <img src="https://picsum.photos/600/400?image=1050" alt="Sample photo" />
//       <div className="text">
//         <h3>Best in class</h3>
//         <p>Imagine jumping into that boat, and just letting it sail wherever the wind takes you...</p>
//         <a href="https://codepen.io/collection/XdWJOQ/" className="btn btn-primary btn-block">Just do it...</a>
//       </div>
//     </article>
//     <article>
//       <img src="https://picsum.photos/600/400?image=1041" alt="Sample photo" />
//       <div className="text">
//         <h3>Dynamically innovate supply chains</h3>
//         <p>Holisticly predominate extensible testing procedures for reliable supply chains.</p>
//         <a href="https://codepen.io/collection/XdWJOQ/" className="btn btn-primary btn-block">Here's why</a>
//       </div>
//     </article>
//     <article>
//       <img src="https://picsum.photos/600/400?image=1015" alt="Sample photo" />
//       <div className="text">
//         <h3>Sanity check</h3>
//         <p>Objectively innovate empowered manufactured products whereas parallel platforms.</p>
//         <a href="https://codepen.io/collection/XdWJOQ/" className="btn btn-primary btn-block">Stop here</a>
//       </div>
//     </article>

//   </main>
// </div>

//   )
// }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <OutlinedCard />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <OutlinedCard />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <OutlinedCard />
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root} id="about">
      <div className="w-full"> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
          <path
            fill="#ccc"
            fill-opacity="1"
            d="M0,288L60,277.3C120,267,240,245,360,229.3C480,213,600,203,720,218.7C840,235,960,277,1080,293.3C1200,309,1320,299,1380,293.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
      <CssCards />
    </div>
  );
}
