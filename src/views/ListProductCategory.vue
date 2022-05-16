<template>
  <!-- <h1 @click="changeRoute">SEARCH VIEW</h1> -->

  <div class="hero__search">
    <div class="hero__search__form">
      <form action="#">
        <div class="hero__search__categories">
          Tất cả
          <span class="arrow_carrot-down"></span>
        </div>
        <input
          type="text"
          v-model="searchQueryString"
          placeholder="Bạn tìm gì..."
        />
        <button class="site-btn" @click="onClickBtnSearch(searchQueryString)">
          TÌM KIẾM
        </button>
      </form>
    </div>
    <div class="hero__search__phone">
      <div class="hero__search__phone__icon">
        <i class="fa fa-phone"></i>
      </div>
      <div class="hero__search__phone__text">
        <h5>1900 561 252</h5>
        <span>hỗ trợ 24/7</span>
      </div>
    </div>
  </div>
  <div class="row featured__filter">
    <div
      v-for="item in listItem"
      :key="item.code"
      class="col-lg-3 col-md-4 col-sm-6 mix oranges"
    >
      <ProductItem :product="item"></ProductItem>
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/productlist/ProductItem.vue";
import axios from "axios";
export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      listItem: [], //Danh sách sản phẩm sẽ hiển thị lên kết quả tìm kiếm
      searchQueryString: "",
    };
  },
  async mounted() {
    console.log(this.$route.params);
    var self = this;
    var searchQuery = this.$route.params.query;
    var rs = await axios.get(
      "http://127.0.0.1:8000/category/" + searchQuery
    );
    self.listItem = rs.data.listProduct;
    console.log(rs.data.listProduct);
  },
  created() {
    // this.$watch(
    //   () => this.$route.params,
    //   (toParams, previousParams) => {
    //     print(toParams);
    //     // react to route changes...
    //   }
    // );
  },
  methods: {
    /**
     * XỬ lý sự kiện click vào nút tìm kiếm
     * Author: TQHUY (11/03/2022)
     */
    onClickBtnSearch(value) {
      // var self = this;
      this.$router.push({
        name: "search",
        params: {
          query: value,
        },
      });
    },
    changeRoute() {
      this.$router.push({
        name: "search",
        params: {
          query: "HP",
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.hero__search {
  display: flex;
  justify-content: center;
  align-items: center;
  .hero__search__phone {
    margin-left: 15px;
  }
}
.featured__filter {
  padding: 0 60px;
}
</style>