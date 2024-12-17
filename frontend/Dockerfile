# Imagen base de NGINX para servir archivos estáticos
FROM nginx:latest

# Copiar los archivos del frontend al directorio de NGINX
COPY . /usr/share/nginx/html

# Exponer el puerto del servidor web
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]