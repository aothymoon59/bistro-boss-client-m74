import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ItemCard from "../../Shared/ItemCard/ItemCard";

const ChefRecommended = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setItems(data.slice(1, 4)));
  }, []);
  return (
    <section className="mt-[130px]">
      <SectionTitle
        subHeading="Should Try"
        heading="Chef Recommends"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {items.map((item) => (
          <ItemCard item={item} key={item._id}></ItemCard>
        ))}
      </div>
    </section>
  );
};

export default ChefRecommended;
