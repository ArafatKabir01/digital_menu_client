import React, { useEffect, useState } from 'react';

const UseFoods = () => {
    const [product , setProduct] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allFoods')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return [product , setProduct]
}

export default UseFoods;