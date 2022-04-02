import React, { useEffect, useState } from 'react';
import SingleFood from '../SingleFood/SingleFood';
import Spiner from '../Spiner/Spiner';
import './Food.css'

const Food = () => {

      const [foods , setFood] = useState([])
      const [lodding , setLodding] = useState(false)
     
          useEffect(() =>{
                setLodding(true)
                fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=f`)
                .then(res => res.json())
                .then(data => setFood(data.meals))
                setLodding(false)
          },[])
      console.log(foods);
      return (
            <div className='food-container container'>
                  
                <>
                
                  {lodding ? <Spiner></Spiner> : 
            
                        
                               foods.map(food => <SingleFood key={food.idMeal} food={food}></SingleFood>) 
                        
              
                  }
                
                </>
                
            </div>
      );
};

export default Food;