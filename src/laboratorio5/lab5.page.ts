import { browser, $ } from "@wdio/globals";

class lab5page {
  // 1. Navegación a la URL requerida
  async open() {
    await browser.url("https://practice.expandtesting.com/dropdown");
  }

  // 2. Selector
  get selectDropdown() {
    return $("#dropdown");
  }

  // 3. Acciones
  async seleccionarOpcion(opcionTexto: string) {
    await this.selectDropdown.waitForDisplayed();
    await this.selectDropdown.selectByVisibleText(opcionTexto);
  }

  // 4. Validaciones
  async validarOpcionSeleccionada(opcionEsperada: string) {
    // Obtenemos el elemento  que está seleccionado activamente
    const opcionSeleccionada = this.selectDropdown.$("option:checked");
    await expect(opcionSeleccionada).toHaveText(opcionEsperada);
  }
}

export default new lab5page();