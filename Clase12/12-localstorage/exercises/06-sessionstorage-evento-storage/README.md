# Práctica 06 — sessionStorage y el evento storage ⚫

> **Dificultad:** profundizar  
> **Tiempo estimado:** 40–60 minutos  
> **Requisito:** haber leído `profundizar.md` de esta clase.

Esta práctica tiene tres partes independientes. Podés hacerlas en orden o saltar directamente a la que más te interese.

---

## Parte A — localStorage vs sessionStorage: el experimento de las dos pestañas

### ¿Qué diferencia hay?

- `localStorage`: los datos persisten aunque cierres la pestaña o el navegador. Son compartidos entre **todas** las pestañas del mismo origen.
- `sessionStorage`: los datos solo existen mientras la pestaña está abierta. Cada pestaña tiene **su propio** sessionStorage, aislado.

### Tu tarea

Abrí `index.html` (parte A). Al cargar la página, el script debe:

1. Guardar `Date.now()` (un timestamp numérico) en `localStorage` con la clave `"ts-local"`.
2. Guardar `Date.now()` en `sessionStorage` con la clave `"ts-session"`.
3. Mostrar en pantalla los dos valores: el que está guardado en localStorage y el que está en sessionStorage.

Luego:
- Abrí una **segunda pestaña** con el mismo archivo.
- Observá: ¿el timestamp de localStorage coincide con el de la primera pestaña? ¿Y el de sessionStorage?

### Criterios de "listo"

- [ ] Puedo ver los dos timestamps al cargar la página.
- [ ] Al abrir una segunda pestaña, el timestamp de localStorage es el mismo que en la primera (la segunda pestaña lo sobreescribe pero ambas comparten el storage).
- [ ] El timestamp de sessionStorage es diferente en cada pestaña.

---

## Parte B — El evento `storage`: comunicación entre pestañas

### ¿Qué es el evento `storage`?

Cuando una pestaña modifica `localStorage`, el navegador dispara el evento `storage` en **todas las otras pestañas** del mismo origen — pero no en la pestaña que hizo el cambio.

```js
window.addEventListener("storage", (evento) => {
  console.log(evento.key);      // qué clave cambió
  console.log(evento.oldValue); // valor anterior
  console.log(evento.newValue); // valor nuevo
});
```

### Tu tarea

Abrí `index.html` (parte B). Necesitás tener **dos pestañas** abiertas con el mismo archivo.

1. En la página, mostrá un `<p>` que diga "Esperando cambios..." al cargar.
2. Agregá un botón "Enviar mensaje" que guarde un string en `localStorage` (clave `"mensaje"`, valor `"Hola desde pestaña A — " + Date.now()`).
3. Escuchá el evento `storage`. Cuando se dispare, actualizá el `<p>` con el nuevo valor recibido.

Para probarlo: hacé click en "Enviar mensaje" en **una** pestaña y observá cómo cambia el `<p>` en la **otra** pestaña sin recargar.

### Criterios de "listo"

- [ ] Al hacer click en una pestaña, la otra recibe el mensaje sin recargar.
- [ ] El evento no se dispara en la pestaña que envió.

### Nota importante

El evento `storage` **no funciona entre pestañas en algunos entornos locales** (archivo abierto como `file://`). Si no ves el efecto, probá servir el archivo con un servidor local simple:

```bash
npx serve .
```

---

## Parte C — QuotaExceededError: ¿qué pasa si localStorage se llena?

### El límite de localStorage

Los navegadores limitan localStorage a unos **5 MB** por origen. Si intentás guardar más, `setItem` lanza un error: `QuotaExceededError` (o `DOMException` con nombre `"QuotaExceededError"`).

### Tu tarea

Escribí un script (en `index.html`, parte C) que:

1. Intente llenar localStorage con un loop: en cada iteración guardá un string grande (por ejemplo, `"x".repeat(100_000)` — cien mil caracteres) bajo una clave diferente (`"relleno-0"`, `"relleno-1"`, etc.).
2. Envolvé el `setItem` en un `try/catch`.
3. Cuando el catch atrape el error, mostrá en pantalla cuántas iteraciones se completaron antes de que falle y el nombre del error.
4. Después de simular el error, limpiá todo con `localStorage.clear()`.

### Criterios de "listo"

- [ ] El script corre sin romper la página.
- [ ] Se muestra en pantalla el número de iteraciones completadas y el nombre del error.
- [ ] Después del experimento, localStorage queda limpio.

### Pistas

- `error.name` tiene el nombre del error (por ejemplo `"QuotaExceededError"`).
- `localStorage.clear()` borra **todas** las claves del origen. Usalo con cuidado fuera de este experimento.
- El número de iteraciones que caben depende del navegador y de cuántos datos ya haya en localStorage.
