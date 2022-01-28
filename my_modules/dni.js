exports.dni = function (num) {
    var juegoCaracteres="TRWAGMYFPDXBNJZSQVHLCKET";
    var posicion= num % 23;
    var letra = juegoCaracteres.charAt(posicion);
    return '<p>Tu dni completo es:'+num+letra+"</p>";
};