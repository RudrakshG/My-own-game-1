    var back_img;
    var let,let_img;
    var oneinf,oneinf_img;
    var during;

    function preload()
    {
      back_img=loadImage("First background.png");
     // during=loadImage("During game background.png");
      oneinf_img=loadImage("information_page.png");
    }

    function setup() {
      canvas = createCanvas(displayWidth - 20, displayHeight-30);
 
      //Create the Bodies Here.
    this.button=createButton("Let's Play")
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.button.mousePressed(()=>{
     oneinf=createSprite(displayWidth/2 + 30, displayHeight/2);
   oneinf.addImage("info",oneinf_img);
     

    });

      
      
    }


    function draw() {
      rectMode(CENTER);
      background(rgb(198,135,103));
      image(back_img,0,-displayHeight*0,displayWidth/1, displayHeight*1)
    
    
    }



