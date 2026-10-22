import { Given, When, Then } from "@wdio/cucumber-framework";
import lab2Page from "./lab2.page";

// Paso 1: Abrir la URL
Given('yo ingreso a la página principal {string}', async () => {
  await lab2Page.open();
});

// Paso 2: Escribir el correo en el input
When('yo ingreso el correo electrónico {string}', async (correo: string) => {
  await lab2Page.ingresarCorreo(correo);
});

// Paso 3: Dar clic en el botón con la flecha
When('hago clic en el botón de la flecha', async () => {
  await lab2Page.clicBotonFlecha();
});

// Paso 4: Validar la navegación exitosa
Then('el sistema debe redirigir al usuario a la página de registro', async () => {
  await lab2Page.validarPaginaRegistro();
});