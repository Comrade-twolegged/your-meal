import icon from "../../assets/icon/delivery.svg"
import style from "./Basket.module.scss"
import Button from "../Button/Button"
import { useSelector } from "react-redux"
import BasketCardProduct from "./BasketCardProduct/BasketCardProduct"

export default function basket() {
    const basketProducts = useSelector((state) => state.basket.products)
    const totalPrice = useSelector((state) => state.basket.totalPrice)
    const totalCount = useSelector((state) => state.basket.totalCount)
    
    return (
        <div className={style.basket}>
            <div className={style.countProducts}>
                <h2 className="title-3">Кошик</h2>
                <p className={style.counts}>{totalCount}</p>
            </div>

            <div className={style.content}>
                {(!basketProducts || basketProducts.length === 0) ? (
                    <p>Поки що пусто...</p>
                ) : (
                    basketProducts.map((prod) => (
                        <BasketCardProduct key={prod.id} product={prod} />
                    ))
                )}
            </div>

            <p className={style.together}>разом: <span>{totalPrice} ₴</span></p>

            <Button>Оформити звмовлення</Button>

            <div className={style.delivery}>
                <img src={icon} alt="доставка" />
                <p>Безкоштовна доставка</p>
            </div>
        </div>
    )
}