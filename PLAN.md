# Plan de Ejecución - Elite Paws Landing Page

## Configuración del Proyecto

1. **Inicializar proyecto Astro**
   - `npm create astro@latest elite-paws`
   - Seleccionar: Empty project, TypeScript strict
   - Instalación de dependencias

2. **Configurar GitHub Pages**
   - Instalar `@astrojs/static` (ya incluido por defecto)
   - Crear `astro.config.mjs` con `site` y `base`
   - Configurar GitHub Actions workflow

## Estilos (Variables CSS)

3. **Crear variables de colores en theme.css**
   - Primary: `#E85D04` (naranja)
   - Secondary: `#1A1A2E` (azul oscuro)
   - Accent: `#F4A261` (dorado)
   - Background: `#FFFCF2` (crema)
   - Text: `#1A1A2E`
   - White: `#FFFFFF`
   - Gray: `#6B7280`

## Componentes

4. **Header Component**
   - Logo (texto "Elite Paws")
   - Navegación: Home, About, Services, Contact
   - Botón "Book Now"
   - Responsive: menú hamburguesa en móvil

5. **Hero Section**
   - Imagen de perro (derecha)
   - Título: "Premium Pet Care for Your Furry Friend"
   - Subtítulo: "Where your pet's comfort and happiness come first"
   - Botones: "Get Started", "Learn More"
   - Commit: "feat: add hero section component"

6. **Features Section**
   - 4 tarjetas con iconos:
     - 🐕 Grooming
     - 🏠 Boarding
     - 🚶 Walking
     - 🏥 Veterinary
   - Título: "Our Services"
   - Commit: "feat: add features/services section"

7. **About Section**
   - Imagen (izquierda)
   - Título: "Caring for Your Pets Like Our Own"
   - Párrafo descriptivo
   - Commit: "feat: add about section component"

8. **Testimonials Section**
   - 3 tarjetas con reseñas
   - Fotos de perfil, nombre, reseña
   - Título: "What Pet Parents Say"
   - Commit: "feat: add testimonials section"

9. **CTA Section**
   - Fondo oscuro
   - Título: "Ready to Give Your Pet the Best Care?"
   - Botón: "Book Now"
   - Commit: "feat: add call-to-action section"

10. **Footer**
    - Logo
    - Links: Home, About, Services, Contact
    - Redes sociales (icons)
    - Copyright
    - Commit: "feat: add footer component"

## Integración

11. **Ensamblar Landing Page**
    - Importar todos los componentes en index.astro
    - Commit: "feat: assemble complete landing page"

## Despliegue

12. **Configurar GitHub Pages**
    - Agregar workflow en `.github/workflows/deploy.yml`
    - Commit: "ci: add GitHub Pages deployment workflow"

13. **Desplegar**
    - Push a GitHub
    - Configurar GitHub Pages en settings del repo
    - Commit: "deploy: release v1.0.0"
