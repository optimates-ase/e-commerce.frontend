# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building && Deploying

To create a production version of your app, you need to have docker installed.
The result is a docker container that acts as a node.js server and serves the built files.

### Shell script

```bash
./build-and-deploy.sh
```

### Powershell script

```cmd
.\build-and-deploy.bat
```

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
