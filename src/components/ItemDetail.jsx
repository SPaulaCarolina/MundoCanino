const ItemDetail = ({product}) => {
  const { nombre, id, categoria, foto, precio } = product;

    return (
      <>
        <h1>Producto: {nombre}</h1>
        <h4>Id: {id} Categoria: {categoria}</h4>
        <h4>Precio: {precio}</h4>
        <img src= {foto} alt="foto" />
      </>
    );
}

export default ItemDetail;