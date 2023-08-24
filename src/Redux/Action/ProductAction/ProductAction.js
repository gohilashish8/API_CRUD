export const addProduct = (product) => {
    console.log(product , "This is a add product action");

    return {
        type : "ADD_PRODUCT",
        payload : product
    }
}
export const deleteproduct = (product) => {
    console.log(product , "This is a add product action");
    return {
        type : "DELETE_PRODUCT",
        payload : product
    }
}