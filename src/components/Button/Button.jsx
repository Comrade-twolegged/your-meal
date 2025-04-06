import style from "./Button.module.scss"

export default function Button({ children, color="accentB", onClick }){

    return(
        <button onClick={onClick} className={`${style.btt} ${style[color]}`}>
            {children}
        </button>
    )
}