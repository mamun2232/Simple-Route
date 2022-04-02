import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Spiner from '../Spiner/Spiner';
import './FoodDetials.css'

const FoodDetials = () => {
      const [detila , setDetilas] = useState({})
      const [lodding , setLodding] = useState(false)
      const {Detilas} = useParams()
      useEffect(()=>{
            setLodding(true)
            const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Detilas}`
            fetch(url)
            .then(res => res.json())
            .then(data =>  setDetilas(data.meals[0]))
            setLodding(false)
      },[])

      console.log(detila);
      
      return (
           <> {
                 lodding ? <Spiner></Spiner> :  <div className="card container mt-3">
                 <div className="card-image my-3">
                       <img src={detila.strMealThumb} alt="" />
                 </div>
                 <div className="card-info">
                       <h3>Name: {detila.strMeal}</h3>
                       <p>Category: {detila.strCategory}</p>
                       <p>Food Item: {detila.strArea}</p>
                       <p>Info: {detila.strInstructions}</p>
                 </div>
           </div>
           }
           </>
      );
};

export default FoodDetials;