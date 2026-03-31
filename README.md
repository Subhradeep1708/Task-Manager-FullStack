# 🚀 Task Manager - Full Stack Application

## 📌 Overview

A full-stack task management application built using **Angular**, **ASP.NET Core**, and **PostgreSQL**.
It allows users to create, update, and manage tasks efficiently with a clean UI and structured backend.

---

## 🛠 Tech Stack

### Frontend

* Angular
* Tailwind CSS

### Backend

* ASP.NET Core Web API

### Database

* PostgreSQL

---

## ✨ Features

* Create, update, and delete tasks (CRUD operations)
* Drag-and-drop task management
* RESTful API integration
* Persistent data storage using PostgreSQL
* Modular and scalable architecture

---

## 📂 Project Structure

```bash
task-manager/
│
├── frontend/        # Angular application
│   ├── src/
│   ├── public/
│   └── angular.json
│
├── backend/         # ASP.NET Core API
│   ├── Controllers/
│   ├── Models/
│   ├── Data/
│   ├── Migrations/
│   ├── Program.cs
│   └── appsettings.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/subhradeep1708/task-manager.git
cd task-manager
```

---

### 2️⃣ Run Backend (.NET)

```bash
cd backend
dotnet restore
dotnet run
```

👉 Backend will run on:
http://localhost:5000

---

### 3️⃣ Run Frontend (Angular)

```bash
cd frontend
npm install
ng serve
```

👉 Frontend will run on:
http://localhost:4200

---

## 🔗 API Configuration

Make sure your Angular app calls the backend at:

```ts
http://localhost:5000/api
```

---

## 📌 Future Improvements

* User authentication (JWT)
* Role-based access control
* Deployment (Docker / Cloud)
* UI/UX enhancements

---

## 👨‍💻 Author

**Subhradeep Sardar**
