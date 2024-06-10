# TripBliss

## Descripción del Proyecto

TripBliss es una página web desarrollada con un enfoque en la experiencia de usuario para la compra de paquetes de viajes. El proyecto cuenta con una implementación robusta tanto en el Frontend como en el Backend, utilizando tecnologías modernas y eficientes.

### Tecnologías Utilizadas

#### Frontend
- **React**
- **JavaScript**
- **HTML**
- **CSS**
- **Bootstrap**
- **Varias dependencias adicionales**

#### Backend
- **Express** (para la creación de una API REST propia)
- **MongoDB** (base de datos no relacional)
- **JSON Web Token (JWT)** (para la gestión de registro y autenticación de usuarios)

## Funcionalidades

### Usuarios
- **Registro y Autenticación:** Solo los usuarios registrados y autenticados pueden acceder a las funcionalidades de la página.
- **Compra de Paquetes de Viajes:** Los usuarios pueden comprar paquetes de viajes. Los paquetes disponibles son:
  - **Paquete Básico:** Viajes por España.
  - **Paquete Premium:** Viajes por Europa.
  - **Paquete Deluxe:** Viajes por todo el mundo.
- **Asignación Aleatoria de Viajes:** Dentro de cada paquete, el viaje específico se asigna de manera completamente aleatoria entre todas las opciones posibles.
- **Pasarela de Pago:** Contamos con una pasarela de pago integrada que facilita el proceso de compra, relacionada directamente con el precio de los paquetes seleccionados.

### Administradores
- **Rol de Administrador:** Los administradores tienen acceso a funciones avanzadas de edición y gestión de la página web.
- **Gestión de Contenido:** Desde la interfaz de usuario, los administradores pueden editar:
  - **Paquetes de Viajes**
  - **Experiencias**

### ROUTES - CLIENT

|   DESCRIPTION     |           PATH          | 
| ----------------  | ----------------------- |
| home page         | `/`                     | 
| profile-signup    |`/profile/signup`        | 
| profile-login     |`/profile/login`         | 
| profile-profileId |`/profile/:profileId`    | 
| Package details   |`/package/:packageID`    |
| Add Package Page  |`/addPackage`            |
| about page        |`/aboutUs`               |
| error page        |`*`                      |


