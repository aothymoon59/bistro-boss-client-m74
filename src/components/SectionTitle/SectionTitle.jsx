const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto md:w-4/12 text-center my-8">
      <p className="md:text-xl italic inter-font mb-4 text-[#D99904]">
        --- {subHeading} ---
      </p>
      <h3 className="text-3xl lg:text-[40px] text-[#151515] uppercase border-y-4 py-5 ">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
