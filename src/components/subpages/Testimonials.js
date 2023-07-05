import TestimonialHeader from "./TestimonialHeader";
import testimonialsData from '../data/testimonials.json';
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
    const testimonialCardData = testimonialsData.map( (data) => {
        let imageSrc = data.image;
        return (
            <TestimonialCard key={data.id} testimonial={data} imageSrc={imageSrc} />
        )
    } );
    return (
        <section className='testimonials mt-5 pt-5 pb-5'>
            <div className="container">
                <TestimonialHeader />
                <div className="row">
                    {testimonialCardData}
                </div>
            </div>

        </section>
    );
}