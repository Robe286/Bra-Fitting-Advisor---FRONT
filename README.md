# 🧠 Frontend - Bra Fitting Advisor - App de Asesoramiento en corsetería con React y Context API

Este frontend está desarrollado en **React** y se conecta a un backend con Node.js y MongoDB.
Permite a los usuarios authenticarse (registro/login), y una vez logeados, pueden:
**Ver contenido didáctico, calcular su talla de sujetador, rellenar un formulario de asesoramiento,filtrar productos en base a sus preferencias y a disponibilidad de stock y ver las recomendaciónes** todo de forma privada.

---

## 📦 Tecnologías utilizadas

- **React**
- **React Router DOM**
- **Axios** para hacer peticiones HTTP
- **Context API** para la gestión del estado global de autenticación
- **js-cookie** (para manejar las cookies)
- **React Select** para la creación y personalización de selectores múltiples en react
- **React icons** para la integración y personalización de iconos en react

---

### Frontend
- https://brafittingadvisor.netlify.app/

### Backend
- [Linkderender]

---

### Funcionalidades principales

- Registro de usuario
- Login de usuario
- Mantener su sesión mediante cookies
- Asesoramiento (Contenido y servicio solo visible y usable por el usuario)
- Persistencia de sesión entre recargas de página
- Logout desde cualquier parte de la app

---

## Estructura

<pre>
src/
├── api/
│   └── axiosConfig.js
├── components/
│   ├── filters/                        # 7 filtros para el formulario
│   │   ├── BrandFilter.jsx
│   │   ├── CateogryFilter.jsx
│   │   ├── ColorFilter.jsx
│   │   ├── CupFilter.jsx
│   │   ├── PriceFilter.jsx
│   │   ├── SizeFilter.jsx
│   │   └── StuffedFilter.jsx
│   ├── forms/
│   │   ├── BraSizeForm.jsx
│   │   ├── FilterProductsForm.jsx
│   │   ├── LoginForm.jsx
│   │   └── RegisterForm.jsx
│   ├── visuals/                    # 3 componentes visuales (videos, scroll y spinner)
│   │   ├── ScrollTop.jsx           # Para gestionar la posición el iniciar cada página
│   │   ├── Spinner.jsx
│   │   └── VideoPerfecttBra.jsx
│   ├── Footer.css                  # Estilos para el Footer
│   ├── Footer.jsx                  # Componentes de página
│   ├── Header.jsx
│   ├── Nav.jsx
│   ├── PrivateRoute.jsx         # Componente para rutas privadas
│   └── Results.jsx
├── context/
│   └── AuthContext.jsx          # Contexto de autenticación global
├── hooks/
│   └── useFilters.js            # 1 hook personalizado para los filtros
├── layouts/
│   └── Template.jsx             # Layout principal con Header/Footer + Outlet
├── pages/
│   ├── Home.jsx                 # Página pública
│   ├── Advisor.jsx              # Página protegida / privada
│   ├── RegisterAndLogin.jsx     # Registro e inicio de sesión
│   └── Error.jsx                # Página de error para rutas no válidas
├── styles/
│   └── selectStyles,js          # Estilos para los input selects
├── utils/
│   ├── filterOptions.js         # Funciones utilitarias (ej. validaciones)
│   └── VideoParagraph.jsx       # Parafos para seccion de los videos 
├── App.jsx                      # Componente raíz que integra rutas y contexto
├── App.css                      # Css específicas de componentes
├── index.css                    # Css de elementos globales
├── main.jsx 
└── router.jsx                   # Rutas con create browser router
</pre>

---

## Autenticación con Context API y Cookies

En este proyecto usamos **cookies manuales con `js-cookie`** para equilibrar seguridad y simplicidad. No son `httpOnly` (que el frontend no puede leer), pero son más seguras que exponer directamente tokens en `localStorage`.

---

## Flujo de autenticación

1. El usuario se registra o inicia sesión → el backend devuelve un **JWT**
2. El frontend guarda el token en una **cookie** usando `js-cookie`
3. Cada vez que se hace una petición, Axios incluye ese token en la cabecera `Authorization`
4. Si el token es válido, el backend permite acceder o modificar notas
5. Si el usuario hace logout, se elimina la cookie y se bloquea el acceso

---

## 🧠 Contexto de autenticación (`AuthContext`)

Se usa `Context API` para:

- Saber en cualquier momento si el usuario está autenticado (`isAuthenticated`)
- Ejecutar funciones globales como `login()` y `logout()`
- Evitar tener que pasar props entre muchos componentes

```
