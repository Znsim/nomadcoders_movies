import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function Movie({id,medium_cover_image,title,summary,genres}){
    return(
    <>
        <img src={medium_cover_image} />
        <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
        <p>{summary}</p>
         <ul>
            {genres.map(genre =>
                <li key={genre}>{genre}</li>
            )}
        </ul>
        <hr/>
    </>
    );

    Movie.PropTypes = {
        id : PropTypes.number.isRequired,
        medium_cover_image : PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        summary : PropTypes.string.isRequired,
        genres : PropTypes.arrayOf(PropTypes.string).isRequired

    };

}