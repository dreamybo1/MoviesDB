# MoviesDB
Добро пожаловать в репозиторий приложения  "MoviesDB"! Давайте рассмотрим основные аспекты этого проекта.
<div width="100%" align="center"> 
  <img src="https://github.com/dreamybo1/MoviesDB/blob/gh-pages/screenshots/%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82%2024-08-2023%20201338.jpg" width="400" />
  <img src="https://github.com/dreamybo1/MoviesDB/blob/gh-pages/screenshots/%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82%2024-08-2023%20201506.jpg" width="400" />
  <img src="https://github.com/dreamybo1/MoviesDB/blob/gh-pages/screenshots/%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82%2024-08-2023%20201648.jpg" width="400" />
  <img src="https://github.com/dreamybo1/MoviesDB/blob/gh-pages/screenshots/%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82%2024-08-2023%20201731.jpg" width="400" />
  <img src="https://github.com/dreamybo1/MoviesDB/blob/gh-pages/screenshots/%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82%2024-08-2023%20201759.jpg" width="400" />
  <img src="https://github.com/dreamybo1/MoviesDB/blob/gh-pages/screenshots/%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82%2024-08-2023%20201815.jpg" width="400" />
</div>





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
1. Включите VPN
2. Нажмите на иконку сверху справа для авторизации
3. Введите ЛЮБУЮ валидную почту
4. Вставьте данный токен:

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
