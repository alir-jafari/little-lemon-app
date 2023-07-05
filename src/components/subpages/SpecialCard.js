import {Link} from 'react-router-dom';

export default function SpecialCard({special,imageSrc}) {
    
    return (
        <article className="col">
            <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top"  src={imageSrc} />
                <div className="card-body">
                    <div className="card-title h5">{special.name}</div>
                    <h3>$ {special.price}</h3>
                    <p className="card-text">{special.description}</p>
                    
                    {/* <Link className="special-button" to="/order">
                    <button className="action-button">Order for Delivery</button>
                    </Link> */}
                </div>
            </div>
        </article>     
    );
}