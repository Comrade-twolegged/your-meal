import Filter from "../../components/Filter/Filter";
import style from "./Shop.module.scss"
import Basket from "../../components/Basket/Basket";
import { useState } from "react";
import { useGetProductsQuery } from "../../api/productsApi";
import CardProduct from "../../components/CardProduct/CardProduct";

export default function Shop() {
    const [selectedCategory, setSelectedCategory] = useState("burger");
    const { data: products , error, isLoading } = useGetProductsQuery ();

    if (isLoading) return <p>Завантаження...</p>;
    if (error) return <p>Помилка: {error.message}</p>;

    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    return (
        <div className="container">
            <main className={style.main}>
                <div className={style.filter}>
                    <Filter onFilterChange={setSelectedCategory}/>
                </div>

                <div className={style.mainContent}>

                    <div className={style.basket}>
                        <Basket />
                    </div>

                    <div className={style.shop}>
                        <h2 className="title-3">Продукти:</h2>
                        <div className={style.product}>
                            {filteredProducts.length === 0 ? (
                                <p>Немає продукту.</p>
                            ) :
                            (
                                filteredProducts.map((prod) => (
                                    <CardProduct key={prod.id} data={prod} />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
