function IsSafe(Xp,Yp,Xq,Yq){
    if(Xp<0||Yp<0||Xq<0||Yq<0){
        return "you are ourside the board"
    }
    if(Xp==Xq && Yp==Yq){
        return true
    }else if(Xp==Xq){
        return false
    }else if(Yp==Yq){
        return false
    }else {
        if(Math.abs(Xq-Xp)==Math.abs(Yq-Yp)){
            return false
        }else{
            return true
        }
    }
}

function IsSafeOneLine(Xp,Yp,Xq,Yq){if(Xp<0||Yp<0||Xq<0||Yq<0){return "you are ourside the board"}if(Xp==Xq && Yp==Yq){return true}else if(Xp==Xq){return false}else if(Yp==Yq){return false}else {if(Math.abs(Xq-Xp)==Math.abs(Yq-Yp)){return false}else{return true}}}

var board =[]
var Q_x =2
var Q_y =2

for(var i=0;i<=10;i++){
    var board_line =[]
    for(var a=0;a<=10;a++){
        if(IsSafe(a,i,Q_x,Q_y) == true){
            board_line.push(0)
        }else{
            board_line.push(1)
        }
    }
    board.push(board_line)
}
console.log(board)
