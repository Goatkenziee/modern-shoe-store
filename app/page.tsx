import Link from 'next/link';
import Image from 'next/image';

// Mock data for shoes
const shoes = [
  {
    id: 1,
    name: 'The Runner',
    price: 199,
    imageUrl: 'https://picsum.photos/800/600?random=1',
    description: 'Lightweight and comfortable shoes for everyday wear.',
  },
  {
    id: 2,
    name: 'The Trekker',
    price: 249,
    imageUrl: 'https://picsum.photos/800/600?random=2',
    description: 'Durable shoes designed for outdoor adventures.',
  },
  {
    id: 3,
    name: 'The Sporty',
    price: 299,
    imageUrl: 'https://picsum.photos/800/600?random=3',
    description: 'Stylish sports shoes for active lifestyles.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/800/600?random=1"
            alt="Hero Shoes"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Step Into Comfort and Style.</h1>
          <p className="text-xl md:text-2xl mb-8">Explore our premium collection of shoes.</p>
          <Link href="#products">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:-translate-y-1">Shop Now</button>
          </Link>
        </div>
      </header>

      <section id="products" className="py-16 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Latest Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {shoes.map((shoe) => (
            <div key={shoe.id} className="bg-gray-800 rounded-lg shadow-xl p-6 flex flex-col items-center text-center transition duration-300 ease-in-out hover:scale-105">
              <Image
                src={shoe.imageUrl}
                alt={shoe.name}
                width={300}
                height={300}
                className="rounded-lg mb-6 object-cover"
              />
              <h3 className="text-2xl font-semibold mb-3">{shoe.name}</h3>
              <p className="text-xl font-bold text-blue-400 mb-4">${shoe.price.toLocaleString()}</p>
              <p className="text-gray-300 mb-6">{shoe.description}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-lg transition duration-300 ease-in-out">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-800 py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Customers Say</h2>
          <p className="text-lg text-gray-300 mb-6">"I love my new shoes! They are so comfortable and stylish."</p>
          <p className="text-lg text-gray-300 mb-6">"Best purchase I've made this year! Highly recommend."</p>
          <p className="text-lg text-gray-300">"Fantastic quality and fast shipping. Will buy again!"</p>
        </div>
      </section>

      <footer className="bg-gray-800 py-8 text-center text-gray-400">
        <p>&copy; 2024 Modern Shoe Store. All rights reserved.</p>
      </footer>
    </div>
  );
}