import
    React,{Component} from "react";
import './App.css';
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
//import {robots} from "./robotsList";
import SearchBox from "../components/SearchBox";
 class App extends Component {
     constructor() {
         super();
         this.state={
             robots:[],
             searchfield:""
         };
     }
     componentDidMount() {
     fetch('https://jsonplaceholder.typicode.com/users').
     then(response=>response.json()). then(users=>
     this.setState({robots:users}));
     }

     onSearchChange=(event)=> {
     console.log(event.target.value);
     this.setState({searchfield:event.target.value});
     }
     render() {
         const filteredRobots=this.state.robots.filter(robots => {
             return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
         });

         return (<div>
                 <article>
                     <h1 className="tc"> ROBO FRIENDS </h1>
                     < SearchBox className="tc"  searchField={this.state.searchfield}
                                 searchChange={this.onSearchChange}/>
                 </article>
                                <Scroll>
                 <CardList robots={filteredRobots}/>
                                </Scroll>
             </div>

         );
     };
 }
export default App;
