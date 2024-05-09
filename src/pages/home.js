import Herosection from "../component/home/herosection";
import SearchDomain from "../component/home/searchdomain";
import Plans from "../component/Plans";
import ValueCustomer from "../component/home/ValueCustomer";

// import Valuablecustomer from "./component/valuablecustomer";
// import Plans from "../component/Plans";
function Home() {
  return (
    <div className="flex-col text-black ">
      <div className="relative mb-64 ">
        <Herosection />
      </div>

      <div className="absolute top-[65%]  w-full">
        <SearchDomain />
      </div>

      <section>
        <h1 className="flex justify-center text-4xl ">
          Our Popular Plans & Pricing
        </h1>
        <div className="mt-[20px] ">
          {/* <Plans /> */}
          <Plans />
        </div>
        <div>
        <h1 className="flex justify-center mt-8 text-4xl">
          Our Valued Costumers
        </h1>
          <ValueCustomer/>
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
