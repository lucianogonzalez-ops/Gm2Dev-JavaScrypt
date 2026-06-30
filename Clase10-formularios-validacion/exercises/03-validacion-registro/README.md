# Práctica 03 — Formulario de registro

**Dificultad:** 🟡 intermedia

## Contexto

Abrí `index.html`. Hay un formulario de registro con tres campos: nombre, email y contraseña. El formulario ya tiene `e.preventDefault()` en el handler de `submit`. Los errores todavía no se muestran — eso es lo que vas a construir.

## Consigna

Completá la lógica de validación en el `<script>`. Las reglas son:

| Campo | Regla |
|---|---|
| Nombre | No puede estar vacío (ni ser solo espacios). |
| Email | Debe contener el símbolo `@`. |
| Contraseña | Debe tener al menos 6 caracteres. |

Para cada campo:
- Si el dato es **inválido**, mostrá un mensaje de error en el `<span class="error">` que está debajo del input. Usá `.textContent`.
- Si el dato es **válido**, limpiá el mensaje de error (dejá el span vacío).

Si los tres campos son válidos, mostrá en `<p id="exito">` el texto: `"¡Registro exitoso! Bienvenido/a, [nombre]."` y limpiá ese párrafo si hay errores.

**No uses `alert()`.**

### Estructura sugerida

Escribí una función de validación para cada campo. Cada función recibe el valor y devuelve un string con el error, o `null` si está bien:

```js
function validarNombre(valor) { ... }
function validarEmail(valor) { ... }
function validarPassword(valor) { ... }
```

## Pistas

<details><summary>Pista 1 — ¿Cómo verifico si un campo está vacío?</summary>

```js
valor.trim().length === 0
```

`.trim()` elimina los espacios del principio y el final.

</details>

<details><summary>Pista 2 — ¿Cómo verifico si el email contiene "@"?</summary>

```js
valor.includes("@")
```

`includes()` devuelve `true` si el string contiene el texto buscado.

</details>

<details><summary>Pista 3 — ¿Cómo muestro el error junto al campo?</summary>

Cada campo tiene un `<span class="error">` con un `id` único debajo:

```js
document.querySelector("#error-nombre").textContent = "El nombre no puede estar vacío.";
```

Para limpiarlo:

```js
document.querySelector("#error-nombre").textContent = "";
```

</details>

<details><summary>Pista 4 — ¿Cómo sé si todos los campos son válidos?</summary>

Guardá el resultado de cada validación en una variable y usá una condición `if`:

```js
const errorNombre   = validarNombre(nombre);
const errorEmail    = validarEmail(email);
const errorPassword = validarPassword(password);

if (!errorNombre && !errorEmail && !errorPassword) {
  // todos válidos
}
```

</details>

## Criterios de listo

- [ ] La página no se recarga al hacer submit.
- [ ] Si el nombre está vacío, aparece el mensaje de error debajo del campo nombre.
- [ ] Si el email no tiene `@`, aparece el mensaje de error debajo del campo email.
- [ ] Si la contraseña tiene menos de 6 caracteres, aparece el mensaje de error debajo del campo contraseña.
- [ ] Los tres errores pueden aparecer a la vez si todos los campos son inválidos.
- [ ] Cuando todos los campos son válidos, aparece el mensaje de éxito y los errores desaparecen.
- [ ] No se usa `alert()` en ningún momento.
