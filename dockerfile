# the first container will copy all the artifacts and 
# build the application
FROM node:lts-slim AS build

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

# this container will copy all the build files from the first step
# and serve the files on the node Backend.

FROM node:lts-buster as deploy-node

WORKDIR /app
COPY --from=build /app/package.json .
COPY --from=build /app/build ./build
RUN npm install -omit:dev

EXPOSE 8080
ENTRYPOINT ["npm", "run", "start"]
