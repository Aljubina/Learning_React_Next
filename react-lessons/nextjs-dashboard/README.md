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
