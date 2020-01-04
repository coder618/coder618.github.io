<?php 
    $arr = [
        [
            'title' => 'Timeless Component Builder',
            'img' => './dist/img/undraw_speed_test_wxl0.png',
            'detail' => "A wordpress plugin to help developer for creating solid component in minimum amount of time.",
            'link' => "#how-to-build"
        ],
        // [
        //     'title' => 'Deliver Project faster then ever',
        //     'img' => './dist/img/undraw_site_stats_l57q.png',
        //     'detail' => "Build component in just easy 2 steps.",

        //     'link' => "#"
        // ],
        // [
        //     'title' => 'Use You Component Anywhere',
        //     'detail' => 'Build Component that can be use with any Wordpress site, with any plugin',
        //     'img' => './dist/img/undraw_site_stats_l57q.png',
        //     'link' => "#"
        // ]


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