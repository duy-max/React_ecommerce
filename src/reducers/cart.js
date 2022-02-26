import * as types from "./../constants/actionTypes";
var data = JSON.parse(localStorage.getItem('CART',));
var initialState = data ? data : [];
const cart = (state = initialState, action) => {
    var { product, quantity } = action;      //product = action.product
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findIndex(state, product);    //state = state [], product là thuộc tính product cái state[i] click để thêm
            if (index !== -1) {
                state[index].quantity += quantity;
            }
            else {
                state.push({
                    product,         //product = action.product
                    quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.DELETE_CART_ITEM:
            index = findIndex(state, product); //state = state [], product
            if (index !== -1) {
                state.splice(index, 1);    //xoa state[index] , 1 la 1 phan tu
            }


            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.UPDATE_QUANTITY:
            index = findIndex(state, product); //state = state [], product
            if (index !== -1) {
                state[index].quantity = quantity;     //quantity này lấy từ action
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        default:
            return [...state]; //return state nhưng nó sẽ tránh case tham chiếu vùng nhớ của phép gán khi cập nhật lại dữ liệu
    }
}


var findIndex = (cart, product) => {
    var result = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                result = i;
                break;
            }
        }
    }
    return result;
}




export default cart;