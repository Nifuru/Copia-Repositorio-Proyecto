import { useParams } from "react-router-dom";
import React from 'react';


const Categorizaciones = () => {
    const params = useParams();
    return <h1>Categorizaciones: {params.productId}</h1>;
}

export default Categorizaciones;