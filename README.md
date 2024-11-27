# Portfolio - Frontend (React)

**Ciclo Formativo:** Desarrollo de Aplicaciones Web (DAW)  
**Alumno:** Miguel Ángel Reyes Méndez

---

## Índice

1. [Introducción](#introducción)
2. [Funcionalidades](#funcionalidades)
3. [Guía de Instalación](#guía-de-instalación)
4. [Guía de Uso](#guía-de-uso)
5. [Enlace a Figma](#enlace-a-figma)
6. [Conclusion](#conclusion)
7. [Contribuciones y Agradecimientos](#contribuciones-y-agradecimientos)
8. [Licencias](#licencias)
9. [Contacto](#contacto)

---

## Introducción

Este proyecto frontend ha sido desarrollado utilizando React y está diseñado como un portfolio profesional. A través de esta aplicación, se muestran diferentes secciones como **About Me**, **Education**, **Work Experience**, entre otras. La información de cada sección es cargada dinámicamente desde archivos JSON, simulando la integración con una API REST.

### Objetivos

- Desarrollar una interfaz interactiva utilizando React.
- Gestionar el estado de la aplicación con React hooks.
- Consumir datos desde archivos JSON o APIs externas.
- Aplicar buenas prácticas de programación y diseño responsivo.

---

## Funcionalidades

1. **Sección "About Me"**:

   - Muestra nombre, foto, profesión y una breve descripción personal.

2. **Sección "Education"**:

   - Muestra la información del historial académico cargada desde un archivo JSON.

3. **Sección "Work Experience"**:

   - Muestra los detalles de la experiencia laboral cargados desde un archivo JSON.

4. **Sección "Projects"**:

   - Lista los proyectos realizados con detalles, también cargados desde el servidor usando Spring API Rest.
   - Cada proyecto puede tener detalles de las tecnologías utilizadas y desarrolladores.

5. **Sección "Skills"**:

   - Muestra las tecnologías y lenguajes en los que se tiene experiencia, como Frontend, Backend, y DevOps.

6. **Sección "References"**:

   - Muestra comentarios de referencias sobre el trabajo realizado, también cargados desde un archivo JSON.

7. **Formulario de "Contact Me"**:
   - Permite a los usuarios enviar un mensaje, dejando su nombre, email y comentario. Este formulario no tiene funcionalidad real en este momento. Cuenta con una validación de sus datos

### Tecnologías utilizadas

- React
- JSX
- CSS
- Hooks (useState, useEffect)
- Fetch API (para consumir los datos JSON o del servidor)

---

## Guía de Instalación

A continuación se detallan los pasos para crear, instalar y ejecutar el proyecto en tu entorno local:

1. **Crear el proyecto React con Vite**:

   - Abre la terminal y ejecuta el siguiente comando para crear un nuevo proyecto utilizando Vite:
     ```bash
     npm create vite@latest nombreProyecto
     ```
   - Selecciona la opción **React** y luego elige **JavaScript**, para tu proyecto.

   - Una vez creado el proyecto, navega a la carpeta recién generada:

     ```bash
     cd nombreProyecto
     ```

   - Instala las dependencias iniciales ejecutando:
     ```bash
     npm install
     ```

2. **Clonar el repositorio**:

   - Si ya tienes un proyecto existente en GitHub, clona el repositorio. De lo contrario, asegúrate de sincronizar el proyecto creado con un repositorio remoto:

     ```bash
     git clone https://github.com/migreydev/WorkEvaluation-1Client
     ```

   - Accede al directorio clonado o asegúrate de que tu nuevo proyecto esté configurado en esta carpeta.

3. **Instalar dependencias adicionales**:

   - Si tu proyecto tiene dependencias específicas, instálalas ejecutando:
     ```bash
     npm install
     ```

4. **Ejecutar el proyecto**:

   - Inicia la aplicación en modo desarrollo con:
     ```bash
     npm run dev
     ```
   - La aplicación estará disponible en `http://localhost:5173/`.

5. **Estructura de archivos**:

   - Los archivos JSON se encuentran en la carpeta `public/data/`. Por ejemplo:
     - `public/data/references.json`
     - `public/data/education.json`
     - `public/data/experience.json`

---

## Guía de Uso

Al ejecutar la aplicación, se desplegarán varias secciones de tu portfolio. A continuación se describen las funcionalidades clave:

- **Sección "About Me"**:

  - Información personal y una breve descripción sobre ti.

- **Sección "Education"**:

  - La educación se lista dinámicamente desde el archivo `education.json`.

- **Sección "Work Experience"**:

  - Muestra tus experiencias laborales. Los datos se obtienen desde `experience.json`.

- **Sección "Projects"**:

  - Listado de proyectos que has realizado, extraído desde el servidor.

- **Sección "Skills"**:

  - Muestra las tecnologías y habilidades que tienes en cada área de desarrollo.

- **Formulario "Contact Me"**:
  - Permite a los visitantes enviarte un mensaje. Aún no tiene integración backend.

### Estructura de los datos JSON

Cada sección que carga datos desde archivos JSON sigue una estructura similar. Por ejemplo:

```json
// Example of education.json
[
  {
    "institution": "Universidad Sevilla",
    "degree": "Grado en Geografía",
    "details": "Enfocado en desarrollo geográfico y SIG.",
    "image": "path-to-image.png"
  }
]
```

## Enlace a Figma

[]()

---

## Conclusion

Este proyecto crea portfolio utilizando React, con una estructura de datos organizada en archivos JSON y peticiones al backend. Permite a los desarrolladores mostrar sus habilidades, educación y proyectos de manera dinámica, mientras que las secciones están preparadas para ser fácilmente extendidas.

---

## Contribuciones y Agradecimientos

Agradecimientos al profesor Joaquín Borrego Fernández, mi pareja Ana Belén Pavón y compañeros por su apoyo y guía durante el desarrollo de este proyecto.

---

## Licencias

Este proyecto está licenciado bajo la licencia MIT.

---

## Contacto

**Correo:** miguelanreyesm@gmail.com  
**GitHub:** [Mi perfil de GitHub](https://github.com/migreydev)

---
