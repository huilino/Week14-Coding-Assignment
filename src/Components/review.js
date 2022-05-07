import React, {Component} from 'react';

export default class Review extends Component {
    constructor(props){
         super(props);
         this.text = props.text;
         this.review = props.review;
         this.key = props.key;
     }
  
    render(){
        return(
            <div className = "card-text">
                <h4>{this.props.review}</h4>
            </div>
        );
    }
}


