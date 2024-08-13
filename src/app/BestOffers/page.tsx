import Image from 'next/image';

const BestOffers = () => {
  const offers = [
    {
      title: "Any day offers",
      description: "New phenomenon Burger taste",
      price: "$12.90",
      image: "/Images/burger.jpeg"
    },
    {
      title: "Other flavors",
      description: "Save room. We made salats",
      price: "$12.90",
      image: "/Images/salad.jpeg"
    },
    {
      title: "Find a poco store near you",
      description: "",
      price: "",
      image: "/Images/map.png"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 mt-16">
      <p className="text-center text-gray-600 mb-2 text-black">Quality Food👌</p>
      <h1 className="text-4xl font-bold text-center mb-4 text-black">Get The Best Offers</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-black">
        The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offers.map((offer, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-black">{offer.title}</h2>
                <p className="text-gray-600 text-sm mb-2 text-black">{offer.description}</p>
                {offer.price && <p className="text-yellow-500 font-semibold">{offer.price}</p>}
              </div>
              <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center overflow-hidden">
                <Image src={offer.image} alt={offer.title} width={80} height={80} />
              </div>
            </div>
            <div className="w-8 h-1 bg-yellow-500 rounded"></div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <span className="w-2 h-2 bg-yellow-500 rounded-full mx-1"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full mx-1"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full mx-1"></span>
      </div>
    </div>
  );
};

export default BestOffers;