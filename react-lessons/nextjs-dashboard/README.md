## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.


# Day 5: Creating Layouts and Pages in Next.js

## 📌 Key Concepts

- You can create **separate UIs for each route** using `layout.tsx` and `page.tsx` files.  
- `page.tsx` is a **special Next.js file** that exports a React component, and it's **required** for the route to be accessible.  

## 📝 Dashboard Layout

Dashboards usually have some form of **navigation** that is shared across multiple pages.  
In Next.js, you can use a **special `layout.tsx` file** to create UI that is shared between multiple pages.  

### Example Use Case:
- Create a **layout** for the dashboard pages.  
- This allows you to keep a consistent navigation/sidebar across multiple pages while changing the page content dynamically.

---
🚀 With `layout.tsx`, you can keep reusable UI (like navbars, sidebars, or footers) in one place, and focus on building unique content inside `page.tsx`.

# Choosing How to Fetch Data

This guide explains different approaches to fetching data in your application, along with when and why you might use each.

---

## 1. API Layer
APIs act as an intermediary layer between your application code and database.  

You might use an API layer when:  
- You're using third-party services that expose an API.  
- You're fetching data from the client and want to **avoid exposing database secrets** by running the API logic on the server.  

---

## 2. Database Queries
When creating API endpoints, you’ll need to write queries to interact with your database.  

- If you’re using **React Server Components** (fetching data on the server), you can **skip the API layer**.  
- In this case, you can query your database directly without risking exposing database secrets to the client.  

---

## 3. Using Server Components to Fetch Data
Server Components allow you to fetch data directly on the server.  
This avoids shipping sensitive information to the client while enabling efficient rendering.  

---

## 4. Using SQL
SQL queries provide fine-grained control over how data is fetched and manipulated.  
These can be written inside your API routes or server components, depending on your application’s architecture.  

---

# Rendering Strategies

## Static Rendering
With **static rendering**, data fetching and rendering happens **at build time** (during deployment) or when **revalidating data**.  
- Best suited for pages where data does not change frequently.  

---

## Dynamic Rendering
With **dynamic rendering**, content is rendered on the server **at request time**, when a user visits the page.  

### Benefits:
- **Real-Time Data** – Keeps data fresh and up-to-date.  
- **User-Specific Content** – Enables personalization (dashboards, profiles, etc.).  
- **Request-Time Information** – Access cookies, URL search parameters, or other request-specific data.  

---

✅ Use **Static Rendering** for rarely changing data.  
✅ Use **Dynamic Rendering** for real-time, personalized, or frequently updated content.  

---

# 📡 What is Streaming?

Streaming is a **data transfer technique** that allows you to break down a route into smaller **"chunks"** and progressively stream them from the server to the client as they become ready.  

✅ By using streaming:  
- You can **prevent slow data requests** from blocking your whole page.  
- Users can **see and interact** with parts of the page without waiting for all the data to load.  
- This improves **performance** and **user experience** by rendering UI incrementally.  
