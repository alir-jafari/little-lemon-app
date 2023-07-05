import SpecialsHeader from './SpecialsHeader';
import specialsData from '../data/specials.json';
import SpecialCard from './SpecialCard';

export default function Specials() {
    const specialsCardData = specialsData.map( (data) => {
        let imageSrc = data.image;
        return (
            <SpecialCard key={data.id} special={data} imageSrc={imageSrc} />
        )
    } );
    return (
        <section className="container mt-5" id="popular-menu">
            <SpecialsHeader />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {specialsCardData}  
            </div>           
        </section>
    );
}