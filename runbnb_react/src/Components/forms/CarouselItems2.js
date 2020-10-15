import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import ItemsCarousel from 'react-items-carousel';
import './CarouselItems2.css';

export default () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
      <div style={{ padding: `0 ${chevronWidth}px` }}>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={3}
          gutter={20}
          leftChevron={<button>{'<'}</button>}
          rightChevron={<button>{'>'}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          <div className="log1 flex content-end flex-wrap " style={{ height: 250, }}>
              <div  className="px-5">
              <h1 className="tracking-wide text-gray-200  text-2xl font-bold">Saint Gilles les Bains</h1>
              <h2 className="tracking-wide text-gray-200  text-xl ">25 hébergements</h2>
              </div>  
          
          </div>
          <div className="log2 flex content-end flex-wrap" style={{ height: 250, }}>
             <div  className="px-5">
              <h1 className="tracking-wide text-gray-200  text-2xl font-bold">Saint Pierre</h1>
              <h2 className="tracking-wide text-gray-200  text-xl ">12 hébergements</h2>
              </div>  
          
          </div>
          <div className="log3 flex content-end flex-wrap" style={{ height: 250, }}>
             <div  className="px-5">
              <h1 className="tracking-wide text-gray-200  text-2xl font-bold">Petite Ile</h1>
              <h2 className="tracking-wide text-gray-200  text-xl ">9 hébergements</h2>
              </div>  
          
          </div>
          <div className="log4 flex content-end flex-wrap" style={{ height: 250, }}>
             <div  className="px-5">
              <h1 className="tracking-wide text-gray-200  text-2xl font-bold">Saint Denis</h1>
              <h2 className="tracking-wide text-gray-200  text-xl ">18 hébergements</h2>
              </div>  
          
          </div>
          <div className="log5 flex content-end flex-wrap " style={{ height: 250, }}>
             <div  className="px-5">
              <h1 className="tracking-wide text-gray-200  text-2xl font-bold">Saint Gilles les Bains</h1>
              <h2 className="tracking-wide text-gray-200  text-xl ">25 hébergements</h2>
              </div>  
     
          </div>
        </ItemsCarousel>
        <hr className=""></hr>
     
        
      </div>
    );
  };