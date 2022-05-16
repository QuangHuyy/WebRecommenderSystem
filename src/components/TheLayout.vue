<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="header__top__left">
              <ul>
                <li><i class="fa fa-envelope"></i> therichposts@gmail.com</li>
                <li>Mua hàng thông minh</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="header__top__right">
              <div class="header__top__right__social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-pinterest-p"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="header__logo">
            <a href="/" class="logo">V-Shop</a>
          </div>
        </div>
        <div class="col-lg-6">
          <nav class="header__menu">
            <ul>
              <li class="active" @click="$router.push({ name: 'home' })">
                <a href="#">Trang chủ</a>
              </li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Liên hệ</a></li>
            </ul>
          </nav>
        </div>
        <div class="col-lg-3">
          <div class="header__cart">
            <ul>
              <li>
                <a href="#"><i class="fa fa-heart"></i> <span>1</span></a>
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-shopping-bag"></i> <span>3</span></a
                >
              </li>
            </ul>
            <div class="header__cart__price">
              Khuyến mãi: <span>150.00 đ</span>
            </div>
          </div>
        </div>
      </div>
      <div class="humberger__open">
        <i class="fa fa-bars"></i>
      </div>
    </div>
  </header>
  <slot></slot>
  <footer class="footer spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="footer__about">
            <div class="footer__about__logo">
              <a href="#" class="logo">V-Shop</a>
            </div>
            <ul>
              <li>Địa chỉ : Hà Nội</li>
              <li>Điện thoại: 1900 561 252</li>
              <li>Email: therichposts@gmail.com</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
          <div class="footer__widget">
            <h6>Đường dẫn</h6>
            <ul>
              <li><a href="#">Giới thiệu công ty (MWG.vn)</a></li>
              <li><a href="#">Tuyển dụng</a></li>
              <li><a href="#">Gửi góp ý, khiếu nại</a></li>
              <li><a href="#">Tìm siêu thị (3.108 shop)</a></li>
            </ul>
            <ul>
              <li><a href="#">Gọi mua: 1800.1060</a></li>
              <li><a href="#">Kỹ thuật: 1800.1763</a></li>
              <li><a href="#">Khiếu nại: 1800.1062</a></li>
              <li><a href="#">Bảo hành: 1800.1064</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="footer__widget">
            <h6>Đăng ký nhận tin tức</h6>
            <p>Thông báo về các sản phẩm mới và đợt khuyến mại.</p>
            <form action="#">
              <input type="text" placeholder="Email của bạn" />
              <button type="submit" class="site-btn">Đăng ký</button>
            </form>
            <div class="footer__widget__social">
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-instagram"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-pinterest"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="footer__copyright">
            <div class="footer__copyright__text">
              <p>Công ty cổ phần V-shop</p>
            </div>
            <div class="footer__copyright__payment">
              <img src="assets/img/payment-item.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.header__logo {
  &:hover a {
    color: black;
  }
}
</style>