import React from 'react';
import HomeHero from '../../sections/HomeHero/HomeHero';
import NewLaunch from '../../sections/NewLaunch/NewLaunch';
import CategorySlider from '../../sections/CategorySlider/CategorySlider';
import TrustBadges from '../../sections/TrustBadges/TrustBadges';
import RecipientSection from '../../sections/RecipientSection/RecipientSection';
import ShopByColour from '../../sections/ShopByColour/ShopByColour';
import PricePointSection from '../../sections/PricePointSection/PricePointSection';
import Categories from '../../sections/Categories/Categories';
import BestSellers from '../../sections/BestSellers/BestSellers';
import Collections from '../../sections/Collections/Collections';
import WhyChooseUs from '../../sections/WhyChooseUs/WhyChooseUs';
import Newsletter from '../../sections/Newsletter/Newsletter';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HomeHero />
     
      <CategorySlider />
      <TrustBadges />
      <ShopByColour />
      <PricePointSection />
       <NewLaunch />
      <Categories />
      <BestSellers />
      <Collections />
      <WhyChooseUs />
      <Newsletter />
    </motion.div>
  );
};

export default Home;
