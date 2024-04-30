import React from "react";
import "./Virtualprivateservice.css";
import VirtualPrice from "./VirtualPrice";
import img01 from "./image 1.png";
import img02 from "./img2.png";
const VirtualPrivateServer = () => {
  return (
    <div>
      <div>
        <h1>Virtual Private Server</h1>
        <p>
          We understand that your hosting needs are as unique as your business.
          That’s why we’re thrilled to offer you our Advanced Virtual Private
          Server (VPS) solutions – the perfect blend of performance, control,
          and scalability for your online ventures.
        </p>
        <img src={img01} alt="" />
      </div>
      <div>
        <h1>Why Choose Dataspace VPS?</h1>
        <p>
          At Dataspace, you're in control with our VPS hosting. Choose your
          preferred OS and tailor resources to match your workload needs for
          top-notch performance. Our infrastructure ensures smooth operations
          with robust hardware and high-speed connectivity. Scale up
          effortlessly as your business grows, anticipating spikes or expanding
          services. Security is paramount with isolated server environments and
          redundant backups to keep your data safe. Count on our round-the-clock
          expert support for any technical queries or assistance you may need.
          We're here to ensure a seamless experience for you and your users,
          24/7.
        </p>
      </div>
      <div className="imgprice">
        <VirtualPrice />
        {/* <img src={img02} alt="" /> */}
      </div>
    </div>
  );
};

export default VirtualPrivateServer;
