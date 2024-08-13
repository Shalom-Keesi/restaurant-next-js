import Head from 'next/head'
import Image from 'next/image'

function Home() {
  return (
    <div className="container mx-auto px-4 h-screen flex items-center justify-center mt-16">
      <Head>
        <title>Food Delivery App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center gap-16">
        <div className="flex-1">
          <Image src="/Images/phone-mockup.png" alt="App Preview" width={100} height={100} className="w-full" />
        </div>

        <div className="flex-1">
          <h2 className="text-orange-500 mb-2">Download Our App</h2>
          <h1 className="text-4xl font-bold mb-4">It's all here.<br />All in one app.</h1>
          <p className="text-black mb-8">
            Discover local, on-demand delivery or Pickup from restaurants, nearby grocery and convenience stores, and more.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-4 py-2 rounded">
              Download on the App Store
            </button>
            <button className="bg-black text-white px-4 py-2 rounded">
              GET IT ON Google Play
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;