function floodfill(x,y,color,canvas){
    var theOcolor = canvas[y][x]
    canvas[y][x] = color
    if(y>0 && canvas[y-1][x] == theOcolor){
        canvas=floodfill(x,the_next,color,canvas);
    }else if(y<canvas.length && canvas[y+1][x] == theOcolor){
        canvas=floodfill(x,y+1,color,canvas);
    }else if(x>0 && canvas[y][x-1] == theOcolor){
        canvas=floodfill(x-1,y,color,canvas);
    }else if(x<canvas[y].length && canvas[y][x+1] == theOcolor){
        canvas=floodfill(x+1,y,color,canvas);
    }
    return canvas
}

var list_paint =[[1,1,2,1,1],[1,0,1,1,1],[1,0,0,0,0],[1,1,1,1,1]]
console.log(floodfill(1,1,3,list_paint));
