import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({id,name,price,image,category,description}) => {
    
    return (
        <Card
            key={id}
            className='m-1'
        >
            <Card.Img variant="top" src={image}/>
            <Card.Body>
            <Card.Title>{category} / {name}</Card.Title>
            <Card.Text>
                ${price}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Link to={`/detail/${id}`}>
                    <button className="btn btn-info btn-block">
                        Ver detalle
                    </button> 
                </Link> 
            </Card.Footer>
        </Card>                     
    )
};

export default Item;


