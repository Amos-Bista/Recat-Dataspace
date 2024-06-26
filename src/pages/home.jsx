import Herosection from "../component/home/herosection";
import SearchDomain from "../component/home/searchdomain";
import Plans from "../component/Plans";
import ValueCustomer from "../component/home/ValueCustomer";
import PlansCard from "../component/home/plansCard";

function Home() {
  return (
    <div className="flex-col text-black ">
      <div className="relative mb-52 ">
        <Herosection />
      </div>
      <div className="absolute top-[60%] left-[-2%] w-full">
        <SearchDomain />
      </div>
      <section>
        <h1 className="flex justify-center text-3xl font-semibold ">
          Our Popular Plans & Pricing
        </h1>
        <Plans />
        <div className="mb-[8rem] flex justify-center">
          <PlansCard />
        </div>
        <div>
          <h1 className="flex justify-center text-3xl font-semibold mb-7">
            Our Valued Costumers
          </h1>
          <ValueCustomer />
        </div>
      </section>
    </div>
  );
}

export default Home;
