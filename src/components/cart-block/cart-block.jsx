import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { CartMenu } from "../cart-menu";
import { ItemsInCart } from "../items-in-cart";
import { calcTotalPrice } from "../utils";
import { useCallback, useState } from "react";
import "./cart-block.css";
import { useNavigate } from "react-router-dom";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)

  const items = useSelector((state) => state.cart.itemsInCart)
  const totalPrice = calcTotalPrice(items)
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false)
    navigate('/order')
  }, [navigate])

  return (
    <div className="cart-block">
        <ItemsInCart quantity={items.length} />
      <BiCartAlt
        size={25}
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price">{totalPrice} Cом</span>
      ) : null}

      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};
