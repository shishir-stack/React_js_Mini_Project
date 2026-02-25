import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Meal2 = () => {

    const [items, setItems]=useState([]);

    useEffect(()=>{
        axios
        .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .than ((res)=>{
            console.log(res.data.meal)
            setItems (res.data.meal)
        })

    })





  return (
    <div>
      
    </div>
  )
}

export default Meal2
