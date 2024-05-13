import Herosection from "../component/home/herosection";
import SearchDomain from "../component/home/searchdomain";
import Plans from "../component/Plans";
import ValueCustomer from "../component/home/ValueCustomer";

// import Valuablecustomer from "./component/valuablecustomer";
// import Plans from "../component/Plans";
function Home() {
  return (
    <div className="flex-col text-black ">
      <div className="relative mb-52 ">
        <Herosection />
      </div>
      <div className="absolute top-[75%]  w-full">
        <SearchDomain />
      </div>
      <section>
        <h1 className="flex justify-center text-4xl ">
          Our Popular Plans & Pricing
        </h1>
        <div className="mb-[8rem]">
          <Plans />
        </div>
        <div>
          <h1 className="flex justify-center text-3xl mb-[2rem]  font-bold">
            Our Valued Costumers
          </h1>
          <ValueCustomer />
        </div>
      </section>
    </div>
  );
}

export default Home;
