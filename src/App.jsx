import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import PreNavBar from './components/PreNavBar';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Slider from './components/Slider';
import data from './data/data.json';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProducts from './components/StarProducts';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories.jsx';
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer';
import NavOptions from './components/NavOptions';

function App() {
  return (
    <Router>
      <PreNavBar/>
      <NavBar/>
      <NavOptions miPhones={data.miPhones} redmiPhone={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />

      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>

      <Heading text="STAR PRODUCTS"/>
      <StarProducts starProduct={data.starProduct} />

      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Routes>
        <Route exact path='/music' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}></Route>
        <Route exact path='/smartDevice' element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />}></Route>
        <Route exact path='/home' element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}></Route>
        <Route exact path='/lifeStyle' element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />}></Route>
        <Route exact path='/mobileAccessories' element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}></Route>
      </Routes>

      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />

      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />

      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner}/>

      <Footer footer={data.footer}/>

    </Router>
  );
}

export default App;
