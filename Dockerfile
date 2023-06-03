# Указываем базовый образ
FROM node:latest

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта в контейнер
COPY . .

# Собираем приложение
RUN npm run build --prod

# Открываем порт, который будет использоваться для доступа к приложению
EXPOSE 80

# Запускаем сервер Angular
CMD [ "npm", "run", "start" ]
