const ProductCard = ({ data }) => {
  if (!data) {
    return <div>No Product Found</div>;
  }

  const { title, description, price, thumbnail } = data;

  return (
    <figure className="bg-white rounded-lg shadow-md p-4">
      <img
        src={data.thumbnail}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <h3 className="text-xl py-3 font-bold">
        {data.title} - ₹{data.price}
      </h3>

      <p>{data.description}</p>

      <button className="bg-black text-white px-4 py-2 rounded mt-3">
        Read More
      </button>
    </figure>
  );
};

export default ProductCard;