import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AllFood from '../AllFood/AllFood';
import useAuth from './../../../hooks/useAuth';

const All = () => {
    const {displayFoods}=useAuth()
    // const [foods,setFoods]=useState([])
    // useEffect(()=>{
    //     fetch('./foods.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setFoods(data)
    //     })
    // },[])
    return (
     <Container fluid className="pb-5">
         <Row xs={1} md={3} className="">
           {
               displayFoods.map(food=><AllFood
               key={food.name}
               food={food}
               ></AllFood>)
           }
         </Row>

     </Container>
    );
};

export default All;