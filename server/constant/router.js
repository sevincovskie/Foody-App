export const ROUTER = {
  PRODUCTS: "/products",
  CARD: "/basket",
  ORDER: "/order",
  ORDER_HISTORY: "/order-history",
  UPLOADS: "/uploads",
  RESTUARANTS: "/restuarants",
  RESTUARANTS_ID: (rest_id) => `/restuarants/${rest_id}`,
  CATEGORY: "/category",
  OFFER: "/offer",
  USERS_HASH_PASSWORD: "/users-hash-password",
};


export const CLIENT = {
  HOME: "/",
  RESTAURANTS: "/restaurants/",
  USER: "/user",
  ABOUTUS: "/about-us",
  HOWITWORKS: "/how-it-works",
  FAQS: "/faqs",
  LOGIN: "/login",

  USER: "user",
  PROFILE: "profile",
  BASKET: "basket",
  ORDERS: "orders",
  CHECKOUT: "checkout",



};

export const ADMIN = {
  ADMIN: "/admin/",
  RESTAURANTS: "/admin/restaurants",
  PRODUCTS: "/admin/products",
  CATEGORY: "/admin/category",
  ORDERS: "/admin/orders",
  HISTORY: "/admin/order-history",
  OFFERS: "/admin/offers",
  LOGIN: '/admin/login',
}