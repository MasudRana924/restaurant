import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Banner from '../banner/Banner';
import Foods from '../Foods/Foods';
import All from '../Menu/All/All';
import Menu from '../Menu/Menu';
import Reservation from '../Reservation/Reservation';
import Reviews from '../review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Routes>
               <Route path="/" element={<Menu ></Menu>}>
                   <Route exact path="/" element={<All/>}></Route>
     
               </Route>
            </Routes>
            <Foods></Foods>
            <Reservation></Reservation>
            <Reviews></Reviews>
           
        </div>
    );
};

export default Home;