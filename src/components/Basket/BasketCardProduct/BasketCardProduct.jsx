import { useDispatch, useSelector } from "react-redux"
import style from "./BasketCardProduct.module.scss"
import { removeProduct } from "../../../slices/basketSlice";
import CountProduct from "../../CountProduct/CountProduct";

export default function BasketCardProduct({ product }) {
    const dispatch = useDispatch();

    const handRemoveProduct = (id) => {
        dispatch(removeProduct(id))
    }

    return (

        <div key={product.id} className={style.card}>
            <div className={style.image}>
                <img src={product.image} alt={product.title} />
            </div>

            <div className={style.info}>
                <p className={style.title}>{product.title}</p>
                <p className={style.weight}>{product.weight} г</p>
                <p className={style.price}>{product.price} ₴</p>
            </div>

            <div className={style.grup}>
                <CountProduct product={product} />

                <button onClick={() => handRemoveProduct(product.id)} className={style.reset}>Видалити</button>
            </div>

        </div>
    )
}