import ItemCount from "../ItemCount";


const Item = ({key,nombre,precio,imag,categoria}) => {
    function onAdd(cant) {
        console.log(cant)
    }

    return (
        <div 
            key={key}
            className='col-md-4'
        >                        
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${nombre} - ${categoria}`}
                </div>
                <div className="card-body">
                    <img src={imag} alt='' className='w-50' />
                    {precio}                                                            
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


