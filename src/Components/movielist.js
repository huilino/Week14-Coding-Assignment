import React, {Component} from 'react';
import Movie from './movie';
import movie1 from '../images/movie1.jpg';
import movie2 from '../images/movie2.jpg';
import movie3 from '../images/movie3.jpg';
import movie4 from '../images/movie4.jpg';

export default class MovieList extends Component {
    render(){
        return(
          
            <div className = "movielist container">
            <Movie {...
                    {id : 0,
                    title: "American Psycho",
                    year: "2000",
                    type: "Horror",
                    poster : movie1,
                    sypnosis: `A wealthy New York City investment banking executive, Patrick Bateman,
                    "hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.`
                }}/>

            <Movie {...
                    {id : 1,
                    title: "The bubble",
                    year: "2022",
                    type: "Animation",
                    poster : movie2,
                    sypnosis: `A group of actors and actresses stuck inside a pandemic bubble at a hotel attempts to complete a film.`
                }}/>
            
            <Movie {...
                    {id : 2,
                    title: "Shrek",
                    year: "2001",
                    type: "Animation, Family",
                    poster : movie3,
                    sypnosis: `A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest 
                    and rescue a princess for the lord in order to get his land back.`
                }}/>

            <Movie {...
                    {id : 3,
                    title: "Ghostbusters : Afterlife",
                    year: "2021",
                    type: "Fantasy",
                    poster : movie4,
                    sypnosis: `When a single mom and her two kids arrive in a small town, they begin to discover 
                    their connection to the original Ghostbusters and the secret legacy their grandfather left behind.`
                }}/>
            </div>

        );
    }
}