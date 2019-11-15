<?php 
    $webistes = [
        'open_source' => [
            [
                'title' => "Render Posts",
                'link'=> 'https://wordpress.org/plugins/render-posts/',
                'detail' => "Wordpress Plugin",
                'img' => './dist/img/portfolio/render-posts.svg',
                'role' => "Plugin Author"
            ]
        ],

        'wordpress' => [
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
        ],
        "static" => [
            [
                'title'=> 'Thinkdemy',
                'detail' => 'Static Site',
                'role' => 'Full Site',
                'img' => './dist/img/portfolio/thinkdemy.jpg',
                'link' => 'http://www.thinkdemy.com/'
            ],
        ],
        
    ];


?>

<section class="section protfolio">


    <div class="container">    
        <h2 class="section-title">Portfolio</h2>
        <p class="lead">
            During passed 3 years i have completed/contributed in many website, 
            but I cant able to share all of them here ( for NDA and Project which I dont like ).
        <br>
            Here is some of my project/website lists which i would like to share with you people.
        </p>
        
        
        <div class="content">
            <ul class='portfolio_sort_list'>
                <?php foreach( $webistes as $k => $item ): ?>            
                    <li><a class="<?php echo  $k == 'open_source' ? 'active' : '' ?>" href="<?php echo $k ?>"><?php echo str_replace("_", " ", ucfirst($k))  ?></a></li>
                <?php endforeach;  ?>
            </ul>

            <div class="portfolio-cats-wrapper">
            
                <?php foreach( $webistes as $k => $items ): ?>            
                    <div class="each-cat-wrapper <?php echo  $k === 'open_source' ? 'active': ''  ?>" data-cat="<?php echo $k ?>">
                        <div class="items">
                        <?php foreach($items as $item):  ?>
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
                        <?php endforeach;  ?>
                        </div>
                    </div>
                <?php endforeach; ?>

            </div>
        </div>

    </div>
    

</section>