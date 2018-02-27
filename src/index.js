//Core React functionality in React Library
import React from 'react';
//DOM rendering functionality is diff library: ReactDOM
import ReactDOM from 'react-dom';


//Create a new component. This component should produce 

// const App = function(){
//     return <div>Hi!</div>;
// }
//We pass AN INSTANCE TO REACT DOM,
//not a class
const App = () => {
    return <div>Hi!</div>;
}


//JSX is this html-looking stuff, it's still JS
//the real html will not look exaclty like this

//Take this component's generated HTML and put it
//on the page (in the DOM)
// !!! THIS IS WRONG -- React library does not render to DOM
// React.render(App);

// Correct/, ReactDOM is the library that renders to the DOM
// ReactDOM.render(App)
//WRONG App is a class, classes do not get rendered

//Correct -- <App></App> is an instance of App class
// can be shortened to <App /> since theren's nothing inside
//ReactDOM.render(<App />);   // ERROR TARGET containeer is not a DOM element

const container = document.getElementsByClassName('container')
//Correct, add second argument to specify where to put jsx
ReactDOM.render(<App />, container[0]);
ReactDOM.render(<App />, document.querySelector('.container'));
