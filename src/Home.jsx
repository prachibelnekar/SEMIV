import React from 'react';
import Hero from "./Hero.jsx";
import Category from './Category.jsx';
import Category2 from './Category2.jsx';
import Services from './Services.jsx';
import Banner from './Banner.jsx';
import Partners from './Partners.jsx';
import Footer from './Footer.jsx';
import Popup from './Popup.jsx';
import Blogs from "./Blogs.jsx";
import "aos/dist/aos.css";
import AOS from "aos";
import Product from './Product.jsx';
import headphone from "../src/assets/headphone.png";
import smartwatch2 from "../src/assets/smartwatch2.png";

const BannerData = {
    discount: "30% OFF",
    title: "Fine Smile",
    date: "10 Jan to 28 Jan",
    image: headphone,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, iste?",
    bgColor: "red",
  };
  const BannerData2 = {
    discount: "30% OFF",
    title: "Happy Hours",
    date: "14 Dec to 28 Dec",
    image: smartwatch2,
    title2: "Smart Solo",
    title3: "Winter Sale",
    title4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, iste?",
    bgColor: "#2dcc6f",
  };

const Home = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };
    React.useEffect(() => {
      AOS.init({
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      });
      AOS.refresh();
    }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Hero handleOrderPopup={handleOrderPopup}/>
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData}/>
      <Product/>
      <Banner data={BannerData2}/>
      <Blogs/>
      <Partners/>
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>
    </div>
  );
};

export default Home;