import ItemCount from "../ItemCount"

function ItemListContainer() {

    function onAdd(cant) {
      console.log(cant)
    }
    
    return (
        <div id='saludo'>
            Bienvenido a MundoCanino!

            <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer



