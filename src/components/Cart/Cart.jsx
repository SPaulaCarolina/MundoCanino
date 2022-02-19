import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import { addDoc, collection, documentId, getDocs, getFirestore, query, Timestamp, where, writeBatch } from "firebase/firestore"

const Cart = () => {
  const { cartList, removeCart, removeItem, totalAmount} = useCartContext()
  const [dataForm , setDataForm ] = useState({
      email: '',
      name: '',
      phone: ''
  });
  const [id, setId] = useState('');

  const getProducts = async (e) => {
      e.preventDefault()     
      let order = {}
      order.date = Timestamp.fromDate(new Date())        
      order.buyer = dataForm
      order.total = totalAmount();
      order.items = cartList.map(cartItem => {
          const id = cartItem.id;
          const name = cartItem.title;
          const price = cartItem.price * cartItem.quantity;
          const quantity = cartItem.quantity
          
          return {id, name, price, quantity}   
      }) 

      const db = getFirestore()

      const orderCollection = collection(db, 'orders')
      await addDoc(orderCollection, order) 
      .then(res => setId(res.id))
      .catch(err => console.log(err))        

      const queryCollection = collection(db, 'products')
      const queryNewStock = query(
          queryCollection, 
          where( documentId() , 'in', cartList.map(it => it.id))          
      ) 
      const batch = writeBatch(db)       
      
      await getDocs(queryNewStock)
      .then(res => res.docs.forEach(res => batch.update(res.ref, {
              stock: res.data().stock - cartList.find(item => item.id === res.id).quantity
          }) 
      ))
      .catch(err => console.log(err))

      batch.commit()   
  }

  function handleChange(e) {
      
      setDataForm({
          ...dataForm,
          [e.target.name]: e.target.value
      })
  }

return <div> 
        {id !== '' && `El id de la orden es : ${id} ` }
        <br />
        {cartList.length !== 0 ?<>
          {cartList.map(el => 
                  <div>
                    <li>
                      {el.nombre} Precio: ${el.precio} Cantidad: {el.cantidad}  
                      <button onClick={() => removeItem(el.element.id)} className='btn btn-outline-info m-1'>X</button>
                    </li>
                  </div> ) }
                  {`La suma es $${totalAmount()}`}
                  <button onClick={removeCart} className="btn-block btn btn-outline-info" >Vaciar Carrito</button>
            <br/>
                <form 
                    onSubmit={getProducts}                           
                >
                    <input 
                        type='text' 
                        name='name' 
                        placeholder='name' 
                        onChange={handleChange}
                        value={dataForm.name}
                    />
                    <br />
                    <input 
                        type='number' 
                        name='phone'
                        placeholder='tel' 
                        onChange={handleChange}
                        value={dataForm.phone}
                    />
                    <br/>
                    <input 
                        type='email' 
                        name='email'
                        placeholder='email' 
                        onChange={handleChange}
                        value={dataForm.email}
                    />
                    <input 
                        type='email' 
                        name='validarEmail'
                        placeholder='Repetir Email' 
                        onChange={handleChange}
                    />
                    <br/>
                    <button onClick={getProducts} >Generar Orden</button>
                </form>
            </> 
            :
            <> 
                <div>
                  <label>No hay productos en el carrito.</label>
                  <Link to='/'>
                    <button className='btn btn-outline-info'>Volver al menú</button>
                  </Link>
                </div>
                <br />
                <button onClick={removeCart} >Vaciar Carrito</button>
            </>     
    }         
  </div>;
};

export default Cart;
