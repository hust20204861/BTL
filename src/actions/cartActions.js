import axios from 'axios'
import { ADD_TO_CART, REMOVE_ITEM_CART } from '../constants/cartConstants'

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/product/${id}`)

    dispatch({
        type: ADD_TO_CART,
        payload: {
            course: data.course._id,
            name: data.course.name,
            price: data.course.price,
            image: data.course.images[0].url,
            stock: data.course.stock,
            quantity
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeItemFromCart = (id) => async (dispatch, getState) => {

    dispatch({
        type: REMOVE_ITEM_CART,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}

// export const saveShippingInfo = (data) => async (dispatch) => {

//     dispatch({
//         type: SAVE_SHIPPING_INFO,
//         payload: data
//     })

//     localStorage.setItem('shippingInfo', JSON.stringify(data))

// }