import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AllFood from '../AllFood/AllFood';
import useAuth from './../../../hooks/useAuth';

const All = () => {
    const {displayFoods}=useAuth()
    return (
     <Container fluid className="pb-5">
         <Row xs={1} md={4} className="">
           {
               displayFoods.map(food=><AllFood
               key={food._id}
               food={food}
               ></AllFood>)
           }
         </Row>

     </Container>
    );
};

export default All;