import React, { useEffect, useState } from 'react';
import './Carousel.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import prev from '../../assets/images/icons/prev.png'
import next from '../../assets/images/icons/next.png'
import { Link } from 'react-router-dom';

function Carousel() {
  const [courses, setCourses] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);

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

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + courses.length) % courses.length);
  };
  const getItemClass = (index) => {
    if (index === currentIndex) return 'carouselItem active';
    if (index === (currentIndex - 1 + courses.length) % courses.length) return 'carouselItem prev';
    if (index === (currentIndex + 1) % courses.length) return 'carouselItem next';
    return 'carouselItem hidden'; // Oculta otros elementos
  };
  
  // Eventos táctiles
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) handleNext();
    if (endX - startX > 50) handlePrev();
    setStartX(null);
  };

  // Eventos de mouse
  const handleMouseDown = (e) => {
    setStartX(e.clientX);
  };

  const handleMouseUp = (e) => {
    if (startX === null) return;
    const endX = e.clientX;
    if (startX - endX > 50) handleNext();
    if (endX - startX > 50) handlePrev();
    setStartX(null);
  };
  
  return (
    <div className="carouselContainer">
      <h3> &gt; CURSOS</h3>
      <div
        className="carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {courses.map((e, index) => {
          
          return (
            <Link to={'/courses/:id'} key={e.id} className={getItemClass(index)}>
              <img src={e.image} alt={e.title} />
              {index === currentIndex && (
                <div className="courseInfo">
                  <h4 className="courseTitlePreview">{e.title}</h4>
                  <h5>&gt; Dictado x {e.professor}</h5>
                  <h5>&gt; Modalidad {e.mode}</h5>
                  <p className='coursePreviwDescription'>{e.info}</p>
                </div>
              )}
            </Link>
          );
        })}
      </div>
      <img src={prev} className="carouselButton" onClick={handlePrev}/>
      <img src={next} className="carouselButton" onClick={handleNext}/>
    </div>
  );
}

export default Carousel;
