import { FC } from "react";
import Header from "../../organisms/Navbar";
import Mainscreen from "../../screens/Mainscreen";
import ProsSection from "../../organisms/ProsSection";
import Testemonials from "../../screens/Testimonials";

const Home: FC = () => {
  return (
    <>
      <Header />
      <Mainscreen />
      <ProsSection />
      <Testemonials />
    </>
  );
};

export default Home;
