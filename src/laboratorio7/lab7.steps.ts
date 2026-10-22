import { Given, When, Then } from "@wdio/cucumber-framework";
import Lab7Page from "./lab7.page";

Given("que ingreso a la página de inicio de sesión", async () => {
  await Lab7Page.open();
});

When("ingreso el usuario {string} y la contraseña {string}", async (usuario: string, contrasena: string) => {
  await Lab7Page.login(usuario, contrasena);
});

Then("el sistema debe permitir el acceso y mostrar el área segura", async () => {
  await Lab7Page.validarLoginExitoso();
});