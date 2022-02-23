/*const respuestas = [
    {
        respuesta1:{
            "nomina" : 'Hola nomina',
            posibleResputa:
                {"respuesta":"Hola"}
            
        }
    },
    {
        respuesta2:{
            "factura" : 'Hola factura'
        }
    }
]*/

const respuestas = {
    respuestas1:{
        1 : "hola nomina"
    }
}

function enviarSaludos(){
    console.log('Hola Mundo')
}

 module.exports = {
     respuestas,
     enviarSaludos
 }