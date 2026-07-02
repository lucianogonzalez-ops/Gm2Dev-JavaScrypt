# Práctica 04 — Lista de tareas persistente 🟡

> **Dificultad:** intermedia  
> **Tiempo estimado:** 30–40 minutos

## Contexto

Una lista de tareas es uno de los ejemplos más clásicos para practicar arrays, DOM y ahora localStorage. En esta práctica vas a juntar todo eso: las tareas deben sobrevivir a la recarga de la página.

## Punto de partida

Abrí `index.html`. Ya tiene:
- Un campo de texto y un botón "Agregar" para ingresar tareas.
- Una lista `<ul>` donde van a aparecer las tareas.
- Un párrafo que muestra cuántas tareas pendientes hay.

Nada funciona todavía. Tu trabajo es implementar toda la lógica.

## Tu tarea

1. Guardar las tareas en un array de objetos. Cada tarea tiene:
   - `texto`: el string que escribió el usuario.
   - `hecha`: booleano, empieza en `false`.

2. Al agregar una tarea:
   - Crear el objeto, agregarlo al array.
   - Guardar el array actualizado en `localStorage` (clave `"tareas"`).
   - Renderizar la lista en el DOM.

3. Al cargar la página:
   - Leer el array de `localStorage`. Si no hay nada, usar `[]`.
   - Mostrar las tareas guardadas.

4. Cada tarea en la lista debe tener un botón "Borrar" que:
   - Elimina esa tarea del array.
   - Actualiza `localStorage`.
   - Vuelve a renderizar la lista.

5. Mostrar el conteo de tareas pendientes (las que tienen `hecha: false`).

## Criterios de "listo"

- [ ] Puedo agregar tareas y aparecen en la lista.
- [ ] Al recargar, las tareas siguen estando.
- [ ] El botón "Borrar" elimina la tarea correcta.
- [ ] El contador de pendientes se actualiza al agregar o borrar.
- [ ] En DevTools puedo ver el array JSON guardado en Local Storage.

## Pistas

- Para guardar el array: `localStorage.setItem("tareas", JSON.stringify(tareas))`.
- Para leerlo: `JSON.parse(localStorage.getItem("tareas")) || []`.
- Para limpiar y volver a renderizar la lista: `lista.innerHTML = ""` y después crear los `<li>` de nuevo.
- Para identificar qué tarea borrar, podés usar el índice (`index`) del elemento en el array.
- El contador de pendientes: `tareas.filter(t => !t.hecha).length`.

## Desafío opcional

Si terminás antes, agregá la posibilidad de marcar una tarea como hecha haciendo click en su texto. Las tareas hechas deben verse con tachado (`text-decoration: line-through`).
