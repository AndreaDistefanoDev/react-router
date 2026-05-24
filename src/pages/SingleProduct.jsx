import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export default function SingleProduct() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    const currentId = Number(id)

    const apiUrl = `https://fakestoreapi.com/products/${id}`

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((err) => {
                console.log(err)
                navigate("*")
            })
    }, [navigate, id])


    return (
        <>
            <div className="card">
                <img src={product.image} className="card-img-top img-product" alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text"><strong>Prezzo: €{product?.price?.toFixed(2)}</strong></p>
                    <p className="card-text">{product.description}</p>
                    <button className="btn btn-outline-dark" onClick={() => navigate(`/product/${currentId - 1}`)} disabled={currentId <= 1}>
                        <i class="bi bi-arrow-left-circle-fill"></i>
                    </button>
                    <button className="btn btn-outline-dark" onClick={() => navigate(`/product/${currentId + 1}`)} disabled={currentId >= 20}>
                        <i class="bi bi-arrow-right-circle-fill"></i>
                    </button>

                </div>
            </div>
        </>

    )

}