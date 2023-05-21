docker build -t ase-svelte-docker-node  . --target deploy-node
docker run -dp 3000:3000 ase-svelte-docker-node