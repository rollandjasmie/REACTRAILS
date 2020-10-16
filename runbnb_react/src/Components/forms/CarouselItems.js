import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import ItemsCarousel from 'react-items-carousel';

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
          <div className="" style={{ height: 500, }}>
            <img src="./images/villa.jpg"></img>
            <h1 className="tracking-wide text-gray-700 py-4 text-2xl font-bold">Villa zen</h1>
            <h2 className="">Saint Paul </h2>
            <h3 className="py-3">Du 12/10/20 <br></br>Du 12/12/20 </h3>
          
          </div>
          <div className="" style={{ height: 500, }}>
            <img src="./images/villa.jpg"></img>
            <h1 className="tracking-wide text-gray-700 py-4 text-2xl font-bold">Villa zen</h1>
            <h2 className="">Saint Paul </h2>
            <h3 className="py-3">Du 12/10/20 <br></br>Du 12/12/20 </h3>
          
          </div>
          <div className="" style={{ height: 500, }}>
            <img src="./images/villa.jpg"></img>
            <h1 className="tracking-wide text-gray-700 py-4 text-2xl font-bold">Villa zen</h1>
            <h2 className="">Saint Paul </h2>
            <h3 className="py-3">Du 12/10/20 <br></br>Du 12/12/20 </h3>
          
          </div>
          <div className="" style={{ height: 500, }}>
            <img src="./images/villa.jpg"></img>
            <h1 className="tracking-wide text-gray-700 py-4 text-2xl font-bold">Villa zen</h1>
            <h2 className="">Saint Paul </h2>
            <h3 className="py-3">Du 12/10/20 <br></br>Du 12/12/20 </h3>
          
          </div>
          <div className="" style={{ height: 500, }}>
            <img src="./images/villa.jpg"></img>
            <h1 className="tracking-wide text-gray-700 py-4 text-2xl font-bold">Villa zen</h1>
            <h2 className="">Saint Paul </h2>
            <h3 className="py-3">Du 12/10/20 <br></br>Du 12/12/20 </h3>
          
          </div>
        </ItemsCarousel>
        <hr className=""></hr>
     
        
      </div>
    );
  };