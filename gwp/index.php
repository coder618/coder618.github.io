<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <style>
    <?php 
      echo file_get_contents('./dist/css/theme.min.css');
    ?>
    </style>

    <title>Gutenberg With PHP - WordPress Plugin</title>

  </head>
  <body>
    <?php include 'section/main-navigation.php'  ?>
    <?php include 'section/banner.php'  ?>
    <?php include 'section/feature.php'  ?>
    <?php include 'section/create.php'  ?>
    <?php include 'section/how-to-use.php'  ?>
    <?php //include 'section/install.php'  ?>
    <?php include 'footer.php'  ?>
    
    <script>    
      <?php 
        echo file_get_contents('./dist/js/theme.js');
      ?>
    </script>

  </body>
</html>