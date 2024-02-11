import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { projectsArray } from "./Arrayproject";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};
const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "80vh",
  width: "100vw",
};

const ProjectSlider = () => {
  return (
    <div className="slide-container h-100 w-100 p-4">
      <Slide>
        {projectsArray.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.imageSrc})`,
              }}
            >
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ProjectSlider;
