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
      class="home-skn-wrapper"
      v-show="listItem.length == 0 && finishSearching == false"
    >
      <div class="skn-prod-item" v-for="skt in 4" :key="skt">
        <div class="prod-img">
          <Skeleton />
        </div>
        <div class="prod-name">
          <Skeleton />
        </div>
        <div class="prod-des">
          <Skeleton />
        </div>
      </div>
    </div>
    <div
      class="no-result"
      v-show="listItem.length == 0 && finishSearching == true"
    >
      <img src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png" />
      <h2>Không có kết quả</h2>
    </div>
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

import { Skeleton } from "vue-loading-skeleton";
import "vue-loading-skeleton/dist/style.css";
export default {
  components: {
    ProductItem,
    Skeleton,
  },
  data() {
    return {
      listItem: [], //Danh sách sản phẩm sẽ hiển thị lên kết quả tìm kiếm
      searchQueryString: "",
      finishSearching: false,
    };
  },
  async mounted() {
    console.log("mounted() : ", this.$route.params);
    var self = this;
    var searchQuery = this.$route.params.query;

    if (searchQuery && searchQuery != "") {
      self.searchQueryString = searchQuery;
    }
    var rs = await axios.get(
      "http://127.0.0.1:8000/v2/items/search/" + searchQuery
    );
    self.listItem = rs.data;
    self.finishSearching = true;
    console.log(rs.data);
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
.home-skn-wrapper {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.featured__filter {
  padding: 0 60px;
}
.no-result {
  margin: 56px auto;
  
  img {
    width: 120px;
    height: 120px;
  }
  h2 {
    margin-top: 45px;
  }
}
</style>