import { Given, When, Then } from "@wdio/cucumber-framework";
import lab1page from "./lab1.page";

Given('yo ingreso a la página principal', async () => {
  await lab1page.open();
});

When('la pagina cargue correctamente', async ( ) => {
  await lab1page.validarimagen();
  
});

Then('el título de la página se visualiza el logo de la pagina', async () => {
  await lab1page.validarboton();
});