import { FC } from "react";
import Header from "../../organisms/Navbar";
import Mainscreen from "../../screens/Mainscreen";
import ProsSection from "../../organisms/ProsSection";
import Testemonials from "../../screens/Testimonials";
import Slider from "../../screens/Slider";

const Home: FC = () => {
  return (
    <>
      <Header />
      <Mainscreen />
      <ProsSection />
      <Slider />
      {/* <Testemonials /> */}
    </>
  );
};

export default Home;
