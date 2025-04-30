import { useEffect, useState } from "react";
import style from "./Acquisition.module.scss";
import { Link } from "react-router-dom";
export default function Acquisition({ product = [], closeModalWindow }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);

                    setTimeout(() => {
                        closeModalWindow(false);
                    }, 350);

                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [closeModalWindow]);

    return (
        <Link to={"/"}>
            <div className={style.modalOverlay}>
                <div className={style.modalContent}>
                    <p>{product.title} вже у кошику</p>
                    <div className={style.progressBarWrapper}>
                        <div className={style.progressBar} style={{ width: `${progress}%` }} />
                    </div>
                </div>
            </div>
        </Link>
    )
}