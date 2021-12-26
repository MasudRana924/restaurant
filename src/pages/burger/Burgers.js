import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AllFood from '../Menu/AllFood/AllFood';

const Burgers = () => {
    const [foods,setFoods]=useState([])
    useEffect(()=>{
        fetch('./foods.json')
        .then(res=>res.json())
        .then(data=>{
            setFoods(data.slice(0,9))
        })
    },[])
    return (
      <Container fluid >
           <Row xs={1} md={3} className="w-75 mx-auto">
           {
               foods.map(food=><AllFood
               key={food.name}
               food={food}
               ></AllFood>)
           }
         </Row>

      </Container>
    );
};

export default Burgers;