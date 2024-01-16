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
          <FaArrowRight className="text-6xl m-auto ml-8 " />

          <h1
            data-aos="zoom-in"
            className="aos-init aos-animate font-bold
            hover:trasition-border hover:duration-700 hover:border-b-4 hover:border-black"
          >
            Lets work Together
          </h1>
          <FaArrowLeft className="text-6xl m-auto mr-8  " />
        </div>
      </Link>
    </div>
  );
};

export default CalltoAction;
