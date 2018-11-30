//....................................................................................................
//....SSSSSS..........................................SSSSSS..........................................
//...SSSSSSSS......AAAAA....ALLLL......EEEEEEEEEEEE..SSSSSSSS......AAAAA....APPPPPPPPPP.PPPPPPPPPPP...
//..SSSSSSSSSS.....AAAAAA...ALLLL......EEEEEEEEEEEE.SSSSSSSSSS.....AAAAAA...APPPPPPPPPPPPPPPPPPPPPPP..
//.SSSSSSSSSSSS...AAAAAAA...ALLLL......EEEEEEEEEEEEESSSSSSSSSSS...AAAAAAA...APPPPPPPPPPPPPPPPPPPPPPP..
//.SSSSS..SSSSS...AAAAAAA...ALLLL......EEEEE.......ESSSS..SSSSS...AAAAAAA...APPPP..PPPPPPPPPP..PPPPP..
//.SSSSSSS.SSSS..AAAAAAAAA..ALLLL......EEEEEEEEEEE.ESSSSSS.SSSS..AAAAAAAAA..APPPP...PPPPPPPPP...PPPP..
//.SSSSSSSSSS....AAAAAAAAA..ALLLL......EEEEEEEEEEE.ESSSSSSSSS....AAAAAAAAA..APPPPPPPPPPPPPPPPPPPPPPP..
//..SSSSSSSSSSS..AAAA.AAAAA.ALLLL......EEEEEEEEEEE..SSSSSSSSSSS..AAAA.AAAAA.APPPPPPPPPPPPPPPPPPPPPPP..
//....SSSSSSSSS.AAAAAAAAAAA.ALLLL......EEEEEEEEEEE....SSSSSSSSS.AAAAAAAAAAA.APPPPPPPPPP.PPPPPPPPPPP...
//.SSSS..SSSSSS.AAAAAAAAAAA.ALLLL......EEEEE.......ESSS..SSSSSS.AAAAAAAAAAA.APPPPPPPPP..PPPPPPPPPP....
//.SSSSS...SSSS.AAAAAAAAAAAAALLLL......EEEEE.......ESSSS...SSSS.AAAAAAAAAAAAAPPPP.......PPPPP.........
//.SSSSSSSSSSSSSAAAAAAAAAAAAALLLLLLLLLLEEEEEEEEEEEEESSSSSSSSSSSSAAAAAAAAAAAAAPPPP.......PPPPP.........
//..SSSSSSSSSSSSAAAA...AAAAAALLLLLLLLLLEEEEEEEEEEEE.SSSSSSSSSSSSAAAA...AAAAAAPPPP.......PPPPP.........
//...SSSSSSSSS.SAAA.....AAAAALLLLLLLLLLEEEEEEEEEEEE..SSSSSSSSS.SAAA.....AAAAAPPPP.......PPPPP.........
//.....SSSSS...........................................SSSSS..........................................
//....................................................................................................

# Sales app

This app take control of sales for you. Its just necessary to take a picture of whatever stuff that you  want to sell and describe it, such as price, name, etc. When the moments is coming to sell your product, simply describe who bought it.

# Diagrama Conceptual

