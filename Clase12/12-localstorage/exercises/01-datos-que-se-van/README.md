# Práctica 01 — Datos que se van

**Dificultad:** 🟢 base

## Objetivo

Practicar los métodos básicos de `localStorage` para guardar y recuperar un string simple.

## Contexto

Abrís tu app favorita, configurás tu nombre de usuario… y al recargar la página ya no aparece. Frustrante. En esta práctica vas a hacer que el navegador recuerde el nombre aunque se recargue la página.

## Consigna

Abrí el archivo `index.html`. Encontrarás una página con un campo de texto y dos botones: **Guardar** y **Borrar**.

1. Cuando el usuario hace click en **Guardar**, guardá el contenido del campo en `localStorage` con la clave `"nombre"`.
2. Cuando la página carga, si existe un nombre guardado, mostralo en el párrafo `#saludo` (por ejemplo: `"Hola, Ana!"`). Si no hay nombre guardado, mostrá `"Ingresá tu nombre."`.
3. Cuando el usuario hace click en **Borrar**, eliminá el nombre de `localStorage` y actualizá el saludo a `"Ingresá tu nombre."`.

## Pistas

<details><summary>Pista 1</summary>

Para guardar el nombre al hacer click:
```js
localStorage.setItem("nombre", inputNombre.value);
```

</details>

<details><summary>Pista 2</summary>

Para leer el nombre cuando carga la página:
```js
const nombre = localStorage.getItem("nombre");
if (nombre) {
  saludo.textContent = `Hola, ${nombre}!`;
}
```

</details>

<details><summary>Pista 3 (spoiler)</summary>

Para borrar:
```js
localStorage.removeItem("nombre");
saludo.textContent = "Ingresá tu nombre.";
```

</details>

## Criterios de listo

- [ ] Escribo mi nombre, hago click en Guardar, recargo la página → el saludo aparece con mi nombre.
- [ ] Hago click en Borrar → el saludo vuelve a `"Ingresá tu nombre."` y al recargar sigue sin aparecer.
- [ ] Si entro a la página sin haber guardado nada → se muestra el texto por defecto.
