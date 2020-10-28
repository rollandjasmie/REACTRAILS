import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import ItemsCarousel from 'react-items-carousel';
import { NavLink } from 'react-router-dom';
import './HomePage.css';
import { BiCalendar } from "react-icons/bi";
import { BiMap } from "react-icons/bi";
import { BsFillHouseDoorFill } from "react-icons/bs";

export default () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
      <div style={{ padding: `0 ${chevronWidth}px` }}>
        <div className="" style={{ height: 500, }}>
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
          <NavLink to="/details" className="">
          <div className="rounded-xl border shadow-xs cursor-pointer text-center" style={{ height: 450,width:350 }}>
            <img src="./images/villa.jpg"></img>
            <label className="flex py-4 px-5">
            <BsFillHouseDoorFill style={{width:25,height:25,}}/>
            <h1 className="tracking-wide text-gray-700 py-1 mx-3 text-xl font-bold">Villa zen</h1>
            </label>
            <label className="flex  px-5">
            <BiMap style={{width:25,height:25,}}/>
            <h2 className="py-1 mx-3">Saint Paul </h2>
            </label>
            <label className="flex py-4 px-5">
            <BiCalendar style={{width:25,height:25,}}/>
            <h3 className="py-1 mx-3">Du 12/10/20 - Du 12/12/20 </h3>
            </label>
          </div>
          </NavLink>
          <div className="rounded-xl border shadow-xs cursor-pointer text-center" style={{ height: 450,width:350 }}>
          <img src="./images/villa.jpg"></img>
          <label className="flex py-4 px-5">
            <BsFillHouseDoorFill style={{width:25,height:25,}}/>
            <h1 className="tracking-wide text-gray-700 py-1 mx-3 text-xl font-bold">Villa zen</h1>
            </label>
            <label className="flex  px-5">
            <BiMap style={{width:25,height:25,}}/>
            <h2 className="py-1 mx-3">Saint Paul </h2>
            </label>
            <label className="flex py-4 px-5">
            <BiCalendar style={{width:25,height:25,}}/>
            <h3 className="py-1 mx-3">Du 12/10/20 - Du 12/12/20 </h3>
            </label>
          
          </div>
          <div className="rounded-xl border shadow-xs cursor-pointer text-center" style={{ height: 450,width:350 }}>
            <img src="./images/villa.jpg"></img>
            <label className="flex py-4 px-5">
            <BsFillHouseDoorFill style={{width:25,height:25,}}/>
            <h1 className="tracking-wide text-gray-700 py-1 mx-3 text-xl font-bold">Villa zen</h1>
            </label>
            <label className="flex  px-5">
            <BiMap style={{width:25,height:25,}}/>
            <h2 className="py-1 mx-3">Saint Paul </h2>
            </label>
            <label className="flex py-4 px-5">
            <BiCalendar style={{width:25,height:25,}}/>
            <h3 className="py-1 mx-3">Du 12/10/20 - Du 12/12/20 </h3>
            </label>
          </div>
          <div className="rounded-xl border shadow-xs cursor-pointer text-center" style={{ height: 450,width:350 }}>
            <img src="./images/villa.jpg"></img>
            <label className="flex py-4 px-5">
            <BsFillHouseDoorFill style={{width:25,height:25,}}/>
            <h1 className="tracking-wide text-gray-700 py-1 mx-3 text-xl font-bold">Villa zen</h1>
            </label>
            <label className="flex  px-5">
            <BiMap style={{width:25,height:25,}}/>
            <h2 className="py-1 mx-3">Saint Paul </h2>
            </label>
            <label className="flex py-4 px-5">
            <BiCalendar style={{width:25,height:25,}}/>
            <h3 className="py-1 mx-3">Du 12/10/20 - Du 12/12/20 </h3>
            </label>
          </div>
          <div className="rounded-xl border shadow-xs cursor-pointer text-center" style={{ height: 450,width:350 }}>
            <img src="./images/villa.jpg"></img>
            <label className="flex py-4 px-5">
            <BsFillHouseDoorFill style={{width:25,height:25,}}/>
            <h1 className="tracking-wide text-gray-700 py-1 mx-3 text-xl font-bold">Villa zen</h1>
            </label>
            <label className="flex  px-5">
            <BiMap style={{width:25,height:25,}}/>
            <h2 className="py-1 mx-3">Saint Paul </h2>
            </label>
            <label className="flex py-4 px-5">
            <BiCalendar style={{width:25,height:25,}}/>
            <h3 className="py-1 mx-3">Du 12/10/20 - Du 12/12/20 </h3>
            </label>
          </div>
        </ItemsCarousel>
          </div>
        <hr className=""></hr>
     
        
      </div>
    );
  };