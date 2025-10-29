# 📘 English Janala – Assignment 006

**Live Site**: [https://english-bd.netlify.app/](https://english-bd.netlify.app/)  
**GitHub Repo**: [HasanCodeX/Project---web-b11-A6-english-janala](https://github.com/mehedi-hasan1102/Project---web-b11-A6-english-janala)

A fully responsive and interactive educational web application to enhance English vocabulary learning through levels, quizzes, and rich word details — built using **HTML**, **JavaScript**, **Tailwind CSS**, and **DaisyUI**.

---

## 📌 Project Overview

This is Assignment-006 of the Programming Hero Web Development Course (Batch-11). The application is designed to guide learners through English vocabulary levels with structured UI and API-based word data, complete with examples, synonyms, and pronunciation features.

---

## 🛠️ Built With

- **HTML5**
- **Vanilla JavaScript**
- **Tailwind CSS**
- **DaisyUI**
- **SweetAlert2**
- **Web Speech API (for word pronunciation)**
- **[Programming Hero API](https://openapi.programming-hero.com)**

---

## 🚀 Features

### 🔹 General Features
- Responsive design
- Login form validation
- Smooth navigation and section scrolling
- Loading spinner during API fetch
- Error handling for missing or undefined data

### 🔹 Vocabulary Section
- Dynamically generated lesson buttons from API
- Word cards with meaning and pronunciation
- Modal for detailed word information (example, synonyms, etc.)
- Active state for selected lessons
- "No Word Found" message if lesson has no words

### 🔹 FAQ Section
Includes answers to:
- `var`, `let`, and `const`
- `map()`, `forEach()`, and `filter()`
- Arrow functions vs. regular functions
- Promises in JavaScript
- Closures in JavaScript

### 🔹 Login & Logout Flow
- Simple login form (name + password)
- Name required, password must be `123456`
- On successful login:
  - Banner is hidden
  - Navigation, Vocabulary, and FAQ sections become visible
- Logout reverses the flow

---

## 🧪 Advanced (Optional) Features

- ✅ **SweetAlert2** integration for clean, animated alerts
- ✅ **Speech synthesis** for word pronunciation
- ✅ **Local font integration** for displaying Bangla words (optional)
- ✅ Smooth scroll behavior for in-page navigation

---

## 🔗 API Endpoints

1. **All Levels**  
   `https://openapi.programming-hero.com/api/levels/all`

2. **Words by Level**  
   `https://openapi.programming-hero.com/api/level/{id}`

3. **Word Details**  
   `https://openapi.programming-hero.com/api/word/{id}`

4. **All Words**  
   `https://openapi.programming-hero.com/api/words/all`

---

## 🖼️ Screenshots

> _(Add screenshots here if you want — from your live site showing UI, modal, cards, etc.)_

---

## 📚 How to Use

```bash
# No build step required
# Just clone and open index.html in browser

git clone https://github.com/HasanCodeX/Project---web-b11-A6-english-janala.git
cd Project---web-b11-A6-english-janala
open index.html
