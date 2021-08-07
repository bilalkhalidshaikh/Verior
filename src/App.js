import "./App.css";
import {
  AppBar,
  Hero,
  CardSection,
  WhatWeDo,
  OurTeam,
  GetInTouch,
  Testimonatls,
  Companies,
  Feedback,
} from "./Components";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Hero />
      <CardSection />
      <WhatWeDo />
      <OurTeam />
      <GetInTouch />
      <Testimonatls />
      <Companies />
      <Feedback />
    </div>
  );
}

export default App;
