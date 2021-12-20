import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AllFood from '../AllFood/AllFood';

const All = () => {
    const [foods,setFoods]=useState([])
    useEffect(()=>{
        fetch('./foods.json')
        .then(res=>res.json())
        .then(data=>{
            setFoods(data)
        })
    },[])
    return (
     <Container fluid>
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

export default All;