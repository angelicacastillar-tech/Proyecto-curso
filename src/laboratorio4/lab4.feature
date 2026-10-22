# Se ejecuta desde la terminal así:
# npx wdio run wdio.conf.ts --cucumberOpts.tagExpression="@laboratorio4"

@laboratorio4
Feature: Selección de casillas de verificación
  Como usuario del formulario, 
  quiero seleccionar una opción mediante una casilla de verificación,
  para indicar mi elección.

  Scenario: Seleccionar y verificar el estado de la casilla de verificación 1
    Given que ingreso a la página de checkboxes
    When hago clic en la casilla de verificación uno
    Then el sistema debe reflejar que la casilla quedó seleccionada