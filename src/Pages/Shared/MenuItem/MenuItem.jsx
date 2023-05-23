const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex flex-col items-center sm:flex-row gap-8 border sm:border-0 rounded-xl p-2 sm:p-0">
      <img
        className="w-[100px]"
        style={{ borderRadius: "0 200px 200px 200px" }}
        src={image}
        alt=""
      />
      <div className="flex gap-px">
        <div>
          <h3 className="uppercase text-xl cinzel-font mb-2 text-[#151515]">
            {name} ----------
          </h3>
          <p className="text-[#737373] inter-font">{recipe}</p>
        </div>
        <p className="text-[#BB8506] inter-font">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
