import ProductCard from "./ProductCard";
export default function ProductList({ products }) {

    return (

        <div className="container">
            <h1>Prodotti</h1>
            <p>Qui puoi trovare tutti i nostri prodotti disponibili. Esplora la nostra vasta gamma di abbigliamento casual urban, dalle felpe alle t-shirt, dai jeans ai cargo, e molto altro ancora. Scegli il tuo stile e rinnova il tuo guardaroba con i nostri capi di alta qualità e design contemporaneo.</p>
            <div className="row">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}

            </div>
        </div>
    )
}