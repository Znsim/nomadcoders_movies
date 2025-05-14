import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setMovie(json.data.movie);
      });
  }, []);

  return (
    <Container className="my-4">
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <h1>{movie.title}</h1>
          <hr />
          <Row className="align-items-start">
            {/* 좌측: 이미지 */}
            <Col md={4}>
              <img
                src={movie.medium_cover_image}
                alt={movie.title}
                style={{ width: '100%', borderRadius: '8px' }}
              />
            </Col>

            {/* 우측: 텍스트 정보 */}
            <Col md={8}>
              <h4>Language: {movie.language}</h4>
              <h4>Rating: {movie.rating}</h4>
              
              <h5>Genres:</h5>
              <ul>
                {movie.genres?.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
              <p>{movie.description_full}</p>
              <h4>
                <a href={movie.url} target="_blank" rel="noreferrer">
                  Watch Now
                </a>
              </h4>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}
