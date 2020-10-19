import React from "react";
import { DateRangePicker } from "materialui-daterange-picker";



const CalendrierComponent = props => {
  const [open, setOpen] = React.useState(true);
  const [dateRange, setDateRange] = React.useState({});
  
//  Recupérer Valeur  console.log(dateRange.endDate)

  const toggle = () => setOpen(open);

  return (
  
    <DateRangePicker
    

    

      open={open}
      toggle={toggle}
      onChange={(range) => setDateRange(range)}

    />
  );

  
}




export default CalendrierComponent;