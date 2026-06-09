# Nora Signage Portal

Prototipo del portal comercial para vender Nora Signage como:

1. SaaS / Cloud
2. Instalación local / on-premise

## Cómo correrlo local

```bash
cd nora-signage-portal
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

Luego abre:

```txt
http://127.0.0.1:5050
```

## Estructura

```txt
nora-signage-portal/
├── app.py
├── requirements.txt
├── templates/
│   └── index.html
└── static/
    ├── css/
    │   └── styles.css
    └── js/
        └── app.js
```

## Dónde editar

- Texto y estructura: `templates/index.html`
- Diseño, colores, responsive: `static/css/styles.css`
- Animaciones e interacciones: `static/js/app.js`
