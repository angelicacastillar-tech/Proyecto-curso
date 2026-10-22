import { browser, $ } from "@wdio/globals";
// se deja tal cual el lab1page es lo que quiera
class lab1page {
  // 1 paso abrir URL feature
  // urllab1 no importa es como llamar la url de la pagina
   async open() {
    // aqui si el urllab1 si debe coincidir con el anterior
    await browser.url("/");
  }
// 2 paso ver imagen
  get logoimagen() {
    return $("#logo");
    
  }
    async validarimagen() {
    await expect(this.logoimagen).toBeDisplayed;

    }
//3 paso ver boton
  get boton() {
    return $("#btn2");
    
  }
    async validarboton() {
    await expect(this.boton).toBeDisplayed;

    }

}

export default new lab1page();