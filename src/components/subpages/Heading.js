import {Link} from 'react-router-dom';

export default function Heading(props) {
    return (
        <section className="row pt-5 ps-3 main">
            <div className="col-lg-6 pt-5 pb-5">
                <div className="main-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago, Illinois</h2>
                    <p className="pt-4">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link  to="/reservations">
                        <button id="button">Reserve a Table</button>
                    </Link>
                    
                </div>
            </div>
            <div className="col-lg-6 pt-5 pb-5 featured">
                <img src={props.plate} alt="restaurantFood" id="featured-img" />
            </div>
        </section>
    );
}