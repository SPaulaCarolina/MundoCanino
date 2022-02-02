import ItemCount from "./ItemCount";

const ItemDetail = ({product}) => {
  function onAdd(cant) {
    console.log(cant)
  }
    return (
      <div>
        <div>
          <h1>Producto: {product.nombre}</h1>
          <h4>Id: {product.id} Categoria: {product.categoria}</h4>
          <h4>Precio: ${product.precio}</h4>
          <img src= {product.foto} alt="foto" />
        </div>
        <div className="mt-2">
          <ItemCount stock={10} initial={1} onAdd={onAdd} /> 
        </div>
      </div>  
    );
}

export default ItemDetail;