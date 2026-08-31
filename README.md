# Shop Style

Build a modern, responsive e-commerce shopping website frontend inspired by popular shopping apps, but with an original design and branding. Do NOT build the backend or database yet. Use mock/static product data for now.

1. Home Page

Create a professional shopping app home page with:

Modern header/navbar

Shopping app logo/name

Search bar with search icon

Wishlist ❤️ icon

Shopping bag/cart 🛍️ icon with item count

User/profile icon

Responsive mobile, tablet, and desktop layouts

Attractive hero/banner section

Product categories section

Popular products section

Best-selling products section

Deals/offers section

Footer

2. Search Bar

Create a fully functional frontend search experience:

Search products by name

Search by category

Search suggestions while typing

Clear search button

Show "No products found" state

Search results should update instantly using the mock product data

3. Product Categories

Create category cards with attractive images.

Categories should include:

Fashion

Electronics

Mobiles

Beauty

Home & Kitchen

Grocery

Sports

Accessories

Clicking a category should display products belonging to that category.

4. Product Cards

Create beautiful product cards containing:

Product image

Product name

Short description

Original price

Discounted price

Discount percentage

⭐ Product rating

Number of reviews

❤️ Wishlist button

"Add to Cart" button

Product category

Stock status

Use high-quality product images and make the cards visually attractive.

5. Add to Cart

Implement frontend cart functionality using local state/localStorage for now.

Users should be able to:

Add products to cart

Increase quantity ➕

Decrease quantity ➖

Remove products

See product price

See quantity

See subtotal

See total cart amount

See total number of items

Cart icon should update automatically

Show a small confirmation/toast when a product is added

Create a dedicated Shopping Bag / Cart page.

6. Shopping Bag Page

Create a clean shopping bag page with:

Product image

Product name

Price

Quantity controls

Remove button

Individual product subtotal

Total items

Cart subtotal

Discount

Delivery charge

Final total

"Continue Shopping" button

"Proceed to Checkout" button

Checkout does not need a real payment/backend implementation yet. For now, create a frontend placeholder.

7. Wishlist

Create a Wishlist page.

Users should be able to:

Add/remove products from wishlist

See wishlist product cards

Move wishlist products to cart

See wishlist item count

Store wishlist temporarily using localStorage

Use ❤️ icons and attractive hover animations.

8. Product Details Page

When a user clicks a product, open a detailed product page containing:

Large product image

Multiple product images/thumbnails

Product name

Brand

Category

⭐ Rating

Review count

Original price

Discounted price

Discount percentage

Product description

Product specifications

Available colors

Available sizes where applicable

Quantity selector

Add to Cart button

Buy Now button

Wishlist button

Delivery information

Similar/recommended products

9. Product Ratings & Reviews

Display realistic mock ratings such as:

⭐⭐⭐⭐⭐

4.5/5

4.2/5

Number of reviews

Create a rating summary section on the product details page with rating distribution bars.

10. Colors & Product Images

Make the website visually rich.

Use high-quality product images

Product cards should have consistent image sizes

Use image hover effects

Add image zoom on the product details page

Show color variants as small selectable color circles

When a color is selected, update the product image where appropriate

Use clean backgrounds and professional spacing

11. UI/UX Design

Use a premium modern e-commerce UI.

Design requirements:

Clean white/light background

Attractive primary accent color

Rounded cards and buttons

Soft shadows

Modern typography

Proper spacing

Smooth hover animations

Smooth page transitions

Responsive design

Mobile-first layout

Sticky navbar on desktop/mobile where appropriate

Accessible buttons and form elements

Loading states

Empty states

Error states

12. Navigation

Create working frontend navigation:

Home

Categories

Search

Wishlist

Shopping Bag

Product Details

Use React routing so every major page has its own route.

Suggested routes:

/
/products
/category/:category
/product/:id
/search
/wishlist
/cart
/checkout

13. Mock Product Data

Create at least 30 realistic products across different categories.

Each product should contain:

id

name

description

category

brand

price

originalPrice

discount

rating

reviewCount

images

colors

sizes

stock

specifications

Use realistic product images instead of empty placeholders.

14. Responsive Design

The website must work perfectly on:

Desktop

Laptop

Tablet

Mobile

On mobile:

Make the search bar easy to use

Use a compact navbar

Keep cart and wishlist accessible

Use a 2-column product grid where appropriate

Make product details easy to scroll

Make the shopping bag page mobile friendly

15. Important Frontend Requirement

For this first stage, DO NOT create Supabase tables, authentication, APIs, backend services, or server-side logic.

Use mock/static data + localStorage only.

Structure the project cleanly so Supabase can be integrated later without rewriting the frontend.

Create reusable components such as:

Navbar

SearchBar

CategoryCard

ProductCard

ProductGrid

RatingStars

WishlistButton

AddToCartButton

QuantitySelector

CartItem

CartSummary

ProductGallery

Footer

Toast notifications

Make the final frontend polished, production-quality, visually attractive, and fully functional with mock data.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d4340c84-3f10-4cb6-a940-2aec79efdd5d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
