# Práctica 02 — JSON con formato 🟢

> **Dificultad:** 🟢 base

## Objetivo

Serializar un objeto más grande y usar el tercer parámetro de `JSON.stringify` para obtener un texto **indentado y legible**.

## Consigna

1. Creá un objeto `equipo` con:
   - `pais: "Argentina"`
   - `grupo: "C"`
   - `jugadores`: un array con `"Messi"`, `"Dybala"` y `"Álvarez"`
2. Mostrá el equipo serializado **en una sola línea** con `JSON.stringify(equipo)`. Observá lo apretado que queda.
3. Mostrá el equipo serializado **con formato** usando `JSON.stringify(equipo, null, 2)`. Compará: ahora se lee cómodo, con saltos de línea e indentación.
4. Probá cambiar el `2` por `4` y observá la diferencia (más espacios de sangría).

## Pistas

<details><summary>Pista 1</summary>

El tercer parámetro de `stringify` es la cantidad de espacios de indentación:
`JSON.stringify(equipo, null, 2)`. El segundo (`null`) lo dejás así por ahora.

</details>

<details><summary>Pista 2</summary>

La versión con formato es ideal para **leer** datos en la consola. La versión en una sola línea es la que conviene para guardar o enviar (ocupa menos).

</details>

## Criterios de listo

- [ ] El objeto `equipo` tiene `pais`, `grupo` y el array `jugadores`.
- [ ] Mostraste la versión compacta (una línea) y la versión con formato.
- [ ] Entendés que el `2` controla la indentación y el `null` va en el medio.
