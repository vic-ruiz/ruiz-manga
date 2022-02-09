import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import './CartWidget.css'
import {Link} from "react-router-dom"
import { useCart } from '../../../context/CartContext'

export const CartWidget = () => {
    const {cantidad} = useCart();
    return(
        <Link to="/cart" className='cartWidget'>
            <ShoppingCartIcon/>
            <p>{cantidad}</p>
        </Link>
    )
}