import Herosection from "../component/home/herosection";
import SearchDomain from "../component/home/searchdomain";
import Plans from "../component/Plans";
import ValueCustomer from "../component/home/ValueCustomer";

// import Valuablecustomer from "./component/valuablecustomer";
// import Plans from "../component/Plans";
function Home() {
  return (
    <div className="flex-col text-black ">
      <div className="relative mb-40 ">
        <Herosection />
      </div>
      <div className="absolute top-[75%]  w-full">
        <SearchDomain />
      </div>
      <section>
        <h1 className="flex justify-center text-4xl ">
          Our Popular Plans & Pricing
        </h1>
        <div className="mt-[12px] ">
          <Plans />
        </div>
        <div>
          <h1 className="flex justify-center text-4xl mt-12">Our Valued Costumers</h1>
          <ValueCustomer />
        </div>
      </section>
    </div>
  );
}

export default Home;
