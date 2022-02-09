import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({id,nombre,precio,imag,categoria}) => {
    
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
            </Card.Footer>
        </Card>                     
    )
};

export default Item;


