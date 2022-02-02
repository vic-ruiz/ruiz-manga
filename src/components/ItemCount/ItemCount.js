import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "./ItemCounter.css"

export function ItemCount({sumar , restar}) {


    return (
        <div className="itemCounter" >
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