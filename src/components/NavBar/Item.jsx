import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";


const Item = ({id,nombre,precio,imag,categoria}) => {
    function onAdd(cant) {
        console.log(cant)
    }

    return (
        <Card
            key={id}
            className='m-1'
        >
            <Card.Img variant="top" src={imag}/>
            <Card.Body>
            <Card.Title>{categoria} / {nombre}</Card.Title>
            <Card.Text>
                Descripcion<br />
                ${precio}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Link to={`/detail/${id}`}>
                    <button className="btn btn-outline-primary btn-block">
                        Ver detalle
                    </button> 
                </Link>
                    <ItemCount stock={10} initial={1} onAdd={onAdd} />  
            </Card.Footer>
        </Card>                     
    )
};

export default Item;


