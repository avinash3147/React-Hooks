import React, { useCallback, useEffect, useState } from "react";
import useFetch from "../PropTypes/CustomHook";

const url = 'https://course-api.com/javascript-store-products'

function MemoAndCallBack () {

    const [count, setCount] = useState(0)
    const { products } = useFetch(url)

    const [cart, setCart] = useState(0)

    const addToCart = useCallback(() => {
        setCart(cart + 1)
    }, [cart])

    return (
        <>
            <h4>Count: {count}</h4>
            <button className='btn' onClick={() => setCount(count + 1)}>Click Me</button>
            
            <h1 style={{ marginTop: '3rem' }}>Cart: {cart}</h1>

            <BigList products={products} addToCart={addToCart} />
        </>
    )
}

const BigList = React.memo(({ products, addToCart }) => {
    useEffect(() => {
        console.log("ReRendering");
    })
    
    return (
        <section className='products'>
            {
                products.map((product) => {
                    return (
                        <SingleList 
                            key={product.id}
                            {...product}    
                            addToCart={addToCart}
                        />
                    )
                })
            }
        </section>
    )
})

const SingleList = ({ fields, addToCart }) => {

    // React Memo in parent preventing this rerendering
    // otherwise it will rerender everytime count is increased
    useEffect(() => {
        console.log("ReRendering");
    })
    // console.log(fields);
    let { name, price } = fields
    price = price / 100
    const image = fields.image[0].url

    return (
        <article className='product'>
            <img src={image} alt='' />
            <h3>{name}</h3>
            <p>${price}</p>

            <button className='btn' onClick={addToCart}>Add To Cart</button>
        </article>
    )
}

export default MemoAndCallBack;