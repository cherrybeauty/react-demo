import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App >  </App>

  </React.StrictMode>
);
class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isToggleOn:true
    };
  }
  handleClick(){
    this.setState(prevState=>({
      isToggleOn:!prevState.isToggleOn
    }));
    // this.setState({
    //   isToggleOn:!this.state.isToggleOn
    // });
  }
  render(){
    return(
      <button onClick={()=>{this.handleClick()}}>
        {this.state.isToggleOn?'ON':'OFF'}
      </button>
    );
  }
}
class Clock extends React.Component {
  constructor( props){
      super(props);
      this.state={
        date:new Date()
      };
  }
  componentDidMount(){
    clearInterval(this.timer);
    this.timer=setInterval(()=>{
         this.tick();
    },1000)

  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  tick(){
    this.setState({
      date:new Date()
    });
  }
  render(){
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
}
  root.render(<Toggle  />);

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }
// function tick() {
  // root.render(<Clock  />);
// }
// setInterval(tick, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
