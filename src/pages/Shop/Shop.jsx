import Filter from "../../components/Filter/Filter";
import style from "./Shop.module.scss"
import Basket from "../../components/Basket/Basket";
import { useState } from "react";
import { useGetProductsQuery } from "../../api/productsApi";
import CardProduct from "../../components/CardProduct/CardProduct";

export default function Shop() {
    const [selectedCategory, setSelectedCategory] = useState("burger");
    const { data: products, error, isLoading } = useGetProductsQuery();
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products?.filter((product) => {
        const matchCategory = selectedCategory ? product.category === selectedCategory : true;
        const matchSearch = product.title?.toLowerCase().includes(searchTerm.toLowerCase());
        return matchSearch && matchCategory;
    });

    return (
        <div className="container">
            <main className={style.main}>
                <div className={style.filter}>
                    <Filter onFilterChange={setSelectedCategory} activeCategory={selectedCategory} />
                </div>

                <div className={style.mainContent}>

                    <div className={style.basket}>
                        <Basket />
                    </div>

                    <div className={style.shop}>

                        <div className={style.search}>
                            <h2 className="title-3">Продукти:</h2>

                            <div className={style.input}>
                                <input
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    type="text"
                                    placeholder="Продукт"
                                />
                            </div>
                        </div>

                        <div className={style.product}>
                            {isLoading ? (
                                <p>Завантаження продуктів...</p>
                            ) : error ? (
                                <p>Помилка: {error.message}</p>
                            ) : filteredProducts?.length === 0 ? (
                                <p>Немає продуктів.</p>
                            ) : (
                                filteredProducts?.map((prod) => (
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
