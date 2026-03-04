# AGENTS.md - Elite Paws Landing Page

## Proyecto
Landing page para negocio de cuidado de mascotas "Elite Paws" construido con Astro.

## Variables de Colores (CSS)
```css
:root {
  --color-primary: #E85D04;
  --color-secondary: #1A1A2E;
  --color-accent: #F4A261;
  --color-background: #FFFCF2;
  --color-text: #1A1A2E;
  --color-white: #FFFFFF;
  --color-gray: #6B7280;
  --color-gray-light: #F3F4F6;
}
```

## Estructura del Proyecto
```
elite-paws/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── About.astro
│   │   ├── Testimonials.astro
│   │   ├── CTA.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── public/
│   └── images/
├── astro.config.mjs
└── package.json
```

## Diseño (Referencia)
- **Header**: Logo "Elite Paws" + nav + botón "Book Now"
- **Hero**: Imagen perro derecha, título "Premium Pet Care for Your Furry Friend", subtítulo, 2 botones
- **Features**: 4 servicios (Grooming, Boarding, Walking, Veterinary)
- **About**: Imagen persona con perro + texto
- **Testimonials**: 3 reseñas con avatar
- **CTA**: Fondo oscuro, título + botón
- **Footer**: Logo, links, redes sociales

## Reglas de Commits
Por cada funcionalidad completar un commit con mensaje convencional:
- `feat: add header component`
- `feat: add hero section`
- `feat: add features section`
- `feat: add about section`
- `feat: add testimonials section`
- `feat: add cta section`
- `feat: add footer component`
- `feat: assemble landing page`
- `ci: add github pages workflow`
- `deploy: release v1.0.0`

## GitHub Pages Configuration
- Site URL: `https://yrguativa.github.io/pegsApp/`
- Base: `/pegsApp/`
- Usar `@astrojs/static`
- Workflow: `.github/workflows/deploy.yml`

## Imágenes a Usar
- Hero: Perro grande (usar placeholder o descargar)
- About: Persona con perro
- Testimonials: Avatars 3 personas
- Icons: SVG inline o library

## Pasos de Ejecución
1. `npm create astro@latest elite-paws -- --template minimal --typescript strict`
2. Configurar astro.config.mjs con site y base
3. Crear estilos globales con variables CSS
4. Crear componentes uno por uno
5. Ensamblar en index.astro
6. Crear workflow de GitHub Actions
7. Push y configurar GitHub Pages
