import { Given, When, Then } from "@wdio/cucumber-framework";
import lab3page from "./lab3.page";

Given('que ingreso a la página de login de la tienda', async () => {
  await lab3page.open();
});

When('ingreso mi nombre {string}', async (name: string) => {
  await lab3page.ingresarnombre(name);
});

When('ingreso mi apellido {string}', async (lastname: string) => {
  await lab3page.ingresarapellido(lastname);
});

When('ingreso mi correo {string}', async (email: string) => {
  await lab3page.ingresarcorreo(email);
});

When('ingreso mi contraseña {string}', async (password: string) => {
  await lab3page.ingresarcontraseña(password);
});

// ✅ Cambiado de Then a When porque es una acción
When('hago clic en el botón de enviar formulario', async () => {
  await lab3page.clicbotonformulario();
});

// ✅ Paso necesario para la aserción/verificación final
Then('el sistema debe mostrar un mensaje de resultado', async () => {
  await lab3page.validarPaginaRegistro();
});
