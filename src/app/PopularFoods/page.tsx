import Image from 'next/image';

const PopularFoods = () => {
    const foods = [
      { name: 'Fruit dish', image: '/Images/salmon.jpeg', price: 696 },
      { name: 'Fruit dish', image: '/Images/dish3.jpeg', price: 696 },
      { name: 'Sea fish dish', image: '/Images/fish.jpeg', price: 696 },
      { name: 'Pizza', image: '/Images/salmon.jpeg', price: 696 },
    ];

    return (
        <div className="container mx-auto px-4 py-8 mt-16">
          <h1 className="text-center text-3xl font-semibold mb-2 text-black">Online Store</h1>
          <h2 className="text-center text-4xl font-bold mb-4 text-black">Popular Foods</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {foods.map((food, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={food.image}
                  alt={food.name}
                  width={200}
                  height={200}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{food.name}</h3>
                <p className="text-gray-600 mb-2">Dinko Food</p>
                <div className="flex text-yellow-400 mb-4">
                  {'★'.repeat(4)}{'☆'.repeat(1)}
                </div>
                <button className="bg-yellow-400 text-white px-4 py-2 rounded-full">
                  Add to Cart ${food.price}
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
export default PopularFoods;

