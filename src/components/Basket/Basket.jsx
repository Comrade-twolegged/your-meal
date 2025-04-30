import icon from "../../assets/icon/delivery.svg"
import style from "./Basket.module.scss"
import Button from "../Button/Button"
import { useSelector } from "react-redux"
import BasketCardProduct from "./BasketCardProduct/BasketCardProduct"
import { useEffect, useState } from "react"
import Delivery from "../ModalWindow/Delivery/Delivery"

export default function basket() {
    const [isOpen, setIsOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false)
    const [isModalDelivery, setIsModalDelivery] = useState(false);

    const basketProducts = useSelector((state) => state.basket.products)
    const totalPrice = useSelector((state) => state.basket.totalPrice)
    const totalCount = useSelector((state) => state.basket.totalCount)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
            if (window.innerWidth > 768) {
                setIsOpen(true)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const toggleOpen = () => {
        if (isMobile) setIsOpen(!isOpen)
    }

    function closeModalWindow(){
        setIsModalDelivery(!isModalDelivery)
    }

    return (
        <>
            <div className={`${style.basket} ${isOpen ? style.open : style.closed}`}>
                <div onClick={toggleOpen} className={style.countProducts}>
                    <h2 className="title-3">Кошик</h2>
                    <p className={style.counts}>{totalCount}</p>
                </div>

                {isOpen && (
                    <>
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

                        <Button onClick={closeModalWindow}>Оформити звмовлення</Button>

                        <div className={style.delivery}>
                            <img src={icon} alt="доставка" />
                            <p>Безкоштовна доставка</p>
                        </div>
                    </>
                )}
            </div>

            {isModalDelivery && (
                <Delivery closeModalWindow={closeModalWindow}/>
            )}
        </>

    )
}