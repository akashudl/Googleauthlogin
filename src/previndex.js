
class App extends Component {
  state={
    persons:[
      {name : "Akash" ,age :20},
      {name : "Saurav" ,age :24},
      {name :"GAURAV" ,age:30}
    ],
    otherState :'some changes done'
  }
  switchnameHandler = () => 
  {
    this.setState({ 
      persons:[
      {name : "Akashians" ,age :20},
      {name : "Sunny" ,age :30},
      {name :"Pavan" ,age:25}
    ]
  })
   
  }

  render()
  {
  return (
    <div className="App">
      <h1>Hi, I am react</h1>
      <p><b>WOO!! THIS IS REALLY WORKING</b></p>
      <button onClick={this.switchnameHandler}>Switch Name</button>
      <Person  name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person  name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies:Racing</Person>
      <Person  name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      <List></List>
    </div>
  );
   //  return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi, I\'m a React App !!!'));
}
}
export default App;
