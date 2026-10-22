
# Se ejecuta desde la terminal así:
# npx wdio run wdio.conf.ts --cucumberOpts.tags="@laboratorio5"

@laboratorio5
Feature: Selección de una opción en una lista
  Como usuario del formulario,
  quiero seleccionar una opción de una lista desplegable,
  para completar la información solicitada.

  Scenario: Seleccionar y verificar una opción en la lista desplegable
    Given que ingreso a la página de listas desplegables
    When selecciono la opción "Option 1" de la lista
    Then la lista debe mostrar la opción "Option 1" seleccionada