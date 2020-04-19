import React,{Component} from "react";
import Card from "./Card";
import "./Card.css"
const CardList= ({robots}) => {
        const cardComponent=robots.map((user,i)=>
        {
                return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
        });
        return(
            <div className="bg-light-gray one ">
                    {cardComponent}
            </div>    );
    };

export default CardList;