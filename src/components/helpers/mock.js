const productos = [
    { id: '1', categoria: 'Alimentos', nombre: "Excellent Adultos x 20kg", precio: 600, foto: ''},
    { id: '2', categoria: 'Alimentos', nombre: "Purina PRO PLAN x 20kg", precio: 600, foto:''},
    { id: '3', categoria: 'Alimentos', nombre: "Old Prince Adulto x 20kg", precio: 600, foto:''},
    { id: '4', categoria: 'Alimentos', nombre: "Old Prince Cachorro x 20kg", precio: 600, foto:''},
    { id: '5', categoria: 'Alimentos', nombre: "Excellent Adultos x1KG", precio: 600, foto:''},
    { id: '6', categoria: 'Alimentos', nombre: "Excellent Adultos x1KG", precio: 600, foto:''},
    { id: '7', categoria: 'Alimentos', nombre: "Excellent Adultos x1KG", precio: 600, foto:''},
    { id: '8', categoria: 'Alimentos', nombre: "Excellent Adultos x1KG", precio: 600, foto:''},
    { id: '9', categoria: 'Alimentos', nombre: "Excellent Adultos x1KG", precio: 600, foto:''},
    { id: '10', categoria: 'Alimentos', nombre: "Excellent Adultos x1KG", precio: 600, foto:''},
    { id: '11', categoria: 'Alimentos', nombre: "Excellent Adultos x1KG", precio: 600, foto:''},
    { id: '12', categoria: 'Alimentos', nombre: "Excellent Adultos x1KG", precio: 600, foto:''},
    { id: '13', categoria: 'Alimentos', nombre: "Excellent Adultos x1KG", precio: 600, foto:''},
    { id: '14', categoria: 'Alimentos', nombre: "Excellent Adultos x1KG", precio: 600, foto:''},
    { id: '15', categoria: 'Alimentos', nombre: "Excellent Adultos x1KG", precio: 600, foto:''},
    { id: '16', categoria: 'Alimentos', nombre: "Excellent Adultos x1KG", precio: 600, foto:''}
];

export const getFetch = new Promise( (res,rej)=> {
    let condition= true
    if (condition) {
        setTimeout(()=>{
            res(productos)        
        }, 2000)
    }else{
        rej('404 not found')
    }
} )