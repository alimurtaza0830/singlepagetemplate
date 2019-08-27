import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';


class Discount extends Component {
	state = {
		discountStart:0,
		discountEnd:30
	}
	
	percentage = () => { 
		if(this.state.discountStart < this.state.discountEnd){
			this.setState({
				discountStart: this.state.discountStart + 1
			})
		}
	}

	componentDidUpdate(){
		setTimeout(() => {
			this.percentage()
		}, 30)
	}

	render() {
		return (
			<div>
				<div className="center_wrapper">
					<div className="discount_wrapper">
					<Fade
						onReveal={() => this.percentage()}
					>
						<div className="discount_percentage">
							<span>{ this.state.discountStart}%</span>
							<span>OFF</span>
						</div>
					</Fade>
					<Slide right>
						<div className="discount_description">
							<h3>Use this Template for Free</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis reprehenderit similique esse quo dolore cupiditate, distinctio laborum tempore vitae dolorum maiores laboriosam, rem voluptatibus ex quasi possimus modi, ea sequi.</p>
							<MyButton
								text="Purchase Tickets"
								bck="#ffa800"
								color="#ffffff"
								link={window.location.url}
							/>
						</div>
					</Slide>
					</div>
				</div>
			</div>
		);
	}
}

export default Discount;