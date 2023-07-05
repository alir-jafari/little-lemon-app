
import plate from '../assets/images/plate.png';
import Heading from './subpages/Heading';
import Specials from './subpages/Specials';
import Testimonials from './subpages/Testimonials';
import Divider from './subpages/Divider';
import Menu from './pages/Menu';

function Main(props) {
    return(
        <main className="mt-5">
            <Heading plate={plate} />
            <Specials />
            <Testimonials />
        </main>
    );
}

export default Main;