import React,{Component} from "react";
import 'tachyons'
import './Card.css'
class Card extends Component{

    render()
    {
        return (
<a href= {`https://robohash.org/${this.props.id}`}>
            <article className="bg-light-purple
            ma2 br3 pa2 dib grow shadow-5"
               title="Robo friends" >
                <img className="db ba b--black-10" src=
                    {`https://robohash.org/${this.props.id}`
                    }
                     height="150px" width="150px" alt="njkn"
                />
                        <h4 >{this.props.id}</h4>
                        <h4 >{this.props.name}</h4>
                        <h6>{this.props.email}</h6>

            </article>
</a>

        );
    }
}
export default Card;










