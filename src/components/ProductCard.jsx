import { Link } from "react-router-dom";
export default function ProductCard({ product }) {


    return (

        <div className="col-md-4" key={product.id}>
            <div className="card mb-4 shadow-sm h-100 d-flex flex-column justify-content-between align-items-center p-3 text-center">
                <img src={product.image} className="card-img-top img-product" alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text"><strong>Prezzo: €{product.price.toFixed(2)}</strong></p>
                    <Link to={`/product/${product.id}`} className="btn btn-primary">Acquista ora</Link>
                </div>
            </div>
        </div>
    )
}