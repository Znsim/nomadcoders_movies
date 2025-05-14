import { useState, useEffect } from "react";
import Movie from "../components/Movies";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
      .then(response => response.json())
      .then(json => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="my-4">
      
    

      {/* 로딩 메시지 */}
      {loading ? (
        <Row className="justify-content-center">
          <h1>Loading...</h1>
        </Row>
      ) : (
        // 카드 목록
        <Row className="g-4">
          {movies.map((movie) => (
            <Col key={movie.id} xs={12} sm={6} md={4}>
              <Movie
                id={movie.id}
                background_image={movie.background_image}
                medium_cover_image={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
