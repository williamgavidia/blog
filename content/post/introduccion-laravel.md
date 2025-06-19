---
title: "Introducción a Laravel: El framework PHP más popular"
comments: true
date: 18 jun 2025
tags:
  [
    "Lenguaje de programacion",
    "Aplicaciones",
    "Desarrollador web",
    "Software",
    "Frameworks",
  ]
draft: false
---

<p align="center">
<img src="../../img/logo-laravel.png" width="800" height="300"/>
</p>

En el mundo del desarrollo web, **Laravel** se ha ganado un lugar privilegiado como el **framework PHP más utilizado y valorado por la comunidad**. Su enfoque elegante, moderno y expresivo ha transformado la forma en que los desarrolladores construyen aplicaciones web con PHP.
<br>
<br>

#### ¿Qué es Laravel?

<br>

**Laravel** es un framework de código abierto para PHP, creado por **Taylor Otwell** en 2011. Está diseñado para hacer que el desarrollo web sea más fácil y limpio, proporcionando una sintaxis clara y herramientas modernas para construir aplicaciones robustas y escalables.

Laravel se basa en el patrón arquitectónico **MVC (Modelo-Vista-Controlador)**, lo que permite una mejor organización del código y separación de responsabilidades.
<br>
<br>

#### ¿Por qué usar Laravel?

<br>

Laravel destaca frente a otros frameworks por varias razones:

- **Sintaxis elegante** y moderna que mejora la legibilidad del código.
- **Sistema de autenticación y autorización** listo para usar.
- **Sistema de enrutamiento** sencillo pero potente.
- **ORM Eloquent**, para interactuar con bases de datos de forma fluida.
- **Migraciones y seeders** para gestionar esquemas de base de datos.
- **Soporte para testing** integrado.
- **Blade**, su propio motor de plantillas limpio y eficiente.
- **Ecosistema robusto**: Laravel incluye herramientas como Laravel Sanctum, Passport, Jetstream, Livewire, entre otros.

<br>
<br>

#### ¿Qué necesitas para comenzar con Laravel?

<br>

Para comenzar a trabajar con Laravel necesitas:

- PHP (versión 8.1 o superior recomendada)
- Composer (gestor de dependencias de PHP)
- Un servidor web como Apache o Nginx (puedes usar Laravel Sail, XAMPP, Laragon, etc.)
- Base de datos MySQL o PostgreSQL

<br>

#### Primeros pasos con Laravel

<br>

##### 1. Instalar Laravel

<br>

Con Composer instalado, ejecuta el siguiente comando:

```bash
composer create-project laravel/laravel nombre-del-proyecto
```

Esto creará una nueva carpeta con todos los archivos de Laravel.
<br>
<br>

##### 2. Iniciar el servidor de desarrollo

<br>

```bash
cd nombre-del-proyecto
php artisan serve
```

Visita [http://localhost:8000](http://localhost:8000) en tu navegador para ver la página de bienvenida de Laravel.
<br>
<br>

##### 3. Crear una ruta y vista personalizada

<br>

Edita el archivo `routes/web.php`:

```php
Route::get('/hola', function () {
    return view('hola');
});
```

Luego, crea el archivo de vista en `resources/views/hola.blade.php`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mi primera vista</title>
  </head>
  <body>
    <h1>¡Hola desde Laravel!</h1>
  </body>
</html>
```

Al ingresar a [http://localhost:8000/hola](http://localhost:8000/hola) verás tu nueva página.

<br>
<br>

#### Recursos recomendados

<br>

- [Documentación oficial de Laravel](https://laravel.com/docs)
- [Laracasts](https://laracasts.com) – Plataforma de aprendizaje para desarrolladores Laravel
- [Packalyst](https://packalyst.com) – Directorio de paquetes para Laravel

<br>

#### Conclusión

<br>

Laravel no solo hace que desarrollar con PHP sea más agradable y moderno, sino que también ofrece un ecosistema completo para construir desde pequeños proyectos hasta grandes plataformas empresariales.

Si estás empezando con PHP o quieres dar un salto de calidad en tus desarrollos, **Laravel es el mejor lugar para comenzar**.
<br>
<br>

### ¿Quieres aprender más?

<br>

En próximas entradas hablaremos sobre:

- _PHP vs JavaScript: diferencias y usos en el desarrollo web._

- _Buenas prácticas al escribir código PHP._

- _Cómo usar Composer: el gestor de dependencias de PHP._
