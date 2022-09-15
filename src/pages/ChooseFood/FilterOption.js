import React, { useState } from 'react';
import { useQuery } from 'react-query';
import UseFoods from "../../Hooks/UseFoods";

const FilterOption = () => {
    const [search , setSearch] = useState('')
    const [product , setProduct] = UseFoods()
    console.log(product)

    // const { data: searchData, isLoading, refetch } = useQuery('searchData', () => fetch(`http://localhost:5000/allFoods`,
    // ).then(res => res.json()));

  
  
    const handleCheck =(e)=>{
        console.log(e.target.checked)
    }
    return (
        <div >
            <div className="form-control">
                
                {/* Category  */}

                <div className="form-control  mt-8">
                    <h2>Cuisine</h2>
                    <label className="cursor-pointer label">
                        <span className="label-text">Bangladeshi</span>
                        <input onChange={handleCheck}  type="checkbox"  className="checkbox checkbox-accent" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="cursor-pointer label">
                        <span className="label-text">Indian</span>
                        <input type="checkbox"  className="checkbox checkbox-accent" />
                    </label>
                </div>
                <div className="form-control ">
                    <label className="cursor-pointer label">
                        <span className="label-text">Chinese</span>
                        <input type="checkbox"  className="checkbox checkbox-accent" />
                    </label>
                </div>

                {/* Star rating */}
                
                <div className=' mt-20'>
                <h2 className='mb-4'>Star Rating</h2>
                    <div className="rating rating-md w-full">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400 me-4" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400 me-4" checked />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default FilterOption;