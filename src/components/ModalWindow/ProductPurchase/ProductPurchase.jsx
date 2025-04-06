import style from "./ProductPurchase.module.scss";
import Button from "../../Button/Button";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../slices/basketSlice";
import { useState, useEffect } from "react";

export default function ProductPurchase({ product = [], closeModalWindow }) {
    const [count, setCount] = useState(product.count);
    const dispatch = useDispatch();

    const handAddProduct = () => {
        const productWithCount = { ...product, count };
        dispatch(addProduct(productWithCount));
    }

    const handleModalContentClick = (e) => {
        e.stopPropagation();
    }

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "auto";
        };
    }, []);

    return (
        <div onClick={() => closeModalWindow(false)} className={style.modalOverlay}>

            <div onClick={handleModalContentClick} className={style.modalContent}>

                <div className={style.titlInfo}>
                    <h2 className={`title-3 ${style.title}`}>{product.title}</h2>

                    <div className={style.image}>
                        <img src={product.image} alt={product.title} />
                    </div>

                    <Button onClick={handAddProduct}>Придбати</Button>
                </div>

                <div className={style.info}>

                    <div className={style.information}>

                        <button onClick={() => closeModalWindow(false)} className={style.back}>X</button>

                        <div className={style.description}>
                            <p>{product.description}</p>
                        </div>

                        <div className={style.ingredients}>
                            <p className={style.ingredTitle}>Склад:</p>

                            {product.ingredients.map((ingred, index) => (
                                <p key={index}>{ingred}</p>
                            ))}

                            <p className={style.weight}>{product.weight} г</p>
                        </div>
                    </div>

                    <div className={style.priceInfo}>
                        
                        <div className={style.count}>
                            <button onClick={() => setCount(Math.max(1, count - 1))}>-</button>
                            <p className={style.number}>{count}</p>
                            <button onClick={() => setCount(count + 1)}>+</button>
                        </div>

                        <p className={style.price}>{product.price} ₴</p>
                    </div>
                </div>
            </div>
        </div>
    )
}