# Se ejecuta desde la terminal así:
# npx wdio run wdio.conf.ts --cucumberOpts.tags="@laboratorio7"

@laboratorio7
Feature: Organización de la automatización mediante Page Object
  Como equipo de QA,
  quiero organizar la prueba de inicio de sesión utilizando una estructura separada para escenario, pasos y página,
  para facilitar el mantenimiento de la automatización.

  Scenario: Inicio de sesión exitoso con credenciales válidas
    Given que ingreso a la página de inicio de sesión
    When ingreso el usuario "practice" y la contraseña "SuperSecretPassword!"
    Then el sistema debe permitir el acceso y mostrar el área segura