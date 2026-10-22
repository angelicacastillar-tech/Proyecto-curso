import { browser, $ } from "@wdio/globals";

class Lab4Page {
  // 1. Navegación a la URL
  async open() {
    await browser.url("https://practice.expandtesting.com/checkboxes");
  }

  // 2. Selector
  get checkboxUno() {
    return $("#checkbox1");
  }

  // 3. Acciones
  async seleccionarCheckboxUno() {
    await this.checkboxUno.waitForDisplayed();
    
    // Hacemos clic solo si no está seleccionado previamente
    if (!(await this.checkboxUno.isSelected())) {
      await this.checkboxUno.click();
    }
  }

  // 4. Validaciones
  async validarCheckboxSeleccionado() {
    await expect(this.checkboxUno).toBeSelected();
  }
}

export default new Lab4Page();