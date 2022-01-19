import React, {useState} from 'react'
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "./ItemCounter.css"

export function ItemCount({stock , initial}) {

    const [counter, setCounter] = useState(initial)

    const sumar = () => {
        if (stock > counter) setCounter(counter + 1)
    }

    const restar = () => {
        if (counter > 0) setCounter(counter - 1)
    }


    return (
        <div class="itemCounter" >
            <h1> {`${counter}`} </h1>
            <ButtonGroup>
                <Button onClick = {restar}>
                    {" "}
                    <RemoveIcon fontSize = "small"/>
                </Button>
                <Button onClick = {sumar}>
                    {" "}
                    <AddIcon fontSize = "small"/>
                </Button>
            </ButtonGroup>
        </div>)
}