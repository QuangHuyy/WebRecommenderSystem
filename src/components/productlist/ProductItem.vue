<template>
  <!-- <div class="featured__item"> -->
  <div class="featured__item" @click="onClickItem">
    <div class="featured__item__pic">
      <img :src="product.img" alt="" />
      <ul class="featured__item__pic__hover">
        <li>
          <a><i class="fa fa-heart"></i></a>
        </li>
      </ul>
    </div>
    <div class="featured__item__text">
      <h6>
        <a>{{ getProductName(product) }}</a>
        <!-- <a href="#">{{ product?.full_name }}</a> -->
        <!-- product?.name + " " + product?.brand + " " + product?.cpu1 -->
      </h6>
      <h5>{{ formatCurrency(product?.price) }} đ</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: { type: Object, default: function () {} },
  },
  methods: {
    getProductName(product) {
      var name =
        // getNamePart(product?.code) +
        getNamePart(product?.name) +
        getNamePart(product?.brand) +
        getNamePart(product?.cpu2) +
        getNamePart(product?.cpu1) +
        getNamePart(product?.cpu3) +
        getNamePart(product?.ram) +
        getNamePart(product?.DauVao) +
        getNamePart(product["Phan Giai"]) +
        getNamePart(product?.cameraTruoc) +
        getNamePart(product?.heDieuHanh) +
        getNamePart(product?.CongSuat) +
        getNamePart(product?.boNhoTrong) +
        getNamePart(product?.KetNoi) +
        getNamePart(product?.TuongThich1) +
        getNamePart(product["Phu song"]) +
        getNamePart(product?.manHinh1);

      return name;
      function getNamePart(part) {
        var p = part ?? "";
        if (p != "") {
          return p + " ";
        }

        return "";
      }
    },

    onClickItem(id) {
      if (this.$route.name == "detail") {
        var self = this;
        this.$router
          .push({
            name: "home",
          })
          .then(() => {
            self.$router.push({
              name: "detail",
              params: {
                id: self.product.code,
              },
            });
          });
      } else {
        this.$router.push({
          name: "detail",
          params: {
            id: this.product.code,
          },
        });
      }
    },

    formatCurrency(money) {
      var normalized = "";
      money = String(money);
      for (let index = money.length - 1; index >= 0; index--) {
        const m = money[index];
        if ((index + 1) % 3 == 0 && index != money.length - 1) {
          normalized = "." + normalized;
        }
        normalized = m + normalized;
      }

      return normalized;
    },
  },
};
</script>
<style lang="scss" scoped>
.featured__item__pic {
  height: 178px;
  width: 262px;
  border: 1px solid #7fad39;
  border-radius: 8px;
  cursor: pointer;
  margin: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.featured__item {
  cursor: pointer;
}
.featured__item:hover .featured__item__pic .featured__item__pic__hover {
  bottom: 15px;
}

.featured__item:hover {
  cursor: pointer;
  .featured__item__text {
    a {
      color: #5c8918;
    }
  }
}
</style>