![alt text](http://gmorentin.000webhostapp.com/Imagen1.png "Logo Title Text 1")


# Historias de usuario

No. | Quien | Que | Para que
--- |--- | --- | ---
1 | Administrador | Acepte o rechace los eventos solicitados. | Diferenciar entre eventos solicitados y autorizados.
2 | Administrador | Un usuario quiere subir imágenes de los productos que vende a la plataforma web. | Un usuario quiere subir imágenes de los productos que vende a la plataforma web.	Para poder vender sus productos al publico
3 | Cliente | Registre sus datos personales  | Para quedar inscrito en la plataforma web y poder comprar
4 | Administrador | Necesita mirar la información completa de un usuario desde información personal hasta adeudos | Para poder realizar cobranzas más especificas.
5 | Administrador | Quiere modificar cuando sea el producto publicado | DPara que pueda modificar el producto como su precio en caso de promociones o agotamiento del producto.
6 | Cliente | Quiere establecer sus tipos de pago | Para que el cliente tenga facilidades de abono
7 | Administrador | Quiere saber quien debe y cuando hay que cobrar mediante un resumen detallado | Para agilizar la cobranza a sus cobradores
8 | Administrador | Quiere saber el total de ganancias. | Para saber en que áreas vale la pena invertir
8 | Cliente | Quiere buscar los productos de su preferencia a través de un buscador con filtro | Para que no tenga que buscar de producto en producto

# Casos de uso

![alt text](http://gmorentin.000webhostapp.com/Imagen2.png  "Logo Title Text 1")

# Diagrama entidad - relación

![alt text](http://gmorentin.000webhostapp.com/DER.png "Logo Title Text 1")


# Diccionario de datos

## Tabla Ventas
### Estructura
Tabla donde se van a almacenar todas las ventas

No. | Campo | Tamaño | Tipo de dato | Descripción
--- |--- | --- | --- | --- 
1 | idventa | 11 | int | Identidicador de la venta
2 | fecha | 30 | varchar | Fecha de venta
3 | idcliente | 11 | int | El id del cliente al que se le hizo la venta
4 | idproducto | 11 | int | El id del producto que se vendió
5 | fotografia | 200 | varchar | La URL de la fotografía
6 | tipo_venta | 200 | varchar | Si la venta fue de contado o a abonos
7 | pagado | -- | boolean | Si la venta quedó pagada o no
8 | idusuario | 11 | int | Id del usuario que hizo la venta


## Tabla Clientes
### Estructura
Tabla donde se van a almacenar todos los clientes

No. | Campo | Tamaño | Tipo de dato | Descripción
--- |--- | --- | --- | --- 
1 | idcliente | 11 | int | Identidicador del cliente 
2 | nombre | 50 | varchar | Nombre completo del cliente
3 | direccion | 50 | varchar | Domicilio del cliente
4 | telefono | 11 | int | Telefono del cliente
5 | correo | 50 | varchar | Correo electronico del cliente
6 | fotografia | 200 | varchar | La URL de la fotografía


## Tabla Productos
### Estructura
Tabla donde se van a almacenar todos los productos

No. | Campo | Tamaño | Tipo de dato | Descripción
--- |--- | --- | --- | --- 
1 | idproducto | 11 | int | Identidicador del producto 
2 | nombre | 50 | varchar | Nombre del producto
3 | preciodeventa | 11 | int | El precio al que se venderá el producto
4 | cantidad | 11 | int | Cuanta existencia de encuentra disponible de este producto
5 | preciodecosto | 11 | int | Lo que le costó a la persona que lo venderá
6 | descripcion | 200 | varchar | Una dscripción del producto
7 | fotografia | 200 | varchar | La URL de la fotografía
8 | idusuario | 11 | int | El id del usuario que añadió el producto



## Tabla Usuarios
### Estructura
Tabla donde se van a almacenar todos los clientes de los vendedores.

No. | Campo | Tamaño | Tipo de dato | Descripción
--- |--- | --- | --- | --- 
1 | idusuario | 11 | int | Identidicador del usuario 
2 | nombre | 50 | varchar | Nombre completo del usuario
3 | direccion | 50 | varchar | Domicilio del usuario
4 | telefono | 11 | int | Telefono del usuario
5 | correo | 50 | varchar | Correo electronico del usuario
6 | constrasena | 50 | varchar | contraseña del usuario


## Tabla Abonos
### Estructura
Tabla donde se van a almacenar todos los abonos que registren los vendedores

No. | Campo | Tamaño | Tipo de dato | Descripción
--- |--- | --- | --- | --- 
1 | idabono | 11 | int | Identidicador del abono
2 | cantidad | 11 | int | Cantidad a abonar
3 | idventa | 11 | int | Id de la venta a la que se abona
4 | fotografia | 200 | varchar | La URL de la fotografía
5 | idusuario | 11 | int | El id de usuario que hizo el abono




## Getting Started
To run the app in Android system:
```JavaScript
$ ionic cordova run andriod
```
To run the app in ios system:
```JavaScript
$ ionic cordova run ios
```
Note: If your phone is connected to your computer, the application will run on your phone. Instead, the application will run in your emulator.


### Prerequisites
You need to have the latest version of Node.js installed from https://nodejs.org/es/. To check if you have Node.js in your command line: 

```JavaScript
$ node --version

// Expected output:
// $ v10.13.0
```
Later is necessary install ionic.js pacakge with npm (node package manager). Npm is installed when Node.js is installed, to check if you have npm:

```JavaScript
$ npm --version

// Expected output:
// $ 6.4.1
```

### Installing

If you don't have npm installed in your computed, you need reinstall Node.js from https://nodejs.org/es/ and assure the above steps to continue. If you already have npm, follow the next command to install ionic framwork:
```JavaScript
$ npm install -g ionic cordova
```

Clone this proyect with the following command:
```JavaScript
$ git clone the_url_of_the_project
```
Finally intall the project prackages to run it.
```JavaScript
$ cd  ./name_of_the_project

$ npm install
```
If you want to run the app in your phone you need to have installed gradle, follow the next tutoral to do it from https://gradle.org/install/

## Built With

* [Ionic](https://ionicframework.com/docs/) - The mobil framework used

## Authors

* **Gustavo Fernando Morentin Ballesteros** - *Initial work and Developer* -
(https://github.com/gmorentin)
* **Miguel Angel Carrasco Olvera** - *Developer* - 
(https://github.com/miguelcarrasco94)
* **Francisco David Preciado Mendoza** - *Developer* - 
(https://github.com/PacoDw)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details