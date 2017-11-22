# API_LOST-FOUND-Backend-
API LOST&amp;FOUND (Backend) proyecto de sistemas distribuidos

Pasos para ejecutar el programa:

1-clonar git

2-corre en la consola de comandos "ruta de mongo .exe" --dbpath "ruta de la carpeta de la base de datos"

3-luego correr el mongo.exe

2-desde la consola navegar hasta el directorio de nuestros archivos

3-correr '$npm install' en el directorio que tenemos nuestros archivos git

4-correr '$npm start' para correr el servidor local express

5-abrir la extension postman de chrome

6-insertar en postman los siguientes request de URI para obtener las cosas

usar Get 'localhost:3000' para desplegar pagina bienvenida

///Objetos Perdidos

usar Get 'localhost:3000/ObjLost' para desplegar la lista de objetos perdidos

usar Post 'localhost:3000/ObjLost/' para insertar la informacion del body como anuncio 

usar Get 'localhost:3000/ObjLost/filter' para desplegar los anuncios que conincidan con el filtro de busqueda de objetos perdidos

usar Put 'localhost:3000/ObjLost/:id' para actualizar con informacion del body a el anuncio con el id seleccionado

usar Delete 'localhost:3000/ObjLost/:id' para eliminar el anuncio con el id seleccionado


///Objetos Encontrados

usar Get 'localhost:3000/ObjFound' para desplegar la lista de objetos encontrados

usar Post 'localhost:3000/ObjFound/' para insertar la informacion del body como anuncio 

usar Get 'localhost:3000/ObjFound/filter' para desplegar los anuncios que conincidan con el filtro de busqueda de objetos perdidos

usar Put 'localhost:3000/ObjFound/:id' para actualizar con informacion del body a el anuncio con el id seleccionado

usar Delete 'localhost:3000/ObjFound/:id' para eliminar el anuncio con el id seleccionado
