
function treeGen(width, height){
  var width=width;
  var height=height;
  var tree_size=16;
  var randomness = 1;
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
    roots[1].push(growBranch(startx,starty,tree_size,1));
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
    var skips = 0;
    var dirr = -1;
    for(var i =0; i<path.length; i++){
      dirr=path[i];
      takens=0;
      for(var n =0; n<4; n++){
        takens+=checkGrid2(x,y,n);
      }
      if(takens<=2) {skips+=1;}
      if(skips>2){
        for(var n = 0; n<4; n++){
          if(checkGrid2(x,y,n)==0){
            var new_path = growBranch(x,y,tree_size,n);
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
    if(randomness == 1){ var randfunc = TrueRandom;}
    var path = new Array(0);
    var dirr = init_dirr;
    for(var i = 0; i<len; i++){
      dirr = randfunc(init_dirr, dirr);
      if(i<8)
      dirr=init_dirr
      var n = 0;
      while(checkGrid2(x,y,dirr)){
        if(n>50) {return path;}
        dirr = randfunc(init_dirr,dirr);
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
  function dontTurnBack(init, dirr){
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
             height : scriptName.getAttribute('height')
         };
 }

function vertsGen(){
  var params = getSyncScriptParams();
  width = parseInt(params.width);
  height = parseInt(params.height);
  var verts = new Array(0);
  var grid = treeGen(width, height);
  for(var x = 0; x<grid.length; x++){
    for(var y = 0; y<grid[0].length; y++){
      if(grid[x][y]){
        verts.push(x/  (width / 2) - 1);
        verts.push(y/ (height / 2) - 1 / height - 1);
        verts.push(x/  (width / 2) - 1);
        verts.push(y /(height / 2) + 1 / height - 1);
        verts.push(x / (width / 2) - 1 / width - 1);
        verts.push(y /(height / 2) - 1);
        verts.push(x / (width / 2) + 1 / width - 1);
        verts.push(y /(height / 2) - 1);
      }
    }
  }
  return verts;
}
function draw(){
  /* Step1: Prepare the canvas and get WebGL context */
  var canvas = document.getElementById('my_Canvas');
  var gl = canvas.getContext('experimental-webgl');
  /* Step2: Define the geometry and store it in buffer objects */
  var vertices = vertsGen();
  // Create a new buffer object
  var vertex_buffer = gl.createBuffer();
  // Bind an empty array buffer to it
  gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
  // Pass the vertices data to the buffer
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  // Unbind the buffer
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  /* Step3: Create and compile Shader programs */
  // Vertex shader source code
  var vertCode =
  'attribute vec2 coordinates;' +
  'void main(void) {' + ' gl_Position = vec4(coordinates,0.0, 1.0);' + '}';
  //Create a vertex shader object
  var vertShader = gl.createShader(gl.VERTEX_SHADER);
  //Attach vertex shader source code
  gl.shaderSource(vertShader, vertCode);
  //Compile the vertex shader
  gl.compileShader(vertShader);
  //Fragment shader source code
  var fragCode = 'void main(void) {' + 'gl_FragColor = vec4(0.0, 1.0, 0.0, 0.1);' + '}';
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
  //Get the attribute location
  var coord = gl.getAttribLocation(shaderProgram, "coordinates");
  //point an attribute to the currently bound VBO
  gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
  //Enable the attribute
  gl.enableVertexAttribArray(coord);
  /* Step5: Drawing the required object (triangle) */
  // Clear the canvas
  gl.clearColor(0.5, 0.5, 0.5, 0.9);
  // Enable the depth test
  gl.enable(gl.DEPTH_TEST);
  // Clear the color buffer bit
  gl.clear(gl.COLOR_BUFFER_BIT);
  // Set the view port
  gl.viewport(0,0,canvas.width,canvas.height);
  // Draw the triangle
  gl.drawArrays(gl.LINES, 0, vertices.length/2);
}

draw();
