# MiniBarrio

MiniBarrio es una plataforma digital de portafolio comercial y recomendación
para microcomercios locales. Permite a un negocio (por ahora, barberías y
estética) publicar su catálogo de servicios, precios y portafolio de trabajos,
y permite a los clientes descubrir negocios cercanos, agendar citas, dejar
reseñas y guardar sus favoritos.

> **Alcance del prototipo:** cubre exclusivamente barberías y estética del
> barrio Britalia (Kennedy, Bogotá D.C.), con dos tipos de usuario —
> **cliente** y **propietario de negocio** (sin rol de administrador).

## Funcionalidades principales

**Vitrina pública** (sin necesidad de iniciar sesión)
- Búsqueda y listado de negocios registrados, con mapa esquemático
- Perfil público de cada negocio: portafolio, servicios y precios, reseñas

**Panel del cliente** (`/perfil`)
- Resumen de actividad, historial y próximas citas
- Gestión de citas, negocios favoritos y reseñas escritas
- Datos personales

**Panel del propietario** (`/panel`)
- Resumen del negocio con métricas (visitas, citas, ingresos estimados) y
  gráficas semanales/mensuales
- Gestión de catálogo de servicios y portafolio de trabajos
- Agenda de citas y listado de clientes

**Autenticación:** registro e inicio de sesión con correo/contraseña o Google,
con enrutamiento y permisos automáticos según el rol del usuario.

## Stack tecnológico

- **Frontend:** React 18 + [Vite](https://vitejs.dev)
- **Backend como servicio:** [Firebase](https://firebase.google.com) — Authentication, Firestore, Hosting
- **Enrutamiento:** React Router 6

Para más detalle: `docs/ARQUITECTURA.md` (arquitectura), `docs/MODELO_DATOS.md`
(modelo de datos) y `docs/UML.md` (diagramas de casos de uso, clases,
secuencia y despliegue).

## Requisitos previos

- [Node.js](https://nodejs.org) 20 o superior (incluye `npm`)
- Credenciales de un proyecto de [Firebase](https://console.firebase.google.com)
  con **Authentication** (correo/contraseña y Google) y **Firestore** habilitados

## Instalación

```bash
git clone https://github.com/DiegoAlejandro04/minibarrio-app.git
cd minibarrio-app
npm install
```

Configura las variables de entorno con las credenciales de Firebase:

```bash
cp .env.example .env
```

Edita `.env` con los valores de tu proyecto de Firebase (Firebase Console →
Configuración del proyecto → Tus apps → SDK setup and configuration → Config):

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

`.env` está en `.gitignore` y nunca se sube al repositorio. Las reglas de
seguridad de Firestore ya están definidas en `firestore.rules` — despliégalas
a tu proyecto con `firebase deploy --only firestore:rules` (requiere el
[Firebase CLI](https://firebase.google.com/docs/cli)).

## Uso

```bash
npm run dev
```

Abre `http://localhost:5173`. Desde ahí puedes:

- Explorar la vitrina pública de negocios en `/`
- Registrarte como cliente (`/registro/cliente`) para agendar citas, guardar
  favoritos y dejar reseñas desde `/perfil`
- Registrar un negocio (`/registro/negocio`) para gestionarlo desde `/panel`
  como propietario

| Comando | Qué hace |
|---|---|
| `npm run dev` | Levanta el servidor de desarrollo con recarga en caliente |
| `npm run build` | Genera el build de producción en `dist/` |
| `npm run preview` | Sirve localmente el build de `dist/` para probarlo antes de desplegar |
| `npm run lint` | Revisa el código con ESLint |

## Estructura del proyecto

```
src/
├─ components/     Componentes compartidos (iconos, navbar, modales)
├─ context/        Contexto de autenticación (rol y sesión del usuario)
├─ firebase/       Configuración e inicialización de Firebase
├─ pages/
│  ├─ client/       Vitrina pública y panel del cliente (/perfil)
│  └─ owner/        Panel del propietario del negocio (/panel)
└─ routes/         Rutas protegidas por rol
```

## Licencia

Uso académico — Universidad Católica de Colombia.
