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

<body class="top">
    <?php include($inc_path . 'top.php'); ?>
    <header class="l-header p-header">
        <?php include($inc_path . 'header.php'); ?>
    </header>

    <main>
        <div class="l-mv p-mv">

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