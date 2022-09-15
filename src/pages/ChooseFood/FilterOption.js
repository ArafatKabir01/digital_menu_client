import React, { useState } from 'react';
import { useQuery } from 'react-query';
import UseFoods from "../../Hooks/UseFoods";
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const FilterOption = ( ) => {
  

const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const changePrice = (event, value) => {
    console.log(value);
  };
 
    return (
        <div >
            <div className="form-control mt-20">
                
                

                {/* Star rating */}
        <p className='label-range mt-8'>Price Range</p>
                <div className="">
      <Slider
        onChange={changePrice}
        valueLabelDisplay='on'
        min={1000}
        max={5000}
        className=""
      />
    </div>
            </div>
        </div>
    );
};

export default FilterOption;