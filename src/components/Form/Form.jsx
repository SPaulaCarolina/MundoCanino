import { useState } from "react";
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import { useCartContext } from "../../context/CartContext";


const Form = () => {
    const { cartList, totalAmount } = useCartContext()
    const [id, setId] = useState('');
    const [dataForm , setDataForm ] = useState({
        email: '',
        name: '',
        phone: ''
    });
    
    const getProducts = async (e) => {
        e.preventDefault()     
        
        let order = {}       
        order.buyer = dataForm
        order.total = totalAmount();
        order.items = cartList.map(cartItem => {
            const id = cartItem.element.id;
            const name = cartItem.element.name;
            const price = cartItem.element.price * cartItem.quantity;
            const quantity = cartItem.quantity
            
            return {id, name, price, quantity}   
        }) 
    
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        await addDoc(orderCollection, order) 
        .then(res => setId(res.id))
        .catch(err => console.log(err))        

        const queryCollection = collection(db, 'products')
        const queryUpdateStock = query(
            queryCollection, 
            where( documentId() , 'in', cartList.map(it => it.element.id))          
        ) 
        const batch = writeBatch(db)       
        
        await getDocs(queryUpdateStock)
        .then(res => res.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(element => element.element.id === res.id).quantity
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

    return (
        <div>
            <div className="col-12 d-flex justify-content-center">
                <div className="col-6 d-flex justify-content-center">
                    <form 
                        onSubmit={getProducts} 
                        className="mx-auto" 
                        width= "200"                      
                    >
                        <input 
                            type='text' 
                            name='name' 
                            className="form-control m-1"
                            placeholder='Nombre y Apellido' 
                            onChange={handleChange}
                            value={dataForm.name}
                        />
                        <input 
                            type='number' 
                            name='phone'
                            className="form-control m-1"
                            placeholder='Telefono' 
                            onChange={handleChange}
                            value={dataForm.phone}
                        />
                        <div class="input-group mb-3">
                            <input 
                                type='email' 
                                name='email'
                                className="form-control m-1"
                                placeholder='Email' 
                                onChange={handleChange}
                                value={dataForm.email}
                            />
                            <input 
                                type='email' 
                                name='validarEmail'
                                className="form-control m-1"
                                placeholder='Repetir E-mail' 
                                onChange={handleChange}
                            />
                        </div>
                        <button className="btn-block btn btn-outline-secondary m-1" >Generar Orden</button>
                    </form>
                </div>
            </div>
            <br/>
            {id !== '' && `Se ha generado la orden ${id}. Recibirá un correo electronico con el detalle de su compra y el link de pago.` }
        </div>
    )
}

export default Form
