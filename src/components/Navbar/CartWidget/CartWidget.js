import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import './CartWidget.css'

export const CartWidget = () => {
    return(
        <a href="default.asp" className='cartWidget'>
            <ShoppingCartIcon/>
            <p>PlaceHolder</p>
        </a>
    )
}