# Se usa así desde la terminal:
# npx wdio run wdio.conf.ts --cucumberOpts.tagExpression="@laboratorio1"
@laboratorio1

Feature: Ingreso a pagina demo automation testing
  Como usuario del portal, quiero ingresar a la página principal y verificar que se cargue correctamente, para confirmar que el sitio está disponible

  Scenario: ingresar a la página principal y que este visual el logo de la pagina
    Given yo ingreso a la página principal
    When la pagina cargue correctamente
    Then el título de la página se visualiza el logo de la pagina