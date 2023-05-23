import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommended from "../ChefRecommended/ChefRecommended";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonmials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-full max-w-[1320px] px-5 mx-auto">
        <Category></Category>
        <BistroBoss></BistroBoss>
        <PopularMenu></PopularMenu>
        <CallUs></CallUs>
        <ChefRecommended></ChefRecommended>
      </div>

      <Featured></Featured>
      <div className="w-full max-w-[1320px] px-5 mx-auto">
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
