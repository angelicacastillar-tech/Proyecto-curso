// Importa `browser` (controla el navegador) y `$` (selector de un solo elemento) de WebdriverIO
import { browser, $ } from "@wdio/globals";
//import { get } from "node:http"; // (sin usar, se puede eliminar)

// Page Object de la página de navegación de documentación (Docs)
// Agrupa los selectores y acciones relacionados con ir a Docs y validar su 


class NavegacionDocsPage {
  /**
   * Selector del link "Docs" en el navbar (por atributo href)
   */
  //return $('a[href="/docs/gettingstarted"]'); // (código comentado, referencia de un selector alternativo por href)

  /**
   * Abre la página principal (home) desde donde se navega hacia Docs
   */
  async open() {
    await browser.url("https://webdriver.io");
  }

  /**
   * Selector (getter) del link "Docs" dentro del navbar,
   * localizado por el texto exacto "Docs"
   */
  get docsLink() {
    return $(".navbar__items").$("a=Docs");
  }

  /**
   * Selector del encabezado "Get Started" en la página de docs
   */
  get getStartedHeading() {
    return $("h1*=Getting Started");
  }

  /**
   * Hace clic en el link "Docs" del navbar,
   * esperando primero a que sea clickeable
   */
  async clickDocsLink() {
    await this.docsLink.waitForClickable();
   
    // await browser.pause(5000); // (pausa deshabilitada, usada solo para depuración manual)
    await this.docsLink.click();
  }

    /**
   * Selector (getter) del link "System Requirements" dentro del contenido de la página
   */
  get textV() {
    return $("a=System Requirements");
  }

  /**
   * Espera a que el link "System Requirements" esté visible
   * y hace clic sobre él
   */
  async textoVisible() {
    await $("a=System Requirements").waitForDisplayed({ timeout: 10000 });
    await this.textV.click();
  }

  /**
   * Verifica que el encabezado "Get Started" esté visible en pantalla
   * después de navegar a Docs, y devuelve true/false según su visibilidad
   */
  async isGetStartedVisible() {
    await this.getStartedHeading.waitForDisplayed({
      timeout: 5000,
      timeoutMsg:
        'El heading "Get Started" no apareció después de hacer clic en Docs',
    });
    return await this.getStartedHeading.isDisplayed();
  }


}

// Exporta una única instancia (singleton) de la clase NavegacionDocsPage,
// para que todos los archivos que la importen usen el mismo objeto
export default new NavegacionDocsPage();