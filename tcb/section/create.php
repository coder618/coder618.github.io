
<section class="create" id="how-to-build">

    <div class="container">
        <h2>😵 Build a Component in 2 easy steps</h2>
       

        <div class="step1">
            <h5>Step 1</h5>
            <p class="section-detail">
            We are going to <span class="highlight">register</span> a new component by defining component fields.<br>
            You can define This following function in your theme function.php file, or you can create
            a separate file and link your file to function.php.
            </p>
                <div class="editor-wrapper">
                    <pre><code>
    function banner_component($arr){
        $arr['banner'] = [
            // for text field
            [
                'type' => 'text',
                'field' => 'title',
                'label' => __("Banner Title", 'text-domain')
            ],
            // for textarea field
            [
                'type' => 'textarea',
                'field' => 'detail',
                'label' => __("Banner Detail", 'text-domain')
            ],
            // for file field
            [
                'type' => 'file',
                'field' => 'img',
                'label' => __("Banner Image", 'text-domain')
            ],
            // for repeater field
            [
                'type' => 'file',
                'field' => 'items',
                'label' => __("Multiple items title", 'text-domain'),
                'fields' => [
                    [
                        'type' => 'text',
                        'field' => 'title',
                        'label' => __("Title", 'text-domain')
                    ],
                    [
                        'type' => 'textarea',
                        'field' => 'detail',
                        'label' => __("Title", 'text-domain')
                    ],
                    [
                        'type' => 'file',
                        'field' => 'img',
                        'label' => __("Image", 'text-domain')
                    ],
                ]
            ],


        ];
        return $arr;        
    }
    add_filter( 'tcb__fileds', 'banner_component' );

    </code></pre>
                
                
                
                
                
                
    </div>
    <!-- step 1 end -->
    <div class="step1">
        <h5>Step 2</h5>
        <p class="section-detail">
        In this step we are going to create a template for the component, in .php file format. <br>
        Create a file at your theme folder <span class="highlight">/tcb/component-banner.php</span> <br>        
        And declare a variable like this > <span class="highlight">$data = tcb_data()</span> <br>
        Then you are all set. all user input data will be return in <span class="highlight">$data </span> variable. <br>
        </p>
            <div class="editor-wrapper"><pre><code>
    /*
     file_info: tcb/component-banner.php
     we can use any wordpress function , raw HTML, php here.
    */


    // all the component data will be return as an associative array.
    $data = tcb_data();
    print_r($data);


        </code></pre></div>
    </div>
    <!-- step 2 end -->

            
        
        </div>
       
    
    </div>

</section>