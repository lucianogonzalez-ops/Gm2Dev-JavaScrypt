# Práctica 04 — Modo oscuro con `classList.toggle` 🟡

> Dificultad: 🟡 intermedia

## Objetivo

Combinar eventos (clase de hoy) con `classList` (clase pasada): un clic que alterna una clase CSS en la página.

## Contexto

Vas a agregarle a tu página un botón para cambiar entre modo claro y modo oscuro. Toda la lógica visual ya está en el CSS: hay una clase `oscuro` que, cuando está presente en el `<body>`, invierte los colores. Tu trabajo en JavaScript es **prenderla y apagarla** con un clic.

El CSS y el HTML ya están listos en `index.html`.

## Consigna

Completá el `<script>` para que:

1. Selecciones el botón (`#toggle-tema`).
2. Al hacer clic, **alternes** la clase `oscuro` en el `<body>` (si está, la saca; si no, la agrega).
3. **Extra:** cambiá el texto del botón según el modo: `"🌙 Modo oscuro"` cuando está en claro, `""☀️ Modo claro` cuando está en oscuro.

## Pistas

<details><summary>Pista 1 — el body desde JS</summary>

Al `<body>` lo conseguís con `document.body` (no hace falta `querySelector`).

</details>

<details><summary>Pista 2 — alternar la clase</summary>

`classList.toggle("oscuro")` agrega la clase si no está y la saca si está. Una sola línea hace el trabajo de prender y apagar.

</details>

<details><summary>Pista 3 — saber en qué modo estás</summary>

`toggle` **devuelve** `true` si la clase quedó puesta y `false` si quedó sacada. Podés usar ese resultado para decidir el texto del botón:

```js
const esOscuro = document.body.classList.toggle("oscuro");
```

</details>

## Criterios de listo

- [ ] El primer clic pone la página en modo oscuro; el siguiente la vuelve a claro; y así.
- [ ] Usaste `classList.toggle`, no `add`/`remove` con un `if` manual (aunque eso también funcionaría).
- [ ] El texto del botón refleja el modo actual.
