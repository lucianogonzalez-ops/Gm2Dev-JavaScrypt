# Práctica 06 — Event delegation: lista de tareas ⚫

> Dificultad: ⚫ profundizar — ligada a [`profundizar.md`](../../profundizar.md). Va más allá del recorrido obligatorio.

## Objetivo

Manejar eventos de muchos elementos (incluidos los que se crean después) con **un solo manejador** en el contenedor padre, usando `event.target`.

## Contexto

Una lista de tareas con dos comportamientos:

- Al hacer clic en **Agregar**, se crea una tarea nueva con el texto del input.
- Al hacer clic en **cualquier** tarea de la lista, esa tarea se marca como completada (clase `hecha`, que la tacha por CSS).

El detalle interesante: las tareas que vas agregando con el botón también tienen que poder marcarse. Si le pusieras un manejador a cada `<li>` al crearlo, funcionaría, pero hay una forma más elegante: **un solo manejador en el `<ul>`**.

## Consigna

1. Al hacer clic en **Agregar**, creá un `<li>` con el texto del input y agregalo al `<ul>`. Limpiá el input después.
2. Registrá **un único** manejador de `"click"` sobre el `<ul>` (no sobre cada `<li>`).
3. Dentro, usá `event.target` para identificar en qué `<li>` se hizo clic y alterná su clase `hecha` con `classList.toggle`.
4. Verificá que las tareas **agregadas después** también se puedan marcar.

## Pistas

<details><summary>Pista 1 — por qué un solo manejador alcanza</summary>

El evento de clic en un `<li>` **burbujea** hacia arriba hasta el `<ul>`. Si escuchás en el `<ul>`, te enterás de los clics de todos sus hijos, presentes y futuros. Eso es *event delegation*.

</details>

<details><summary>Pista 2 — saber dónde se hizo clic</summary>

`event.target` es el elemento exacto donde ocurrió el clic. Para asegurarte de que fue un `<li>` (y no, por ejemplo, el espacio del `<ul>`), chequeá `event.target.tagName === "LI"`.

</details>

<details><summary>Pista 3 — esqueleto</summary>

```js
lista.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("hecha");
  }
});
```

</details>

## Criterios de listo

- [ ] El botón Agregar suma tareas nuevas con el texto del input.
- [ ] Hacer clic en una tarea la tacha; otro clic la destacha.
- [ ] Las tareas agregadas dinámicamente también se marcan al hacer clic.
- [ ] Hay **un solo** `addEventListener("click", ...)` para todas las tareas, registrado en el `<ul>`.
