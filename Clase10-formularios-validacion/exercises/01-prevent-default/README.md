# Práctica 01 — Detener la recarga

**Dificultad:** 🟢 base

## Objetivo

Entender por qué los formularios recargan la página y aprender a detenerlo con `e.preventDefault()`.

## Contexto

Abrí `index.html`. Hay un formulario con un input de texto y un botón de enviar. Si abrís la consola y hacés click en "Enviar", vas a ver que el mensaje desaparece: la página se recarga.

Tu trabajo es arreglarlo.

## Consigna

1. Abrí `index.html` en el navegador y abrí la consola de DevTools.
2. Hacé click en "Enviar" y observá lo que pasa (la consola se limpia).
3. En el `<script>` del archivo, agregá `e.preventDefault()` al principio del handler.
4. Volvé a hacer click. Ahora el mensaje debería quedarse en la consola.
5. Una vez que la recarga está detenida, leé el valor del input con `.value` y mostralo en el `<p id="resultado">` que ya está en el HTML.

## Pistas

<details><summary>Pista 1 — ¿Dónde va `e.preventDefault()`?</summary>

Dentro del handler del evento `submit`, como primera línea:

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ... el resto
});
```

</details>

<details><summary>Pista 2 — ¿Cómo leo el valor del input?</summary>

```js
const texto = document.querySelector("#nombre").value;
```

`.value` es siempre un string con lo que el usuario escribió.

</details>

<details><summary>Pista 3 — ¿Cómo muestro el valor en el párrafo?</summary>

```js
document.querySelector("#resultado").textContent = "Escribiste: " + texto;
```

</details>

## Criterios de listo

- [ ] Al hacer click en "Enviar", la página **no** se recarga.
- [ ] El mensaje aparece en la consola y se queda ahí.
- [ ] El texto que el usuario escribió aparece en el párrafo `#resultado` debajo del formulario.
- [ ] Si el input está vacío, el párrafo muestra `"Escribiste: "` (está bien para esta práctica).
