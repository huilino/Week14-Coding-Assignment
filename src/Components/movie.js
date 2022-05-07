import React, {Component} from 'react';
import StarRating from './starrating';
import ReviewList from './reviewlist';
import Review from './review';

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            year:props.year,
            poster: props.poster,
            type: props.type,
            sypnosis: props.sypnosis
        };
    }
    render(){
        
        return (
            <div className="container">
            <div className = "row mycard">
                <div className = "col-sm-6">
                    <div className = "card mymovie">
                        <img src = {this.state.poster} alt="movie" className="card-image-top"/>
                        <h5 className = "card-title mytitle">{this.state.title}</h5>
                        <h6>{this.state.year}</h6>
                        <p className = "card-text text-muted">{this.state.type}</p>
                    </div>
                </div>
                <div className = "col-sm-6">
                    <div className = "card-body mysummary">
                        <p className = "card-text ">{this.state.sypnosis}</p>
                        <hr/>
                         <StarRating/> 
                    </div>  
                    <div>
                        <ReviewList/>
                    </div>
                </div>
            </div>
            </div> 
        )
    }
}


