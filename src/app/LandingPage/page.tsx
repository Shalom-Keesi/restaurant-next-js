import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col justify-between md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-6xl font-bold mb-2 text-black">
            Enjoy Delicious Food in <span className="text-yellow-400 whitespace-pre-line">Helthy Life</span>
          </h1>
          <p className="mb-4 text-black">
            Tandoori masala is an Indian spice blend consisting of a variety of spices Tandoori masala is an Indian spice blend consisting of a variety of spices
          </p>
          <button className="bg-yellow-400 text-white font-bold py-2 px-4 rounded">
            ORDER NOW
          </button>
        </div>
        <div className="md:w-1/2 relative">
          <Image
            src="/Images/chicken.png"
            alt="Delicious roasted chicken"
            width={500}
            height={500}
            className="rounded-full border-4 border-white shadow-lg"
          />
          {/* <div className="absolute bottom--0 right-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 flex items-center">
            {['/Images/dish1.jpeg', '/Images/dish2.jpg', '/Images/dish3.jpeg'].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Dish ${index + 1}`}
                width={40}
                height={40}
                className="absolute top-1/2 left-full rounded-full border-2 border-white -ml-2"
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
