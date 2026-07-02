# Práctica 05 — Panel de jugadores favoritos 🔴

> **Dificultad:** desafío  
> **Tiempo estimado:** 45–60 minutos

## Contexto

Ya sabés guardar un valor simple y guardar un array de strings. Ahora el desafío es manejar un array de **objetos** en localStorage: guardar, leer, renderizar y borrar entradas, todo articulado alrededor de una función central.

## Punto de partida

Abrí `index.html`. Ya tiene:
- Un formulario con dos campos: nombre del jugador y posición (por ejemplo, "Delantero", "Mediocampista").
- Un botón **Agregar**.
- Una lista vacía `<ul id="lista">`.
- Un botón **Limpiar todo**.

Nada funciona todavía. Tu trabajo es implementar toda la lógica.

## Tu tarea

1. Al hacer click en **Agregar**:
   - Leer los valores del formulario.
   - Crear un objeto `{ nombre, posicion }` y agregarlo al array de jugadores.
   - Guardar el array completo en `localStorage` (clave `"jugadores"`) usando `JSON.stringify`.
   - Llamar a `renderizarLista()` para actualizar el DOM.
   - Limpiar los campos del formulario.

2. Implementar `renderizarLista()`:
   - **Leer el array desde `localStorage`** (no desde una variable global).
   - Limpiar la lista (`lista.innerHTML = ""`).
   - Por cada jugador, crear un `<li>` con su nombre, su posición y un botón **✕**.
   - El botón **✕** debe eliminar ese jugador del array, actualizar `localStorage` y volver a llamar a `renderizarLista()`.

3. El botón **Limpiar todo** debe:
   - Llamar a `localStorage.removeItem("jugadores")`.
   - Llamar a `renderizarLista()` para limpiar el DOM.

4. Al cargar la página, llamar a `renderizarLista()` para restaurar la lista desde `localStorage`.

## Criterios de "listo"

- [ ] Puedo agregar jugadores con nombre y posición.
- [ ] Al recargar, la lista se restaura completa.
- [ ] El botón **✕** elimina solo el jugador correcto.
- [ ] El botón **Limpiar todo** borra la lista y la clave de localStorage.
- [ ] `renderizarLista()` siempre lee desde `localStorage`, nunca desde una variable en memoria.

## Pistas

- `renderizarLista()` debe empezar con: `const jugadores = JSON.parse(localStorage.getItem("jugadores")) || [];`
- Para eliminar por índice: `jugadores.splice(indice, 1)`, después `localStorage.setItem(...)` y `renderizarLista()`.
- Acordate de validar que los campos no estén vacíos antes de agregar.

## ¿Por qué leer desde localStorage en cada render?

La consigna te pide que `renderizarLista()` lea desde `localStorage` y no desde una variable global. Pensá: ¿qué problema resolvería eso si la página estuviera abierta en dos pestañas? ¿Qué pasaría si en cambio leyeras de una variable en memoria?
