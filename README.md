# Modern Next.js Admin Dashboard

A professional, high-performance dashboard layout built with **Next.js 16**, **Shadcn UI**, and **Tailwind CSS**. This project features a persistent sidebar, dynamic navigation, and full dark mode support.

## 🚀 Key Features

-   **Persistent Sidebar State:** Uses server-side cookies to remember if the sidebar is collapsed or expanded, eliminating layout shift on page refresh.
-   **Dynamic Navigation:** A robust sidebar with support for:
    -   Collapsible menu groups.
    -   Nested sub-menus (multi-level navigation).
    -   Menu badges (e.g., notification counts).
    -   Action buttons (e.g., "Add Project" plus icon).
-   **Dark Mode Support:** Fully integrated with `next-themes` including a polished theme switcher in the Navbar.
-   **Responsive Design:** Mobile-friendly layout using Shadcn's `SidebarProvider` and `SidebarTrigger`.
-   **Modern Typography:** Optimized with Next.js Google Fonts (`Geist` and `Geist Mono`).

## 🛠️ Tech Stack

-   **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
-   **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Theme Management:** [Next Themes](https://github.com/pacocoursey/next-themes)

## 📁 Project Structure

-   `app/layout.tsx`: The heart of the app. Configures providers (Theme, Sidebar) and handles the server-side cookie for the sidebar state.
-   `components/AppSidebar.tsx`: The primary navigation component. Contains menu logic, collapsible groups, and the footer user-profile dropdown.
-   `components/Navbar.tsx`: The top bar featuring the sidebar toggle, dashboard links, and the theme mode switcher.
-   `components/providers/`: Contains the `ThemeProvider` for consistent UI rendering.

## ⚙️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the app:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see your dashboard.

## 📝 Usage Notes

### Adding Navigation Items
To add new links to the sidebar, simply update the `items` array in `components/AppSidebar.tsx`:

```typescript
const items = [
    {
        title: "New Page",
        url: "/new-page",
        icon: MyIcon,
    },
];
