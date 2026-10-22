import { browser, $ } from "@wdio/globals";

class Lab2Page {
  // 1. Abrir la página principal
  async open() {
    await browser.url("https://demo.automationtesting.in/");
  }

  // 2. Selector del campo de texto de correo
  get inputEmail() {
    return $("#email");
  }

  // 3. Selector del botón de la flecha azul
  get botonFlecha() {
    return $("#enterimg");
  }

  // 4. Acción: Escribir el correo en el campo
  async ingresarCorreo(correo: string) {
    await this.inputEmail.setValue(correo);
  }

  // 5. Acción: Hacer clic en el botón de la flecha
  async clicBotonFlecha() {
    await this.botonFlecha.click();
  }

  // 6. Validación: Verificar que se haya redirigido a Register.html
  async validarPaginaRegistro() {
    await expect(browser).toHaveUrl(expect.stringContaining("Register.html"));
  }
}

export default new Lab2Page();