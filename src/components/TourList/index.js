import React,{useState,useEffect} from 'react'
import './TourList.scss'
import { tourData } from '../tourData'
import Tour from '../Tour/Tour'
export default function TourList() {
   
    const[tours,setTours]=useState([]);
    useEffect(() => {
   
          setTours(tourData);
       
      }, []);
    function removeTour (id){
    
        const storedTours= tours.filter((tour) => tour.id!==id);  
       setTours(storedTours);
    }
 
    return (
        <section className="tourList">
        {tours.map(tour =>(<Tour key={tour.id} tour={tour} removeTour={removeTour}/>))}
     </section>
    )
}


 
