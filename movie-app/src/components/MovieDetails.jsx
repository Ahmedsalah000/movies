import { useState, useEffect } from 'react';
import { Col, Row, Button } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const getMovieDetails = async () => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`);
            setMovie(res.data);
        } catch (error) {
            console.error("Error fetching movie details", error);
        }
    };

    useEffect(() => {
        getMovieDetails();
    }, [id]);

    return (
        <div>
            <Row className="justify-content-center">
                <Col lg="6" md="8" sm="10" xs="12" className="mt-4">
                    <div className="card-details d-flex align-items-center flex-column flex-md-row">
                        <img
                            className="img-movie w-100 w-md-30 mb-3 mb-md-0"
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div className="text-center mx-auto">
                            <p className="card-text-details border-bottom">
                                اسم الفيلم: {movie.title}
                            </p>
                            <p className="card-text-details border-bottom">
                                تاريخ الفيلم: {movie.release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                                عدد المقيمين: {movie.vote_count}
                            </p>
                            <p className="card-text-details border-bottom">
                                التقييم: {movie.vote_average}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col lg="8" md="10" sm="12" xs="12" className="mt-1">
                    <div className="card-story d-flex flex-column align-items-start">
                        <div className="text-end p-4">
                            <p className="card-text-title border-bottom">القصة:</p>
                        </div>
                        <div className="text-end px-2">
                            <p className="card-text-story">{movie.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col lg="6" md="8" sm="10" xs="12" className="mt-2 d-flex justify-content-around">
                    <Link to="/">
                        <Button
                            style={{ backgroundColor: "#137c32", border: "none" }}
                            className="mx-2">
                            عوده للرئيسيه
                        </Button>
                    </Link>
                    {movie.homepage && (
                        <a href={movie.homepage}>
                            <Button
                                style={{ backgroundColor: "#137c32", border: "none" }}
                                className="mx-2">
                                مشاهده الفيلم
                            </Button>
                        </a>
                    )}
                </Col>
            </Row>
        </div>
    );
};

export default MovieDetails;
