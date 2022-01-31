import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import './CartWidget.css'
import {Link} from "react-router-dom"

export const CartWidget = () => {
    return(
        <Link to="/" className='cartWidget'>
            <ShoppingCartIcon/>
            <p>PlaceHolder</p>
        </Link>
    )
}