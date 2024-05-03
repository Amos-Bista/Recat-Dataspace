import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@mui/material/Button";
import plan from "../assests/plan.json";
function Plan() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="w-[90%] m-auto  h-[500px]">
        <div>
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name} className="slide-item">
                <div className="h-[450px] text-black  p-4  rounded-xl">
                  <div className=" bg-indigo-500">
                    <img src="./plans.png" alt="" className="h-44 w-[100%] " />
                  </div>

                  <div className="flex flex-col items-center justify-center gap-[1px]  bg-white">
                    <p className="text-xl font-semibold">{d.name}</p>
                    <div className="text-center">
                      <p>{d.review}</p>
                      <p>{d.review1}</p>
                      <p>{d.review2}</p>
                      <p>{d.review3}</p>
                      <p>{d.review4}</p>
                      <p>{d.review5}</p>
                      <p>{d.review6}</p>
                    </div>
                    <button className=" text-white text-lg px-6 py-1 ml-[200px] ">
                      <Button size="small">Add to Cart</Button>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    name: `Virtual Private Server Silver`,
    img: `/students/John_Morgan.jpg`,
    review: `CORE CPU `,
    review1: `1GB RAM `,
    review2: `20GB DISK SPACE `,
    review3: `1 PUBLIC IP ADDRESS `,
    review4: `1 PUBLIC IP ADDRESS `,
    review5: `1 PUBLIC IP ADDRESS `,
    review6: `1 PUBLIC IP ADDRESS `,
  },
  {
    name: `Virtual Private Server Silver`,
    img: `/students/John_Morgan.jpg`,
    review: `CORE CPU `,
    review1: `1GB RAM `,
    review2: `20GB DISK SPACE `,
    review3: `1 PUBLIC IP ADDRESS `,
    review4: `1 PUBLIC IP ADDRESS `,
    review5: `1 PUBLIC IP ADDRESS `,
    review6: `1 PUBLIC IP ADDRESS `,
  },
  {
    name: `Virtual Private Server Silver`,
    img: `/students/John_Morgan.jpg`,
    review: `CORE CPU `,
    review1: `1GB RAM `,
    review2: `20GB DISK SPACE `,
    review3: `1 PUBLIC IP ADDRESS `,
    review4: `1 PUBLIC IP ADDRESS `,
    review5: `1 PUBLIC IP ADDRESS `,
    review6: `1 PUBLIC IP ADDRESS `,
  },
  {
    name: `Virtual Private Server Silver`,
    img: `/students/John_Morgan.jpg`,
    review: `CORE CPU `,
    review1: `1GB RAM `,
    review2: `20GB DISK SPACE `,
    review3: `1 PUBLIC IP ADDRESS `,
    review4: `1 PUBLIC IP ADDRESS `,
    review5: `1 PUBLIC IP ADDRESS `,
    review6: `1 PUBLIC IP ADDRESS `,
  },
  {
    name: `Virtual Private Server Silver`,
    img: `/students/John_Morgan.jpg`,
    review: `CORE CPU `,
    review1: `1GB RAM `,
    review2: `20GB DISK SPACE `,
    review3: `1 PUBLIC IP ADDRESS `,
    review4: `1 PUBLIC IP ADDRESS `,
    review5: `1 PUBLIC IP ADDRESS `,
    review6: `1 PUBLIC IP ADDRESS `,
  },
  {
    name: `Virtual Private Server Silver`,
    img: `/students/John_Morgan.jpg`,
    review: `CORE CPU `,
    review1: `1GB RAM `,
    review2: `20GB DISK SPACE `,
    review3: `1 PUBLIC IP ADDRESS `,
    review4: `1 PUBLIC IP ADDRESS `,
    review5: `1 PUBLIC IP ADDRESS `,
    review6: `1 PUBLIC IP ADDRESS `,
  },
  {
    name: `Virtual Private Server Silver`,
    img: `/students/John_Morgan.jpg`,
    review: `CORE CPU `,
    review1: `1GB RAM `,
    review2: `20GB DISK SPACE `,
    review3: `1 PUBLIC IP ADDRESS `,
    review4: `1 PUBLIC IP ADDRESS `,
    review5: `1 PUBLIC IP ADDRESS `,
    review6: `1 PUBLIC IP ADDRESS `,
  },
];

export default Plan;
