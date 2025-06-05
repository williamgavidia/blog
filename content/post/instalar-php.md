---
title: "Cómo instalar un entorno PHP en tu computadora"
comments: true
date: 05 jun 2025
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
<img src="../../img/PHP-logo.png" width="500" height="400"/>
</p>
<br>

[PHP] sigue siendo uno de los lenguajes de programación más utilizados para el desarrollo web. Si estás empezando o necesitas un entorno local para trabajar en tus proyectos, en esta guía te enseñaré cómo instalar todo lo necesario para ejecutar PHP en tu computadora, paso a paso.
<br>
<br>

#### ¿Qué necesitas para trabajar con PHP?

<br>
Un entorno PHP básico incluye:
<br><br>

- **PHP** (el lenguaje en sí)
- **Servidor web** (como Apache o Nginx)
- **Base de datos** (como MySQL o MariaDB)
- **Editor de código** (como VS Code, Sublime Text o PHPStorm)

Para facilitar la instalación de todo esto, puedes optar por un paquete "todo en uno" o instalar los componentes por separado.

<br>

### Opción recomendada: usar un paquete como XAMPP, MAMP o Laragon

<br>

#### XAMPP (Windows, macOS, Linux)

<br>

[XAMPP] es uno de los entornos más populares para PHP. Incluye **Apache, MySQL, PHP y phpMyAdmin** en un solo instalador.

<br>

#### Cómo instalar XAMPP:

<br>

1. Ve a [https://www.apachefriends.org](https://www.apachefriends.org)
2. Descarga la versión para tu sistema operativo.
3. Ejecuta el instalador y sigue los pasos.
4. Abre el **Panel de Control de XAMPP** y activa [Apache] y [MySQL].

Tu entorno PHP estará listo y podrás acceder a tus proyectos desde:
<br>

[http://localhost](http://localhost)

> Tus archivos deben ir en la carpeta `htdocs` dentro del directorio donde se instaló XAMPP.

<br>

### Opción alternativa: instalar PHP manualmente (más flexible)

<br>

#### 1. Instalar PHP

<br>

**Windows:**

- Descarga PHP desde: [https://windows.php.net/download/](https://windows.php.net/download/)
- Descomprime el archivo y agrega la carpeta a la variable de entorno `PATH`.

**macOS/Linux:**

```bash
 # macOS
 brew install php

 # Ubuntu/Debian
 sudo apt install php
```

Verifica la instalación con:

```bash
 php -v
```

<br>

#### 2. Instalar servidor web (Apache o Nginx)

<br>

En Ubuntu:

```bash
 sudo apt install apache2
```

En macOS, puedes usar Homebrew o MAMP.

<br>

#### 3. Instalar base de datos

<br>

```bash
 sudo apt install mysql-server
```

O puedes usar [MariaDB] como alternativa.

<br>

#### Estructura de archivos para un proyecto PHP

<br>

```bash
 mi-proyecto/
 ├── index.php
 ├── style.css
 └── js/
     └── script.js
```

Puedes crear tu primer archivo `index.php` con el siguiente contenido de prueba:

```bash
 <?php
 echo "¡Hola, mundo desde PHP!";
 ?>
```

<br>

#### Probar tu instalación

<br>
Abre tu navegador y escribe:

<br>

```bash
 http://localhost
```

Si ves tu mensaje **"¡Hola, mundo desde PHP!"**, ¡felicidades! Tu entorno PHP está funcionando correctamente.

<br>

#### Herramientas adicionales recomendadas

<br>

- [phpMyAdmin]: para gestionar bases de datos MySQL/MariaDB desde el navegador.
- [Composer]: gestor de dependencias para proyectos PHP.

```bash
 curl -sS https://getcomposer.org/installer | php
```

- [VS Code] **con extensión PHP Intelephense:** para una mejor experiencia de desarrollo.

<br>

#### Conclusión

<br>
Instalar un entorno PHP en tu computadora es el primer paso para desarrollar aplicaciones web dinámicas de forma local. Ya sea que elijas una solución todo en uno como XAMPP o prefieras instalar los componentes por separado, tener este entorno te permitirá trabajar cómodamente y probar tus proyectos antes de publicarlos en línea.

[PHP]: https://www.php.net/
[phpMyAdmin]: https://www.phpmyadmin.net/
[Composer]: https://getcomposer.org/
[Nginx]: https://nginx.org/
[Apache]: https://httpd.apache.org/
[MariaDB]: https://mariadb.org/
[MySQL]: https://www.mysql.com/
[VS Code]: https://code.visualstudio.com/
[XAMPP]: https://www.apachefriends.org/es/index.html
