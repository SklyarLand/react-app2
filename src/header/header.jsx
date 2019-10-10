import React from 'react';
import './header.css'

export default class Header extends React.Component{
    constructor(props){
        super(props);

        this.state={
            //добавить кнопки
            buttons : props.titles,
            indexPages : 0
        }
    }

    renderButtons(){
        return this.state.buttons.map(btn =>{
            return(
                    <a href="@" className='mainButton' value ={this.state.buttons.indexOf(btn)} 
                        onClick={(value)=>{
                            console.log(btn);
                            this.indexPages=value;
                            console.log(this.indexPages);
                        }}
                    >{btn}</a>
            );
        });
    }

    render(){
        return(
            <header>
                <div className='main-panel'>
                    <div className='navbar'>
                        {this.renderButtons()}
                    </div>
                </div>
            </header>
        );
    }
} 