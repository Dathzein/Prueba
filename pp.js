const respuestas = {
    respuestas: {
        type: "respuestas",
        messages:[
            {type: "text", data: "Hola como estas"}
        ],
        childrens:{
            1: {
                type: "respuesta1",
                title: "FACTURA",
                messages:[
                    {type: "text", data: "Cual es su inquietud"}
                ]
            },
            2: {
                type: "respuesta2",
                title: "NOMINA",
                messages:[
                    {type: "text", data: "Cual es su inquietud"}
                ]
            }
        }
    }
}
 module.exports = {
     respuestas
 }