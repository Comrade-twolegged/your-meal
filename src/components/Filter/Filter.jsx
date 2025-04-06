import style from "./Filter.module.scss"
import dataIcon from "../../data/db-icon";

export default function Filter({ onFilterChange }) {

    return (
        <>
            {dataIcon.map((elem) => (
                <button onClick={() => onFilterChange(elem.category)} className={style.element} key={elem.id}>
                    <div className={style.icon}>
                        <img src={elem.image} alt={elem.title} />
                    </div>
                    
                    <p className={style.text}>{elem.title}</p>
                </button>
            ))}
        </>
    )
}