import donut from "../../../image/donut.svg";
import style from "./Delivery.module.scss"
import Button from "../../Button/Button";
import { useEffect, useState } from "react";

export default function Delivery({ closeModalWindow }) {
    const [delivaryForm, setDelivaryForm] = useState(false);

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
        <div onClick={closeModalWindow} className={style.modalOverlay}>
            <div onClick={handleModalContentClick} className={style.modalContent}>

                <button onClick={closeModalWindow} className={style.x}>X</button>

                <div className={style.image}>
                    <img src={donut} alt="donut" />
                </div>

                <div className={style.content}>
                    <h1 className={`title-3 ${style.title}`}>Доставка</h1>

                    <form className={style.form}>
                        <div className={style.contextForm}>
                            <input type="text" name="name" placeholder="Ваше ім'я" />
                            <input type="text" name="phone" placeholder="Телефон" />

                            <div className={style.radio}>
                                <label >
                                    <input onClick={() => setDelivaryForm(false)} type="radio" name="deliveryType" value="pickup" defaultChecked />
                                    Самовивіз
                                </label>

                                <label>
                                    <input onClick={() => setDelivaryForm(true)} type="radio" name="deliveryType" value="delivery" />
                                    Доставка
                                </label>
                            </div>

                            {delivaryForm && (
                                <div className={style.delivaryForm}>
                                    <input type="text" name="house" placeholder="Дім" />

                                    <div>
                                        <input type="text" name="floor" placeholder="Поверх" />
                                        <input type="text" name="Intercom" placeholder="Домофон" />
                                    </div>
                                </div>
                            )}
                        </div>

                        <Button>Оформити</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}