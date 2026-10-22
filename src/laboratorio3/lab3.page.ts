import { browser, $ } from "@wdio/globals";

class Lab3Page {
  async open() {
    await browser.url("https://sauce-demo.myshopify.com/account/register");
  }

  // 'input#first_name' apunta directamente a la caja de texto y omite el

 get inputname() {
    return $("input#first_name");
 }

  get inputlastname() {
    return $("input#last_name");
 }

  get inputemail() {
    return $("input#email");
 }

  get inputpassword() {
    return $("input#password");
 }

get imputboton() {
    return $("input[value='Create']");
}

async ingresarnombre(name: string) {
    await this.inputname.waitForDisplayed();
    await this.inputname.setValue(name);
}

async ingresarapellido(lastname: string) {
    await this.inputlastname.waitForDisplayed();
    await this.inputlastname.setValue(lastname);
}

async ingresarcorreo(email: string) {
    await this.inputemail.waitForDisplayed();
    await this.inputemail.setValue(email);
}

async ingresarcontraseña(password: string) {
    await this.inputpassword.waitForDisplayed();
    await this.inputpassword.setValue(password);
}


async clicbotonformulario() {
    await this.imputboton.waitForClickable();
    await this.imputboton.click();
}

async validarPaginaRegistro() {
    await expect(browser).toHaveUrl(expect.stringContaining("account"));
}
}

export default new Lab3Page();