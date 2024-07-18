import { createContext } from "react";

const DataContext = createContext({
    cart: [],
    user: {},
    addProductToCart: ()=>{},
    restCart: ()=>{},
});

export default DataContext;