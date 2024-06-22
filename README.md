# Proyecto 7

Proyecto 7 es una api rest auth que tiene tres modelos: destinos y viajes, además tiene usuarios con diferentes autorizaciones. Dos semillas suben datos a cities y destinations, hay una relación entre colecciones y un array de datos relacionados. He utilizado Node.js, Javascript, de servidor Express y está conectado a una base de datos de Mongo Atlas mediante mongoose, tienen un CRUD completo las 3 colecciones.

## Tecnologías Utilizadas

- Node.js
- Express
- MongoDB (Mongo Atlas)
- Mongoose
- Dotenv
- Javascript

## Instalación

1. Crear un archivo json:

   ```sh
   npm init -y
   ```

2. Instalar librerías:

   ```sh
   npm i dotenv, mongoose, express
   ```

3. Instalar librería nodemon en devDependencies:

   ```sh
   npm i -D nodemon
   ```

4. Crear un archivo `.env` en el directorio raíz y añadir las variables de entorno:

   ```env
   DB_URL=****************
   ```

5. Levantamos servidor:

   ```sh
   app.listen(3000, () => {
   console.log('Servidor levantado en http://localhost:3000')
   })
   ```

6. Iniciar el servidor:

   ```sh
   npm run start
   ```

7. Iniciar nodemon:

   ```sh
   npm run dev
   ```

## Uso

### Endpoints

#### Destinations

1. **GET /destinations**

   - **Descripción**: Obtiene la lista de todos los destinos turísticos.
   - **Respuesta**: Devuelve un array de objetos, cada uno representando un destino con sus detalles.
   - **Ejemplo de Respuesta**:
     ```json
     [
       {
         "_id": "60d5ec49f72e4e3b4c8b4567",
         "name": "Paris"
       },
       ...
     ]
     ```

2. **GET /destinations/city/:city**

   - **Descripción**: Obtiene la lista de todos los destinos para una ciudad específica.
   - **Parámetros**:
     - `cityId` (string): ID de la ciudad.
   - **Respuesta**: Devuelve un array de objetos, cada uno representando un destino para la ciudad especificada.
   - **Ejemplo de Respuesta**:
     ```json
     [
       {
         "_id": "60d5ec49f72e4e3b4c8b4567",
         "name": "Paris"
       },
       ...
     ]
     ```

3. **GET /destinations/:id**

   - **Descripción**: Obtiene un destino por su ID.
   - **Parámetros**:
     - `id` (string): ID del destino.
   - **Respuesta**: Devuelve un objeto representando el destino con el ID especificado.
   - **Ejemplo de Respuesta**:
     ```json
     {
       "_id": "60d5ec49f72e4e3b4c8b4567",
       "name": "Paris"
       }
     }
     ```

4. **POST /destinations**

   - **Descripción**: Crea un nuevo destino turístico.
   - **Cuerpo de la Solicitud**:
     ```json
     {
       "city": "Paris",
       "name": "Eiffel Tower",
       "image": "htpps://jnvoieioucdcedfnvioe.es"
     }
     ```
   - **Respuesta**: Devuelve el objeto del destino turístico recién creado.
   - **Ejemplo de Respuesta**:
     ```json
     {
       "_id": "60d5ec49f72e4e3b4c8b4568",
       "city": "Paris",
       "name": "Eiffel Tower",
       "image": "htpps://jnvoieioucdcedfnvioe.es"
     }
     ```

5. **PUT /destinations/:id**

   - **Descripción**: Actualiza un destino turístico existente por su ID.
   - **Parámetros**:
     - `id` (string): ID del destino.
   - **Cuerpo de la Solicitud**:
     ```json
     {
       "_id": "60d5ec49f72e4e3b4c8b4568",
       "city": "Paris",
       "name": "Louvre Museum",
       "image": "htpps://jnvoieioucdcedfnvioe.es"
     }
     ```
   - **Respuesta**: Devuelve el objeto del destino actualizado.
   - **Ejemplo de Respuesta**:
     ```json
     {
       "_id": "60d5ec49f72e4e3b4c8b4567",
       "city": "Paris",
       "name": "Louvre Museum",
       "image": "htpps://jnvoieioucdcedfnvioe.es"
     }
     ```

6. **DELETE /destinations/:id**
   - **Descripción**: Elimina un destino por su ID.
   - **Parámetros**:
     - `id` (string): ID del destino.
   - **Respuesta**: Devuelve un mensaje confirmando la eliminación.
   - **Ejemplo de Respuesta**:
     ```json
     {
       "message": "Destino eliminado correctamente."
     }
     ```

#### Cities

1. **GET /cities**

   - **Descripción**: Obtiene la lista de todas las ciudades.
   - **Respuesta**: Devuelve un array de objetos, cada uno representando una ciudad con sus detalles.
   - **Ejemplo de Respuesta**:
     ```json
     [
       {
         "_id": "60d5ec49f72e4e3b4c8b4568",
         "name": "Paris",
         "country": "France",
         "population": 2141000,
         "destinations": [...]
       },
       ...
     ]
     ```

