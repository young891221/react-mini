import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';
import StateExample from './StateExample';
import RandomNumber from './RandomNumber';
import MapExample from './MapExample';
//import - ES6에 새로 도입된 문법 == var React = require("react");

/*
class - ES6에 새로 도입된 요소
모든 component는 React.Component를 상속
App은 상위 컴포넌트이고 Header, Content는 하위 컴포넌트이다.
*/
class App extends React.Component {

    constructor(props){
        super(props);
    }

    render(){ //render()는 데이터 바인딩시켜주는 요소
        return ( //JSX에서는 xml syntax를 자동으로 native Javascript로 변환해 준다
            <div>
                <h1>Hello React!!</h1>
                <Header title={ this.props.headerTitle }/>
                <Content title={ this.props.contentTitle }/>
                <StateExample/>
                <RandomNumber/>
                <MapExample />
            </div>
        );
    }
}

App.defaultProps = {
    headerTitle: 'Header 영역입니다',
    contentTitle: '제목은 뭘로 할까낭'
};

export default App;
