import style from "./CountProduct.module.scss";
import { useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "../../slices/basketSlice";

export default function CountProduct({ product }) {
    const dispatch = useDispatch();

    const handIncrementCount = (id) => {
        dispatch(incrementCount(id));
    }
    const handDecrementCount = (id) => {
        dispatch(decrementCount(id));
    }

    return (
        <div className={style.count}>
            <button onClick={() => handDecrementCount(product.id)}>-</button>
            <p className={style.number}>{product.count}</p>
            <button onClick={() => handIncrementCount(product.id)}>+</button>
        </div>
    )
}