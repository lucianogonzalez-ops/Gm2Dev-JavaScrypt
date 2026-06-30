# Práctica 02 — Validar un nombre

**Dificultad:** 🟡 intermedia

## Objetivo

Escribir una función de validación que aplique reglas propias a un campo de texto y muestre mensajes de error específicos en el DOM.

## Contexto

Abrí `index.html`. Hay un formulario con un campo "Nombre" y un párrafo vacío para mostrar errores. El formulario ya tiene `e.preventDefault()`.

## Consigna

Escribí la lógica de validación en el `<script>`. Las reglas son:

1. El nombre **no puede estar vacío** (ni ser solo espacios).
2. El nombre debe tener **al menos 3 caracteres** (sin contar espacios al principio/final).
3. El nombre **no puede contener números**.

Para cada regla que falle, mostrá un mensaje de error distinto en el `<p id="error">`:
- `"El nombre no puede estar vacío."`
- `"El nombre debe tener al menos 3 caracteres."`
- `"El nombre no puede contener números."`

Si el nombre es válido, mostrá en `<p id="resultado">`: `"Bienvenido/a, [nombre]!"` y limpiá el error.

### Estructura sugerida

Separá la validación en una función:

```js
function validarNombre(nombre) {
  // Devuelve null si es válido,
  // o un string con el mensaje de error si no lo es.
}
```

## Pistas

<details><summary>Pista 1 — ¿Cómo verifico si el nombre está vacío?</summary>

```js
nombre.trim().length === 0
```

`.trim()` elimina espacios del principio y del final.

</details>

<details><summary>Pista 2 — ¿Cómo verifico si tiene números?</summary>

Podés recorrer el string con un bucle o usar un método. Una forma simple:

```js
// ¿Algún caracter del string es un dígito?
function tieneNumero(texto) {
  for (const caracter of texto) {
    if (caracter >= "0" && caracter <= "9") return true;
  }
  return false;
}
```

</details>

<details><summary>Pista 3 — Orden de las validaciones</summary>

Validá primero si está vacío. Si no está vacío, validá la longitud. Si la longitud es correcta, validá los números. Así los mensajes son más claros.

</details>

## Criterios de listo

- [ ] La página no se recarga al hacer submit.
- [ ] Si el nombre está vacío, aparece el mensaje correcto.
- [ ] Si el nombre tiene menos de 3 caracteres (sin espacios), aparece el mensaje correcto.
- [ ] Si el nombre contiene un número, aparece el mensaje correcto.
- [ ] Si el nombre es válido, se muestra el mensaje de bienvenida y el error desaparece.
- [ ] La validación está en una función separada del handler.
