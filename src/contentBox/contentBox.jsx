import React from 'react';
import pointer from '../images/pointer1.png';

export default class ContentBox extends React.Component{
	constructor(props){
		super(props);
		this.state={
			pages: this.props.pages
		};
	}
  render(){
    return(
      <div>
      	<p>{this.state.pages[0].texts}</p>     
      </div>
    );
   }
}