# Imagen base de Node.js
FROM node:18

# Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar el package.json y el package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos del backend
COPY . .

# Exponer el puerto del servidor (3000)
EXPOSE 3000

# Comando para ejecutar el servidor
CMD ["node", "server.js"]
