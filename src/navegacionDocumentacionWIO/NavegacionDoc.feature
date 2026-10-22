# Se usa así desde la terminal:
# npx wdio run wdio.conf.ts --cucumberOpts.tagExpression="@NavegacionDocs"
@NavegacionDocs

Feature: Navegación a la documentación
  Como usuario
  Quiero hacer clic en el enlace de documentación
  Para llegar a la sección de Docs

  Scenario: Ir a la página de Docs desde el home
    Given I'm in the WebdriverIO homepage
    When I click on the "Docs" navigation link
    Then I should see "Get Started" in the page