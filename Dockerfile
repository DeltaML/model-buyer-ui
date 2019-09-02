FROM node:8.16.1 AS node_cache
MAINTAINER "DeltaML dev@deltaml.com"
WORKDIR /cache
COPY package.json .
ADD src/ /cache/src
ADD public/ /cache/public
RUN npm install
RUN npm run build
# Create app directoryappapp


FROM node:8.16.1-jessie-slim
WORKDIR /app
COPY --from=node_cache /cache/ /app/
RUN npm install -g serve
CMD ["serve", "-s", "build"]