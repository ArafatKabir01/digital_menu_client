import React from 'react';
import Rating from 'react-rating';

const RatingStar = () => {
    
    return (
        <div>
            <Rating
  stop={6}
  emptySymbol={['fa fa-star-o fa-2x low', 'fa fa-star-o fa-2x low',
    'fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
    'fa fa-star-o fa-2x high', 'fa fa-star-o fa-2x high']}
  fullSymbol={['fa fa-star fa-2x low', 'fa fa-star fa-2x low',
    'fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
    'fa fa-star fa-2x high', 'fa fa-star fa-2x high']}
/>
        </div>
    );
};

export default RatingStar;