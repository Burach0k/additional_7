module.exports = function solveSudoku(matrix) {
  var sudoku1 = matrix;
  var flag = true;
  var r = 0;
  while(r<1){
  for(var i = 0; i<sudoku1.length; i ++){
    for(var j = 0; j<sudoku1.length; j++){
      if(sudoku1[i][j] == 0){
        stroka(i,j);
        stolbec(i,j);
        ydal();
        sektor(i,j);
        ydal();
        
      }
      
      
      ydal();
    }
  }
  for(var i = 0; i<sudoku1.length; i ++){
    for(var j = 0; j<sudoku1.length; j++){
      stroka3(i,j);
      ydal();
      //stroka2(i,j);
      //ydal();
    }
  }

  r++;
  flag = false;
  }
  function stroka3(x,y){
    for(var i = 0; i<9; i++){
      if(sudoku1[x][i].length == undefined){
        for(var j = 0; j<sudoku1[x][y].length; j++){
            if(sudoku1[x][y][j] == sudoku1[x][i]){
              sudoku1[x][y].splice(j,1);
            }
        }
      }
    }
  }
  function stolbec(x,y){
    for(var i = 0; i<9; i++){
      if((sudoku1[i][y] != 0)&&(sudoku1[i][y].length == undefined)){
        for(var h = 1; h<10;h++){
          if(sudoku1[i][y] == h){
            for(var z = 0; z<sudoku1[x][y].length; z++){
              if(sudoku1[x][y][z] == h){
                sudoku1[x][y].splice(z,1);
              }
            }
            break;
          }
        }
      }
    }
  }
  function stroka2(x,y){
    for(var i = 0; i<9; i++){
      if((sudoku1[x][i].length > 0)&&(sudoku1[x][i] != sudoku1[x][y])){
        for(var h = 0; h< sudoku1[x][y].length;h++){
          for(var q = 0; q<sudoku1[x][i].length; q++){
            if(sudoku1[x][y][h] ==sudoku1[x][i][q] ){
              sudoku1[x][y].splice(h,1);
            }
          }
        }
      }
      if(sudoku1[x][y].length>1){
        var f = 0;
        for(var g =0; g<sudoku1[x][y].length; g++){
          for(var ii = 0; ii<9; ii++){
            if((sudoku1[x][ii].length>1)&&(sudoku1[x][ii]!=sudoku1[x][y])){
              for(var kk = 0; kk<sudoku1[x][ii].length; kk++){
                if(sudoku1[x][i][g] == sudoku1[x][ii][kk]){
                  f = 1;
                }
              }
            }
          }
        if(f == 0){ 
           var d = sudoku1[x][y][g];
           sudoku1[x][y] = d;
        }
      }
    }
  }
  }
  function stroka(x,y){
    if(flag == true){ 
      sudoku1[x][y] = [];
    }
    var mb = [false,false,false,false,false,false,false,false,false];
    for(var k = 0; k<sudoku1.length; k++){
      if(sudoku1[x][k] != 0){
        for(var h = 1; h<10;h++){
          if(sudoku1[x][k] == h){
            mb[h-1] = true;
            break;
          }
        }
      }
    }
    for(var q = 0; q<9;q++){
      if(mb[q] == false){
        sudoku1[x][y].push(q+1);
      }
    }
  }
  function sektor(x,y){
    if((x>=0)&&(x<=2)&&(y>=0)&(y<=2)){
      var minx = 0, maxx = 3, miny = 0, maxy = 3;
    }
    if((x>=3)&&(x<=5)&&(y>=0)&(y<=2)){
      var minx = 3, maxx = 6, miny = 0, maxy = 3;
    }
    if((x>=6)&&(x<=9)&&(y>=0)&(y<=2)){
      var minx = 6, maxx = 9, miny = 0, maxy = 3;
    }
    /////////
    if((x>=0)&&(x<=2)&&(y>=3)&(y<=5)){
      var minx = 0, maxx = 3, miny = 3, maxy = 6;
    }
    if((x>=3)&&(x<=5)&&(y>=3)&(y<=5)){
      var minx = 3, maxx = 6, miny = 3, maxy = 6;
    }
    if((x>=6)&&(x<=9)&&(y>=3)&(y<=5)){
      var minx = 6, maxx = 9, miny = 3, maxy = 6;
    }
    //////////////
    if((x>=0)&&(x<=2)&&(y>=6)&(y<=9)){
      var minx = 0, maxx = 3, miny = 6, maxy = 9;
    }
    if((x>=3)&&(x<=5)&&(y>=6)&(y<=9)){
      var minx = 3, maxx = 6, miny = 6, maxy = 9;
    }
    if((x>=6)&&(x<=6)&&(y>=6)&(y<=9)){
      var minx = 6, maxx = 9, miny = 6, maxy = 9;
    }
      for(var i = minx; i<maxx; i++){
        for(var j = miny; j<maxy; j++){
          if((sudoku1[i][j] != 0)&&(sudoku1[i][j].length == undefined)){
            for(var h = 1; h<10;h++){
              if(sudoku1[i][j] == h){
                for(var z = 0; z<sudoku1[x][y].length; z++){
                  if(sudoku1[x][y][z] == h){
                    sudoku1[x][y].splice(z,1);
                    break;
                  }
                }
                break;
              }
            }
          }
        } 
      }
    
  }
  function ydal(){
    for(var i = 0; i<sudoku1.length; i++){
      for(var j = 0; j<9; j++){
        if(sudoku1[i][j].length == 1){
          sudoku1[i][j] = sudoku1[i][j][0];
        }
      }
    }
  }
  console.log(sudoku1);
  return sudoku1;
}
