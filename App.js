import React, {Component} from 'react';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      items: [],  //Array to fetch data
      load: true,  // bool value
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(res => res.json())
    .then(json => {
      this.setState({
        load: true,
        items: json,
      })
    });
  }         //componentDidMount is executed after the first render only on the client side


  render(){

    var{load,items}=this.state;

    if(!load){
      return <div>Loading...</div>
    }
    else{
      return (
        <div className="App">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                Title: {item.title}   and   ID: {item.id}
              </li>
            ))} 
          </ul>
          
        </div>
      );
    }
    
  }
}
export default App;
