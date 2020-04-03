
<section class="create" id="how-to-build">

    <div class="container">
        <h2>😵 Build a Component in 2 easy steps</h2>
       

        <div class="step1">
            <h5>Step 1 -- Define Component Structure</h5>
            <p class="section-detail">
            We are going to <span class="highlight">register</span> a new component by defining component fields.<br>
            You can define This following function in your theme function.php file, or you can create
            a separate file then link your file to function.php.
            </p>
                <div class="editor-wrapper">
                    <pre><code>
    // A sample component 
    function gwp_sample_component($arr){
        $arr['samplecta'] = [
            'title' => 'GWP Sample CTA ',
            'detail' => 'Custom CTA ',
            'fields' => [
                [
                    "title" => "CTA Title",
                    "type" => "text",
                    "field" => "title"
                ],
                [
                    "title" => "CTA Detail",
                    "type" => "textarea",
                    "field" => "Detail"
                ],

                [
                    "title" => "Button Link",
                    "type" => "text",
                    "field" => "link"
                ],            
            ]
        ];
        return $arr;        
    }
    add_filter( 'gwp__fields', 'gwp_sample_component' );
    </code></pre>
                

    </div>
    <!-- step 1 end -->
    <div class="step1">
        <h5>Step 2 -- Make The Component Template</h5>
        <p class="section-detail">
        In this step we are going to create a template for the component, in PHP. <br>
        Create a file at your activated theme folder <span class="highlight">gwp/samplecta.php</span> samplecta will be changed based on component name (eg:  $arr['samplecta']) <br>      

        And declare a variable like this > <span class="highlight">$data = gwp_data()</span> <br>
        Then you are all set. all user input data will be return in <span class="highlight">$data </span> variable as array. <br>
        For more reference please see the sample.php file in the plugin folder.
        </p>
            <div class="editor-wrapper"><pre><code>
    
    /*
     file_info: gwp/samplecta.php
     we can use any wordpress function , raw HTML, php here.
    */

    // all the component data will be return as an associative array.
    $data = gwp_data();
    print_r($data);


        </code></pre></div>
    </div>
    <!-- step 2 end -->

            
        
        </div>
       
    
    </div>

</section>