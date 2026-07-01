# Práctica 01 — Contador de goles 🟢

> Dificultad: 🟢 base

## Objetivo

Registrar tu primer manejador de eventos con `addEventListener` y actualizar el DOM en respuesta a un clic.

## Contexto

Estás haciendo un marcador para un partido del Mundial 2026. Cada vez que se hace clic en el botón **¡Gol!**, el contador tiene que subir en uno y mostrarse en pantalla.

El HTML ya está armado en `index.html`: un `<button>`, un `<span>` donde va el número y una variable `goles` arrancada en `0`.

## Consigna

Completá el bloque `<script>` para que:

1. Selecciones el botón y el `<span>` del marcador con `querySelector`.
2. Registres un manejador de `"click"` sobre el botón usando `addEventListener` y una **arrow function inline**.
3. Dentro del manejador: sumes 1 a la variable `goles` y escribas el nuevo valor en el `<span>` con `textContent`.

## Pistas

<details><summary>Pista 1 — la forma del listener</summary>

```js
boton.addEventListener("click", () => {
  // este código corre en cada clic
});
```

Acordate: la función va **sin `()`** de ejecución. La estás definiendo, no llamando.

</details>

<details><summary>Pista 2 — actualizar el marcador</summary>

Dentro del manejador, primero incrementá (`goles = goles + 1` o `goles++`) y después asigná: `marcador.textContent = goles;`

</details>

## Criterios de listo

- [ ] Al cargar la página, el marcador muestra `0`.
- [ ] Cada clic en el botón aumenta el número en uno.
- [ ] El número se actualiza en la página, no solo en la consola.
- [ ] Usaste `addEventListener("click", ...)`, no el atributo `onclick` del HTML.
