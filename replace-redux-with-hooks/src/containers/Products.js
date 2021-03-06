import React from "react";

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";

import { useStore } from "../hooks/store";

const Products = (props) => {
    const [state] = useStore();
    console.log("[Products] rendering with state", state);
    return (
        <ul className="products-list">
            {state.products.map((prod) => {
                console.log("[Products] mapping list item", prod);
                return (
                    <ProductItem
                        key={prod.id}
                        id={prod.id}
                        title={prod.title}
                        description={prod.description}
                        isFav={prod.isFavorite}
                    />
                );
            })}
        </ul>
    );
};

export default Products;
