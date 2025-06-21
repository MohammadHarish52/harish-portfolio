const Devline = () => {
  return (
    <div className="py-[180px] sm:py-[290px] w-full ">
      <div className="flex  flex-col justify-between items-start sm:flex-row gap-[10px] flex-wrap">
        <h1 className="text-[22px] sm:text-[40px] font-[500] tracking-[-.5px]">
          (Work)
        </h1>
        <div className="flex flex-col ">
          <p className="text-[22px] sm:text-[40px] font-[500] text-left sm:leading-[48px] leading-[25px] pb-[80px] sm:tracking-[-1.3px] tracking-[-.8px]">
            I create engaging, user-friendly web apps that
            <br />
            help businesses worldwide enhance their digital
            <br /> presence and achieve their goals.
          </p>
          <p className="text-[22px] sm:text-[40px] font-[500] text-left sm:leading-[48px] leading-[25px] pb-[80px] sm:tracking-[-1.3px] tracking-[-.8px]">
            I turn client visions into reality with clean, scalable
            <br /> code, collaborating globally with clients
            <br /> agencies, blending design and tech expertise.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Devline;
