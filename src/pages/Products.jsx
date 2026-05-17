import { NavLink } from 'react-router-dom'
import logo from '../assets/img/ChatGPT Image 16 mag 2026, 11_42_05.png'
import { useState, useEffect } from 'react';
import AppHeader from '../components/AppHeader';
export default function Products() {

    const [productsData, setProductsData] = useState([])
    const apiUrl = 'https://fakestoreapi.com/products'

    function fetchData(url) {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProductsData(data))
    }
    useEffect(() => {
        fetchData(apiUrl)
    }, [])


    return (

        <>
            <AppHeader />

            <main>
                <div className="container">
                    <h1>Prodotti</h1>
                    <p>Qui puoi trovare tutti i nostri prodotti disponibili. Esplora la nostra vasta gamma di abbigliamento casual urban, dalle felpe alle t-shirt, dai jeans ai cargo, e molto altro ancora. Scegli il tuo stile e rinnova il tuo guardaroba con i nostri capi di alta qualità e design contemporaneo.</p>
                    <div className="row">
                        {productsData.map((product) => (
                            <div className="col-md-4" key={product.id}>
                                <div className="card">
                                    <img src={product.image} className="card-img-top img-product" alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text"><strong>Prezzo: €{product.price.toFixed(2)}</strong></p>
                                        <a href="#" className="btn btn-primary">Acquista ora</a>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>


            </main >

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
                                <li><a href="#" className='text-decoration-none text-reset'>Home</a></li>
                                <li><a href="#" className='text-decoration-none text-reset'>Prodotti</a></li>
                                <li><a href="#" className='text-decoration-none text-reset'>About</a></li>
                            </ul>
                        </div>

                        <div className="col">
                            <h5>Seguici sui social</h5>
                            <ul className='list-unstyled d-flex flex-column gap-2'>
                                <li><a href="#" className='text-decoration-none text-reset'><i class="bi bi-facebook"></i> Facebook</a></li>
                                <li><a href="#" className='text-decoration-none text-reset'><i class="bi bi-instagram"></i> Instagram</a></li>
                                <li><a href="#" className='text-decoration-none text-reset'><i class="bi bi-twitter"></i> Twitter</a></li>
                                <li><a href="#" className='text-decoration-none text-reset'><i class="bi bi-tiktok"></i> TikTok</a></li>
                            </ul>

                        </div>
                    </div>
                </div>



            </footer >


        </>
    )
}