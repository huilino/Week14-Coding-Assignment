import React, {Component} from 'react';
import ReviewForm from './reviewform';

export default class ReviewList extends Component {
    constructor(props){
        super(props);
        this.state = {
            reviews : new Array()
        };
        this.onSave = this.onSave.bind(this);
    }

    onSave(formState) {
        const newReview = this.state.reviews.slice();
        newReview.push(formState);
        this.setState({reviews : newReview});
    }

    render(){
        return(
            <div className="container">
                <h4><strong>Reviews</strong>  </h4>
                {this.state.reviews.reverse().map((review, index) => {
                    return <div className="card-header text-black myreview" key={index} >
                            {review.userReview}      
                    </div>
                  
                })}
                <ReviewForm onSave = {(formState) => this.onSave(formState)}/>
                 
            </div>
        );
    }
}
