import Herosection from "../component/home/herosection";
import SearchDomain from "../component/home/searchdomain";
import Plan from "../component/Plan";
// import Valuablecustomer from "./component/valuablecustomer";
import Plans from "../component/Plans";
function Home() {
  return (
    <div className="relative flex-col text-black">
      <div className="mb-64 ">
        <Herosection />
      </div>

      <div className="absolute top-[41%]  w-full">
        <SearchDomain />
      </div>

      <section>
        <h1 className="flex justify-center text-4xl ">
          Our Popular Plans & Pricing
        </h1>
        <div className="mt-[20px] bg-indigo-500 ">
          {/* <Plans /> */}
          <Plan />
        </div>
      </section>
      {/* <section className="mb-28">
        <h1 className="flex justify-center pb-10 text-4xl">
          Our Valued Costumers
        </h1>
        <Valuablecustomer />
      </section> */}
    </div>
  );
}

export default Home;
