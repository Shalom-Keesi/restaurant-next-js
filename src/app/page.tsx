import Navbar from "@/app/Navbar/page";
import LandingPage from "./LandingPage/page";
import PopularFoods from "./PopularFoods/page";
import SpecialOffer from "./SpecialOffer/page";
import BestOffers from "./BestOffers/page";
import Service from "./Service/page";
import Testimonials from "./Testimonials/page";
import Home from "./Home/page";
import SubscribeNewsletter from "./Subscription/page";
import Footer from "./Footer/page";

export default function App() {
  return (
    <main >
      <Navbar/>
      <LandingPage/>
      <PopularFoods/>
      <SpecialOffer/>
      <BestOffers/>
      <Service/>
      <Testimonials/>
      <Home/>
      <SubscribeNewsletter/>
      <Footer/>
    </main>
  );
}
