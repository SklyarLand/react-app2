import React from 'react';
import pointer from '../images/pointer1.png';

export default class ContentBox extends React.Component{
    render(){
        return(
            <div>
                <img src={pointer} alt='pointer' width='20px'></img>
            </div>
        );
    }
}