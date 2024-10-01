
//headerNav
// function toggleNav() {
//   var body = document.body;
//   var hamburger = document.getElementById('js-hamburger');
//   var blackBg = document.getElementById('js-black-bg');
//   var menuList = document.querySelectorAll(".menuList");



//   hamburger.addEventListener('click', function () {
//     body.classList.toggle('nav-open');
//   });
//   blackBg.addEventListener('click', function () {
//     body.classList.remove('nav-open');
//   });
//   blackBg.addEventListener('click', function () {
//     body.classList.remove('nav-open');
//   });
//   // menuList.forEach(function (menu) {
//   //   console.log(123);
//   //   menu.addEventListener('click', function () {
//   //     body.classList.remove('nav-open');
//   //   });
//   // });
// }

// toggleNav();


$(function () {
  // メニューひらく
  $(".hamburger").click(function () {
    $('body').toggleClass("nav-open");
    $(".hamburger").toggleClass("active");
  });
  // メニューとじる
  $(".hamburger").click(function () {
    $(".hamburger").removeClass("active");
  });
  $(".js-black-bg").click(function () {
    $('body').removeClass("nav-open");
  });
  $(".menuListLink").click(function () {
    $('body').removeClass("nav-open");
  });
});


//Swiper設定
const mvSwiper = new Swiper('.mvSwiper', {
  spaceBetween: 20, // スライド間の余白（px）
  loop: true,
  autoplay: { // 自動再生させる
    delay: 3000, // 次のスライドに切り替わるまでの時間（ミリ秒）
    disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
  },
});

// const mmbSwiper = new Swiper('.mmbSwiper', {
//   slidesPerView: 6, // コンテナ内に表示させるスライド数（CSSでサイズ指定する場合は 'auto'）
//   spaceBetween: 20, // スライド間の余白（px）
//   loop: true,
//   autoplay: { // 自動再生させる
//     delay: 3000, // 次のスライドに切り替わるまでの時間（ミリ秒）
//     disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
//   },
// });



// モーダル
var trigger = $('.modal__trigger'),
  wrapper = $('.modal__wrapper'),
  layer = $('.modal__layer'),
  container = $('.modal__container'),
  close = $('.modal__close');

// 『モーダルを開くボタン』をクリックしたら、『モーダル本体』を表示
$(trigger).click(function () {
  var index = $(this).index();
  $(wrapper).eq(index).fadeIn(400);

  // スクロール位置を戻す
  $(container).scrollTop(0);

  // サイトのスクロールを禁止にする
  $('html, body').css('overflow', 'hidden');
});

// 『背景』と『モーダルを閉じるボタン』をクリックしたら、『モーダル本体』を非表示
$(layer).add(close).click(function () {
  $(wrapper).fadeOut(400);

  // サイトのスクロール禁止を解除する
  $('html, body').removeAttr('style');
});



// モーダルその２
var trigger02 = $('.modal__trigger02'),
  wrapper02 = $('.modal__wrapper02'),
  layer02 = $('.modal__layer02'),
  container02 = $('.modal__container02'),
  close02 = $('.modal__close02');

// 『モーダルを開くボタン』をクリックしたら、『モーダル本体』を表示
$(trigger02).click(function () {
  var index02 = $(this).index();
  $(wrapper02).eq(index02).fadeIn(400);

  // スクロール位置を戻す
  $(container02).scrollTop(0);

  // サイトのスクロールを禁止にする
  $('html, body').css('overflow', 'hidden');
});

// 『背景』と『モーダルを閉じるボタン』をクリックしたら、『モーダル本体』を非表示
$(layer02).add(close02).click(function () {
  $(wrapper02).fadeOut(400);

  // サイトのスクロール禁止を解除する
  $('html, body').removeAttr('style');
});


//タブ
$(function () {
  // 該当するクラスを変数に格納する。→コード量の節約
  const tabButton = $(".js-tab-button"),
    tabItem = $(".js-tab-item");
  // tabButtonをクリックすると処理が発火する。
  tabButton.on("click", function () {
    // 並列で並んでる内の、何番目のtabButtonかを取得
    let index = tabButton.index(this);
    // tabButtonとtabItemに初期状態でついている、"is-active"を削除
    tabButton.removeClass("is-active");
    tabItem.removeClass("is-active");
    // 該当するindexのtabButtonとtabItemに"is-active"を付与
    tabButton.eq(index).addClass("is-active");
    tabItem.eq(index).addClass("is-active");
  });
});


//スムーススクロール
$(function () {
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    var speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});


//フェード
const targets = document.getElementsByClassName('fade');
for (let i = targets.length; i--;) {
  let observer = new IntersectionObserver((entries, observer) => {
    for (let j = entries.length; j--;) {
      if (entries[j].isIntersecting) {
        entries[j].target.classList.add('active');
      } else {
        entries[j].target.classList.remove('active');
      }
    }
  });
  observer.observe(targets[i]);
}

$(function () {
  // animation呼び出し
  if ($('.js-scroll-trigger').length) {
    scrollAnimation();
  }

  // animation関数
  function scrollAnimation() {
    $(window).scroll(function () {
      $(".js-scroll-trigger").each(function () {
        let position = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();

        if (scroll > position - windowHeight + 200) {
          $(this).addClass('is-animated');
        }
      });
    });
  }
  $(window).trigger('scroll');
});

