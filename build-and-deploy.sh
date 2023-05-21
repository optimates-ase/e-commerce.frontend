docker build -t ase-svelte-docker-node  . --target deploy-node
docker run -dp 8080:8080 ase-svelte-docker-node