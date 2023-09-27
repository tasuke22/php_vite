<?php
$root_path = "../";
$inc_path = $root_path . "_inc/";
$asset_path = $root_path . "_asset/";
$image_path = $root_path . "_asset/images/";
?>
<!DOCTYPE html>
<html lang="ja">

<head>
  <?php include($inc_path . 'head.php'); ?>
</head>

<body>
  <?php include($inc_path . 'top.php'); ?>
  <header class="l-header p-header">
    <?php include($inc_path . 'header.php'); ?>
  </header>

  <main>
    <div class="l-fv p-fv">
      <div class="p-fv__content">
        <h1 class="p-fv__title">タイトル</h1>
      </div>
    </div>

    <div class="l-breadcrumb p-breadcrumb">
      <div class="l-inner">
        <ul class="p-breadcrumb__list">
          <li class="p-breadcrumb__item">
            <a href="<?= $root_path ?>" class="p-breadcrumb__link">ホーム</a>
          </li>
          <li class="p-breadcrumb__item">
            <span class="p-breadcrumb__current">ページ</span>
          </li>
        </ul>
      </div>
    </div>

    <section class="l-** p-**">
      コンテンツ
    </section>
  </main>

  <footer class="l-footer p-footer">
    <?php include($inc_path . 'footer.php'); ?>
  </footer>
  <?php include($inc_path . 'bottom.php'); ?>
</body>

</html>