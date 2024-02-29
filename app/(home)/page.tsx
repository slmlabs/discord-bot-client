// import { Footer } from "../../_components/footer";

import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";

const Home = () => {
  return (
    <div className=" min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heroes />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
