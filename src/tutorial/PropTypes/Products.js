
import useFetch from "./CustomHook";
import Product from "./Product";

const url ='https://course-api.com/react-prop-types-example'

const Products = () => {

    const { products } = useFetch(url)

    return (
        <div>
            <h4>Products</h4>

            <section className='products'>
                {
                    products.map((product) => {
                        return (
                            <Product
                                key={product.id}
                                {...product}
                            />
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Products;