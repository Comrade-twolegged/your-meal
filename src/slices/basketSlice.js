import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
    const data = localStorage.getItem("basket");
    return data ? JSON.parse(data) : { products: [], totalPrice: 0, totalCount: 0 };
}

const saveToLocalStorage = (state) => {
    localStorage.setItem("basket", JSON.stringify(state));
}

const initialState = loadFromLocalStorage();

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const product = state.products.find((prod) => prod.id === action.payload.id);

            if (product) {
                state.products = state.products.map((prod) => 
                    prod.id === action.payload.id
                        ? { ...prod, count: prod.count + action.payload.count }
                        : prod
                );
            } else {
                state.products.push(action.payload);
            }

            state.totalPrice = calculateTotalPrice(state.products);
            state.totalCount = calculateTotalCount(state.products);
            saveToLocalStorage(state);
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter((prod) => prod.id !== action.payload);

            state.totalPrice = calculateTotalPrice(state.products);
            state.totalCount = calculateTotalCount(state.products);
            saveToLocalStorage(state);
        },
        incrementCount: (state, action) => {
            const product = state.products.find((prod) => prod.id === action.payload);

            if (product) {
                product.count += 1;
            }

            state.totalPrice = calculateTotalPrice(state.products);
            state.totalCount = calculateTotalCount(state.products);
            saveToLocalStorage(state);
        },
        decrementCount: (state, action) => {
            const product = state.products.find((prod) => prod.id === action.payload)
            if (product && product.count > 1) {
                product.count -= 1;
            }
            state.totalPrice = calculateTotalPrice(state.products);
            state.totalCount = calculateTotalCount(state.products);
            saveToLocalStorage(state);
        },
    }
})

const calculateTotalPrice = (products) => {
    let totalPrice = 0;
    products.forEach(product => {
        totalPrice += product.price * product.count;
    });
    return totalPrice;
};

const calculateTotalCount = (products) => {
    let totalCount = 0;
    products.forEach(product => {
        totalCount += product.count;
    });
    return totalCount;
};

export const { addProduct, removeProduct, incrementCount, decrementCount } = basketSlice.actions;
export default basketSlice.reducer;