# Se ejecuta desde la terminal así:
# npx wdio run wdio.conf.ts --cucumberOpts.tags="@laboratorio6"

@laboratorio6
Feature: Carga de contenido dinámico
  Como usuario,
  quiero que la información de la página aparezca correctamente aunque tarde unos segundos en cargar,
  para poder continuar utilizando el sistema sin errores.

  Scenario: Validar la aparición del contenido después de la carga
    Given que ingreso a la página de carga dinámica
    When inicio el proceso de carga de contenido
    Then el sistema debe mostrar el mensaje "Hello World!" al finalizar la carga