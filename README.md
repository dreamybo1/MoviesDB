# MoviesDB
Добро пожаловать в репозиторий приложения  "MoviesDB"! Давайте рассмотрим основные аспекты этого проекта.

### Описание проекта
Приложение представляет собой кинопоиск, с возможностью искать фильмы по названию, добавлять/удалять фильмы в избранное, сортировать фильмы по различным параметрам, просматривать информацию о фильмах. Проект разработан с использованием следующих технологий и библиотек:

**JavaScript (JS)**: Основной язык программирования для создания интерактивных веб-приложений.

**React**: Библиотека, которая позволяет создавать компоненты и строить пользовательские интерфейсы.

**React-Router**: Библиотека для маршрутизаци.

**RTK**: Инструментарий для более удобного управления состоянием приложения.

**MUI**: Библиотека с готовыми UI компонентами

### Установка 
**Клонируйте этот репозиторий на свой локальный компьютер:**
```
git clone https://github.com/dreamybo1/MoviesDB.git
```

**Перейдите в директорию проекта:**
```
cd MoviesDB
```

**Установите зависимости:**
```
npm install
```
**Запустите тесты:**
```
npm test
```
**Запустите локальный сервер разработки:**
```
npm start
```
**Как начать пользоваться?**
Нажмите на иконку сверху слева для авторизации, введите ЛЮБУЮ валидную почту, затем вставьте данный токен:
```
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTMwNjgxOThkZmU0Zjk5Y2RiZTZlNmI2MGU0MGU0NSIsInN1YiI6IjY0OTFhZjE5YzJmZjNkMDBhZDAzYzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yasYFK7QmsGhulW2aFY9e8-qlyhcgSQ1t3l9N5iQeMc
```


### Структура проекта
- src/: Исходный код пет-проекта. 
  - Components/: Компоненты приложения
    - Constants/: Константы 
  - Pages/: Страницы, испольуемые в приложении
    - LoginStore/: Работа с состоянием  
  - tests/: Тесты приложения
    - UNIT/: UNIT-тесты
    - UNIT_REACT/: UNIT-тесты для React компонентов
  - App.js: Основной компонент приложения, содержащий провайдер роутера.
  - App.css: Набор основных стилей.
