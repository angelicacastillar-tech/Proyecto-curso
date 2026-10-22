# Se ejecuta desde la terminal así:
# npx wdio run wdio.conf.ts --cucumberOpts.tagExpression="@laboratorio2"
@laboratorio2

Feature: RF-02 - Ingreso a la plataforma mediante correo electrónico
  Como usuario del portal
  Quiero ingresar mi correo electrónico y presionar el botón de inicio
  Para acceder al formulario de registro

  Scenario: Ingresar correo electrónico y avanzar a la siguiente página
    Given yo ingreso a la página principal 
    When yo ingreso el correo electrónico "angelica@gmail.com"
    And hago clic en el botón de la flecha
    Then el sistema debe redirigir al usuario a la página de registro

