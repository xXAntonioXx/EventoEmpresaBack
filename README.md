# Aplicación de registro de alumnos para el evento "Encuentro Universidad-Empresas"
Este es un proyecto monolítico el cual sirve las vistas del registro de alumnos para asistir al Encuentro Universidad-Empresas(Encuemsi) así como los endpoints y lógica para tomar sus datos y mandar un código QR al correo del alumno registrado el cual es mostrado en el evento.

##  NOTA:el proyecto ya no está en uso

# Base de datos.
La base de datos utilizada en el proyecto es en mongo y el nombre de la bd y colección es "asistentes" y se pensó para funcionar con el servicio de atlas y la aplicación montada en heroku, a pesar de esto dejo estas variables de .env para su entendimiento y no tener que hardcodear credenciales de los servicios. 

para tener el ambiente de desarrollo en el .env hay que poner la url de la base de datos mongo local:
```
TEST_DB=<ruta en tu db de pruebas>
```
y para hacer deploy tambien incluir la ruta de producción en Atlas:
```
PRODUCTION_DB=<ruta de atlas>
```
# Código QR
Al correo de los asistentes se manda un código QR el cual contiene un hash simple pero como sea requiere un salt así que se ocupa esta variable de entorno.

```
HASH_SALT=<la sal que quieras>
```

# Mail con SendGrid

Para enviar el código QR se utiliza el servicio de sendgrid así que hay que pasar nuestras credenciales y correo de sendgrid para que se puedan mandar correos.

```
MAIL_USER=<tu nombre de usario de sendgrid>
MAIL_PASS=<la contraseña de sendgrid>
MAIL_EMAIL=<el correo asociado en sendgrid>
```