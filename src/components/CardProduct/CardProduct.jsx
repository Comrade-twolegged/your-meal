import style from "./CardProduct.module.scss";
import Button from "../Button/Button";
import { addProduct } from "../../slices/basketSlice";
import { useDispatch } from "react-redux";
import ProductPurchase from "../ModalWindow/ProductPurchase/ProductPurchase";
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function CardProduct({ data }) {
    const dispatch = useDispatch();
    const [modalWindowsOpen, setModalWindowsOpen] = useState(false)

    const handAddProduct = (product) => {
        dispatch(addProduct(product))
    }

    return (
        <>
            <div key={data.id} className={style.card}>

                <div className={style.image}>
                    <Link to={`/product/${data.id}`}>
                        <img src={data.image} alt={data.title} />
                    </Link>
                </div>

                <h3 className={`title-2 ${style.price}`}>{data.price} ₴</h3>
                <p className={style.title}>{data.title}</p>
                <p className={style.weight}>{data.weight} г</p>

                <Button color="placeholder" onClick={() => setModalWindowsOpen(!modalWindowsOpen)}>Додати</Button>
            </div>


            {modalWindowsOpen && (
                <ProductPurchase product={data} closeModalWindow={setModalWindowsOpen} />
            )}
        </>

    )
} 