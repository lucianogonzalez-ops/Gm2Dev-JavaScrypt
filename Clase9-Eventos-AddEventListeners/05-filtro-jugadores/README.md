# Práctica 05 — Filtro de jugadores en vivo 🔴

> Dificultad: 🔴 desafío

## Objetivo

Resolver, sin andamiaje, un buscador en vivo que integra todo: generar el DOM desde un array (clase 08), escuchar el evento `input` y filtrar la lista según lo que el usuario escribe.

## Contexto

Tenés un array con jugadores del Mundial y un campo de búsqueda. Mientras el usuario escribe, la lista tiene que mostrar **solo** los jugadores cuyo nombre contiene lo tipeado. Si borra todo, vuelven a aparecer todos.

El `index.html` te da el array `jugadores`, un `<input>` y un `<ul>` vacío. El resto es tuyo.

## Consigna

1. **Renderizá** la lista: por cada jugador del array, creá un `<li>` con su nombre y agregalo al `<ul>` (como en la clase 08).
2. **Escuchá** el evento `"input"` del campo de búsqueda.
3. En cada cambio, **mostrá u ocultá** cada `<li>` según si su texto contiene lo tipeado. La búsqueda tiene que ignorar mayúsculas/minúsculas.
4. Si el campo queda vacío, se ven todos.

## Pistas

<details><summary>Pista 1 — partí el problema en dos</summary>

Primero resolvé solo el renderizado (que aparezcan todos los jugadores). Recién cuando eso funciona, agregá el filtro.

</details>

<details><summary>Pista 2 — comparar sin importar mayúsculas</summary>

Pasá ambos lados a minúscula con `.toLowerCase()` antes de comparar. Para ver si un texto contiene otro, usá `.includes()`:

```js
"Messi".toLowerCase().includes("mes"); // true
```

</details>

<details><summary>Pista 3 — recorrer los li ya creados</summary>

Dentro del manejador, conseguí todos los `<li>` con `querySelectorAll` y recorrelos con `for...of`. Para cada uno, decidí `li.style.display = "none"` (ocultar) o `li.style.display = ""` (mostrar).

</details>

<details><summary>Pista 4 — estructura general</summary>

```js
buscador.addEventListener("input", (event) => {
  const texto = event.target.value.toLowerCase();
  const items = document.querySelectorAll("#lista li");

  for (const li of items) {
    const coincide = li.textContent.toLowerCase().includes(texto);
    li.style.display = coincide ? "" : "none";
  }
});
```

</details>

## Criterios de listo

- [ ] Al cargar, se ven todos los jugadores (generados desde el array, no escritos en el HTML).
- [ ] Al escribir, la lista muestra solo los que coinciden, en vivo.
- [ ] La búsqueda ignora mayúsculas/minúsculas (`messi` encuentra a `Messi`).
- [ ] Al borrar el texto, reaparecen todos.

## Para pensar

- ¿Qué pasa si en vez de ocultar/mostrar `<li>` existentes, borrás y re-creás la lista entera en cada tecla? ¿Qué enfoque te parece mejor y por qué?
