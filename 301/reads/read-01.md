# Lecturas: Introducción a React y los Componentes

## Component-Based Architecture

### ¿Qué es un “componente”?

Un componente es, en palabras sencillas, un objeto o pieza que tiene la capacidad de encapsular un conjunto de funcionalidades, estructura y estilos de una parte del código, como si de un módulo se tratase, con la capacidad de combinarse con otros "módulos" para crear un componente aún mas grande. Cada componente en sí es como una pequeña solución a un problema o requierimiento específico, que en conjunto con otros, crean la gran solución o funcionalidad total de una aplicación web.

### ¿Cuáles son las características de un componente?

- Reutilización: Al ser diseñados para una tarea o requerimiento específico, podemos volver a utilizarlos cuantas veces queramos si así el código lo necesitara.
- Reemplazable: Al ser "modulares", podemos reemplazarlos por otros con funciones similares según sea necesario.
- Extensible: Se pueden unir a otros componentes para crear uno totalmente nuevo, dando infinitas combinaciones.
- Encapsulado: Las propiedades o procesos internos de cada componente no son expuestos al exterior, por lo que el ámbito del componente no se ve afectado.
- Independiente: Al ser diseñados para no depender de otros componentes, pueden funcionar sin un contexto específico, sino que pueden ser totalemnte versátiles y un mismo componente con la combinación adecuada, puede hacer tareas totalmente distintas.

### ¿Cuáles son las ventajas de utilizar una arquitectura basada en componentes?

Existen diversas ventajas al utilizar esta arquitectura, siendo las más destacadas, por ejemplo, que la opción de poder utilizar componentes ya generados por terceros abarate de forma considerable el coste de implementación y sea mucho más sencillo su mantenimiento. Además, el desarollo en sí suele ser mucho más fácil debido a que podemos incrementar funcionalidades sin que tengamos que mover algo previamente implementado. Además, al ser reutilizable y versátil, genera un nivel alto de confiabilidad, dando la seguridad de que el dev sabe exactamente que hace cada componente y sabe exactamente donde y cuando usarlos.

## What is Props and How to Use it in React

### ¿Qué significa “props”?

Props es la abreviatura de propiedades en REACT, las cuales permiten a los componentes enviar y recibir información entre sí.

### ¿Cómo se utilizan los props en React?

Dentro de una etiqueta previamente configurada, las propiedades o props funcionan como si fueran palabras reservadas del código, en donde se pueden añadir valores que el componente utilizará según convenga para renderizar la interfaz.

### ¿Cuál es el flujo de los props?

El flujo de props es unidireccional, esto quiere decir que sólo y únicamente va en un solo sentido de padre a hijo. El componente hijo no puede modificar la información del componente padre y en caso necesite hacerlo, tiene que indicar al componente padre que envíe la información modificada.
