import style from "./Footer.module.scss";
import logo from "../../image/logo-2.svg";
import phone from "../../assets/icon/call.svg";
import vk from "../../assets/icon/vk.svg";
import tl from "../../assets/icon/tl.svg";

export default function Footer() {

    return (
        <div className={style.container}>
            <div className="container">
                <header className={style.footer}>
                    <div className={style.footerLogo}>
                        <div className={style.logo}>
                            <img src={logo} alt="logo" />
                        </div>

                        <div className={style.watermarks}>
                            <p>© YouMeal, 2022</p>
                            <p>Design: Anastasia Ilina</p>
                        </div>
                    </div>

                    <div className={style.footerInfo}>
                        <div>
                            <h2 className={style.title}>Номер для замовлення</h2>

                            <div className={style.contact}>
                                <img src={phone} alt="phone" />
                                <a href="#"><p className={style.phone}>+(099)833-381-11</p></a>
                            </div>

                        </div>

                        <div>
                            <h2 className={style.title}>Ми у соцмережах</h2>

                            <div className={style.socialNetworks}>
                                <a href="#"><img src={vk} alt="vk" /></a>
                                <a href="#"><img src={tl} alt="tl" /></a>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}