// Importa las funciones de Cucumber para definir los pasos (steps) Given/When/Then
import { Given, When, Then } from "@wdio/cucumber-framework";
// Importa `expect` de WebdriverIO para hacer las aserciones (assertions)
import { expect } from "@wdio/globals";
// Importa el Page Object que contiene los selectores y acciones de la página de Docs
import NavegacionDocsPage from "./docsNavigation.page";

/**
 * Given: define el estado inicial del escenario
 * Abre la página principal (home) de WebdriverIO antes de ejecutar el resto del flujo
 */
Given(/^I'm in the WebdriverIO homepage$/, async () => {
  await NavegacionDocsPage.open();
});

/**
 * When: define la acción que realiza el usuario
 * Hace clic en el link de navegación indicado (ej. "Docs")
 * Nota: el parámetro `linkName` se captura del texto del feature pero no se usa dentro del step
 */
When(/^I click on the "([^"]*)" navigation link$/, async (_linkName: string) => {
  await NavegacionDocsPage.clickDocsLink();
  await browser.pause(5000); // Pausa fija de depuración (recomendable reemplazar por una espera explícita)
});


/**
 * Then: define el resultado esperado
 * Verifica que el heading "Get Started" sea visible tras la navegación,
 * y adicionalmente hace clic en el link "System Requirements" dentro de la página
 * Nota: el parámetro `expectedText` se captura del feature pero no se usa dentro del step
 */
Then(/^I should see "([^"]*)" in the page$/, async (_expectedText: string) => {
  const isVisible = await NavegacionDocsPage.isGetStartedVisible();
  expect(isVisible).toBe(true);
  await NavegacionDocsPage.textoVisible();
  await browser.pause(5000); // Pausa fija de depuración (recomendable reemplazar por una espera explícita)
});