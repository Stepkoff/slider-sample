import React, {useEffect, useState} from 'react';
import s from './slider.module.scss';
import {ReactComponent as SVGIconLeft} from "../../assets/slider/left-arrow.svg";
import {ReactComponent as SVGIconRight} from "../../assets/slider/right-arrow.svg";
import {ISliderData} from "../../App";

interface ISliderProps {
  slides: ISliderData[];
}

const Slider:React.FC<ISliderProps> = ({slides}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const nextSlide = () => {
    setSlideIndex(prev => prev === slides.length-1 ? 0 : prev + 1);
  }
  const prevSlide = () => {
    setSlideIndex(prev => prev === 0 ? slides.length-1 : prev - 1)
  }
    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide();
        }, 5000)
        return () => {
            clearTimeout(timer);
        }
    }, [slideIndex]);
  return (
    <div className={s.slider}>
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={index === slideIndex? `${s.slide} ${s.slideActive}`: s.slide}
        >
          <p className={s.slideTitle}>{slide.title}</p>
          <img src={slide.src} alt="image"/>
        </div>
      ))}
      <button onClick={prevSlide} className={s.btn}><SVGIconLeft/></button>
      <button onClick={nextSlide} className={s.btn}><SVGIconRight/></button>
      <div className={s.sliderPagination}>
        {slides.map((item, i) => (
          <div
            onClick={() => setSlideIndex(i)}
            key={'cl'+item.id}
            className={slideIndex === i ? `${s.circle} ${s.circleActive}`: s.circle}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;