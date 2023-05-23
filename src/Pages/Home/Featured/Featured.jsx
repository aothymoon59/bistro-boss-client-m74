import featureImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item text-white py-10 md:py-20 lg:py-[130px] mt-[130px] w-full max-w-[1920px] mx-auto">
      {/* section title  */}
      <div className="mx-auto md:w-4/12 text-center mb-12">
        <p className="md:text-xl italic inter-font mb-4 text-[#D99904]">
          --- check it out ---
        </p>
        <h3 className="text-3xl lg:text-[40px] text-white uppercase border-y-4 py-5 ">
          Featured Item
        </h3>
      </div>
      {/* section body  */}
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center px-10 lg:px-[150px]">
        <div>
          <img src={featureImg} alt="" />
        </div>
        <div className="inter-font space-y-3">
          <p className="text-2xl">Aug 20,2029</p>
          <p className="uppercase text-2xl">WHERE CAN I GET SOME?</p>
          <p className=" text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            sapiente, totam obcaecati saepe qui autem eos dolorem ipsam quam. Ea
            necessitatibus nobis molestiae eligendi, sed dolore reiciendis,
            rerum non delectus vitae ut voluptatibus est quis, placeat odio
            quaerat cupiditate nihil vero? Nihil nemo eligendi consequatur
            laudantium sapiente. Fuga, beatae culpa.
          </p>
          <button className="btn btn-outline py-5 px-[30px] text-white border-0 border-b-4 mt-6">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
