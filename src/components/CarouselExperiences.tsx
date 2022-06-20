import React, { useRef } from 'react'
import amazing1 from "../assets/amazing1.svg"
import amazing2 from "../assets/amazing2.svg"
import amazing3 from "../assets/amazing3.svg"
import amazing4 from "../assets/amazing4.svg"
import leftarrow from "../assets/leftarrow.svg"
import rightarrow from "../assets/rightarrow.svg"
import exp from "../assets/exp.svg"
import "./CarouselExperiences.css"


const CarouselExperiences = () => {

    const dataRef:any = useRef(null);

    const scrollRight = () => {
        if (dataRef.current) {
            dataRef.current.scrollBy({
                top: 0,
                left: 200,
                behavior: "smooth",
            });
        }
    };

    const scrollLeft = () => {
        if (dataRef.current) {
            dataRef.current.scrollBy({
                top: 0,
                left: -200,
                behavior: "smooth",
            });
        }
    };

    const data:any = [
        {
            image: amazing1,
            footer: exp,
            text: "Kigali Genocie Memorial"
        },
        {
            image: amazing2,
            footer: exp,
            text: "Mountain View"
        },
        {
            image: amazing3,
            footer: exp,
            text: "Anastasia Paradise"
        },
        {
            image: amazing4,
            footer: exp,
            text: "Nirvana Heights"
        },
        {
            image: amazing1,
            footer: exp,
            text: "Kigali Genocie Memorial"
        },
        {
            image: amazing2,
            footer: exp,
            text: "Mountain View"
        },
        {
            image: amazing3,
            footer: exp,
            text: "Anastasia Paradise"
        },
        {
            image: amazing4,
            footer: exp,
            text: "Nirvana Heights"
        },
        
    ]

    console.log(data);

  return (
    <div className='experience-carousel'>
        <h1>Some Amazing Experiences</h1>
        <div className='carousel'>
        <img src={leftarrow} alt="" className='prev-btn' onClick={scrollLeft}/>
        <div className='carousel-wrapper' ref={dataRef}>
                    {data.map((item:any,index:any) => {
                        return(
                            <div key={index} className="carousel-item">
                                <img src={item.image} alt="" className='carousel-image' />
                                <p className='carousel-text'>{item.text}</p>
                                <img src={item.footer} alt="" className='carousel-image' />
                            </div>
                        )
                    })}
               </div>
        
        {/* {data.length && <div className='carousel-wrapper' >
            {data.map((item:any, index:number) => <div key={index} className="carousel-item" ref={dataRef} >
                <img src={item.image} alt=""  className='carousel-image'/>
                <p className='carousel-text'>{item.text}</p>
                <img src={item.footer} alt="" className='carousel-image experience-footer' />
            </div>)}
            
            </div>
        } */}
        <img src={rightarrow} alt="" onClick={scrollRight} className="carousel1-btn"/>
        </div>
    </div>
  )
}

export default CarouselExperiences