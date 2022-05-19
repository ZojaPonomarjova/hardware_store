import { createStore } from "vuex";
import * as data from "../data/products.json";

export default createStore({
  state: {
    //состояние для карточки
    cardData: null,
    productPhotoSrc: "../assets/images/loading_picture.png",
  },
  getters: {
    cardData(state) {
      return state?.cardData;
    },
    productCode(state) {
      return parseInt(state?.cardData.code, 10);
    },
    productPhotoSrc(state) {
      return state?.productPhotoSrc;
    },
  },
  mutations: {
    SET_CARD_DATA: (state, payload) => {
      state.cardData = payload;
    },
    SET_PRODUCT_PHOTO_SRC: (state, payload) => {
      state.productPhotoSrc = payload;
    },
  },
  actions: {
    getCardData: (context, event) => {
      console.log("store");
      const cardData = data.find((elem) => elem.productId === event.target.id);
      console.log(cardData);

      context.commit("SET_CARD_DATA", cardData);
      if (cardData.primaryImageUrl) {
        // img.addEventListener("error", () => {
        //   context.commit(
        //     "SET_PRODUCT_PHOTO_SRC",
        //     "../assets/images/loading_picture.png"
        //   );
        // });
        setTimeout(() => {
          context.commit("SET_PRODUCT_PHOTO_SRC", cardData.primaryImageUrl),
            5000;
        });

        // const img = document.querySelector(".product_photo");
        // const img = document.querySelectorAll("div");

        // console.log(img);
        // img.addEventListener("error", () => {
        //   context.commit(
        //     "SET_PRODUCT_PHOTO_SRC",
        //     "../assets/images/loading_picture.png"
        //   );
        // });
      }
    },
    getProductPhotoSrc: (context) => {},
  },
  modules: {},
});
