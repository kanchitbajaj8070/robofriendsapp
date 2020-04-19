import
    React,{Component} from "react";
import'./App.css';
import CardList from "./CardList";
import {robots} from "./robotsList";
import SearchBox from "./SearchBox";
 class App extends Component {
     constructor() {
         super();
         this.state={
             robots:robots,
             searchfield:""
         };
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

                 <CardList robots={filteredRobots}/>

             </div>

         );
     };
 }
export default App;
