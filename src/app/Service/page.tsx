import React from 'react';
import Image from 'next/image';

const Service = () => {
  const services = [
    { imageSrc: '/Images/restaurant.png', title: '55+ Restaurants' },
    { imageSrc: '/Images/quality.png', title: 'Good Quality' },
    { imageSrc: '/Images/discount.jpg', title: 'Discount System' },
    { imageSrc: '/Images/delivery.jpg', title: 'Fast Delivery' },
  ];

  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Service</h2>
      <div className="flex flex-wrap justify-center gap-16">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="p-4 rounded-full mb-4 w-40 h-40 flex items-center justify-center">
              <Image
                src={service.imageSrc}
                alt={service.title}
                width={190}
                height={190}
                className="text-white"
              />
            </div>
            <p className="text-lg font-semibold text-black text-xl">{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;