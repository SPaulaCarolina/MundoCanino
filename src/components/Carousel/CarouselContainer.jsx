import { Carousel } from "react-bootstrap"

const CarouselContainer = () => {
  return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./assets/images/caninos1.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./assets/images/caninos2.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./assets/images/caninos3.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselContainer