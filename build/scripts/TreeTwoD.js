
function treeGen(width, height, branch_len, rand_func){
  var width=width;
  var height=height;
  var branch_len=branch_len;
  var rand = rand_func;
  var roots=new Array(0);
  var grid=new Array(width);
  for(var x = 0; x<width; x++){
    grid[x]=new Array(height);
    for(var y = 0; y<height; y++){
      grid[x][y]=0;
    }
  }
  function tree(){
    var depth=0;
    var startx=16;
    var starty=16;
    var x=-1;
    var y=-1;
    var path=new Array(0);
    grid[startx][starty]+=1;
    roots.push(new Array(0));
    roots[0].push(new Array(startx,starty));
    roots.push(new Array(0));
    roots[1].push(growBranch(startx,starty,branch_len,1));
    while(true){
      var prev=depth;
      for(var i = 0; i<roots[0].length; i++){
        x=roots[0][i][0];
        y=roots[0][i][1];
        path=roots[1][i];
        searchOpenings(x,y,path);
      }
      depth=roots[0].length;
      if(prev==depth) {break;}
    }
    return grid;
  }
  function searchOpenings(x,y,path){
    var takens = 0;
    var dirr = -1;
    for(var i =0; i<path.length; i++){
      dirr=path[i];
      takens=0;
      for(var n =0; n<4; n++){
        takens+=checkGrid2(x,y,n);
      }
      if(takens<=3){
        for(var n = 0; n<4; n++){
          if(checkGrid2(x,y,n)==0){
            var new_path = growBranch(x,y,branch_len,n);
            roots[0].push(new Array(x,y));
            roots[1].push(new_path);
          }
        }
        return 0;
      }
      if(dirr==0) {y-=1;}
      if(dirr==1) {x+=1;}
      if(dirr==2) {y+=1;}
      if(dirr==3) {x-=1;}
    }
  }
  function growBranch(x, y, len, init_dirr){
    if(rand == 1){ var rand_func = TrueRandom;}
    else {var rand_func = Straighter;}
    var path = new Array(0);
    var dirr = init_dirr;
    for(var i = 0; i<len; i++){
      dirr = rand_func(init_dirr, dirr);

      var n = 0;
      while(checkGrid2(x,y,dirr)){
        if(n>50) {return path;}
        dirr = rand_func(init_dirr,dirr);
        n+=1;
      }
      if(dirr==0) {y-=1;}
      if(dirr==1) {x+=1;}
      if(dirr==2) {y+=1;}
      if(dirr==3) {x-=1;}
      grid[x][y]+=1;
      path.push(dirr);
    }
    return path;
  }
  function checkGrid2(posx,posy,dirr){
    if(dirr==0){
      if(posy<2) {return 1;}
      var two=0;
      for(var x = 0; x<4; x++){
        if(checkGrid3(posx,posy-1,x)==1) {two+=1;}
        if(two>1) {return 1;}
      }
      return grid[posx][posy-1];
    }
    if(dirr==1){
      if(posx>width-2) {return 1;}
      var two=0;
      for(var x = 0; x<4; x++){
        if(checkGrid3(posx+1,posy,x)==1) {two+=1;}
        if(two>1) {return 1;}
      }
      return grid[posx+1][posy];
    }
    if(dirr==2){
      if(posy>height-2) {return 1;}
      var two=0;
      for(var x = 0; x<4; x++){
        if(checkGrid3(posx,posy+1,x)==1) {two+=1;}
        if(two>1) {return 1;}
      }
      return grid[posx][posy+1];
    }
    if(dirr==3){
      if(posx<2) {return 1;}
      var two=0;
      for(var x = 0; x<4; x++){
        if(checkGrid3(posx-1,posy,x)==1) {two+=1;}
        if(two>1) {return 1;}
      }
      return grid[posx-1][posy];
    }
  }
  function checkGrid3(posx,posy,dirr){
    if(dirr==0){
      if(posy<1) {return 1;}
      return grid[posx][posy-1];
    }
    if(dirr==1){
      if(posx>width-2) {return 1;}
      return grid[posx+1][posy];
    }
    if(dirr==2){
      if(posy>height-2) {return 1;}
      return grid[posx][posy+1];
    }
    if(dirr==3){
      if(posx<1) {return 1;}
      return grid[posx-1][posy];
    }
  }
  function TrueRandom() {
    var val = Math.random();
    if(val<=.25){return 0;}
    if(val<=.5){return 1;}
    if(val<=.75){return 2;}
    return 3;
  }
  function Straighter(init, dirr){
    if(Math.random()>.5)
    return init;
    else{
      if(Math.random()>.5)
      return turnClock(dirr);
      return turnCounter(dirr);
    }
  }
  function turnClock(dirr){
    if(dirr==3)
    return 0;
    return dirr+1;
  }
  function turnCounter(dirr){
    if(dirr==0)
    return 3;
    return dirr-1;
  }
  return tree();
}

function getSyncScriptParams() {
         var scripts = document.getElementsByTagName('script');
         var lastScript = scripts[scripts.length-1];
         var scriptName = lastScript;
         return {
             width : scriptName.getAttribute('width'),
             height : scriptName.getAttribute('height'),
             branch_len : scriptName.getAttribute('branch_len'),
             rand_func : scriptName.getAttribute('rand_func')
         };
 }

