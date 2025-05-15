import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./features/api/productsApi";
import { aboutApi } from "./features/api/aboutApi";
import { contactApi } from "./features/api/contactApi";
import { servicesApi } from "./features/api/servicesApi";
import { blogsApi } from "./features/api/blogsApi";
import { categoryApi } from "./features/api/categoryApi";
import { galleryApi } from "./features/api/galleryApi";
import { rateApi } from "./features/api/rateApi";
import { apartmentApi } from "./features/api/apartmentApi";
import { sliderApi } from "./features/api/slideApi";
import { partnerApi } from "./features/api/partnerApi";
import { faqApi } from "./features/api/faqApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [productsApi.reducerPath]: productsApi.reducer,
      [aboutApi.reducerPath]: aboutApi.reducer,
      [contactApi.reducerPath]: contactApi.reducer,
      [servicesApi.reducerPath]: servicesApi.reducer,
      [blogsApi.reducerPath]: blogsApi.reducer,
      [categoryApi.reducerPath]: categoryApi.reducer,
      [galleryApi.reducerPath]: galleryApi.reducer,
      [rateApi.reducerPath]: rateApi.reducer,
      [apartmentApi.reducerPath]: apartmentApi.reducer,
      [sliderApi.reducerPath]: sliderApi.reducer,
      [partnerApi.reducerPath]: partnerApi.reducer,
      [faqApi.reducerPath]: faqApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(productsApi.middleware)
        .concat(aboutApi.middleware)
        .concat(contactApi.middleware)
        .concat(servicesApi.middleware)
        .concat(blogsApi.middleware)
        .concat(categoryApi.middleware)
        .concat(galleryApi.middleware)
        .concat(rateApi.middleware)
        .concat(apartmentApi.middleware)
        .concat(sliderApi.middleware)
        .concat(partnerApi.middleware)
        .concat(faqApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
