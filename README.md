
# BeautyShop Talento Tech - Entrega Final

Este repositorio corresponde al proyecto **BeautyShop**, una tienda web estática de productos de belleza desarrollada como parte de la entrega final para el programa Talento Tech. A continuación se detalla la estructura, contenido y funcionamiento de cada componente.

---

## 📋 Tabla de Contenidos

1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Estructura de Archivos](#estructura-de-archivos)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Instalación y Ejecución](#instalación-y-ejecución)
5. [Detalle de las Páginas](#detalle-de-las-páginas)
6. [Hoja de Estilos (CSS)](#hoja-de-estilos-css)
7. [Lógica de JavaScript (JS)](#lógica-de-javascript-js)
8. [Buenas Prácticas y Recomendaciones](#buenas-prácticas-y-recomendaciones)
9. [Autor y Licencia](#autor-y-licencia)

---

## 📌 Descripción del Proyecto

BeautyShop es una **tienda web estática** que simula la experiencia de compra de productos de belleza. Incluye:

* **Listado de productos**: catálogo con información dinámica.
* **Carrito de compras**: funcionalidad para agregar, ver y eliminar productos.
* **Interfaz responsiva**: diseño sencillo y adaptable.

Es ideal para comprender el flujo completo de una tienda: desde la carga de productos hasta la persistencia del carrito en el navegador.

---


## 🚀 Tecnologías Utilizadas

* **HTML5**: Estructura semántica de las páginas.
* **CSS3**: Estilos básicos y diseño responsivo.
* **JavaScript (Vanilla)**: Manipulación del DOM, eventos y almacenamiento local.

No se emplean frameworks externos; todo el proyecto está creado con herramientas nativas del navegador.

---

## ⚙️ Instalación y Ejecución

1. Clonar este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/BeautyShop-Talento-Tech-Entrega-Final.git
   ```
2. Abrir el directorio:

   ```bash
   cd BeautyShop-Talento-Tech-Entrega-Final-main
   ```
3. Abrir cualquiera de las páginas HTML en tu navegador:

   * `index.html`
   * `productos.html`
   * `carrito.html`

> **Nota:** Estas páginas funcionan de forma local sin necesidad de servidor.

---

## 📄 Detalle de las Páginas

### 1. `index.html`

* Punto de entrada del sitio.
* Contiene enlaces de navegación a las otras páginas.
* Presenta un banner o bienvenida.

### 2. `productos.html`

* Muestra un catálogo de productos.
* Cada producto cuenta con imagen, nombre, precio y botón "Agregar al carrito".

### 3. `carrito.html`

* Lista los productos añadidos al carrito.
* Permite eliminar productos individualmente.
* Muestra el total acumulado.
* Utiliza `localStorage` para mantener el estado entre recargas.

---

## 🎨 Hoja de Estilos (CSS)

* `css/styles.css`

  * Reset básico de estilos.
  * Definición de tipografías, colores y espacios.
  * Clases utilitarias para botones, contenedores y diseños de grid/flex.
  * Media queries para pantallas móviles.

---

## 🛠️ Lógica de JavaScript (JS)

### `js/common.js`

* Funciones reutilizables:

  * Lectura/Escritura en `localStorage`.
  * Cálculo de totales.
  * Plantillas HTML dinámicas.

### `js/productos.js`

* Carga de array de productos.
* Renderización en la página `productos.html`.
* Manejo del evento de "Agregar al carrito".

### `js/carrito.js`

* Obtención del estado del carrito desde `localStorage`.
* Renderización dinámica de los ítems en `carrito.html`.
* Funcionalidad de eliminación de productos.
* Actualización del total y persistencia.

---
## 🔗 Enlace en GitHub Pages

La aplicación está alojada en GitHub Pages y puedes accederla mediante el siguiente enlace:

[BeautyShop en GitHub Pages](https://nahubor.github.io/BeautyShop-Talento-Tech-Entrega-Final/)

---
