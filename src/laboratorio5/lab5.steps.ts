import { Given, When, Then } from "@wdio/cucumber-framework";
import lab5page from "./lab5.page";

Given("que ingreso a la página de listas desplegables", async () => {
  await lab5page.open();
});

When("selecciono la opción {string} de la lista", async (opcion: string) => {
  await lab5page.seleccionarOpcion(opcion);
});

Then("la lista debe mostrar la opción {string} seleccionada", async (opcion: string) => {
  await lab5page.validarOpcionSeleccionada(opcion);
});