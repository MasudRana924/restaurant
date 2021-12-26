import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Banner from '../banner/Banner';
import Burgers from '../burger/Burgers';
import Foods from '../Foods/Foods';
import All from '../Menu/All/All';
import Menu from '../Menu/Menu';
import Reservation from '../Reservation/Reservation';
import Reviews from '../review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Routes>
               <Route path="/" element={<Menu ></Menu>}>
                   <Route path="/" element={<All/>}></Route>
                   <Route  path="burger" element={<Burgers/>}></Route>
               </Route>
            </Routes> */}
            <All></All>
            <Foods></Foods>
            <Reservation></Reservation>
            <Reviews></Reviews>
           
        </div>
    );
};

export default Home;