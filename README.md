# P3_DWES_ServidorNodeDNI

Montar un servidor NodeJS que cumpla con la siguiente especificación:

El servidor se mostrará en la dirección 127.0.0.3:8083. Si accedemos a esta dirección, debe mostrarnos un mensaje de bienvenida. Si accedemos a otra dirección que no se /dni ni /escribir, debe mostrar un aviso.
Cuando se escriba la dirección URL 127.0.0.3:8083/dni, carga la página web HTML estática alojada en el servidor llamada instrucciones.html (adjunta).
Cuando se escriba la dirección URL anterior con el parámetro num (por ejemplo, 127.0.0.3:8083/dni?num=12345678), escribe por pantalla el DNI completo, calculando la letra que corresponda.
Cuando se escriba la dirección URL 127.0.0.3:8083/escribir se creará en el servidor una carpeta llamada Copia y dentro de ésta un archivo de texto llamado holaMundo.txt, cuyo contenido será tu nombre completo.
