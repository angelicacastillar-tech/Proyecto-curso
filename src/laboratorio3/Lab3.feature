# Se ejecuta desde la terminal así:
# npx wdio run wdio.conf.ts --cucumberOpts.tagExpression="@laboratorio3"
@laboratorio3
Feature: Ingreso de credenciales y validación del resultado
  Como usuario registrado, 
  quiero ingresar mi usuario y contraseña y enviar el formulario, 
  para poder comprobar que mis credenciales son procesadas correctamente.

  Scenario: Enviar formulario de inicio de sesión y validar respuesta
    Given que ingreso a la página de login de la tienda
    When ingreso mi nombre "Angie"
    And ingreso mi apellido "cas"
    And ingreso mi correo "angie@gmail.com"
    And ingreso mi contraseña "236"
    And hago clic en el botón de enviar formulario
    Then el sistema debe mostrar un mensaje de resultado