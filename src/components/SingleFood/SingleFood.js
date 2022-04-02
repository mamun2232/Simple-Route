import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleFood.css'

const SingleFood = (props) => {
      const {strCategory , idMeal, strMeal , strMealThumb } = props.food
      const navigate = useNavigate()
      const details = () =>{
            const path = `/Foods/${idMeal}`
            navigate(path)

      }
      
      return (
            <div>
                  <div className="card shadow p-3 h-100 mt-4">
                       <div className="card-img">
                             <img src={strMealThumb} alt="" />
                       </div>
                       <div className="card-info my-2">
                             <h4>{strMeal}</h4>
                             <p>{strCategory}</p>
                             <button onClick={()=> details()} className='btn btn-primary'>Detials</button>
                       </div>
                  </div>
            </div>
      );
};

export default SingleFood;