<?php 
    $arr = [
        [
            'title' => 'Build Gutenberg Component With PHP',
            'img' => './dist/img/undraw_speed_test_wxl0.png',
            'detail' => "A Wordpress plugin to help developer for creating reuseable gutenberg solid component in minimum amount of time.",
            'link' => "#how-to-build"
        ],
    ]

?>

<section class="banner banner-slider">
    <div class="container">
        <div class="banner-slider-items">
            <?php foreach($arr as $item):  ?>
            <div class="each-slide">
                <div class="text-section">
                    <h2 class="title"><?php echo $item['title']  ?></h2>
                    <p class="detail"><?php echo $item['detail']  ?></p>
                    
                    <a href="<?php echo $item['link'] ?>" class="btn btn-primary cta">GET STARTED</a>
                </div>
                <div class="img-section">
                    <img src="<?php echo  $item['img'] ?>" alt="<?php echo  $item['title'] ?>">
                </div>
            </div>
            <?php endforeach;  ?>       
        
        </div>
    
    
    
    </div>


</section>