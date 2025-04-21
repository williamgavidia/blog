---
layout: post
title: "Instalacion Sublime Text 3"
comments: true
date: 2023-11-26 18:00:52
categories: programacion
---

<img src="../../img/sublimetext.png" class="center" />
<br>

> A continuación vamos a ver las tres sencillas líneas para tener instalado en nuestro sistema [Debian][debian] , [Ubuntu][ubuntu], [Linux Mint][linux mint] y sus derivadas uno de los mejores editores de texto que he podido probar, simple y potente [Sublime Text 3][sublime].

<br><br>

<img src="../../img/sublime.png" class="center" />

<br>

Para instalar el editor, solo hay que agregar un repositorio donde se encuentra el instalador, con la siguiente línea.

<div class="b">

<pre>
$ sudo add-apt-repository ppa:webupd8team/sublime-text-3
</pre>

Luego hacemos una actualización de todas las cabeceras de los repositorios que tenemos (algo muy rápido).

 <pre>
$ sudo apt-get update
</pre>

Luego realizamos la instalación del software con la siguiente línea:

<pre>
$ sudo apt-get install sublime-text-installer
</pre>

<br>

Y ya está, aquí una captura de mi instalación, todo ha ido muy bien y ha sido extremadamente fácil, podemos ir a la sección <strong>"desarrollo"</strong> en el lanzador de nuestro sistema, y allí estará disponible nuestro querido editor.
<br>
<br>

<br>
<img src="../../img/sublime-text-linux-mint-ubuntu-debian.png" class="center" />
<br>
<br>

Espero que te haya resultado útil este pequeño artículo y si crees que le puede resultar útil a alguien más, ayúdame a compartirlo.
<br>

</div>

[debian]: https://www.debian.org/
[ubuntu]: http://www.ubuntu.com/
[linux mint]: https://www.linuxmint.com/
[sublime]: https://www.sublimetext.com/
