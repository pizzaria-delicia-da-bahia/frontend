# <div align="center">Pizzaria Delicia da Bahia</div>

<div align="center"><img src="https://i.ibb.co/93rsyR7/home.png" alt="home" border="0"></div>

<div align="center">
    <a href="https://preview-website-pdb.vercel.app/">
        <img src="https://img.shields.io/badge/preview-vercel-a.svg?style=for-the-badge">
    </a>
    <a href="https://backend-website-pdb.vercel.app/">
        <img src="https://img.shields.io/badge/backend-github-blue.svg?style=for-the-badge">
    </a>
    <a href="https://www.figma.com/file/NvP58fWAUspNTvx5mLnoPC/Site---Pizzaria-Delicia-da-Bahia?node-id=11%3A25&t=88RvIRhdUBlI4v9O-1">
        <img src="https://img.shields.io/badge/prototype-figma-red.svg?style=for-the-badge">
    </a>
</div>
<div align="center">
    <a href="https://github.com/pizzaria-delicia-da-bahia/website">
        <img src="https://img.shields.io/badge/status-active-success.svg">
    </a>
    <a>
        <img src="https://img.shields.io/badge/node-18.14.2-blue.svg">
    </a>
     <a>
        <img src="https://img.shields.io/github/package-json/license/pizzaria-delicia-da-bahia/website">
    </a>
     <a>
        <img src="https://img.shields.io/github/package-json/v/pizzaria-delicia-da-bahia/website">
    </a>
    <a href="https://github.com/pizzaria-delicia-da-bahia/website/issues">
        <img src="https://img.shields.io/github/issues/pizzaria-delicia-da-bahia/website">
    </a>
    <a href="https://github.com/pizzaria-delicia-da-bahia/website/pulls">
        <img src="https://img.shields.io/github/issues-pr/pizzaria-delicia-da-bahia/website">
    </a>
</div>

### Introduction
Website developed with `Next.js`

### Getting Started
1 - Clone the project, and install the dependencies.
```bash
git clone https://github.com/pizzaria-delicia-da-bahia/website.git
npm install || yarn 
```
2 - Rename the `.env.example` file to `.env`.
3 - Add variables to `.env` file:
```
# This variable set the server url (5002 is the port defined in package.json)
NEXT_PUBLIC_API_URL="http:localhost:5002/api"

# Set 'api' for external database or 'local' for local database with node-json-db (default)
REPO_LOCATION=local

# This is the password you'll use to change database data in /config route
CONFIG_PASSWORD=yourpassword
```
3 - Run the following command
```bash
cd website
npm run dev || yarn dev
```

### Routes

`Static`
```
├─/home
|─/cardapio (With revalidation)
├─/localizacao
└─/sobre
```

`Single Page`
```
├─/pedido
| ├───/lanche
| ├───/pizza
| |   ├───/tamanho
| |   └───/sabores
| ├───/bebida
| ├───/itens
| ├───/informacoes-adicionais
| ├───/pagamento
| └───/confirmacao
└─────────────────
```
### Tags
`next.js` `node.js` `styled-components` `axios` `node-json-db` `react` `uuid`