# Etapa de construcción
FROM node:16 AS build

WORKDIR /app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todos los archivos del directorio actual al directorio de trabajo
COPY . .

# Construye la aplicación
RUN VITE_APP_TITLE="Este titulo proviene de dockerfile" npm run build

# Etapa de producción
FROM nginx:alpine

# Copia los archivos de construcción al servidor Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
