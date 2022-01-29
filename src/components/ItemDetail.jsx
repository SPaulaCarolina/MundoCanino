const ItemDetail = (producto) => {
   
    return (
      <>
        <h1>{producto.nombre}</h1>
        <h4>Id: {producto.id} Categoria: {producto.categoria}</h4>
        <h4>Precio: {producto.precio}</h4>
        <img src= {producto.foto} />
      </>
    );
}

export default ItemDetail;