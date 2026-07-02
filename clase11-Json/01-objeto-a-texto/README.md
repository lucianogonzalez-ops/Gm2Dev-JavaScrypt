# Práctica 01 — De objeto a texto y vuelta 🟢

> **Dificultad:** 🟢 base

## Objetivo

Hacer el viaje de ida y vuelta de JSON: convertir un objeto a texto con `JSON.stringify` y reconstruirlo con `JSON.parse`, viendo en cada paso qué tipo de dato tenés.

## Consigna

1. Creá un objeto `jugador` con `nombre: "Messi"`, `pais: "Argentina"` y `goles: 8`.
2. Convertilo a texto con `JSON.stringify` y guardalo en una variable `texto`.
3. Mostrá `texto` y mostrá `typeof texto`. Confirmá que es un `"string"`.
4. Intentá leer `texto.nombre` y mostralo. Observá qué da y **explicá en un comentario por qué**.
5. Convertí `texto` de vuelta a un objeto con `JSON.parse`, guardalo en `objeto`.
6. Mostrá `objeto.nombre` y `typeof objeto`. Confirmá que ahora sí podés leer la propiedad.

## Pistas

<details><summary>Pista 1</summary>

`const texto = JSON.stringify(jugador);` te da un string.
`const objeto = JSON.parse(texto);` te lo devuelve como objeto.

</details>

<details><summary>Pista 2</summary>

`texto.nombre` da `undefined` porque `texto` es un **string**, no un objeto. Un string no tiene una propiedad `nombre`. Recién después de `JSON.parse` volvés a tener un objeto con propiedades.

</details>

## Criterios de listo

- [ ] `texto` es un string (lo confirmaste con `typeof`).
- [ ] `texto.nombre` da `undefined` y explicaste por qué en un comentario.
- [ ] `objeto.nombre` da `"Messi"` y `typeof objeto` es `"object"`.
