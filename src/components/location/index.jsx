import React from 'react';

const Location = (props) => {
  return (
    <div className="location_wrapper">
    	<iframe 
                title="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7263959023494!2d101.69141585011293!3d3.1666028539173903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc483c9c046049%3A0x68b40ecd820ea1b5!2sPWTC!5e0!3m2!1sen!2smy!4v1562663120246!5m2!1sen!2smy" 
		    	width="100%" 
		    	height="500px" 
		    	frameBorder="0" 
		    	allowFullScreen
    	>
    	</iframe>
    	<div className="location_tag">
    		<div>Fake Location</div>
    	</div>
    </div>
  )
}

export default Location;