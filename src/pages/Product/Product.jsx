import { useNavigate, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../api/productsApi";
import style from "./Product.module.scss";
import { useState } from "react";
import { addProduct } from "../../slices/basketSlice";
import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import Acquisition from "../../components/ModalWindow/Acquisition/Acquisition";

export default function Product() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const { data: products, error, isLoading } = useGetProductsQuery();
    const product = products?.find((prod) => prod.id === String(id));
    const [modalWindowsOpen, setModalWindowsOpen] = useState(false)

    if (isLoading) return <div>Завантаження...</div>;
    if (error) return <div>Сталася помилка</div>;
    if (!product) return <div>Товар не знайдено</div>;

    const handAddProduct = () => {
        const productWithCount = { ...product, count };
        dispatch(addProduct(productWithCount));
    }

    return (
        <>
            <div className="container">
                <button onClick={() => navigate(-1)} className={style.btt}>Назад</button>

                <div className={style.product}>

                    <div className={style.titlInfo}>
                        <h2 className={`title-3 ${style.title}`}>{product.title}</h2>

                        <div className={style.image}>
                            <img src={product.image} alt={product.title} />
                        </div>

                        <Button onClick={() => { handAddProduct(); setModalWindowsOpen(true); }}> Придбати </Button>
                    </div>

                    <div className={style.info}>

                        <div className={style.information}>

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

            {modalWindowsOpen && (
                <Acquisition product={product} closeModalWindow={setModalWindowsOpen} />
            )}
        </>
    );
}
