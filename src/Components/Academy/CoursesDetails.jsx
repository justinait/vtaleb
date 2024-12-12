import React, { useEffect, useState } from 'react'
import bride from '../../assets/images/bride.jpg'
import './CoursesDetails.css'
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import calendar from '../../assets/images/icons/calendar.png'

function CoursesDetails() {

  const {id} = useParams();
  const [course, setCourse] = useState(null);
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const refCollection = collection(db, 'courses');
        const refDoc = doc(refCollection, id);
        const docSnap = await getDoc(refDoc);
        if (docSnap.exists()) {
          setCourse({ ...docSnap.data(), id: docSnap.id });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };
    setTimeout(() => {
      fetchProduct();
    }, 100);
  }, [id]);
  
  return (
    <div className='serviceDetailsContainer'>
      <h2 className='courseDetailTitle'> &gt; {course?.title}</h2>
      
      <div className='infoMakeups'>
          
        <div className='timeDiv'>
          <img className='clockImg' src={calendar} alt="Tiempo" />
          <h6>Martes y jueves 21hs</h6>
        </div>
        <h6>&gt; Dictado por </h6>
        <h6>&gt; Modalidad virtual</h6>


        <p>En nuestro curso especializado de Makeup de Novia, te sumergirás en el fascinante mundo del maquillaje nupcial, 
          donde aprenderás las técnicas más refinadas y los secretos mejor guardados para realzar la belleza de la novia 
          en su día más especial.
          <br /><br />
          Desde la preparación de la piel hasta la aplicación del maquillaje de larga duración, explorarás cada paso crucial 
          para crear looks impecables y duraderos que resalten la luminosidad y la naturalidad de la novia.
        </p>
        
        <p className='italic'>*Se requiere seña para reservar el curso.</p>

        <p className='button'>QUIERO</p>
      </div>
      <img src={bride} alt="" className='courseDetailImage' />
    </div>
  )
}

export default CoursesDetails