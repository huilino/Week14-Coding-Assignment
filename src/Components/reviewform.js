import React, {Component} from 'react';

export default class ReviewForm extends Component {
    constructor(props){
        super(props);
        this.state = {
           userReview : "",  
        };

        this.handleReviewChange = this.handleReviewChange.bind(this);
        this.postReview = this.postReview.bind(this);
     }

    handleReviewChange(event) {
         this.setState({userReview : event.target.value});
     }

    postReview(event){
        event.preventDefault();
        this.props.onSave({...this.state}); //make a copy
        this.setState({userReview:""});
    }

    render() {
        return(
            <form>
                <textarea type="text" name = "review" className = "form-control myreview" rows="5" 
                placeholder = "Leave Review Here" value={this.state.userReview} onChange= {this.handleReviewChange}/><br></br>
                <button className = "btn btn-default mybutton" onClick = {this.postReview}> Post Review</button>
            </form>
        );
    }
}

