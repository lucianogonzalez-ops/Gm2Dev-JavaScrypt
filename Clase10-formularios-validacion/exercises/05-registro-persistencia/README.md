# Práctica 05 — Registro con persistencia

**Dificultad:** 🔴 desafío

## Contexto

Abrí `index.html`. Hay un formulario de registro con dos campos: nombre y equipo. Tu trabajo es validar el formulario y guardar los datos en `localStorage` para que el usuario no tenga que volver a registrarse si recarga la página.

> **Nota:** acá usamos `localStorage` para persistir datos entre recargas. En clase 12 profundizamos cómo funciona por dentro y cuándo conviene usarlo.

## Consigna

### 1 — Validar antes de guardar

Al enviar el formulario (evento `submit`):

- Llamá `e.preventDefault()` para que la página no se recargue.
- Leé el valor del campo `#nombre` con `.value`.
- Si `nombre.trim()` está vacío, mostrá el mensaje `"El nombre no puede estar vacío."` en `#error-nombre` y **no continues**.
- Si el nombre es válido, limpiá `#error-nombre`.

### 2 — Guardar en localStorage

Una vez que el nombre es válido, guardá un objeto con nombre y equipo usando `localStorage.setItem`:

```js
const usuario = { nombre: nombre.trim(), equipo: equipo.trim() };
localStorage.setItem("usuario", JSON.stringify(usuario));
```

`JSON.stringify` convierte el objeto a un string para que `localStorage` lo pueda guardar (solo guarda strings).

### 3 — Mostrar la bienvenida

Después de guardar:

- Ocultá el formulario: `form.style.display = "none"`.
- Mostrá `#bienvenida` con el texto:

  ```
  ¡Bienvenido, [nombre]! Tu equipo: [equipo || "sin equipo"]
  ```

- Mostrá el botón `#btn-salir`.

### 4 — Botón Salir

Al hacer click en `#btn-salir`:

- Borrá los datos: `localStorage.removeItem("usuario")`.
- Ocultá `#bienvenida` y `#btn-salir`.
- Volvé a mostrar el formulario.

### 5 — Recuperar la sesión al cargar

Dentro de un listener `DOMContentLoaded`, chequeá si ya hay datos guardados:

```js
const guardado = localStorage.getItem("usuario");
if (guardado) {
  const usuario = JSON.parse(guardado);
  // mostrar bienvenida directamente, sin mostrar el formulario
}
```

Si hay datos, mostrá la bienvenida y ocultá el formulario desde el primer momento. Si no hay datos, el formulario aparece normalmente.

## Pistas

<details><summary>Pista 1 — ¿Cómo leo el localStorage al cargar la página?</summary>

`localStorage.getItem("clave")` devuelve `null` si la clave no existe, o el string guardado si existe. Podés usar eso como condición:

```js
document.addEventListener("DOMContentLoaded", () => {
  const guardado = localStorage.getItem("usuario");
  if (guardado) {
    // hay datos
  }
});
```

</details>

<details><summary>Pista 2 — ¿Cómo convierto el string de localStorage de vuelta a objeto?</summary>

`JSON.parse` hace el proceso inverso a `JSON.stringify`:

```js
const usuario = JSON.parse(guardado); // { nombre: "...", equipo: "..." }
```

</details>

<details><summary>Pista 3 — ¿Cómo muestro "sin equipo" si el campo está vacío?</summary>

Usá el operador `||`:

```js
const equipoTexto = usuario.equipo || "sin equipo";
```

Si `usuario.equipo` es un string vacío `""`, es falsy, y el operador `||` devuelve `"sin equipo"`.

</details>

<details><summary>Pista 4 — ¿Cómo oculto y muestro elementos?</summary>

```js
elemento.style.display = "none";   // ocultar
elemento.style.display = "";       // mostrar (vuelve al valor del CSS)
elemento.style.display = "block";  // mostrar como bloque
```

</details>

## Criterios de listo

- [ ] Si el nombre está vacío al enviar, aparece el mensaje de error y el formulario no avanza.
- [ ] Si el nombre es válido, los datos se guardan en `localStorage` y aparece la bienvenida.
- [ ] El mensaje de bienvenida incluye el nombre y el equipo (o "sin equipo" si el equipo está vacío).
- [ ] Al hacer click en Salir, se borran los datos del `localStorage` y vuelve a aparecer el formulario.
- [ ] Si recargás la página con datos guardados, la bienvenida aparece directamente sin mostrar el formulario.
- [ ] Si recargás la página después de hacer Salir, el formulario aparece normalmente.
