![Inove banner](./inove.jpg)
Inove Escuela de Código\
info@inove.com.ar\
Web: [Inove](http://inove.com.ar)

# Ejercicios de práctica
## Importante
Todas las entregas deben realizarse en el foro de tarea correspondiente en el campus de inove, salvo especificarse lo contrario. 

### Descarga y ejecución del "ejemplo_de_clase"
Para ello el alumno deberá realizar un "fork" del repositorio de clase en github, desde la cuenta de inove hacia su cuenta.
Una vez realizado el fork, debe clonar el repositorio desde su cuenta con el comando:

`git clone <dirección-de-su-repositorio>`
Ante cualquier duda, consulte con el documento de "workflow" en el campus, la sección de tutoriales y/o por medio de su canal de discord asignado. 

Luego en la carpeta raíz del proyecto, a la altura del archivo "package.json" instalar las librerías con el comando:

`npm install`

Una vez instaladas, debe inicializar el servidor de desarrollo con el comando:

`npm start`

Visualice el proyecto, familiaricese con él, entienda cómo están compuestos cada uno de los componentes demostrados en clase.

### Crear la página Desktop - Main index.
En la carpeta ejercitación, usted encontrará la estructura básica de un proyecto React JS.
Su misión será crear la página "Desktop - Main index", cuyo mockup encontrará en:

🔗 [Diseño Inove-Marvel E-Commerce](https://www.figma.com/file/Tpak3D6n7GYeSNzSRI8ZmS/Marvel-E-commerce?node-id=0%3A1)

Debe cumplir los siguientes requerimientos:
- Debe utilizar el método map() para extraer la información del json provisto example.json.
- Los comics cuyo stock es cero, deben respetar el estilo de "SOLD OUT" con la tarjeta y la imágen en gris.
- Al pasar el mouse por encima de las imágenes, genere un efecto, puede ser que aparezca una lupa encima como propone el diseño o algo similar.

Los siguientes elementos no son necesarios:
- Navbar
- Footer
- imagen de background (si el color)

Una vez concluido, enviar el enlace del repositorio con la tarea terminada al foro correspondiente del campus y una captura de pantalla a su canal de Discord asignado.