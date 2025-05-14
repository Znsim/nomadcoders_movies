import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Detail(){
    const {id} = useParams();
    //console.log("id :"+id)
    const [loading,setLoding] = useState(true);
    const [movie,setMovie] = useState([]);
    
    useEffect(() => {
        fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`

        ).then((response) => response.json())
        .then((json) => {
            console.log(json)
            setLoding(false);
            setMovie(json.data.movie);
        })
    },[])

    return(
        <>
            {loading ? (<h1>Loaging ...</h1>) :(
                <div>
                    <h1>{movie.title}</h1><hr/>
                    <img src={movie.medium_cover_image} alt=""/>
                    <hr/>
                    <b>{movie.summary}</b>
                    <h3>language : {movie.language}</h3>
                    <h3>rating : {movie.rating}</h3>
                    <h3><a href={movie.url}>Watch Now</a> </h3> 
                </div>
            )}


        </>
    );
}