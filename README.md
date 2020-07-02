VALIDATION ASSESMENT

As a insurance company we've been asked to develop an application that
manage some information about our insurance policies and company clients.
To do that, we have two services that provide us with all the data needed:

* The list of company clients can be found at:
http://www.mocky.io/v2/5808862710000087232b75ac

* The list of company policies can be found at:
http://www.mocky.io/v2/580891a4100000e8242b75c5

With that information, we need to create a Web API that exposes services
with some constraints:

* Get user data filtered by user id 
* Get user data filterd by user name 
* Get the list of policies linked to a user name 
* Get the user linked to a policy 

We have the following constraints:

* To use Postman to check queries	
* Usage of last technologies (mandatory Node.js)
* Solution properly structured and documented

As our stakeholders are very fussy, here you have some tips:

* Add everything you thing it's needed to ensure product's quality.
* Research about the best npm (e.g Axios)
* Try to “dockerize” some code. 			

------------------------------------------------------------------------------------------------------------------------------------------------------------------
### CONFIGURACIÓN con DOCKER :whale:

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

1. Clonar el respositorio
2. Abrir una terminal por cada microservicio 
3. Configurar la imagen y contenedor para arrancar cada microservicio

- CREAMOS IMAGENES DOCKER:

```
docker build -t clients-service .
docker build -t politics-service .
docker build -t clientspoliticsservices .
```

- COMPROBAMOS QUE SE HA CREADO:

```
docker images
```

- EJECUTAMOS CONTENEDORES:

```
docker run -it -p 3001:3000 clients-service
docker run -it -p 4001:4000 politics-service
docker run -it -p 5001:5000 clientspoliticsservices
```

### CONFIGURACIÓN sin DOCKER :wrench:

1. Clonar el respositorio
2. Nos aseguramos de tener la base de datos mongodb instalado con sus respectivas configuraciones y luego la arrancamos con las siguientes instrucciones:

```
sudo apt-get install mongodb
cd /lib/systemd/system
sudo touch mongodb.service
sudo nano mongodb.service
systemctl list-unit-files --type=service
sudo systemctl enable mongodb.service
systemctl list-unit-files --type=service
sudo systemctl start mongodb

```
2. Abrir una terminal por cada microservicio 
3. Ejecutar la siguientes instrucciones en cada carpeta de cada microservicio para la descarga de todas las dependencias del proyecto:

```
npm install
```

4. Entrar en src desde la terminal y ejecutamos el proyecto con nodemon:

```
nodemon index.js
```




### ANOTACIONES :pencil2:

- He intentado implementar la lógica de una arquitectura microservicios, 3 módulos independientes entre sí de los cuales uno de ellos (clientspolicies-services)
se comunica con los otros dos a través del paquete axios para realizar los dos últimos servicios de la API especificada.

- He tenido varios problemas estos días durante la realización de la web API:

1. Al intentar integrar la base de datos MongoDB, pude hacer funcionar el POST correctamente e introducir datos, pero no consigo realizar los GET para obtener
un dato en concreto. Este problema está en una línea de código en concreto, donde debe haber algún pequeño matiz que no me permita obtener el/los datos buscados.
2. Al dockerizar cada microservicio consigo hacer funcionar cada módulo por separado, los cuales necesitan, además de lanzar la app de node, arrancar la base      de datos. Para esto he añadido un docker-compose.yml, con el inconveniente de que no me conecta correctamente a la base de datos.  Por lo que solo me             permite realizar endpoints que no requieran acceso a la base de datos.Es importante resaltar que se ha creado un docker-compose.yml por cada módulo. Esta implementación de aplicaciones separadas (1 por cada microservicio) se podrían haber arrancado todas desde un solo docker-compose.yml.
3. Al realizar la integracion Swagger con este repositorio, no me aparece. Para acceder a él hacer click en [documentacion](https://github.com/rafarc97/NodeJS/tree/master/Projects/APIRest/swaggerDocumentation) .
4. He intentado también trabajar paralelamente con MongoDB, pero a través de la librería "mongoose", la cual se puede conectar con MongoDB Cloud (teniendo en uno de sus posibles proveedores a Amazon Web Services). De este modo también obtuve fallos al realizar la conexión mediante la opción de los drivers nativos de mongoDB, escribiendo el enlace: "mongodb+srv://rafarc97:<password>@clientsservice.tdf0t.mongodb.net/<dbname>?retryWrites=true&w=majority".Este motivo me hizo seguir desarrollando la API con la librería "monogdb". Este problema, del mismo modo que el primero, está en una línea de código en concreto, donde debe haber algún pequeño matiz que no me permita realizar la conexión correctamente. Es importante destacar que realmente no es imprescindible la utilización de una base de datos para esta prueba profesional, si no que se podría haber hecho todo utilizando el almacenamiento en memoria. El añadir una capa de persitencia de este modo con MongoDB provoca otro tipo de problemas como por ejemplo que todas las actualizaciones (el alta de un nuevo cliente o política en el sistema) no se estarían manejando con mi implementación.


### CONCLUSIÓN :bowtie:

A pesar de anteriormente haber realizado un [proyecto](https://github.com/rafarc97/smallProjects/tree/master/APIRestBottle) bastante parecido usando el framework Bottle de Python y las bases de datos SQLITE3, me he aventurado a introducir muchas nuevas herramientas/tecnologías con las cuales nunca había trabajado anteriormente (bases de datos documentales, dockerizar varios procesos con docker-compose, swagger, implementación lógica de microservicios,... entre otros). Esto ha provocado que avanzara muy lentamente y finalmente no he podido realizar un código funcional en el 100% de su totalidad. No obstante, a pesar de todo ello, puedo decir que he aprendido muchísimas cosas que ni sabía que existían, lo cual me proporciona más motivación e ilusión para seguir aprendiendo acerca de este lenguaje en todas sus facetas back y front como es JavaScript.
