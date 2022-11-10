import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import styles from '@styles/OrderItem.module.scss'
import close from '@icons/icon_close.png'
import Image from 'next/image'

const OrderItem = ({ product }) => {
    const { removeFromCart } = useContext(AppContext)

    const handleRemove = (product) => {
        removeFromCart(product)
    }

    return (
        <div className={styles.OrderItem}>
            <figure>
                {product && (
                    <Image
                        src={product?.images[0]}
                        width="100%"
                        height="100%"
                        layout="responsive"
                        alt={product?.title}
                    />
                )}
            </figure>
            <p>{product?.title}</p>
            <p>${product?.price}</p>
            <Image
                className={styles['pointer more-clickable-area']}
                src={close}
                alt="close"
                width="100%"
                height="100%"
                layout="responsive"
                onClick={() => handleRemove(product)}
            />
        </div>
    )
}

export default OrderItem
