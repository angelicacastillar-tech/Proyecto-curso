import { browser, $ } from "@wdio/globals";

class Lab6Page {
  // 1. Navegación a la URL del laboratorio
  async open() {
    await browser.url("https://practice.expandtesting.com/dynamic-loading/1");
  }

  // 2. Selectores
  get btnStart() {
    return $("#start button");
  }

  get lblFinish() {
    return $("#finish h4");
  }

  // 3. Acciones
  async iniciarCarga() {
    await this.btnStart.waitForDisplayed();
    await this.btnStart.click();
  }

  // 4. Validaciones dinámicas (espera por condición, no por segundos fijos)
  async validarContenidoCargado(mensajeEsperado: string) {
    // Espera explícita hasta que el elemento sea visible en el DOM[cite: 2]
    await this.lblFinish.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "El contenido dinámico no se mostró dentro del tiempo límite esperable",
    });

    await expect(this.lblFinish).toHaveText(mensajeEsperado);
  }
}

export default new Lab6Page();