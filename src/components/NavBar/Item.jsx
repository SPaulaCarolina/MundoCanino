import ItemCount from "../ItemCount";


const Item = (productos) => {
    function onAdd(cant) {
        console.log(cant)
      }
    return (
        <div 
            key={productos.id} 
            className='col-md-4'
        >                        
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${productos.nombre} - ${productos.categoria}`}
                </div>
                <div className="card-body">
                    <img src={productos.foto} alt='' className='w-50' />
                    {productos.precio}                                                            
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-primary btn-block">
                        Detalle del producto
                    </button> 
                    <ItemCount stock={10} initial={1} onAdd={onAdd} />                                                             
                </div>
            </div>         
        </div>
    )
};

export default Item;


