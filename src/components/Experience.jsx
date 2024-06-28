import { experienceData } from "./constants/Experince";

const Experince = () => {
  return (
    <div className="flex justify-between items-start sm:pt-[220px] sm:pb-[290px] pt-[140px] pb-[160px] flex-wrap  gap-[10px] w-[100%]">
      <div>
        <h1 className="text-[18px] font-[500] tracking[.-5px] ">(Experince)</h1>
      </div>
      <div className="flex flex-col ">
        <p className="text-[31px] findme opacity-0 sm:text-[40px] font-[500] text-left sm:leading-[48px] leading-[39px] pb-[80px] sm:tracking-[-1.3px] tracking-[-.8px]">
          Ex Frontend Developer intern at ConvoQ AI, <br /> utilizing Chakra UI
          and React to develop <br /> user-friendly interfaces and insightful{" "}
          <br /> conversation tools.
          <br />
        </p>

        <div className=" flex flex-col gap-[80px]">
          {experienceData.map((exp) => {
            return (
              <div key={exp.id} className="flex flex-col gap-[25px]  ">
                <h2 className="text-[18px] font-[500] leading-[24px] text-left tracking-[-.5px]">
                  {exp.name}
                </h2>
                <p className="text-[#868788] text-[18px] font-[500]  text-left w-full  tracking-[-.5px] leading-[1.5em]">
                  {exp.lineone} <br />
                  {exp.linetwo} <br />
                  {exp.linethree} <br />
                  {exp.linefour}
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

export default Experince;
