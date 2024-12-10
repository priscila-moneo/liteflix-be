
## Liteflix Backend

Este es el backend de Liteflix, una aplicación web para gestionar películas. Está construido con **NestJS**, un framework de Node.js para construir aplicaciones eficientes y escalables del lado del servidor.

## Índice

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Despliegue y CI/CD](#despliegue-y-cicd)

## Descripción

Este backend proporciona una API RESTful para gestionar las películas en Liteflix. Utiliza **MongoDB** como base de datos y **Cloudinary** para gestionar las imágenes de portada de las películas.

## Características

- **Gestión de películas**: CRUD básico (Crear y Leer) para las películas.
- **Subida de imágenes**: Las imágenes de portada de las películas se suben a **Cloudinary**.
- **API RESTful**: Endpoints accesibles para interactuar con los datos de las películas.

## Tecnologías utilizadas

- **NestJS**: Framework para construir aplicaciones del lado del servidor basadas en Node.js.
- **MongoDB**: Base de datos NoSQL para almacenar los datos de las películas.
- **Mongoose**: ODM para MongoDB que facilita la interacción con la base de datos.
- **Cloudinary**: Plataforma de gestión de imágenes para almacenar y entregar imágenes de manera eficiente.
- **Express**: Framework web para Node.js utilizado por NestJS.
- **TypeScript**: Lenguaje de programación que proporciona tipado estático sobre JavaScript.
- **Prettier**: Herramienta de formateo de código.
- **Jest**: Framework de pruebas para realizar pruebas unitarias y de integración.

## Instalación

1. Clona este repositorio:
    ```bash
    git clone https://github.com/priscila-moneo/liteflix-be.git
    ```

2. Accede al directorio del proyecto:
    ```bash
    cd liteflix-be
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Crea un archivo `.env` en el directorio raíz y agrega las siguientes variables de entorno:

    ```bash
    CLOUDINARY_CLOUD_NAME=your-cloud-name
    CLOUDINARY_API_KEY=your-api-key
    CLOUDINARY_API_SECRET=your-api-secret
    MONGODB_URI=your-mongodb-uri
    ```

5. Compila y ejecuta el proyecto:

    - En modo desarrollo:
      ```bash
      npm run start:dev
      ```

    - En modo producción:
      ```bash
      npm run start:prod
      ```

6. El servidor debería estar corriendo en `http://localhost:3001`.

## Uso

Una vez que el servidor esté corriendo, puedes interactuar con la API a través de los siguientes endpoints:

### Endpoints principales

- **GET /movies**: Obtener todas las películas.
- **POST /movies**: Crear una nueva película.

### Subir imágenes

- **POST /movies/upload**: Subir una imagen de portada de película a Cloudinary.

## Despliegue y CI/CD

Este backend está desplegado en **Railway** para facilitar su acceso en producción. Puedes acceder a la aplicación en la siguiente URL:

- **URL de producción**: [Enlace de Railway](https://liteflix-be-production.up.railway.app)

Además, la integración continua está configurada para ejecutarse automáticamente cada vez que se realiza un **merge** en la rama `main` en GitHub. Esto asegura que los cambios se desplieguen sin intervención manual, garantizando la continuidad del servicio.

