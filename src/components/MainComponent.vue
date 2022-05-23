/*корневой компонент */
<template>
  <div class="main__container">
    <main class="main">
      <div class="main__links-container" v-if="!cardData">
        <LinkComponent
          v-for="product in products"
          :key="product.productId"
          :title="product.title"
          :id="product.productId"
          v-on:handleClick="onClickGetProduct($event)"
        />
      </div>

      <ProductCard
        v-if="cardData"
        :productTitle="cardData.title"
        :code="productCode"
        :imageSrc="productPhotoSrc"
        :priceRetail="priceRetail"
        :priceGold="priceGold"
        :bonusCost="bonusCost"
        :unitRatioAlt="unitRatioAlt"
        :unitAlt="cardData.unitAlt"
        :unit="cardData.unit"
        :unitFull="unitFull"
        :additionalProducts="additionalProducts"
        :productId="cardData.productId"
        :unitSelect="unitSelect"
        v-on:handleClickGetAlternativeCost="getAlternativeCost($event)"
      />
    </main>
    <FooterComponent />
  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles/vars.scss";

.main__container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.main {
  flex: 1 0 auto;

  background-color: $screen;

  padding: 40px 50px;

  @media screen and (max-width: 768px) {
    margin-left: 0px;
    padding-left: 20px;
    padding-right: 20px;
  }
}

.main__links-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.footer {
  flex: 0 0 auto;

  background-color: $grey;
}
</style>

<script>
import FooterComponent from "@/components/FooterComponent";
import LinkComponent from "@/components/LinkComponent.vue";
import ProductCard from "@/components/ProductCard.vue";
import { mapActions } from "vuex";
import * as data from "../data/products.json";

export default {
  name: "MainComponent",
  components: {
    FooterComponent,
    LinkComponent,
    ProductCard,
  },
  data() {
    return {
      products: data,
    };
  },
  computed: {
    cardData() {
      return this.$store.getters.cardData;
    },
    productCode() {
      return this.$store.getters.productCode;
    },
    productPhotoSrc() {
      return this.$store.getters.productPhotoSrc;
    },
    priceGold() {
      return this.$store.getters.cardData.priceGoldAlt.toFixed(2);
    },
    priceRetail() {
      return this.$store.getters.cardData.priceRetailAlt.toFixed(2);
    },
    bonusCost() {
      return (this.$store.getters.cardData.priceRetailAlt * 0.6).toFixed(2);
    },
    unitRatioAlt() {
      return (1 / this.$store.getters.cardData.unitRatioAlt).toFixed(2);
    },
    unitFull() {
      if (this.$store.getters.cardData.unitFull === "штука") {
        return "поштучно";
      } else if (this.$store.getters.cardData.unitFull === "метр погонный") {
        return "метражом";
      } else {
        return "упаковками";
      }
    },
    unitSelect() {
      if (this.$store.getters.cardData.unitFull === "штука") {
        return "штуку";
      } else if (this.$store.getters.cardData.unitFull === "метр погонный") {
        return "погонный метр";
      } else {
        return "упаковку";
      }
    },
    additionalProducts() {
      const additionalProducts =
        this.$store.getters.cardData.assocProducts.split(";");
      additionalProducts.pop();
      for (let i = 0; i < additionalProducts.length; i++) {
        if (i < additionalProducts.length - 1) {
          additionalProducts[i] += ", ";
        } else {
          additionalProducts[i] += ".";
        }
      }

      return additionalProducts;
    },
    //unitSelect
  },
  methods: {
    ...mapActions({
      onClickGetProduct: "getCardData",
      getAlternativeCost: "getAlternativeCost",
    }),
  },
};
</script>
