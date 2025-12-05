import { educationData } from "../data/education.js";

const Education = () => {
  return (
    <div className="flex justify-between items-start sm:pt-[220px] sm:pb-[0px] pt-[140px] pb-[160px] flex-wrap  gap-[10px] w-[100%]">
      <div>
        {" "}
        <h1 className="text-[22px] sm:text-[40px] font-[700] tracking-[-2px] masked-title">
          (Education)
        </h1>
      </div>
      <div className="flex flex-col ">
        <p className="text-[18px] xs:text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-[500] text-left leading-[22px] xs:leading-[24px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] xl:leading-[48px] pb-[40px] tracking-[-.6px] xs:tracking-[-.7px] sm:tracking-[-.9px] md:tracking-[-1.1px] lg:tracking-[-1.2px] xl:tracking-[-1.3px] vibe-text subheading-text">
          I am currently doing my Bachelors in
          <br />
          computer Science. I enjoy learning about <br />
          developement technologies and am <br />
          currently learning Next.js and TypeScript.
        </p>

        <div className=" flex flex-col gap-[80px]">
          {educationData.map((study) => {
            return (
              <div key={study.id} className="flex flex-col gap-[25px]  ">
                <h2 className="text-[18px] font-[700] leading-[24px] text-left tracking-[-.5px] masked-title">
                  {study.name}
                </h2>
                <p className="text-[#868788] text-[18px] font-[500]  text-left w-full  tracking-[-.5px] leading-[1.5em]">
                  {study.lineone} <br />
                  {study.linetwo} <br />
                  {study.linethree} <br />
                  {study.linefour}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Education;
