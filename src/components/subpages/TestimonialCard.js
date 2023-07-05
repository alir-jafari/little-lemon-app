
export default function TestimonialCard({testimonial,imageSrc}) {
    
    return (
        <div className="col-md-4">
            <div className="card d-flex mx-auto">
                <div className="card-image">
                    <img className="img-fluid d-flex mx-auto" src={imageSrc} alt={testimonial.name} />
                </div>
                <div className="card-text">
                    <div className="card-title">{testimonial.title}</div>
                    {testimonial.description}
                </div>
                <div className="footer">
                    <span id="name">{testimonial.name}<br /></span>
                    <span id="position">{testimonial.position} <a href="#">{testimonial.organiztion}</a></span>
                </div>
            </div>
        </div>
    );
}