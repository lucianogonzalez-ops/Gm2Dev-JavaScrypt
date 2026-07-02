# Práctica 04 — ¿Qué se pierde al serializar? 🟡

> **Dificultad:** 🟡 intermedia

## Objetivo

Comprobar de primera mano qué datos **no** sobreviven a `JSON.stringify` y explicar por qué, para no llevarte sorpresas al guardar o enviar objetos.

## Consigna

1. Creá un objeto `partido` con estas propiedades:
   - `local: "Argentina"`
   - `visitante: "Brasil"`
   - `jugado: false`
   - `golesLocal: undefined`
   - `relatar: () => "¡Gooool!"` (una función)
2. **Antes de correrlo**, escribí en un comentario qué propiedades creés que van a sobrevivir a `JSON.stringify`.
3. Mostrá `JSON.stringify(partido)` y compará con tu predicción.
4. En un comentario, explicá por qué `golesLocal` y `relatar` no aparecen en el resultado.
5. **Extra:** hacé el viaje de vuelta con `JSON.parse` y verificá que el objeto reconstruido tiene solo las propiedades que sobrevivieron.

## Pistas

<details><summary>Pista 1</summary>

JSON solo representa **datos**: strings, números, booleanos, `null`, arrays y objetos. Lo que no es un dato (una **función**) o no tiene representación (`undefined`) se descarta sin aviso.

</details>

<details><summary>Pista 2</summary>

`booleano false` **sí** es un dato válido: no confundas `false` con "vacío". `jugado: false` sobrevive perfectamente. El que se cae es `undefined`.

</details>

## Criterios de listo

- [ ] Escribiste tu predicción antes de correr el código.
- [ ] El `stringify` muestra solo `local`, `visitante` y `jugado`.
- [ ] Explicaste por qué `golesLocal` (undefined) y `relatar` (función) desaparecen.
