import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export default function Movie({id,medium_cover_image,title,summary,genres}){
    return(
    <>
        <Card className="mb-5" style={{ height: '300px', overflow: 'hidden' }}>
            <Row className="g-0">
                <Col style={{ width: '200px' }}>
                    <Card.Img src={medium_cover_image} alt={title} style={{ height: '100%', objectFit: 'cover' }} />
                </Col>

                <Col style={{ width: '200px' }}>
                    <Card.Body>
                        <Card.Title>
                        <Link
                            to={`/movie/${id}`}
                            style={{
                            textDecoration: 'none',
                            color: 'black',
                            fontWeight: 'bold',
                            fontSize: '1.25rem',
                            }}
                        >
                            {title}
                        </Link>
                        </Card.Title>

                        <Card.Text>
                            {summary.length > 100 ? `${summary.slice(0,100)+"..."}` : summary}
                            <ul>
                                {genres.map((genre) => (
                                    <li key={genre}>{genre}</li>
                                ))}
                            </ul>
                        </Card.Text>

                        
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    </>
    );

    Movie.propTypes = {
        id : PropTypes.number.isRequired,
        medium_cover_image : PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        summary : PropTypes.string.isRequired,
        genres : PropTypes.arrayOf(PropTypes.string).isRequired

    };

}