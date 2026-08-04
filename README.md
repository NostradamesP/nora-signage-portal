# Nora Signage — Portal Comercial

> Prototipo del portal comercial de señalización digital · Digital signage commercial portal prototype

Prototipo del portal comercial para vender **Nora Signage** en dos modalidades: **SaaS / Cloud** (suscripción en la nube) e **instalación local / on-premise** (en servidores del cliente).

---

## 🇪🇸 Español

### Descripción

Landing page de ventas para el producto de señalización digital **Nora Signage**. Página adaptable según el foco elegido (`/saas` o `/local`) con las siguientes secciones:

- **Hero** con mockup de dashboard y CTAs "Quiero SaaS" / "Quiero instalación local".
- **Soluciones:** comparativa SaaS/Cloud vs Instalación Local.
- **Features:** gestión de pantallas, playlists, programación, monitoreo, contenido multimedia y roles/permisos.
- **Cómo trabajamos:** diagnóstico, configuración, implementación y soporte.
- **Precios:** Plan SaaS desde US$49/mes · Solución Local desde US$1,200.
- **Contacto** vía `mailto:hola@norasignage.com`.

### Stack

- **Backend:** Python + **Flask 3** (única dependencia).
- **Frontend:** HTML5 + CSS3 + JavaScript vanilla con plantillas **Jinja2**.
- Tipografía **Inter** (Google Fonts). Sin base de datos ni variables de entorno.

### Ejecución local

```bash
cd nora-signage-portal
python3 -m venv .venv
source .venv/bin/activate      # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python app.py
# → http://127.0.0.1:5050
```

Rutas: `/` (general), `/saas` (foco SaaS) y `/local` (foco local).

### Estructura

```txt
nora-signage-portal/
├── app.py                 # Servidor Flask (3 rutas)
├── requirements.txt       # Flask==3.0.3
├── templates/
│   └── index.html         # Landing con Jinja2 (url_for)
├── static/
│   ├── css/styles.css     # Estilos y variables de marca
│   └── js/app.js          # Menú móvil, reveals, scroll, efecto 3D
├── index.html             # Copia estática (fallback / GitHub Pages)
├── css/ y js/             # Duplicados estáticos de la raíz
└── .nojekyll              # Deshabilita Jekyll en GitHub Pages
```

### Dónde editar

- Texto y estructura: `templates/index.html`
- Diseño, colores, responsive: `static/css/styles.css`
- Animaciones e interacciones: `static/js/app.js`

### Contacto

- Email: `hola@norasignage.com` · Santo Domingo, RD

---

## 🇺🇸 English

### Overview

Sales landing prototype for **Nora Signage**, a digital signage platform offered as **SaaS / Cloud** (subscription) or **on-premise** installation on customer servers.

### Sections

- **Hero** with dashboard mockup and "SaaS" / "On-premise" CTAs.
- **Solutions:** SaaS/Cloud vs Local installation comparison.
- **Features:** screen management, playlists, scheduling, monitoring, multimedia content and roles/permissions.
- **How we work:** diagnosis, configuration, implementation and support.
- **Pricing:** SaaS from US$49/month · Local from US$1,200.
- **Contact** via `mailto:hola@norasignage.com`.

### Stack

- **Backend:** Python + **Flask 3** (sole dependency).
- **Frontend:** HTML5 + CSS3 + vanilla JavaScript with **Jinja2** templates.
- **Inter** font (Google Fonts). No database or environment variables.

### Local run

```bash
cd nora-signage-portal
python3 -m venv .venv
source .venv/bin/activate      # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python app.py
# → http://127.0.0.1:5050
```

Routes: `/` (general), `/saas` (SaaS focus) and `/local` (on-premise focus).

### Structure

```txt
nora-signage-portal/
├── app.py                 # Flask server (3 routes)
├── requirements.txt       # Flask==3.0.3
├── templates/
│   └── index.html         # Landing with Jinja2 (url_for)
├── static/
│   ├── css/styles.css     # Styles and brand variables
│   └── js/app.js          # Mobile menu, reveals, scroll, 3D effect
├── index.html             # Static copy (fallback / GitHub Pages)
├── css/ and js/           # Root static duplicates
└── .nojekyll              # Disables Jekyll on GitHub Pages
```

### Where to edit

- Text and structure: `templates/index.html`
- Design, colors, responsive: `static/css/styles.css`
- Animations and interactions: `static/js/app.js`

### Contact

- Email: `hola@norasignage.com` · Santo Domingo, DR
