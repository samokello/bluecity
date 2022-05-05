import { Children, createContext, useState } from "react";
const ProductContext=createContext()

export const ProductsHeper=({Children})=>{

    const [productList, setProductList]=useState([])
    return(
        <ProductContext.Provider  value={[productList, setProductList]}>
{Children}
        </ProductContext.Provider>
    )
}
export default ProductContext;