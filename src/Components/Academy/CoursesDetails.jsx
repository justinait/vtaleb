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
      <div className='courseDetailInfoContainer'>
        <div className='infoMakeups'>
            
          <div className='timeDiv'>
            <img className='clockImg' src={calendar} alt="Tiempo" />
            <h6>{course.duration}</h6>
          </div>
          <h6>&gt; Dictado por </h6>
          <h6>&gt; Modalidad {course?.mode}</h6>

          <p>
            {course?.description}
          </p>

          <p>{course?.temario}</p>          
          <p className='italic'>*Se requiere seña para reservar el curso.</p>

          <p className='button'>QUIERO</p>
        </div>
        <img src={bride} alt="" className='courseDetailImage' />
      </div>
    </div>
  )
}

export default CoursesDetails