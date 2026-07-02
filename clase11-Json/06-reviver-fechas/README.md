# Práctica 06 — Reviver para fechas ⚫

> **Dificultad:** ⚫ profundizar — requiere haber leído [`profundizar.md`](../../profundizar.md).

## Objetivo

Comprobar que una fecha **no** sobrevive intacta al viaje de ida y vuelta de JSON, y usar el **reviver** de `JSON.parse` para reconstruirla automáticamente.

## Consigna

Partís de este objeto con una fecha real:

```js
const evento = {
  partido: "Final",
  fecha: new Date("2026-07-19T18:00:00.000Z"),
};
```

### Parte 1 — comprobar el problema

1. Serializá `evento` con `JSON.stringify` y mostralo. Observá en qué se convirtió la fecha.
2. Hacé `JSON.parse` del resultado (sin reviver) y mostrá `typeof obj.fecha`. Intentá llamar `obj.fecha.getFullYear()` y observá el error.
3. Explicá en un comentario por qué la fecha "se rompió".

### Parte 2 — arreglarlo con un reviver

4. Volvé a hacer `JSON.parse`, esta vez pasando un **reviver** (segundo parámetro): una función `(clave, valor)` que, cuando la clave sea `"fecha"`, devuelva `new Date(valor)`, y en cualquier otro caso devuelva `valor` sin tocar.
5. Verificá que ahora `obj.fecha` es un `Date` y que `obj.fecha.getFullYear()` devuelve `2026`.

## Pistas

<details><summary>Pista 1</summary>

`JSON.stringify` convierte el `Date` en un **string** ISO (`"2026-07-19T18:00:00.000Z"`). `JSON.parse` no sabe que ese string "era" una fecha: lo deja como texto.

</details>

<details><summary>Pista 2 — el reviver</summary>

```js
const obj = JSON.parse(texto, (clave, valor) => {
  if (clave === "fecha") return new Date(valor);
  return valor;
});
```

</details>

## Criterios de listo

- [ ] Mostraste que `stringify` convierte el `Date` en un string ISO.
- [ ] Sin reviver, `obj.fecha` es un `"string"` y `getFullYear()` falla.
- [ ] Con el reviver, `obj.fecha` es un `Date` y `getFullYear()` da `2026`.

## Bonus

- Generalizá el reviver para que convierta **cualquier** valor con pinta de fecha ISO, sin depender del nombre de la clave. Pista: `typeof valor === "string" && /^\d{4}-\d{2}-\d{2}T/.test(valor)`.