function vertsGen(){
  var params = getSyncScriptParams();
  width = parseInt(params.width);
  height = parseInt(params.height);
  branch_len = parseInt(params.branch_len);
  rand_func = parseInt(params.rand_func);
  var verts = new Array(0);
  var grid = treeGen(width, height, branch_len, rand_func);
  for(var x = 0; x<grid.length; x++){
    for(var y = 0; y<grid[0].length; y++){
      if(grid[x][y]){
        verts.push(x/  (width / 2) - 1);
        verts.push(y /(height / 2) - 1);
        verts.push(0);
        verts.push((x)/  (width / 2) - 1.02);
        verts.push((y) /(height / 2) - 1);
        verts.push(0);
        verts.push((x)/  (width / 2) - 1);
        verts.push((y) /(height / 2) - .98);
        verts.push(0);
        verts.push((x)/  (width / 2) - 1.02);
        verts.push((y) /(height / 2) - .98);
        verts.push(0);
      }
    }
  }
  return verts;
}

function colorsGen(verts) {
  var turn = false;
  var green=0;
  var colors = new Array(0);

  for(var x = 0; x<verts.length; x++){
    colors.push(Math.random());
    colors.push(green);
    if(turn){
      green+=0.01;
      if(green>=1){
        turn=false;
      }
    }
    else {
      green-=0.01;
      if(green<=0){
        turn=true;
      }
    }
    colors.push(0);
  }
  return colors;
}

function indicesGen(verts) {
  var inds = new Array(0);
  console.log(verts.length);
  for(var x = 0; x<verts.length/12; x++){
    inds.push(x*4+3);
    inds.push(x*4+2);
    inds.push(x*4+1);
    inds.push(x*4+3);
    inds.push(x*4+1);
    inds.push(x*4);
  }
  return inds;
}
function draw(){
  /* Step1: Prepare the canvas and get WebGL context */
  var canvas = document.getElementById('my_Canvas');
  var gl = canvas.getContext('experimental-webgl');
  /* Step2: Define the geometry and store it in buffer objects */
  var vertices = vertsGen();
  // Create a new buffer object

   var colors = colorsGen(vertices);
   console.log(colors);
   var indices = indicesGen(vertices);
   console.log(indices);
   // Create an empty buffer object and store vertex data
   var vertex_buffer = gl.createBuffer();
   gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
   gl.bindBuffer(gl.ARRAY_BUFFER, null);

   // Create an empty buffer object and store Index data
   var Index_Buffer = gl.createBuffer();
   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);
   gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

   // Create an empty buffer object and store color data
   var color_buffer = gl.createBuffer ();
   gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

  // Vertex shader source code
  var vertCode = 'attribute vec3 coordinates;'+
     'attribute vec3 color;'+
     'varying vec3 vColor;'+
     'void main(void) {' +
        ' gl_Position = vec4(coordinates, 1.0);' +
        'vColor = color;'+
     '}';
  //Create a vertex shader object
  var vertShader = gl.createShader(gl.VERTEX_SHADER);
  //Attach vertex shader source code
  gl.shaderSource(vertShader, vertCode);
  //Compile the vertex shader
  gl.compileShader(vertShader);
  //Fragment shader source code
  // fragment shader source code
  var fragCode = 'precision mediump float;'+
     'varying vec3 vColor;'+
     'void main(void) {'+
        'gl_FragColor = vec4(vColor, 1.);'+
     '}';
       // Create fragment shader object
  var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
  // Attach fragment shader source code
  gl.shaderSource(fragShader, fragCode);
  // Compile the fragment shader
  gl.compileShader(fragShader);
  // Create a shader program object to store combined shader program
  var shaderProgram = gl.createProgram();
  // Attach a vertex shader
  gl.attachShader(shaderProgram, vertShader);
  // Attach a fragment shader
  gl.attachShader(shaderProgram, fragShader);
  // Link both programs
  gl.linkProgram(shaderProgram);
  // Use the combined shader program object
  gl.useProgram(shaderProgram);
  /* Step 4: Associate the shader programs to buffer objects */
  //Bind vertex buffer object
  gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
  // Bind index buffer object
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);
  //Get the attribute location
  var coord = gl.getAttribLocation(shaderProgram, "coordinates");
  //point an attribute to the currently bound VBO
  gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);
  //Enable the attribute
  gl.enableVertexAttribArray(coord);
  // bind the color buffer
  gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);

  // get the attribute location
  var color = gl.getAttribLocation(shaderProgram, "color");

  // point attribute to the volor buffer object
  gl.vertexAttribPointer(color, 3, gl.FLOAT, false,0,0) ;

  // enable the color attribute
  gl.enableVertexAttribArray(color);
  /* Step5: Drawing the required object (triangle) */
  // Clear the canvas
  gl.clearColor(0, 0.5, 0.5, 0.6);
  // Enable the depth test
  gl.enable(gl.DEPTH_TEST);
  // Clear the color buffer bit
  gl.clear(gl.COLOR_BUFFER_BIT);
  // Set the view port
  gl.viewport(0,0,canvas.width,canvas.height);
  // Draw the triangle
  gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT,0);
}

draw();
