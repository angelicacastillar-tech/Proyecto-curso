import { browser, $ } from "@wdio/globals";

class Lab7Page {
  // 1. Navegación a la URL del laboratorio
  async open() {
    await browser.url("https://practice.expandtesting.com/login");
  }

  // 2. Selectores (Centralizados según el patrón POM)
  get inputUsername() {
    return $("#username");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $("button[type='submit']");
  }

  get flashAlert() {
    return $("#flash");
  }

  // 3. Acciones
  async login(username: string, pass: string) {
    await this.inputUsername.waitForDisplayed();
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(pass);
    await this.btnSubmit.click();
  }

  // 4. Validaciones
  async validarLoginExitoso() {
    await expect(browser).toHaveUrl(expect.stringContaining("/secure"));
    await expect(this.flashAlert).toHaveText(expect.stringContaining("You logged into a secure area!"));
  }
}

export default new Lab7Page();