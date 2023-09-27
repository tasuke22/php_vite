// ドロワーメニュー開閉
const headerBtn = document.querySelector(".js-hamburger-btn");
const drawerNav = document.querySelector(".js-drawer-nav");

headerBtn.addEventListener("click", () => {
  toggleMenu();
});

function toggleMenu() {
  headerBtn.classList.toggle("is-open");
  drawerNav.classList.toggle("is-show");
  document.body.classList.toggle("u-hidden");
}

// リサイズでドロワーメニューを閉じる
let timer;
window.addEventListener("resize", () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    if (window.innerWidth > 768) {
      headerBtn.classList.remove("is-open");
      drawerNav.classList.remove("is-show");
      document.body.classList.remove("u-hidden");
    }
  }, 300);
});

// トップMVのsplide
// const mvSplide = new Splide('', {
//   type: 'loop',
//   direction: 'ttb',
//   height: '68rem',
//   mediaQuery: 'max',
//   perPage: 5,
//   perMove: 1,
//   gap: 20,
//   breakpoints: {
//     767: {
//       direction: 'ltr',
//       perPage: 1,
//       heightRatio: 0,
//     },
//   },
// });
// mvSplide.mount();

// スクロールでページトップ表示
const body = document.querySelector("body");
const isTop = body.classList.contains("top");
const targetHeight = isTop
  ? document.querySelector(".p-mv").clientHeight
  : document.querySelector(".p-fv").clientHeight;
const pageTop = document.querySelector(".js-page-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > targetHeight) {
    pageTop.classList.add("is-show");
  } else {
    pageTop.classList.remove("is-show");
  }
});

// ページトップを押した時の#を消す
window.addEventListener("hashchange", () => {
  if (location.hash === "") {
    history.replaceState(null, "", location.pathname + location.search);
  }
  // フォーカスをヘッダーロゴに戻す
  document.querySelector(".p-header__logo-link").focus();
});
