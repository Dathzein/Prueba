const http = require('http')
const hostname = '127.0.0.1';
const port = 3000;
const {respuestas, enviarSaludos} = require('./prueba')



class Rectangulo{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }

    get area(){
        return this.calcArea();
    }
    calcArea(){
        return this.alto * this.ancho;
    }
}

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Contet-type','/text/plain');
    respuestas.map((value) =>{
        let vl1 = value.respuesta1
        return vl1
    })
    res.end('respuestas');


});

const esteban = {
    nombre: 'Esteban',
    apellidoPadre: 'Linares',
    getNombre: function(){
        return esteban.nombre;
    },
    soporte:{
        nomina:{
            "nomina": "Respuesta 1"
        }
    }
}

server.listen(port, hostname, () =>{
    console.log(`El servidor se está ejecurtando en http://${hostname}:${port}/`)
    console.log(esteban.soporte.nomina) 
    const p = new Rectangulo(10,10);
    console.log(p.area);
    console.log(respuestas.respuestas1[1]);  
    enviarSaludos(); 
})