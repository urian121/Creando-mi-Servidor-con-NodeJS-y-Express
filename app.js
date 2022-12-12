
//Incluyen el modulo (paquete) express
const express = require('express');

//Creando una aplicacion de express, instanciando express
const app = express();

//Definiendo un puerto por defecto
puerto = process.env.puerto || 3500

//Definiendo una peticion en mi ruta home
app.get('/',(req, res)=>{
    res.send('Hola, Web Developers');
})

// Define y crea un servidor escuchando en el puerto 4000, 
// y ejecuta el codigo que esta dentro de la funcion
app.listen(puerto, ()=>{
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});
