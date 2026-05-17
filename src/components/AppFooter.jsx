import { Link } from "react-router-dom";

export default function AppFooter() {

    return (
        <footer className='bg-light'>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4 d-flex">
                    <div className="col">
                        <h5>Contatti</h5>
                        <p>Email: info@vestora.com</p>
                        <p>Telefono: +39 02 1234567</p>
                        <p>Indirizzo: Via Roma 123, Milano</p>
                    </div>
                    <div className="col">
                        <h5>Quick Links</h5>
                        <ul className='list-unstyled d-flex flex-column gap-2'>
                            <li><Link to="/" className='text-decoration-none text-reset'>Home</Link></li>
                            <li><Link to="/products" className='text-decoration-none text-reset'>Prodotti</Link></li>
                            <li><Link to="/about" className='text-decoration-none text-reset'>About</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>Seguici sui social</h5>
                        <ul className='list-unstyled d-flex flex-column gap-2'>
                            <li><Link to="#" className='text-decoration-none text-reset'><i className="bi bi-facebook"></i> Facebook</Link></li>
                            <li><Link to="#" className='text-decoration-none text-reset'><i className="bi bi-instagram"></i> Instagram</Link></li>
                            <li><Link to="#" className='text-decoration-none text-reset'><i className="bi bi-twitter"></i> Twitter</Link></li>
                            <li><Link to="#" className='text-decoration-none text-reset'><i className="bi bi-tiktok"></i> TikTok</Link></li>
                        </ul>

                    </div>
                </div>
            </div>



        </footer >

    )
}