2. **GET /cities/country/:country**

   - **Descripción**: Obtiene la lista de todas las ciudades en un país específico.
   - **Parámetros**:
     - `country` (string): Nombre del país.
   - **Respuesta**: Devuelve un array de objetos, cada uno representando una ciudad en el país especificado.
   - **Ejemplo de Respuesta**:
     ```json
     [
       {
         "_id": "60d5ec49f72e4e3b4c8b4568",
         "name": "Paris",
         "country": "France",
         "population": 2141000,
         "destinations": [...]
       },
       ...
     ]
     ```

3. **GET /cities/:id**

   - **Descripción**: Obtiene una ciudad por su ID.
   - **Parámetros**:
     - `id` (string): ID de la ciudad.
   - **Respuesta**: Devuelve un objeto representando la ciudad con el ID especificado.
   - **Ejemplo de Respuesta**:
     ```json
     {
       "_id": "60d5ec49f72e4e3b4c8b4568",
       "name": "Paris",
       "country": "France",
       "population": 2141000,
       "destinations": [...]
     }
     ```

4. **POST /cities**

   - **Descripción**: Crea una nueva ciudad.
   - **Cuerpo de la Solicitud**:
     ```json
     {
       "name": "London",
       "country": "United Kingdom",
       "population": 9300000
     }
     ```
   - **Respuesta**: Devuelve el objeto de la ciudad recién creada.
   - **Ejemplo de Respuesta**:
     ```json
     {
       "_id": "60d5ec49f72e4e3b4c8b4569",
       "name": "London",
       "country": "United Kingdom",
       "population": 9300000,
       "destinations": []
     }
     ```

5. **PUT /cities/:id**

   - **Descripción**: Actualiza una ciudad existente por su ID.
   - **Parámetros**:
     - `id` (string): ID de la ciudad.
   - **Cuerpo de la Solicitud**:
     ```json
     {
       "name": "Paris",
       "country": "France",
       "population": 2200000,
       "destinations": []
     }
     ```
   - **Respuesta**: Devuelve el objeto de la ciudad actualizada.
   - **Ejemplo de Respuesta**:
     ```json
     {
       "_id": "60d5ec49f72e4e3b4c8b4568",
       "name": "Paris",
       "country": "France",
       "population": 2200000,
       "destinations": [...]
     }
     ```

6. **DELETE /cities/:id**
   - **Descripción**: Elimina una ciudad por su ID.
   - **Parámetros**:
     - `id` (string): ID de la ciudad.
   - **Respuesta**: Devuelve un mensaje confirmando la eliminación.
   - **Ejemplo de Respuesta**:
     ```json
     {
       "message": "Ciudad eliminada correctamente."
     }
     ```

#### Users

1. **GET /users**

   - **Descripción**: Obtiene la lista de todos los usuarios.
   - **Respuesta**: Devuelve un array de objetos, cada uno representando un usuario con sus detalles.
   - **Ejemplo de Respuesta**:
     ```json
     [
       {
         "_id": "60d5ec49f72e4e3b4c8b456a",
         "email": "johndoe@example.com"
       },
       ...
     ]
     ```

2. **GET /users/:id**

   - **Descripción**: Obtiene un usuario por su ID.
   - **Parámetros**:
     - `id` (string): ID del usuario.
   - **Respuesta**: Devuelve un objeto representando el usuario con el ID especificado.
   - **Ejemplo de Respuesta**:
     ```json
     {
       "_id": "60d5ec49f72e4e3b4c8b456a",
       "email": "johndoe@example.com"
     }
     ```

3. **POST /users**

   - **Descripción**: Crea un nuevo usuario.
   - **Cuerpo de la Solicitud**:
     ```json
     {
       "email": "janedoe@example.com",
       "password": "password123"
     }
     ```
   - **Respuesta**: Devuelve el objeto del usuario recién creado.
   - **Ejemplo de Respuesta**:
     ```json
     {
       "_id": "60d5ec49f72e4e3b4c8b456b",
       "email": "janedoe@example.com"
     }
     ```

4. **PUT /users/:id**

   - **Descripción**: Actualiza un usuario existente por su ID.
   - **Parámetros**:
     - `id` (string): ID del usuario.
   - **Cuerpo de la Solicitud**:
     ```json
     {
       "email": "johndoe_updated@example.com",
       "password": "newpassword456"
     }
     ```
   - **Respuesta**: Devuelve el objeto del usuario actualizado.
   - **Ejemplo de Respuesta**:
     ```json
     {
       "_id": "60d5ec49f72e4e3b4c8b456a",
       "email": "johndoe_updated@example.com"
     }
     ```

5. **DELETE /users/:id**
   - **Descripción**: Elimina un usuario por su ID.
   - **Parámetros**:
     - `id` (string): ID del usuario.
   - **Respuesta**: Devuelve un mensaje confirmando la eliminación.
   - **Ejemplo de Respuesta**:
     ```json
     {
       "message": "Usuario eliminado correctamente."
     }
     ```

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).
