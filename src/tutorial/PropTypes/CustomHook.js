import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await fetch(url)
        const productsData = await response.json()
        setProducts(productsData)
    }

    useEffect(() => {
        fetchProducts()
    }, [url])

    return { products }
}

export default useFetch;