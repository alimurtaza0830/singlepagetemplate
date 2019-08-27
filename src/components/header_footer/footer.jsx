import React from 'react';
import Fade from 'react-reveal/Fade';


const Footer = (props) => {
  return (
    <footer className="bck_red">
		<Fade delay={500}>
			<div className="font_righteous footer_logo_venue">
				One Pager Tempalate
			</div>
			<div className="footer_copyright">
				2019 - All right reserved.
			</div>
		</Fade>    	
    </footer>
  )
}

export default Footer;