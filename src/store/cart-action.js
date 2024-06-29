import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";


export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const respose = await fetch('https://redux-cart-ac513-default-rtdb.firebaseio.com/cart.json');

            if (!respose.ok) {
                throw new Error('Could not fetch the card data');
            }

            const data = await respose.json();
            return data;
        }

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity,
            }))
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                  status: 'error',
                  title: 'Error!',
                  message: 'Fetching the cart data failed!',
                })
            );
        }
    }
}


export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
              status: 'pending',
              title: 'Sending...',
              message: 'Sending cart data!',
            })
        );
        const sendRequest = async () => {
            const response = await fetch(
                'https://redux-cart-ac513-default-rtdb.firebaseio.com/cart.json',
                {
                  method: 'PUT',
                  body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity
                  }),
                }
            );
            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }
        }
        try {
            await sendRequest();
            dispatch(
                uiActions.showNotification({
                  status: 'success',
                  title: 'Success!',
                  message: 'Sent cart data successfully!',
                })
            ); 
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                  status: 'error',
                  title: 'Error!',
                  message: 'Sending cart data failed!',
                })
            );
        }
    }
}

