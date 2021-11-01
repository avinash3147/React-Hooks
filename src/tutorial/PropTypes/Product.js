import PropTypes from 'prop-types'

import defaultImage from '../../assets/default-image.jpeg'

const Product = ({ name, image, price }) => {
    return (
        <article className='product'>
            <h4>{name}</h4>
            <img src={image.url} alt='' className='' />
            <p>${price}</p>
        </article>
    )
}

Product.propTypes = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

Product.defaultProps = {
    image: {"url": defaultImage},
    name: 'Default Name',
    price: 3.99
}

export default Product;