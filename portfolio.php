<?php 
    $webistes = [
        [
            'title'=> 'Nagad',            
            'detail' => 'Built with Wordpress',
            'role' => 'Both Front End and Backend',
            'img' => './dist/img/portfolio/nagad.jpg',
            'link' => 'https://nagad.com.bd'
        ],

        [
            'title'=> 'Ecoute',            
            'detail' => 'Built with Wordpress and VueJS',
            'role' => 'Both Front End and Backend',
            'img' => './dist/img/portfolio/ecoute.jpg',

            'link' => 'https://ecoute.ch'
        ],
        [
            'title'=> 'Maatra',            
            'detail' => 'Built with Wordpress and Elementor',
            'role' => 'Both Front End and Backend',
            'img' => './dist/img/portfolio/maatra.jpg',
            'link' => 'https://maatra.com'
        ],
        [
            'title'=> 'City Sapphire',
            'detail' => 'Built with Wordpress and Elementor',
            'role' => 'Both Front End and Backend',
            'img' => './dist/img/portfolio/sapphire.jpg',
            'link' => 'http://www.citygem.com.bd/sapphire'
        ],
        [
            'title'=> 'Citybank',
            'detail' => 'Built with Laravel',
            'role' => 'Front End Only',
            'img' => './dist/img/portfolio/citybank.jpg',
            'link' => 'http://www.thecitybank.com'
        ],
        [
            'title'=> 'Thinkdemy',
            'detail' => 'Static Site',
            'role' => 'Full Site',
            'img' => './dist/img/portfolio/thinkdemy.jpg',
            'link' => 'http://www.thinkdemy.com/'
        ],
    ]
?>

<section class="section protfolio">


    <div class="container">    
        <h2 class="section-title">Portfolio</h2>
        <p class="lead"> Here is some of my Portfolio, Which i would like to share with you.</p>
        
        
        <div class="row items">
            <?php foreach( $webistes as $item ): ?>            
            <div class="item">
                <a target="_blank" href="<?php echo $item['link'] ?>" class="portfolio-card">
                    <div class="img-section" style="background-image:url(<?php echo $item['img'] ?>)"></div>

                    <div class="text-section">
                        <h3 class="title"><?php echo $item['title'] ?></h3>
                        <p class="detail"><?php echo $item['detail'] ?></p>
                        <p class="role"><?php echo $item['role'] ?></p>                        
                    </div>
                </a>
            </div>
            <?php endforeach; ?>

        </div>

    </div>
    

</section>