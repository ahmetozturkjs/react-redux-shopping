const initialState={
    true:false,
    success:false,
    products:[],
    fail:false,
    errorMassage:""
}

const ProductReducer=(state=initialState,action)=>{
   switch (action.type) {
    case "FETCH_PRODUCTS_START":
        return{
            ...state,
            start:true,
        }
    case "FETCH_PRODUCTS_SUCCESS":
        return{
            ...state,
            start:false,
            success:true,
            products:action.payload
        }
    case "FETCH_PRODUCTS_ERROR":
        return{
            ...state,
            start:false,
            fail:true,
            errorMassage:action.payload
        }
        
   
    default:
        return state;
   }
}

export default ProductReducer;