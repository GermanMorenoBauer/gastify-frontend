# Ga$tify Frontend 🚀

**Aplicación móvil de gestión de gastos personales** desarrollada con Angular y TypeScript.

## 📱 Visión del Proyecto

Transformar la manera en que las personas se relacionan con su dinero, facilitando el control de sus finanzas personales con una app accesible, automatizada y educativa. Buscamos empoderar financieramente a cada usuario mediante análisis inteligentes, automatización y visualización clara de sus gastos.

## 🎯 Características Principales

### ✅ Implementadas
- **Pantalla de Bienvenida** - Landing page con logo y características principales
- **Sistema de Login** - Autenticación con usuario/mail y contraseña
- **Registro de Usuarios** - Formulario completo con validaciones
- **Diseño Responsive** - Optimizado para móviles, tablets y desktop
- **Tema Personalizado** - Colores oficiales de Ga$tify

### 🚧 En Desarrollo
- Dashboard principal
- Registro de gastos
- Categorización automática
- Estadísticas y reportes
- Integración con WhatsApp Bot
- Análisis inteligente con OpenAI

## 🛠️ Tecnologías Utilizadas

- **Angular 18** - Framework principal
- **TypeScript** - Lenguaje de programación
- **SCSS** - Preprocesador CSS
- **Poppins** - Tipografía oficial
- **Responsive Design** - Mobile-first approach

## 🎨 Paleta de Colores

```css
--gastify-primary: #3DCD99    /* Verde turquesa */
--gastify-secondary: #3B3B58  /* Púrpura grisáceo */
--gastify-dark: #0F152C       /* Azul oscuro */
--gastify-medium: #15233C     /* Azul medio */
--gastify-light: #ECF3FB      /* Azul muy claro */
```

## 📱 Pantallas Implementadas

### 1. **Pantalla de Bienvenida** (`/`)
- Logo animado de Ga$tify
- Mensaje de bienvenida
- Botones de "Crear cuenta" e "Iniciar sesión"
- Características principales destacadas

### 2. **Pantalla de Login** (`/login`)
- Formulario de autenticación
- Campos: Usuario/Mail y Contraseña
- Toggle de visibilidad de contraseña
- Botón "¿Olvidaste tu contraseña?"
- Login con Google
- Link de registro

### 3. **Pantalla de Registro** (`/register`)
- Formulario completo de registro
- Campos: Usuario, Mail, Contraseña, Confirmar Contraseña, Fecha de Nacimiento
- Checkbox de términos y condiciones
- Botón "Siguiente" para continuar

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (v18 o superior)
- npm o yarn
- Git

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/GermanMorenoBauer/gastify-frontend.git
   cd gastify-frontend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm start
   # o
   ng serve --open
   ```

4. **Compilar para producción**
   ```bash
   ng build --configuration production
   ```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── pages/
│   │   ├── welcome/          # Pantalla de bienvenida
│   │   ├── login/           # Pantalla de login
│   │   └── register/        # Pantalla de registro
│   ├── app.component.html   # Componente principal
│   ├── app.routes.ts        # Configuración de rutas
│   └── app.config.ts        # Configuración de la app
├── assets/
│   └── images/
│       └── gastifyLogo.png  # Logo oficial
├── styles.scss              # Estilos globales
└── index.html              # HTML principal
```

## 🎨 Diseño y UX

### Responsive Design
- **768px** - Tablets y pantallas medianas
- **480px** - Móviles grandes (iPhone, Android)
- **360px** - Móviles pequeños

### Características de UX
- **Mobile-first** approach
- **Touch-friendly** botones y campos
- **Accesibilidad** mejorada
- **Animaciones** suaves
- **Feedback visual** en interacciones

## 🔧 Scripts Disponibles

```bash
npm start          # Servidor de desarrollo
npm run build      # Compilar para producción
npm run test       # Ejecutar tests
npm run lint       # Linting del código
```

## 🌐 URLs de Desarrollo

- **Bienvenida**: `http://localhost:4200/`
- **Login**: `http://localhost:4200/login`
- **Registro**: `http://localhost:4200/register`

## 🔗 Integración con Backend

El frontend está preparado para integrarse con el backend de Ga$tify:

- **API Base**: `http://localhost:5000/api`
- **Endpoints principales**:
  - `POST /auth/register` - Registro de usuarios
  - `POST /auth/login` - Autenticación
  - `PUT /auth/profile` - Actualización de perfil

## 📱 Próximas Funcionalidades

### Fase 2 - Dashboard y Gestión
- [ ] Dashboard principal con resumen financiero
- [ ] Formulario de registro de gastos
- [ ] Categorización automática
- [ ] Historial de transacciones

### Fase 3 - Análisis y Reportes
- [ ] Gráficos y estadísticas
- [ ] Reportes mensuales
- [ ] Metas de ahorro
- [ ] Alertas y notificaciones

### Fase 4 - Integración Avanzada
- [ ] WhatsApp Bot para registro automático
- [ ] Análisis inteligente con OpenAI
- [ ] Exportación de datos
- [ ] Sincronización multiplataforma

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Equipo

- **Germán Moreno Bauer** - Desarrollador Full Stack
- **Ga$tify Team** - Diseño y UX

## 📞 Contacto

- **Email**: german.moreno.bauer@gmail.com
- **GitHub**: [@GermanMorenoBauer](https://github.com/GermanMorenoBauer)
- **Proyecto**: [Ga$tify Frontend](https://github.com/GermanMorenoBauer/gastify-frontend)

---

**Ga$tify** - Transformando la manera en que te relacionas con tu dinero 💰
