## Frontend: Next.js for NHASFOTOS

**Repository:** `kriolstock-web` (or `kriolstock-frontend`)

**Framework:** Next.js (with React)

### Comprehensive Frontend Functionalities & Routes

#### 1. Public Facing Pages & Discovery

* **Homepage:**
    * Featured assets (new arrivals, best sellers, curated collections).
    * Category highlights.
    * Call-to-actions for signing up/Browse.
    * Newsletter subscription.
    * **Route:** `/`
* **Asset Listing / Browse Pages:**
    * Browse assets by category, sub-category.
    * Filtering options (price, license type, orientation, color, file type, etc.).
    * Sorting options (most popular, newest, price ascending/descending).
    * Pagination / Infinite Scroll.
    * **Routes:**
        * `/assets` (General browse)
        * `/assets/category/[slug]` (e.g., `/assets/category/presets-lightroom`)
        * `/assets/type/[slug]` (e.g., `/assets/type/photo`, `/assets/type/vector`)
        * `/assets/collection/[slug]` (Curated collections)
* **Search Results Page:**
    * Display search results with filtering/sorting similar to browse pages.
    * Suggestions for related searches.
    * **Route:** `/search?q=[query]`
* **Asset Detail Page:**
    * Large preview of the asset (with watermarks if applicable).
    * Detailed description, specifications (resolution, format, size).
    * Pricing and licensing options (Standard, Extended, etc.).
    * "Add to Cart" button.
    * "Download Sample" button (if available).
    * Related assets suggestions.
    * User reviews/comments section.
    * Creator profile link.
    * Share options.
    * **Route:** `/asset/[id]` (e.g., `/asset/12345`)
* **Creator Profile Pages (Public View):**
    * Display creator's portfolio, bio, number of sales/downloads, average rating.
    * Link to all assets by this creator.
    * **Route:** `/creator/[username]` (e.g., `/creator/johndoe`)
* **Blog / Articles:**
    * Articles about design trends, photography tips, tutorials.
    * **Routes:**
        * `/blog`
        * `/blog/[slug]`
* **About Us / Contact / FAQ / Legal:**
    * Standard informational pages.
    * **Routes:**
        * `/about`
        * `/contact`
        * `/faq`
        * `/terms`
        * `/privacy-policy`
        * `/license-agreement`

#### 2. User Authentication & Account Management

* **Registration:**
    * Sign up with email/password.
    * Social login (Google, Facebook - if implemented).
    * Email verification.
    * **Route:** `/register`
* **Login:**
    * Email/password login.
    * Social login.
    * "Remember Me" functionality.
    * **Route:** `/login`
* **Password Management:**
    * Forgot password (request reset link).
    * Reset password (using token from email).
    * Change password (while logged in).
    * **Routes:**
        * `/forgot-password`
        * `/reset-password`
        * `/account/change-password`
* **Account Settings:**
    * Edit profile information (name, email, avatar).
    * Manage notification preferences.
    * **Route:** `/account/settings`
* **Logout:**
    * Clear session/token.
    * **Route:** `/logout` (or a client-side action)

#### 3. Purchasing & Downloads

* **Shopping Cart:**
    * View selected assets, quantities, subtotal.
    * Update quantities, remove items.
    * Apply discount codes/coupons.
    * Proceed to checkout.
    * **Route:** `/cart`
* **Checkout Process:**
    * Step-by-step checkout (e.g., Shipping/Billing Info (if applicable), Payment Method).
    * Integration with payment gateways (Stripe elements, M-Pesa redirect).
    * Order summary.
    * **Route:** `/checkout`
* **Order Confirmation Page:**
    * Display order details, transaction ID.
    * Link to purchased assets for download.
    * **Route:** `/order/success/[orderId]` (or `/checkout/success`)
* **Order History / My Assets:**
    * List all past orders with status.
    * View details of each order.
    * Download purchased assets directly from here.
    * View license information for each asset.
    * **Route:** `/my-assets` (or `/account/orders`)
* **Download Page:**
    * Secure download links for individual purchased assets.
    * Instructions for using the asset.
    * **Route:** `/my-assets/download/[assetId]` (could be dynamic or handle redirects)

#### 4. Creator Dashboard (if users can upload assets)

* **Dashboard Overview:**
    * Summary of sales, earnings, asset performance.
    * Notifications/alerts.
    * **Route:** `/creator/dashboard`
* **Upload Asset:**
    * Form for uploading new assets (file upload, metadata input, licensing selection, pricing).
    * Progress indicator for large uploads.
    * **Route:** `/creator/upload`
* **My Uploads / Asset Management:**
    * List of all assets uploaded by the creator.
    * Edit asset details, update files, change pricing/licensing.
    * Delete assets.
    * **Route:** `/creator/my-uploads`
* **Earnings & Payouts:**
    * Detailed breakdown of earnings per asset.
    * Payout history.
    * Request payout.
    * Manage payment methods for payouts.
    * **Route:** `/creator/earnings`
* **Public Creator Profile Editor:**
    * Edit bio, profile picture, social links for public profile.
    * **Route:** `/creator/profile-settings`

#### 5. Admin Dashboard (Frontend)

* **Admin Login:** Separate login or role-based access.
    * **Route:** `/admin/login` (if separate)
* **Dashboard Overview:**
    * System statistics (total users, total sales, asset count).
    * Recent activities.
    * **Route:** `/admin`
* **User Management:**
    * List users, view details, suspend/activate accounts.
    * **Route:** `/admin/users`
* **Asset Management:**
    * List all assets (including pending approval).
    * Approve/reject new uploads.
    * Edit/delete any asset.
    * **Route:** `/admin/assets`
* **Order Management:**
    * View all orders, filter by status.
    * Process refunds, update order status.
    * **Route:** `/admin/orders`
* **Content Management (Blog/Pages):**
    * Create, edit, publish blog posts and static pages.
    * **Route:** `/admin/content/blog`
    * **Route:** `/admin/content/pages`
* **Category/Tag Management:**
    * Add, edit, delete categories and tags.
    * **Route:** `/admin/categories`
* **Analytics Reports:**
    * Detailed reports on sales, downloads, user activity.
    * **Route:** `/admin/reports`
