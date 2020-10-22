import React from "react";
import { DateRangePicker } from "materialui-daterange-picker";



const CalendrierComponent = props => {
  const [open, setOpen] = React.useState(true);
  const [dateRange, setDateRange] = React.useState();
  
  
   let date = (range)=>{
     setDateRange({
       range
     })
    props.dateRange({
      range
    })
   } 
  const toggle = () => setOpen(open);

  return (
    
    <DateRangePicker
      open={open}
      toggle={toggle}
      onChange={(range) => date(range)}

    />
    
  );

  
}




export default CalendrierComponent;