import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import './Academy.css'
import image from '../../assets/images/studio.jpeg'

function Academy() {

  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'courses'));
        const coursesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCourses(coursesData);
      } catch (error) {
        console.error('Error fetching courses: ', error);
      }
    };
    fetchCourses();
  }, []);

  return (
        
    <section className='sectionContainer'>
      <p className='titleSection'>ACADEMIA</p>
      <div className='separatorSections'></div>

      <div className='academyContainer'>
        <img className='academyImage' src={image} alt="" />
        <div className='academyText'>
          <h2>Donde la inspiración se encuentra con la educación</h2>
          <p> Desde las bases hasta las tendencias más actuales, nuestros cursos están diseñados para todos los niveles, 
            desde principiantes hasta aquellos que buscan perfeccionar sus habilidades.
            <br />
          </p>
          {/* a este ponele italic */}
          <p className='italic'>Los cupos son limitados, asegúrate de reservar tu lugar con anticipación.</p>
          
        </div>
      </div>
      <h3> &gt; CURSOS</h3>
      <div className="coursesContainer">
        {courses.map(e => (
          <div key={e.id} className="courseCard">
            <img src={e.image} alt="" />
            <h4>{e.name}</h4>
            <p>&gt; Dictado x {e.professor}</p>
            <p>&gt; Modalidad {e.mode}</p>

            <p>{e.description}</p>
            
          </div>
        ))}
      </div>

    </section>
  )
}

export default Academy