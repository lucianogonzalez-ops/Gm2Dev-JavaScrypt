# Práctica 05 — Tabla de posiciones desde JSON 🔴

> **Dificultad:** 🔴 desafío

## Objetivo

Integrar todo: recibir datos como un **string JSON** (igual que vendrían de un archivo guardado o de una API), parsearlos y procesarlos con los métodos de array de la clase 06 (`map`, `filter`, `sort`).

## Consigna

Te llega la información de un grupo del Mundial como un único string JSON (simulá que lo leíste de `localStorage` o lo trajiste de un servidor):

```js
const datosJSON = `[
  { "equipo": "Argentina", "ganados": 2, "empatados": 1, "perdidos": 0 },
  { "equipo": "México",    "ganados": 1, "empatados": 1, "perdidos": 1 },
  { "equipo": "Polonia",   "ganados": 0, "empatados": 2, "perdidos": 1 },
  { "equipo": "Arabia",    "ganados": 1, "empatados": 0, "perdidos": 2 }
]`;
```

1. Convertí el string en un array de objetos con `JSON.parse`.
2. Para cada equipo, calculá sus **puntos**: 3 por ganado, 1 por empatado, 0 por perdido. Generá un array nuevo donde cada objeto tenga `equipo` y `puntos` (usá `map`).
3. Ordená la tabla de **mayor a menor** por puntos (usá `sort`, sin mutar el original — acordate del spread de la clase 07).
4. Mostrá la tabla final, por ejemplo: `1. Argentina — 7 pts`.
5. **Cierre:** volvé a convertir la tabla ordenada a un string JSON **con formato** (`JSON.stringify(tabla, null, 2)`), listo para guardarlo de nuevo.

## Pistas

<details><summary>Pista 1 — puntos</summary>

```js
const tabla = equipos.map((e) => ({
  equipo: e.equipo,
  puntos: e.ganados * 3 + e.empatados,
}));
```

</details>

<details><summary>Pista 2 — ordenar sin mutar</summary>

`sort` muta el array. Copiá primero con spread y ordená la copia:
`const ordenada = [...tabla].sort((a, b) => b.puntos - a.puntos);`
De mayor a menor: `b - a`.

</details>

<details><summary>Pista 3 — mostrar con número de posición</summary>

`forEach` te da el índice: `tabla.forEach((e, i) => console.log(`${i + 1}. ${e.equipo} — ${e.puntos} pts`));`

</details>

## Criterios de listo

- [ ] Parseaste el string con `JSON.parse` y obtuviste un array de objetos.
- [ ] Calculaste los puntos de cada equipo con `map`.
- [ ] La tabla quedó ordenada de mayor a menor por puntos, sin mutar el array original.
- [ ] Mostraste la tabla con su número de posición.
- [ ] Reserializaste la tabla final a JSON con formato.

## Bonus

- Agregá un `filter` que arme una lista de los equipos **clasificados** (los 2 primeros) y mostrala aparte.
