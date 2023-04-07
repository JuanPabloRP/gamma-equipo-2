## Leer el readme y los txt con explicaciones de ciertas carpetas/archivos

Leer:

- readme
- En (navbar-publico) van las páginas con navbar (con el que me puedo mover entre páginas), es decir casi todas las páginas excepto la página de donaciones y las que no tengan el navbar en la página de filantropia

- En (navbar-micrositio) va la página de donacion, el formulario, etc son las que tienen arriba un navbar o header con el logo de filantropia y una frase, con fondo azul y un footer con datos de eafit

- En carpeta components van los componentes, no se si lo vamos a hacer atom design o cómo, pero aqui van esos componentes que pueden ser reutilizados en varias partes de la aplicación

- En data pueden ir los archivos .json para cada parte de la aplicacion (que es donde extraeremos la info, [base de datos dummy]) para no quemar los datos en el HTML

- Para los estilos solo es crear el archivo scss, importarlo en style.scss e importar style.scss
  Clonan el repositorio: git clone https://github.com/nodo-eafit-frontend/gamma-equipo-2

Entran en la carpeta: cd gamma-equipo-2

Descargan todas las librerias: pnpm install

Ejecutan el proyecto (instalen pnpm es más rápido que npm y para tener un estandar): pnpm next dev

Crean su rama (dependiendo de la funcionalidad que vayan a desarrollar): git checkout -b nombreRama

Ya cuando se necesite se hace el merge a main
...

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
