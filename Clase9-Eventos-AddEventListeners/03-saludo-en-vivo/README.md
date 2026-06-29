# Práctica 03 — Saludo en vivo con `input` 🟡

> Dificultad: 🟡 intermedia

## Objetivo

Usar el evento `input` y leer lo que el usuario escribe con `event.target.value`, actualizando el DOM en vivo.

## Contexto

Querés un saludo que se arme letra por letra a medida que el usuario escribe su nombre. Sin botón, sin enviar nada: apenas tipea, el saludo se actualiza.

El HTML tiene un `<input>` y un `<span>` donde va el nombre.

## Consigna

Completá el `<script>` para que:

1. Selecciones el `<input>` (`#nombre`) y el `<span>` de salida (`#salida`).
2. Registres un manejador del evento `"input"` sobre el campo.
3. En cada cambio, escribas lo tipeado dentro del `<span>`, leyéndolo desde el `event`.
4. **Extra:** si el campo queda vacío, mostrá un texto por defecto como `"..."` en lugar de un saludo vacío.

## Pistas

<details><summary>Pista 1 — qué evento</summary>

`"input"` se dispara en **cada tecla**, mientras el usuario escribe. Es justo lo que queremos para algo "en vivo".

</details>

<details><summary>Pista 2 — de dónde sale el texto</summary>

El callback recibe el objeto `event`. Lo tipeado está en `event.target.value`.

```js
campo.addEventListener("input", (event) => {
  salida.textContent = event.target.value;
});
```

</details>

<details><summary>Pista 3 — el caso vacío</summary>

`event.target.value` es `""` (string vacío) cuando no hay nada escrito. Podés usar un `if` o el operador `||`: `event.target.value || "..."`.

</details>

## Criterios de listo

- [ ] Al escribir en el campo, el saludo se actualiza letra por letra.
- [ ] No hay que apretar ningún botón ni recargar.
- [ ] Leés el valor desde `event.target.value`.
- [ ] Si el campo está vacío, se muestra el texto por defecto.
