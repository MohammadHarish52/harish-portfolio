import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import "/src/components/Calltoaction/callTo.css";
import { Link } from "react-router-dom";

const CalltoAction = () => {
  return (
    <div className="callToAction bg-white">
      <span></span>
      <p>Need A Web Developer ?</p>
      <Link to="/contacts">
        <div className="wrapper flex ">
          <FaArrowLeft className="text-6xl m-auto mr-8  " />
          <h1 data-aos="zoom-in" className="aos-init aos-animate font-bold">
            Lets work Together
          </h1>
          <FaArrowRight className="text-6xl m-auto ml-8 " />
        </div>
      </Link>
    </div>
  );
};

export default CalltoAction;
