# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Техническое задание
Цель: разработать небольшое тестовое приложение для оценки навыков работы с Next.js 14, React, TypeScript, TailwindCSS.
________________________________________
Требования к заданию
1.	Технологии:
o	Next.js 14 (использовать App Router — структура в папке /app).
o	React.
o	TypeScript.
o	TailwindCSS.
2.	Описание задачи:
o	Получить список пользователей с API:
https://jsonplaceholder.typicode.com/users
o	Отобразить список пользователей на главной странице (/).
3.	Требования к реализации:
Главная страница (/)
o	Загрузить данные о пользователях на стороне сервера.
o	Отобразить пользователей в виде карточек.
o	Для каждого пользователя показать:
	Имя (name)
	Email (email)
	Город (address.city)
o	При клике на пользователя — переходить на его детальную страницу.
Страница пользователя (/users/[id])
o	Использовать динамическую маршрутизацию через App Router (/users/[id]/page.tsx).
o	Загрузить данные конкретного пользователя по адресу:
https://jsonplaceholder.typicode.com/users/{id}
o	Загрузка данных должна происходить на сервере.
o	На странице отобразить более подробную информацию:
	Имя (name)
	Email (email)
	Телефон (phone)
	Веб-сайт (website)
	Название компании (company.name)
	Полный адрес (address: город, улица, дом, индекс)
4.	Технические требования:
o	TypeScript — обязателен.
o	TailwindCSS — обязателен для всей верстки.
o	Все запросы к API должны выполняться на серверной стороне, без запросов с клиента
o	Правильная структура проекта (например: app/, components/, types/).
o	Чистота и читаемость кода (понятные имена переменных, функции без лишней вложенности).
5.	Дополнительные пожелания (необязательно, но будет плюсом):
o	Адаптивная верстка для мобильных устройств.
o	Обработка ошибок (например, если пользователь не найден).
o	Разделение компонентов: карточка пользователя, детали пользователя.
o	Добавить метатеги, статические и динамические.
________________________________________
Что нужно предоставить
•	Архив проекта или ссылку на репозиторий (GitHub).
________________________________________
Примечания
•	Использование сторонних UI-библиотек типа MUI, Ant Design и прочих — запрещено.
•	Разрешено использовать только TailwindCSS для стилизации.
•	Все запросы к внешнему API должны выполняться исключительно на серверной стороне, чтобы максимально использовать возможности SSR и серверных компонентов.
