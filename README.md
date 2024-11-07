# 🚀 Project: Pressupostos - Web Budget Calculator

This project is aimed at developing an interactive web application to assist users in calculating and customizing a budget for website services. Using React and Vite, the application will incorporate checkboxes, input fields, and buttons to adjust the total budget dynamically based on the selected options.

## 🎯 Project Goals

The primary goal is to create an intuitive budgeting tool that allows users to select services, customize options, and calculate a total cost interactively. Additionally, the project emphasizes structured code for maintainability, component reusability, and testing readiness. This setup will aid freelance developers and other users in quickly generating multiple quotes.

### 🔑 Key Features:

- **User Interaction**: Dynamic selection and adjustment of services and customization.
- **Reactivity**: Real-time calculation and update of the total price based on user choices.
- **Routing**: Page navigation using React Router for an improved user experience.
- **Project Structure**: Well-organized component structure for better maintenance and scalability.

## 🚀 Getting Started

1. Clone the repository and navigate into the project folder:

   ```bash
   git clone https://github.com/gogamar/pressupostos.git
   cd pressupostos
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be accessible at `http://localhost:5173`.

---

## 📚 Exercises

#### 🧪 Exercise 1

- **Description**: Implement three checkboxes for selecting services:
  - SEO Campaign (€300) 🔍
  - Advertising Campaign (€400) 📢
  - Website Development (€500) 💻
- **Objective**: Dynamically adjust the total price based on the selected services.
- **Hint**: Use individual or grouped state management to store checkbox selections.

#### 🧩 Exercise 2

- **Description**: Add options to customize the "Website Development" service by selecting the number of pages and languages.
- **Objective**: Calculate the additional cost using the formula:
  `(Number of Pages + Number of Languages) * €30`.

#### 🔢 Exercise 3

- **Description**: Implement increment and decrement buttons for selecting the number of pages and languages.
- **Objective**: Make data entry simpler by enabling users to adjust page and language counts with button clicks.

#### 🏠 Exercise 4

- **Description**: Create a welcome screen explaining the application's purpose and usage.
- **Objective**: Allow navigation between the welcome screen and the main calculator screen using React Router.

#### 📋 Exercise 5

- **Description**: Enable the creation of multiple budget quotes by adding fields for the budget name and client name.
- **Objective**: Store multiple quotes with the chosen services and total price in a list for user reference.

#### 💡 Exercise 6

- **Description**: Implement a help button that displays an info popup explaining the number of pages and languages.
- **Objective**: Use Bootstrap or Tailwind modals for the popup and display an information icon.

#### 🔍 Exercise 7

- **Description**: Add sorting buttons for the budget list:
  - Alphabetical sort 🔤
  - Date sort 📆
  - Reset sorting ↩️
- **Objective**: Improve list organization and accessibility for multiple quotes.

#### 🔍 Exercise 8

- **Description**: Add a search feature to filter the budget list by name.
- **Objective**: Quickly find specific budgets by name search.

#### 💰 Exercise 9

- **Description**: Add an option to apply a 20% discount for annual budgets.
- **Objective**: Show discounted pricing when the user opts for an annual budget.

#### 🔗 Exercise 10

- **Description**: Enable URL sharing of a budget quote so that recipients can view the configured budget.
- **Objective**: Create dynamic URLs that reflect the selected options and allow direct access to a specific budget setup. Example URL:

```
http://localhost:5173/home?WebPage=true&CampaignSEO=true&pages=1&lang=2
```
