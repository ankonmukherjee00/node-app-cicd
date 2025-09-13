FROM node:18 AS build
WORKDIR /app
RUN apt-get update && apt-get install curl -y 
COPY  package*.json  ./
COPY . .
RUN npm install
RUN useradd -m Ankon
USER Ankon
FROM node:18-alpine AS runtime

WORKDIR /app

# Only copy what's needed to run the app
COPY --from=build /app ./
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3000
CMD ["npm" , "start"]