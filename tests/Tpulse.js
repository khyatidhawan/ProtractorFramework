describe('T-pulse tests', function () {

    it('login test', function () {

        browser.get('https://tpulse-ext-test.detectpl.com/auth/login');
        //Login And HomePage
        browser.driver.findElement(by.id('username')).sendKeys('it.1802587@gmail.com');
        browser.driver.findElement(by.css('#password.input-field')).sendKeys('Khyati0405');
        browser.driver.findElement(by.css('.primaryButton')).click();
        browser.sleep(7000);
/*
        //Stats view
        browser.driver.findElement(by.css("[for='viewstats']")).click();
        browser.sleep(2000);
        //Date
        browser.driver.findElement(by.xpath("//span[@class='mydpicon icon-mydpcalendar']")).click();
        browser.sleep(3000);
        browser.driver.findElement(by.xpath("//tr[2]//span[.='6']")).click();
        browser.sleep(3000); 

        //FPU-2 Unit
        browser.driver.findElement(by.css("#firstDiv > div:nth-of-type(1) .fas")).click();
        browser.sleep(5000);
        browser.driver.findElement(by.css("[title='Home']")).click();
        browser.sleep(5000);


        

        //Map View
        browser.driver.findElement(by.css("[for='viewmap']")).click();
        browser.sleep(6000);
        browser.driver.findElement(by.xpath("//a[.='+']")).click();
        browser.sleep(2000);
        browser.driver.findElement(by.xpath("//a[.='−']")).click();
        browser.sleep(2000);


        //Reports
        browser.driver.findElement(by.css("[for='viewreports']")).click();
        browser.sleep(3000);
        //Start date
        browser.driver.findElement(by.xpath("//div[@class='row d-none d-sm-block']/div[@class='pt-3']/div[1]//span[@class='mydpicon icon-mydpcalendar']")).click();
        browser.sleep(2000);
        browser.driver.findElement(by.xpath("//div[@class='row d-none d-sm-block']/div[@class='pt-3']/div[1]//span[@class='mydpicon icon-mydpcalendar']")).click();
        browser.sleep(2000);
        //End date
        browser.driver.findElement(by.xpath("//div[@class='row d-none d-sm-block']//div[2]//span[@class='mydpicon icon-mydpcalendar']")).click();
        browser.sleep(2000);
        browser.driver.findElement(by.xpath("//div[@class='row d-none d-sm-block']//div[2]//span[@class='mydpicon icon-mydpcalendar']")).click();
        browser.sleep(2000);
        //View file
        browser.driver.findElement(by.css("datatable-row-wrapper:nth-of-type(1) .btn")).click();
        browser.sleep(5000);  
        browser.driver.findElement(by.xpath("//div[@class='modal-content fullHeight']//button[@class='btn btn-sm btn-light rounded-pill']")).click();
        browser.sleep(4000);  


     */   

    });

 /*   it('activity monitoring', function () {  
    //AM
        browser.driver.findElement(by.css('#moduleSwitcher')).click();
        browser.sleep(3000);
        browser.driver.findElement(by.xpath("//div[@class='row m-0']/div[@class='col-12 p-0 button-container']/div[contains(.,'Activity Monitoring')]")).click();
        browser.sleep(6000);

        //Categories
        browser.driver.findElement(by.css(".fa-plus-square")).click();
        browser.sleep(3000);
        browser.driver.findElement(by.css(".fa-plus-square")).click();
        browser.sleep(2000);


    //Monitor
        browser.driver.findElement(by.css("[title='Monitor']")).click();
        browser.sleep(6000);

        //Filter
        //AC
        browser.driver.findElement(by.css(".d-none #assetCategory")).click();
        browser.sleep(1000);
        browser.driver.findElement(by.css(".d-none #assetCategory")).click();
        browser.sleep(1000);
        //AN
        browser.driver.findElement(by.css(".d-none #assetName")).click();
        browser.sleep(1000);
        browser.driver.findElement(by.css(".d-none #assetName")).click();
        browser.sleep(1000);
        //Task
        browser.driver.findElement(by.css(".d-none #task")).click();
        browser.sleep(1000);
        //Sub Task
        browser.driver.findElement(by.css("")).click();
        browser.sleep(1000);





        browser.driver.findElement(by.css("[href='/activity-monitoring/unit/issues']")).click();
        browser.sleep(4000);
        browser.driver.findElement(by.css("[title='Live Feed']")).click();
        browser.sleep(4000);
        browser.driver.findElement(by.css("[title='Reports']")).click();
        browser.sleep(2000);
        browser.driver.findElement(by.xpath("//button[@class='btn btn-sm btn-dark rounded-pill']")).click();
        browser.sleep(3000);
        browser.driver.findElement(by.css("[title='Help']")).click();
        browser.sleep(7000);
        browser.driver.findElement(by.css('#moduleSwitcherIcon')).click();
        browser.sleep(3000);
        browser.driver.findElement(by.xpath("//p[contains(.,'Safety and Surveillance')]")).click();
        browser.sleep(4000);
        
    });

    //Dashboard
    it('dashboard test', function () {
        browser.driver.findElement(by.xpath("//a[contains(.,'Dashboard')]")).click();
        browser.sleep(4000);
        //Date
        browser.driver.findElement(by.css(".mydpicon")).click();
        browser.sleep(2000);
        browser.driver.findElement(by.css(".mydpicon")).click();
        browser.sleep(2000);
        
        //Overview
        browser.driver.findElement(by.css(".form-control")).click();
        browser.sleep(2000);
        browser.driver.findElement(by.css(".form-control")).click();
        browser.sleep(2000);
        
        //Open
        browser.driver.findElement(by.css("label:nth-of-type(2)")).click();
        browser.sleep(4000);
        //Close
        browser.driver.findElement(by.css("label:nth-of-type(3)")).click();
        browser.sleep(4000);

    });*/

    //Observations
    it('observations test', function () {    
        browser.driver.findElement(by.xpath("//em[@class='fa fa-binoculars']")).click(); 
        browser.sleep(4000);
        //Filters

        //Zone
        browser.driver.findElement(by.xpath("//div[@class='row d-none d-sm-block']//select[@id='zoneName']")).click();
        browser.sleep(1000);
        browser.driver.findElement(by.css(".d-sm-block [value='Zone A']")).click();
        browser.sleep(1000);

        //Category
        browser.driver.findElement(by.xpath("//div[@class='row d-none d-sm-block']//select[@id='jobCategory']")).click();
        browser.sleep(1000);
        browser.driver.findElement(by.xpath("//div[@class='row d-none d-sm-block']//option[contains(.,'Personal Protective Equipment')]")).click();
        browser.sleep(3000);

        

      /*  //Date
        browser.driver.findElement(by.xpath("//div[@class='row d-none d-sm-block']//select[@id='jobDate']")).click();
        browser.sleep(1000);
        browser.driver.findElement(by.xpath("//div[@class='row d-none d-sm-block']//select[@id='jobDate']")).click();
        browser.sleep(1000);

        //Time
        browser.driver.findElement(by.xpath("//div[@class='row d-none d-sm-block']//select[@id='jobTime']")).click();
        browser.sleep(1000);
        browser.driver.findElement(by.xpath("//div[@class='row d-none d-sm-block']//select[@id='jobTime']")).click();
        browser.sleep(1000);

        //Mode
        browser.driver.findElement(by.xpath("//div[@class='row d-none d-sm-block']//select[@id='imageMode']")).click();
        browser.sleep(1000);
        browser.driver.findElement(by.xpath("//div[@class='row d-none d-sm-block']//select[@id='imageMode']")).click();
        browser.sleep(1000);

        //Risk Rating
        browser.driver.findElement(by.css(".d-sm-block [placeholder='Filter by Ratings'] > div > span")).click();
        browser.sleep(1000);
        browser.driver.findElement(by.css(".d-sm-block [placeholder='Filter by Ratings'] > div > span")).click();
        browser.sleep(1000);
        

        //status
        browser.driver.findElement(by.css(".d-sm-block [placeholder='Filter by Status'] > div > span")).click();
        browser.sleep(1000);
        browser.driver.findElement(by.css(".d-sm-block [placeholder='Filter by Status'] > div > span")).click();
        browser.sleep(1000);
       

        //Sort by
        browser.driver.findElement(by.xpath("//div[@class='row d-none d-sm-block']//select[@id='sortBy']")).click();
        browser.sleep(1000);
        browser.driver.findElement(by.xpath("//div[@class='row d-none d-sm-block']//select[@id='sortBy']")).click();
        browser.sleep(1000);

        //Display
        browser.driver.findElement(by.xpath("//div[@class='row d-none d-sm-block']//select[@id='displayType']")).click();
        browser.sleep(1000);
        browser.driver.findElement(by.xpath("//div[@class='row d-none d-sm-block']//select[@id='displayType']")).click();
        browser.sleep(1000);

        //Tile view
        browser.driver.findElement(by.css(".text-secondary.custom-control-label")).click(); 
        browser.sleep(6000);

        //Birds eye view
        browser.driver.findElement(by.css(".my-float")).click(); 
        browser.sleep(6000);
        browser.driver.findElement(by.xpath("//a[.='+']")).click(); 
        browser.sleep(3000);
        browser.driver.findElement(by.xpath("//a[.='−']")).click(); 
        browser.sleep(3000);
        browser.driver.findElement(by.xpath("//div[@class='modal-content mx-auto']//button[@class='close']")).click(); 
        browser.sleep(3000);
        
     */   

    });

 /*  //Reports
    it('reports test', function () {    
        browser.driver.findElement(by.xpath("//em[@class='fa fa-copy']")).click(); 
        browser.sleep(3000);

        //Start Date
        browser.driver.findElement(by.css(".d-none > .pt-3 > div:nth-of-type(1) .mydpicon")).click(); 
        browser.sleep(1000);
        browser.driver.findElement(by.css(".d-none > .pt-3 > div:nth-of-type(1) .mydpicon")).click(); 
        browser.sleep(1000);
        

        //End date
        browser.driver.findElement(by.css(".d-none div:nth-of-type(2) .mydpicon")).click(); 
        browser.sleep(1000);
        browser.driver.findElement(by.css(".d-none div:nth-of-type(2) .mydpicon")).click(); 
        browser.sleep(1000);
        

        //View File
        browser.driver.findElement(by.css("datatable-row-wrapper:nth-of-type(1) .btn")).click(); 
        browser.sleep(4000);
        browser.driver.findElement(by.xpath("//div[@class='modal-content fullHeight']//span[.='×']")).click(); 
        browser.sleep(2000);

         //Forward 2,3
         browser.driver.findElement(by.css(".datatable-icon-right")).click(); 
         browser.sleep(2000);
         browser.driver.findElement(by.css(".datatable-icon-right")).click(); 
         browser.sleep(2000);

    });

    //Help     
     it('help test', function () {          
        browser.driver.findElement(by.css('.fa-question-circle')).click(); 
        browser.sleep(5000)

        //CM
        browser.driver.findElement(by.css(".d-none div:nth-of-type(2) p")).click(); 
        browser.sleep(2000);

        //ZM
        browser.driver.findElement(by.css(".d-none div:nth-of-type(3) p")).click(); 
        browser.sleep(2000);

        //UM
        browser.driver.findElement(by.css(".d-none div:nth-of-type(4) p")).click(); 
        browser.sleep(19000);

        //Tutorials
        browser.driver.findElement(by.css(".d-none div:nth-of-type(5) p")).click(); 
        browser.sleep(5000);

        //RM
        browser.driver.findElement(by.css(".d-none div:nth-of-type(6) p")).click(); 
        browser.sleep(2000);

        //Contact us
        browser.driver.findElement(by.css("#contactUs")).click(); 
        browser.sleep(2000);
        browser.driver.findElement(by.xpath("//div[@class='modal-content mx-4']//button[@class='btn btn-sm btn-light rounded-pill']")).click(); 
        browser.sleep(2000);
    });*/
});