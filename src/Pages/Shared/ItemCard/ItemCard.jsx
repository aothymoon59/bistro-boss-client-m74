import ItemsButton from "../../../components/ItemsBtn/ItemsButton";

const ItemCard = ({ item }) => {
  const { name, image, recipe } = item || {};
  return (
    <div className="card bg-[#F3F3F3] rounded-none pb-8">
      <figure>
        <img src={image} alt={name} className="w-full" />
      </figure>
      <div className="px-10 pt-8 pb-6 text-center inter-font">
        <h2 className="text-[#151515] text-2xl font-semibold mb-2">{name}</h2>
        <p>{recipe}</p>
      </div>
      <div className="text-center mt-auto ">
        <ItemsButton></ItemsButton>
      </div>
    </div>
  );
};

export default ItemCard;
