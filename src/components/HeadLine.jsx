const HeadLine = () => {
  return (
    <div className="flex flex-col p-16 items-start ">
      <div className="flex flex-col items-start justify-start leading-[96px] sm:leading-0">
        <h1 className="text-[39px] sm:text-[71px] md:text-[102px] font-[700] text-left">
          MOHAMMAD HARISH
        </h1>
        <h1 className="text-[39px] sm:text-[71px] md:text-[102px] font-[700] mt-0 sm:mt[-48px] text-left pb-[30px]">
          FRONTEND DEVELOPER
        </h1>
        <p className="text-[22px] sm:text-[40px]  font-[500] text-left leading-[48px]">
          As a front-end developer,
          <br /> I create dynamic and responsive web interfaces <br /> that help
          businesses around <br /> the world enhance their online presence and
          drive growth.
        </p>
      </div>
    </div>
  );
};

export default HeadLine;
