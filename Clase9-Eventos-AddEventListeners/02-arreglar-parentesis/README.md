# Práctica 02 — Arreglar el manejador que se ejecuta solo 🟢

> Dificultad: 🟢 base

## Objetivo

Identificar y corregir el error más común al usar `addEventListener`: pasar la función con paréntesis.

## Contexto

Un compañero escribió este botón que debería mostrar un mensaje **al hacer clic**. Pero pasa algo raro: el mensaje aparece **apenas se carga la página**, y después el botón no responde.

El código está en `index.html`. Abrilo en el navegador y comprobá el comportamiento antes de tocar nada.

## Consigna

1. Abrí `index.html` y reproducí el problema: el `console.log` (mirá la consola) aparece al cargar, y el clic no hace nada.
2. **Explicá** en una frase por qué pasa eso.
3. **Corregilo** para que el mensaje aparezca solo al hacer clic, una vez por cada clic.

> Hay más de una forma válida de arreglarlo. Si querés, resolvelo de las dos.

## Pistas

<details><summary>Pista 1 — mirá el segundo argumento</summary>

Fijate qué le estamos pasando como segundo argumento a `addEventListener`. ¿Es una función, o el **resultado** de ejecutar una función?

</details>

<details><summary>Pista 2 — referencia vs llamada</summary>

`avisar` es la función. `avisar()` la ejecuta ahora mismo y devuelve su resultado. `addEventListener` quiere lo primero.

</details>

## Criterios de listo

- [ ] Al cargar la página **no** aparece ningún mensaje.
- [ ] El mensaje aparece **solo al hacer clic**, una vez por clic.
- [ ] Podés explicar por qué la versión original fallaba.
