import React from 'react';
import Discount from './Discount';
import Description from './Description';

const Highlights = (props) => {
  return (
    <div>
	    <div className="highlight_wrapper">
	    	<Description />
	    	<Discount />
	    </div>
    </div>
  )
}

export default Highlights;