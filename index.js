//Creamos el servidor
var http = require('http');
var url = require('url');
var fs = require('fs');
var moduloDni = require('./my_modules/dni.js');

http.createServer(function (peticion, respuesta) {
    //Obtenemos la URL y la descomponemos
    var url_peticion = url.parse(peticion.url, true);
    //Guardamos el pathname
    var pathname = url_peticion.pathname;
    console.log(pathname);
    
    if (pathname == '/') {
        respuesta.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        respuesta.write('<p>Bienvenid@, este es el inicio.</p>');
        respuesta.end();
    } else if (pathname == '/dni') {
        fs.readFile('instrucciones.html', function (err, dato) {
            respuesta.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8 ' });
            respuesta.write(dato);
            respuesta.end();
        });
        respuesta.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        let parametros = url_peticion.query;
        let salida;
        if (parametros.num !== undefined) {
            salida = moduloDni.dni(parametros.num);
            respuesta.write(salida);
        }
    } else if (pathname == '/escribir') {
        if (fs.existsSync("Copia")) {
            respuesta.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
            respuesta.write('<p>El directorio y el archivo ya ha sido creado</p>');
            console.log("¡El directorio y el archivo ya ha sido creado!");
            respuesta.end();
        } else {
            fs.mkdir("Copia", (error) => {
                if (error) {
                    console.log(error.message);
                }
                console.log("Directorio creado");
                fs.appendFile('./Copia/holaMundo.txt', 'Álvaro SantosBreval', function (err) {
                    if (err) {
                        throw err;
                    }
                    respuesta.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
                    respuesta.write('<p>¡Contenido creado y guardado!</p>');
                    console.log('¡Contenido guardado!');
                    respuesta.end();
                });
            });
        }
    } else {
        respuesta.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
        respuesta.write('<p>404 Página no encontrada</p>');
        respuesta.end();
    }
}).listen(8080, "127.0.0.1"), (err) => {
    //Verificamos que no halla error, si no lo mostrara por consola
    if (err) {
        return console.log('Error: ', err);
    }
    console.log('Servidor ejecutándose en http://127.0.0.1:8080/');
}