import { useParams } from "react-router-dom"
import apiUrl from "../data/api"
import { use, useEffect, useState } from "react"

export default function SingleProduct() {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    const apiUrl = `https://fakestoreapi.com/products/${id}`

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((err) => console.log(err))
    }, [])


    return (
        <>
            <div className="card">
                <img src={product.image} className="card-img-top img-product" alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text"><strong>Prezzo: €{product?.price?.toFixed(2)}</strong></p>
                    <p className="card-text">{product.description}</p>


                </div>
            </div>
        </>

    )

}