<?php 
    $services = [
        [
            'title'=> 'Build Custom Template',            
            'detail' => 'I can build you a custom design template with maximum customize facility',
            'img' => ''
        ],
        [
            'title'=> 'Landing Page Development',            
            'detail' => 'Need to develop complex design Landing page, then i think i can help you',
            'img' => ''
        ],
        [
            'title' => 'Develop Single Page Webiste',
            'detail' => 'I will Develop Complex Design Landing page for your project/website',
            'img' => ''
        ],

        [
            'title' => 'Maintenes',
            'detail' => 'I can do maintanes setup for your webiste, It could be manual or automated depending on your need',
            'img' => ''
        ],
        [
            'title' => 'Help Your Team',
            'detail' => 'With my development skill I can help your team to speed up develpment progress to complete project faster',
            'img' => ''
        ]
    ]
?>


<section class="services">
    <div class="container">    
        <h2 class="section-title" >Task I can do For You</h2>
        <p class="lead">I can help you by providing following services</p>

        <div class="row items content">           
            <?php foreach($services as $item): ?>
                <div class="item">
                    <a class="service-card">
                        <div class="img-section"></div>
                        <h3>Help Your Team</h3>
                        <p>With my development skill I can help your team to speed up develpment progress to complete project faster</p>
                    </a>
                </div>
            <?php endforeach; ?>            
        </div>
    </div>
</section>