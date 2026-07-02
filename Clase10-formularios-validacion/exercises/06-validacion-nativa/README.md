# Práctica 06 — Validación nativa HTML5

**Dificultad:** ⚫ profundizar

## Contexto

Los navegadores tienen validación incorporada: atributos como `required`, `minlength` y `type="email"` hacen que el browser muestre mensajes de error automáticamente sin escribir una sola línea de JS. En esta práctica explorás esa validación, la customizás y la comparás con la validación manual que hiciste en la práctica 03.

Abrí `index.html`. El formulario ya tiene todos los atributos HTML5 puestos. El script está vacío.

---

## Parte A — Observar la validación nativa

Abrí el archivo en el browser y enviá el formulario con todos los campos vacíos.

Respondé estas preguntas en un comentario al inicio del script:

1. ¿Qué muestra el browser? ¿Dónde aparece el mensaje?
2. ¿En qué idioma está el mensaje?
3. ¿Podés customizar ese texto directamente desde HTML?

> Spoiler: el browser muestra un tooltip junto al campo inválido, en el idioma del sistema operativo. No hay forma de cambiar ese texto solo con HTML — para eso necesitás JS.

---

## Parte B — Reemplazar los tooltips con mensajes propios

El objetivo es interceptar el submit **antes** de que el browser muestre sus tooltips, y mostrar los errores en los `<span>` del HTML en lugar de los tooltips nativos.

Para que el browser no muestre sus propios mensajes, agregá `novalidate` al `<form>`:

```html
<form id="form" novalidate>
```

Ahora el browser ya no valida automáticamente, pero los campos siguen teniendo sus restricciones (`required`, `minlength`, `type="email"`). Podés consultarlas desde JS.

En el handler de `submit`:

1. Llamá `e.preventDefault()`.
2. Definí un array con los campos y sus `<span>` de error:

   ```js
   const campos = [
     { input: document.querySelector("#nombre"), span: document.querySelector("#err-nombre") },
     { input: document.querySelector("#email"),  span: document.querySelector("#err-email") },
     { input: document.querySelector("#pass"),   span: document.querySelector("#err-pass") },
   ];
   ```

3. Recorrelos con `for...of`. Para cada campo:
   - Llamá `campo.input.checkValidity()`. Devuelve `true` si el valor cumple con los atributos HTML5, `false` si no.
   - Si no es válido: escribí `campo.input.validationMessage` en `campo.span.textContent`.
   - Si es válido: limpiá `campo.span.textContent = ""`.

4. Si **todos** son válidos, mostrá en `#exito` el texto `"¡Registro exitoso!"` y limpialo si hay errores.

---

## Parte C — Validación custom con `setCustomValidity()`

`checkValidity()` verifica las reglas de HTML5, pero no puede saber que "   " (solo espacios) no es un nombre válido. Para eso existe `setCustomValidity()`.

Agregá un listener `"input"` en el campo `#nombre`:

```js
document.querySelector("#nombre").addEventListener("input", (e) => {
  if (e.target.value.trim() === "") {
    e.target.setCustomValidity("El nombre no puede estar vacío.");
  } else {
    e.target.setCustomValidity(""); // string vacío = sin error custom
  }
});
```

Cuando `setCustomValidity` recibe un string no vacío:
- `checkValidity()` devuelve `false` para ese campo.
- `validationMessage` devuelve ese string.

Cuando recibe `""`, la validación custom se cancela y vuelven a aplicar solo las reglas de HTML5.

Probalo: escribí solo espacios en el campo nombre y enviá. Debería aparecer el mensaje custom.

---

## Parte D — Comparar: ¿cuándo usar cada una?

Completá esta tabla en un comentario al final del script (o en una nota en el cuaderno):

| | Validación nativa HTML5 | Validación JS manual (práctica 03) |
|---|---|---|
| ¿Cuánto código necesitás? | | |
| ¿Podés customizar el mensaje? | | |
| ¿Podés controlar cuándo aparece el error? | | |
| ¿Funciona sin JS? | | |
| ¿Podés agregar reglas que HTML5 no tiene? | | |

> No hay una respuesta única correcta — la tabla es para que reflexiones sobre las diferencias.

---

## Pistas

<details><summary>Pista 1 — ¿Qué hace novalidate?</summary>

`novalidate` en el `<form>` le dice al browser que no haga su validación automática al enviar. Los atributos `required`, `minlength`, etc. siguen existiendo en el DOM y podés consultarlos desde JS con `checkValidity()`. Solo se desactiva la interfaz automática del browser (los tooltips).

</details>

<details><summary>Pista 2 — ¿Cómo sé si todos los campos son válidos?</summary>

Podés usar una variable bandera:

```js
let todoValido = true;
for (const campo of campos) {
  if (!campo.input.checkValidity()) {
    campo.span.textContent = campo.input.validationMessage;
    todoValido = false;
  } else {
    campo.span.textContent = "";
  }
}
if (todoValido) {
  document.querySelector("#exito").textContent = "¡Registro exitoso!";
} else {
  document.querySelector("#exito").textContent = "";
}
```

</details>

<details><summary>Pista 3 — ¿Por qué llamo setCustomValidity en el evento "input" y no en "submit"?</summary>

`setCustomValidity` necesita ser llamado antes de `checkValidity()`. Si lo llamás solo en el handler de `submit`, el valor se actualiza en ese mismo momento y funciona. Pero si lo llamás en `"input"`, la validación custom se actualiza **mientras el usuario escribe**, así `checkValidity()` ya tiene el resultado correcto cuando el submit llega.

</details>

<details><summary>Pista 4 — ¿Qué pasa si llamo setCustomValidity con un string vacío?</summary>

`setCustomValidity("")` borra el error custom. El campo vuelve a validarse solo según sus atributos HTML5 (`required`, `minlength`, etc.).

</details>

## Criterios de listo

- [ ] (Parte A) Probaste enviar el formulario vacío sin modificar nada y observaste los tooltips del browser.
- [ ] (Parte B) Con `novalidate`, los mensajes de error aparecen en los `<span>` del HTML al hacer submit, no en tooltips del browser.
- [ ] (Parte B) Los mensajes de error se limpian al corregir los campos y volver a enviar.
- [ ] (Parte B) Si todos los campos son válidos, aparece el mensaje de éxito.
- [ ] (Parte C) Escribir solo espacios en el nombre muestra el mensaje custom.
- [ ] (Parte C) Al escribir un nombre con contenido real, el error custom desaparece.
- [ ] (Parte D) Completaste la tabla comparativa.
