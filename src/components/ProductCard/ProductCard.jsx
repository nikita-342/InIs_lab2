import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import QuantitySelector from '../QuantitySelector/QuantitySelector'
import starIcon from '../../assets/star.svg'
import styles from './ProductCard.module.css'

function ProductCard({
  title,
  description,
  image,
  rating,
  reviews,
  price,
  currency = '$',
  onAddToCart
}) {
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    onAddToCart?.(quantity)
  }

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={image} alt={title} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.rating}>
          <span className={styles.stars} aria-hidden="true">
            {Array.from({ length: 5 }, (_, index) => (
              <img key={index} src={starIcon} alt="" className={styles.star} />
            ))}
          </span>
          <span className={styles.ratingValue}>{Number(rating).toFixed(1)}</span>
          <span className={styles.reviews}>({reviews})</span>
        </div>

        <div className={styles.price}>
          {currency}
          {price}
        </div>

        <div className={styles.actions}>
          <QuantitySelector initialValue={1} onChange={setQuantity} />
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </div>
    </article>
  )
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string,
  onAddToCart: PropTypes.func
}

export default ProductCard
