import { Col, Row } from "react-bootstrap";
import CarouselContainer from "../Carousel/CarouselContainer";
import Item from '../Item/Item';

const ItemList = ({list}) => {
    
    return (
        <>
            <CarouselContainer />
            <h2 className="m-5">NUESTROS PRODUCTOS</h2>
            <Row xs={1} md={4} className="g-4">
                {list.map( item => 
                    <Col>
                        <Item 
                        id={item.id}
                        name={item.name} 
                        price={item.price} 
                        image={item.image} 
                        category={item.category}
                        description={item.description}
                        />
                    </Col>
                )}
            </Row>  
        </>  
    )
};

export default ItemList;
