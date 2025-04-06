import $ from "./Header.module.scss";
import logo from "../../image/logo.svg"
import burger from "../../image/burger.svg"

export default function Header() {
    return (
        <header className="container">
            <div className={$.circle}></div>

            <div className={$.logo}>
                <img src={logo} alt="logo" />
            </div>

            <div className={$.info}>
                <div className={$.burger}>
                    <img src={burger} alt="burger" />
                </div>

                <div>
                    <p className={$.title}>Тільки найсоковитіші <br /> <span>бургери!</span></p>
                    <p>Безкоштовна доставка від 499₴</p>
                </div>
            </div>

        </header>
    )
}