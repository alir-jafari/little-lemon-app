import restauranfood from '../../assets/images/restauranfood.jpg';

export default function About() {
    return (
        <section className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg about-us">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1">Little Lemon</h1>
                    <h2>Chicago, Illinois</h2>
                    <p className="lead">Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day. Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <button type="button" className="btn submit-button btn-lg px-4 me-md-2 fw-bold">Reserve a Table</button>
                    
                    </div>
                </div>
                <div className="col-lg-4  p-0 overflow-hidden shadow-lg">
                    <img className="rounded-lg-3" src={restauranfood} alt="" width="100%" />
                </div>
            </div>
        </section>
    );
}