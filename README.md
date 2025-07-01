# Airbnb - Proyecto Angular 

<b>DESARROLLO FRONT-END (Angular)<br>

<b>Autores: 

 - Esteban Villalba Delgadillo
 - Lizeth Adriana Gomez Díaz
 - Stevenson Duarte

## Propósito y Alcance:

Este documento proporciona una introducción a nuestro proyecto, una aplicación de alquiler de propiedades desarrollada con Angular y modelada siguiendo el concepto de Airbnb.

La base de código implementa una arquitectura orientada a características, que soporta funcionalidades como autenticación de usuarios y gestión de listados de propiedades, utilizando patrones modernos de Angular y formularios reactivos.


## ¿Qué tecnologías se emplearon en el proyecto? 🤖

- Angular 19
- Visual Studio Code e IntelliJ
- Angular CLI
- TypeScript
- RxJS
- Zone.js

## Instalación: 

Para ejecutar el proyecto, debes asegurarte previamente de tener node en tu sistema.

1. Descarga el proyecto: Clona el repositorio con git clone https://github.com/Inaryuta/Proyecto-Angular.git o descarga el repositorio en formato .rar para poder manipularlo.
2. Configurar el proyecto: Configura las variables de entorno y gestiona el proyecto a través del archivo .env.
3. Instalar las dependencias del proyecto: Instala todas las dependencias que se encuentran en el archivo con npm install
4. Instalar Angular CLI: Instalar la interfaz de linea de comandos de angular de forma global.
5. Iniciar el proyecto: Ejecuta el proyecto desde la terminal con ng serve.

## Arquitectura:

### Autenticación:

Implementa la funcionalidad de inicio de sesión de usuarios utilizando formularios reactivos y validación. La característica de autenticación incluye componentes de formulario, lógica de validación e integración de servicios para la gestión de credenciales de usuario.

### Flujo general 

La aplicación sigue el patrón de módulos por funcionalidad (feature module) de Angular, con rutas cargadas de forma diferida (lazy-loaded) y componentes independientes (standalone). El núcleo de la aplicación se inicializa mediante appConfig y utiliza Angular Router para la navegación entre las funcionalidades de autenticación y listados de propiedades.

  ![image](https://github.com/user-attachments/assets/74247e38-5010-4f17-a43b-c8be571f89c7)

### Estructura principal del sistema 

La aplicación implementa un enfoque de arranque basado en configuración utilizando ApplicationConfig en lugar de los tradicionales NgModules, lo que refleja la adopción de patrones modernos en Angular.

  ![image](https://github.com/user-attachments/assets/eaf75b24-9760-4fff-85f2-17481285f9dd)




