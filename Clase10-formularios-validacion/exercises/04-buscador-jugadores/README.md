# Práctica 04 — Buscador de jugadores

**Dificultad:** 🔴 desafío

## Contexto

Abrí `index.html`. Hay una lista de jugadores del Mundial renderizada en el DOM y un campo de búsqueda arriba. Tu trabajo es hacer que el campo filtre los jugadores **en tiempo real** mientras el usuario escribe.

No hay botón ni evento `submit`. El filtrado ocurre con el evento `input`, que se dispara cada vez que el texto del campo cambia.

## Consigna

1. Escuchá el evento `input` en el campo `#buscador`.
2. Tomá el texto que el usuario escribió (`.value`), convertilo a minúsculas con `.toLowerCase()`.
3. Para cada tarjeta de jugador (`.jugador`), compará el texto del campo con el nombre del jugador.
   - Si el nombre **incluye** el texto buscado → mostrá la tarjeta (`style.display = ""`).
   - Si no lo incluye → ocultala (`style.display = "none"`).
4. Si no hay ningún resultado visible, mostrá el párrafo `#sin-resultados`. Si hay al menos uno, ocultalo.

## Pistas

<details><summary>Pista 1 — ¿Cómo obtengo todas las tarjetas?</summary>

```js
const tarjetas = document.querySelectorAll(".jugador");
```

`querySelectorAll` devuelve un `NodeList`. Podés recorrerlo con `for...of`.

</details>

<details><summary>Pista 2 — ¿Cómo comparo sin importar mayúsculas?</summary>

Convertí tanto el texto del buscador como el nombre del jugador a minúsculas antes de comparar:

```js
const busqueda = document.querySelector("#buscador").value.toLowerCase();
const nombre   = tarjeta.querySelector(".nombre").textContent.toLowerCase();

nombre.includes(busqueda);
```

</details>

<details><summary>Pista 3 — ¿Cómo muestro u oculto un elemento con JS?</summary>

```js
elemento.style.display = "none";  // ocultar
elemento.style.display = "";      // mostrar (vuelve al valor del CSS)
```

</details>

<details><summary>Pista 4 — ¿Cómo sé si no hay resultados?</summary>

Podés contar cuántas tarjetas están visibles dentro del loop. Si al final el contador es `0`, mostrá el mensaje `#sin-resultados`.

</details>

## Criterios de listo

- [ ] Al escribir en el buscador, la lista se filtra en tiempo real (sin botón ni Enter).
- [ ] La búsqueda no distingue entre mayúsculas y minúsculas (`"messi"` encuentra a `"Lionel Messi"`).
- [ ] Si no hay resultados, aparece el mensaje `#sin-resultados`.
- [ ] Al borrar el texto del buscador, vuelven a aparecer todos los jugadores.
