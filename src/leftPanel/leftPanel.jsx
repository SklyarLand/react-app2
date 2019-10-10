import React from 'react';
import './leftPanel.css'
import pointer from '../images/pointer1.png'

export default class LeftPanel extends React.Component{
    constructor(){
        super();

        this.state={
            stages:[
                '1theme','2theme','3theme','4theme','5theme'
            ]
        };
    }

    renderNavStages(){
        return(
            this.state.stages.map((stage)=>{
                return(
                    <li className='theme-nav' key={stage+Math.random()}>
                        <a href='@'>
                            <h3>{stage}</h3>
                            <img className='pointer' src={pointer} alt='Стрелка'>
                            </img>
                        </a>
                    </li>
                );}
            )
        );
    }

    render(){
        return(
            <div className='leftPanel'>
                <div className='leftPanel1'>
                    <ul>
                        {this.renderNavStages()}
                    </ul>
                </div>
            </div>
        );
    }
}