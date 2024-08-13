import Image from 'next/image';

const SpecialOffer = () => {
  return (
    <div className="bg-[#FFF9F5] p-8 flex items-center justify-around mt-16">
      <div className="max-w-lg">
        <div className="inline-block bg-yellow-300 text-sm font-semibold px-3 py-1 rounded-full mb-4">
          -50%
        </div>
        <h1 className="text-5xl font-bold mb-4 text-black">Our Special Offer</h1>
        <p className="text-gray-600 mb-6 text-black">
          Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
        </p>
        <button className="bg-yellow-400 text-white px-6 py-3 rounded-full font-semibold flex items-center">
          See All Menu
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="relative">
        <Image
          src="/Images/sea-food.avif"
          alt="Special dish"
          width={400}
          height={400}
          className="rounded-full"
        />
        <div className="absolute top-0 -left-16 bg-white rounded-lg shadow-md p-2 flex items-center">
          <Image
            src="/Images/christino.png"
            alt="Cristio Maria"
            width={40}
            height={40}
            className="rounded-full mr-2"
          />
          <div>
            <p className="font-semibold">Cristio Maria</p>
            <p className="text-xs text-gray-500">Healthy and delicious pizza</p>
            <div className="flex text-yellow-400">
              {'★'.repeat(5)}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 -right-16 bg-white rounded-lg shadow-md p-2 flex items-center">
          <Image
            src="/Images/christino.png"
            alt="Srah ali khan"
            width={40}
            height={40}
            className="rounded-full mr-2"
          />
          <div>
            <p className="font-semibold">Srah ali khan</p>
            <p className="text-xs text-gray-500">Healthy and delicious pizza</p>
            <div className="flex text-yellow-400">
              {'★'.repeat(5)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;