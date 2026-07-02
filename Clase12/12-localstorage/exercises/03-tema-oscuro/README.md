# Práctica 03 — Modo oscuro 🟢

> **Dificultad:** base  
> **Tiempo estimado:** 15–20 minutos

## Contexto

Muchas apps recuerdan si el usuario prefiere el modo oscuro. Esa preferencia se guarda en `localStorage` para que la próxima vez que entre a la página ya se aplique el tema correcto desde el primer momento.

## Punto de partida

Abrí `index.html`. Ya tiene:
- Un botón que dice "Activar modo oscuro".
- Estilos para dos temas: la clase `oscuro` en el `<body>` activa el tema oscuro.

El botón todavía no hace nada. Tu trabajo es hacerlo funcionar y que recuerde la preferencia.

## Tu tarea

1. Al hacer click en el botón, alternar la clase `oscuro` en el `<body>`.
2. Actualizar el texto del botón según el estado actual: `"Activar modo oscuro"` o `"Activar modo claro"`.
3. Guardar la preferencia en `localStorage` (clave `"tema"`, valor `"oscuro"` o `"claro"`).
4. Al cargar la página, leer la preferencia guardada y aplicarla **antes** de que el usuario haga nada.

## Criterios de "listo"

- [ ] Al hacer click, la página cambia de tema visualmente.
- [ ] El texto del botón cambia según el tema activo.
- [ ] Al recargar la página, el tema guardado se aplica automáticamente.
- [ ] Si borro la clave en DevTools y recargo, la página carga en modo claro (valor por defecto).

## Pistas

- Para agregar/quitar una clase: `document.body.classList.toggle("oscuro")`.
- `classList.toggle` devuelve `true` si la clase quedó agregada, `false` si fue quitada. Podés usarlo para saber el estado actual.
- El orden importa: leer y aplicar el tema guardado debe ser lo primero que hace el script, para evitar un "flash" de tema incorrecto al cargar.
