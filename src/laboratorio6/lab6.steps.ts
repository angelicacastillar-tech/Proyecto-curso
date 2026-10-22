import { Given, When, Then } from "@wdio/cucumber-framework";
import Lab6Page from "./lab6.page";

Given("que ingreso a la página de carga dinámica", async () => {
  await Lab6Page.open();
});

When("inicio el proceso de carga de contenido", async () => {
  await Lab6Page.iniciarCarga();
});

Then("el sistema debe mostrar el mensaje {string} al finalizar la carga", async (mensaje: string) => {
  await Lab6Page.validarContenidoCargado(mensaje);
});