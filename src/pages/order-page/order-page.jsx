import { useSelector } from 'react-redux'
import { OrderItem } from '../../components/order-item'
import { calcTotalPrice, enumerate } from '../../components/utils'
import './order-page.css'

export const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart)

    if(items.length < 1) {
        return <h1>ваша карзина пуста</h1>
    }
    return (
        <div className='order-page'>
            <div className="order-page__left">
                {items.map(game => <OrderItem game={game} key={game.id}/>)}
            </div>
            <div className="order-page__right">
                <div className="order-page__total-price">
                    <span>
                        {items.length}
                    </span>
                    <span>
                        {enumerate(items.length, [' товар', ' товара', ' товаров'])} на сумму
                    </span>
                    <span>     
                        {calcTotalPrice(items)} сом.
                    </span>
                </div>
            </div>
        </div>
    )
}