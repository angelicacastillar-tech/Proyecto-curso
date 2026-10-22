import { Given, When, Then } from "@wdio/cucumber-framework";
import Lab4Page from "./lab4.page";

Given("que ingreso a la página de checkboxes", async () => {
  await Lab4Page.open();
});

When("hago clic en la casilla de verificación uno", async () => {
  await Lab4Page.seleccionarCheckboxUno();
});

Then("el sistema debe reflejar que la casilla quedó seleccionada", async () => {
  await Lab4Page.validarCheckboxSeleccionado();
});