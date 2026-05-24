
import { useState, useEffect } from 'react';
import apiUrl from '../data/api';
import { Link } from 'react-router-dom';
export default function Products() {

    const [productsData, setProductsData] = useState([])


    function fetchData(url) {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProductsData(data))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        fetchData(apiUrl)
    }, [])


    return (

        <>


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
                                        <Link to={`/product/${product.id}`} className="btn btn-primary">Acquista ora</Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>


            </main >



        </>
    )
}