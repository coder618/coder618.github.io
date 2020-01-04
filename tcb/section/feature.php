<?php 
    $arr = [
        [
            'title' => 'Build Timeless Component',
            'detail' => "Shortcode one of the most old feature in wordpress. This plugin 
            use this feature for render your component, so I think you can consider your created component as timeless one.",
        ],
        [
            'title' => 'Performance',
            'detail' => "This plugin load(enqueue) nothing to the front-end user. So you user can expect a faster load time.",
        ],  
        [
            'title' => 'Rapid Development',
            'detail' => "Develop Component more than 10X faster than other popular wordpress builder",
        ],
        [
            'title' => 'Fully Loaded',
            'detail' => "This plugin Require 0 dependency to make a component.",
        ],
              
    ];
$tick = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/></svg>';

?>

<section class="feature" id="feature">
    <div class="container">

    <h2>🥳 Features</h2>
       
        <div class="items">
            <?php foreach($arr as $item):  ?>
            <div class="item">
                <div class="feature-item">
                    <?php echo $tick  ?>
                    <div class="text-section">
                        <h4><?php echo $item['title']  ?></h4>
                        <p><?php echo $item['detail']  ?></p>                
                    </div>
                </div>           
            
            </div>
            <?php endforeach;  ?>        
        </div>   
    
    </div>

</section>