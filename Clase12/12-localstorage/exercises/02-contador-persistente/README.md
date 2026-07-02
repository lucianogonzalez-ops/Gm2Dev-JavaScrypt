# Práctica 02 — Contador persistente 🟢

> **Dificultad:** base  
> **Tiempo estimado:** 15–20 minutos

## Contexto

Ya sabés cómo hacer un contador con JavaScript. El problema es que cada vez que recargás la página, el valor vuelve a 0. En esta práctica vas a arreglar eso usando `localStorage`.

## Punto de partida

Abrí `index.html`. Ya tiene:
- Un número en pantalla que muestra el valor actual del contador.
- Un botón **+1** que suma.
- Un botón **-1** que resta.

El contador funciona, pero no persiste. Tu trabajo es hacerlo persistente.

## Tu tarea

1. Al cargar la página, leer el valor guardado en `localStorage` (clave `"contador"`) y mostrarlo. Si no hay nada guardado, empezar en `0`.
2. Cada vez que el usuario hace click en +1 o -1, guardar el nuevo valor en `localStorage`.
3. Agregar un botón **Reset** que:
   - Vuelva el contador a `0`.
   - Borre la clave `"contador"` de `localStorage` usando `removeItem`.

## Criterios de "listo"

- [ ] Recargo la página y el contador muestra el último valor, no 0.
- [ ] El botón -1 funciona y también persiste.
- [ ] El botón Reset vuelve a 0 y al recargar sigue en 0 (la clave fue borrada).
- [ ] En DevTools → Application → Local Storage puedo ver la clave `"contador"` con su valor actual.

## Pistas

- `localStorage.getItem("contador")` devuelve un **string** o `null`. Para usarlo como número: `Number(localStorage.getItem("contador")) || 0`.
- Para borrar una clave: `localStorage.removeItem("clave")`.
- Acordate del ciclo: **leer → modificar → guardar → actualizar UI**.
