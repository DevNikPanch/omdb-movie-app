# 🎬 FilmHub — Веб-приложение для поиска и трекинга фильмов

![Vue 3](https://img.shields.io/badge/Vue.js-3.x-4fc08d?style=flat&logo=vuedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat&logo=typescript&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-State_Management-yellow?style=flat)
![Vite](https://img.shields.io/badge/Vite-5.x-646cff?style=flat&logo=vite&logoColor=white)
![Sass/SCSS](https://img.shields.io/badge/Sass-SCSS-cc6699?style=flat&logo=sass&logoColor=white)

Современное SPA-приложение для поиска фильмов и изучения информации о них. Проект работает с внешним REST API (OMDb API), поддерживает строгую типизацию данных и динамическую верстку.

Проект разработан для демонстрации навыков компонентной архитектуры на Vue 3 (Composition API), работы с глобальным состоянием через Pinia, выполнения асинхронных AJAX-запросов и построения интерфейсов на SCSS.

---

## 🎯 Возможности

- 🔍 **Поиск фильмов в реальном времени** — отправка AJAX-запросов к REST API OMDb.
- 📱 **Адаптивная сетка карточек (Grid)** — комфортный просмотр постеров и информации на любых устройствах.
- ⏳ **Обработка состояний (UI State)** — отображение загрузки (Skeleton/Loader) и понятных ошибок (если фильм не найден или произошел сбой сети).
- 🎨 **Современный SCSS-дизайн** — темная тема, плавные анимации при наведении и аккуратные микроинтерфейсы.
- 🛡️ **Строгая типизация (TypeScript)** — полное описание интерфейсов ответов от API и пропсов компонентов.

---

## 🛠️ Стек технологий

- **Фреймворк:** Vue 3 (Composition API, `<script setup>`)
- **Язык:** TypeScript
- **Управление состоянием:** Pinia
- **Стилизация:** SCSS (Sass), BEM-методология
- **Сборка:** Vite
- **API & Асинхронность:** REST API (OMDb), Fetch API / Axios

---

## ⚙️ Установка и запуск

### 1. Клонирование репозитория

```bash
git clone [https://github.com/DevNikPanch/omdb-movie-app.git](https://github.com/DevNikPanch/omdb-movie-app.git)
cd omdb-movie-app

```

### 2. Установка зависимостей

```bash
npm install

```

### 3. Настройка API ключа

Зарегистрируйтесь на [omdbapi.com](https://www.omdbapi.com/apikey.aspx) и получите бесплатный API Key.

Укажите ваш ключ в файле хранилища `src/stores/useMovieStore.ts`:

```typescript
const API_KEY = 'ВАШ_КЛЮЧ';
```

### 4. Запуск в режиме разработки

```bash
npm run dev

```

После этого откройте в браузере локальный адрес: `http://localhost:5173`

---

## 📁 Структура проекта

```
omdb-movie-app/
├── public/              # Статические ресурсы (иконки, фавикон)
├── src/
│   ├── assets/          # Изображения и глобальные стили
│   ├── components/      # UI-компоненты (MovieCard, TheHeader)
│   ├── stores/          # Pinia Store (управление состоянием и API)
│   ├── types/           # TypeScript интерфейсы
│   ├── App.vue          # Главный корневой компонент
│   └── main.ts          # Точка входа приложения
├── index.html           # HTML-шаблон
├── package.json         # Зависимости и скрипты
└── vite.config.ts       # Конфигурация Vite

```

---

## 👤 Автор

**Панчин Никита Сергеевич**

---

_Проект создан для портфолио и прокачки практических навыков во FrontEnd-разработке._
