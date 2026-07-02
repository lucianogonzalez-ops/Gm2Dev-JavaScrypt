# Práctica 03 — Arreglar el JSON roto 🟡

> **Dificultad:** 🟡 intermedia

## Objetivo

Identificar por qué un texto falla en `JSON.parse` y corregirlo aplicando las reglas del JSON válido.

## Consigna

Te pasan estos tres strings, supuestamente JSON, que vienen de archivos escritos a mano. Los tres **fallan** al hacer `JSON.parse`. Tu tarea es arreglarlos.

```js
const roto1 = "{'nombre': 'Messi', 'goles': 8}";
const roto2 = '{nombre: "Messi", goles: 8}';
const roto3 = '{"nombre": "Messi", "goles": 8,}';
```

Para cada uno:

1. Antes de tocar nada, **identificá en un comentario** qué regla de JSON está rompiendo.
2. Escribí la versión corregida como un string JSON **válido**.
3. Verificá que `JSON.parse(corregido)` ahora funcione y mostrá el `nombre` del objeto resultante.

## Pistas

<details><summary>Pista 1 — las reglas</summary>

JSON válido exige:
- Comillas **dobles** en claves y en strings (nunca simples).
- **Todas** las claves entre comillas.
- **Sin** coma final después del último elemento.

</details>

<details><summary>Pista 2 — qué le pasa a cada uno</summary>

- `roto1`: usa comillas **simples** en vez de dobles.
- `roto2`: las **claves** no tienen comillas.
- `roto3`: tiene una **coma final** después de `8`.

</details>

## Criterios de listo

- [ ] Identificaste la regla rota en cada uno de los tres.
- [ ] Los tres corregidos pasan por `JSON.parse` sin error.
- [ ] Cada objeto resultante tiene `nombre: "Messi"` y `goles: 8`.
