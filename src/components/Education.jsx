import { educationData } from "./constants/Education";

const Education = () => {
  return (
    <div className="flex justify-between items-start sm:pt-[220px] sm:pb-[0px] pt-[140px] pb-[160px] flex-wrap  gap-[10px] w-[100%]">
      <div>
        {" "}
        <h1 className="text-[22px] font-[500] tracking[.-5px] ">(Education)</h1>
      </div>
      <div className="flex flex-col ">
        <p className="text-[22px] findme opacity-0 sm:text-[40px] font-[500] text-left sm:leading-[48px] leading-[25px] pb-[80px] sm:tracking-[-1.3px] tracking-[-.8px]">
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
                <h2 className="text-[18px] font-[500] leading-[24px] text-left tracking-[-.5px]">
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
