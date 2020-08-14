let angle = 0;
let w = 15;
let ma;
let maxD;

function setup() {
    createCanvas(700, 700,WEBGL);
    ma = atan(1 / sqrt(2))
    maxD = dist(0,0,200,200)
}
  
  function draw() {
      ortho(-800, 800, -800, 800, 0, 10000)
      // translate(width/2, height/2);
      background(0);
      translate(0,50,-50)
      rectMode(CENTER);
      
      rotateY(ma);
      rotateX(-QUARTER_PI);

    
    for(let z = 0; z < height; z += w){
        for(let x = 0; x < width; x += w){
            push();
            let d = dist(x,z,width/2,height/2);
            let offset = map(d,0,maxD,PI/3,-PI*2);
            let a = angle + offset;
            let h = floor(map(sin(a),1, -1, 300, 100));
            translate(x - width/2, 0, z - height / 2);
            normalMaterial();
            box(w-3,h+100,w-3);
            // rect(x - width/2 + w / 2,0,w - 2,h);
            pop();
        }
        // offset += 0.1;
    }
    angle += 0.18

  }
