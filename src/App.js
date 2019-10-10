import React from 'react';
import './App.css';
import Header from './header/header.jsx';
import LeftPanel from './leftPanel/leftPanel.jsx';
import ContentBox from './contentBox/contentBox.jsx'

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      pages:[
      {
        title:'Главная',
        theme:['Добро пожаловать','Для чего это?','Новое'],
        texts:['Это тестовый сайт, для обучения',
              'Этот сайт был создан и поддерживается,чтобы учиться Web-разработке на React',
              'Здесь пока ничего нет']
      },
      {
        title:'Проекты',
        theme:['Web-проекты','C#','C','Другое'],
        texts:['Здесь пока ничего нет',
              'Здесь пока ничего нет',
              'Здесь пока ничего нет','Здесь пока ничего нет']
      },
      {
        title:'Лабороторные',
        theme:['Лабораторные работы'],
        texts:['Здесь пока ничего нет']
      },
      {
        title:'Контакты',
        theme:['Контакты'],
        texts:['Здесь пока ничего нет']
      }
      ]
    }
  }

  render(){
    return(
      <div className="App">
        <Header 
          titles={this.state.pages.map((page)=>{
            return page.title;
          })
        }
        />
        <body>
          <div className='leftSide'>
            <LeftPanel 
              themes={this.state.pages}/>
          </div>
          <div className='content'>
            <ContentBox pages={this.state.pages}/>
          </div>
        </body>
      </div>
    );
  }
}

