
import { useState, useEffect } from 'react';
import apiUrl from '../data/api';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
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
                <ProductList products={productsData} />


            </main >



        </>
    )
}