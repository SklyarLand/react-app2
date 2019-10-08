import React from 'react';
import './header.css'

export default class Header extends React.Component{
    constructor(){
        super();

        this.state={
            //добавить кнопки
            buttons :[
                {name:'Главная'},
                {name:'Проекты'},
                {name:'Лабороторные'},
                {name:'Контакты'}
            ]
        }
    }

    renderButtons(){
        return this.state.buttons.map(btn =>{
            return(
                    <a href="@" className='mainButton' onClick={()=>console.log(btn.name)}>{btn.name}</a>
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