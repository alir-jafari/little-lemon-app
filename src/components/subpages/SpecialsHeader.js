import {Link} from 'react-router-dom';
export default function SpecialsHeader() {
    return (
        <div className='row mb-5 row-cols-1 row-cols-sm-2 row-cols-md-2 g-2'>
            <article className='col'>
                <h1>This weeks specials</h1>
            </article>
            <article className='col right'>
                <Link  to="/menu">
                    <button className='action-button'>
                        Online Menu
                    </button>
                </Link>
            </article>
        </div>
    );
}