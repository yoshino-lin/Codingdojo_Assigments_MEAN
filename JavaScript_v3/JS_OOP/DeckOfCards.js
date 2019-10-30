class Card{
    constructor(suit,numerical){
        let suit_list = ["Hearts", "Clubs", "Diamonds", "Spades"]
        let string_list = ["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jake","Queen","King"]
        this.suit = suit_list[suit];
        this.numerical = numerical;
        this.string = string_list[numerical-1];
        return this.suit+" "+this.string
    }
    show(){
        console.log(`This card is ${this.suit} ${this.string}`)
    }
    card_to_add(){
        return [this.suit,this.string,this.numerical]
    }

}

class Deck{
    constructor(){
        this.all_cards = []
        for(var i=0;i<4;i++){
            for(var a=1;a<14;a++){
                const new_card = new Card(i,a)
                this.all_cards.push(new_card.card_to_add())
            }
        }
    }
    show_all_card_left(){
        console.log(this.all_cards)
    }
    shuffle(){
        var m = this.all_cards.length, t, i;
        while (m) {
          i = Math.floor(Math.random() * m--);
          t = this.all_cards[m];
          this.all_cards[m] = this.all_cards[i];
          this.all_cards[i] = t;
        }
    }
    reset(){
        this.all_cards = []
        for(var i=0;i<4;i++){
            for(var a=1;a<14;a++){
                const new_card = new Card(i,a)
                this.all_cards.push(new_card.card_to_add())
            }
        }
    }
    deal(){
        var card_to_rmove_id = Math.floor(Math.random()*this.all_cards.length)
        var theCard = this.all_cards[card_to_rmove_id]
        let new_arr = []
        for(var i=0;i<this.all_cards.length;i++){
            if(i != card_to_rmove_id){
                new_arr.push(this.all_cards[i])
            }
        }
        this.all_cards = new_arr
        return theCard
    }
}

class Player extends Deck{
    constructor(name) {
        super()
        this.name = name
        this.card = []
        for(var i=0;i<3;i++){
            this.card.push(super.deal())
        }
    }
    takeCard(){
        this.card.push(super.deal())
    }
    discard(num){
        let new_arr = []
        for(var i=0;i<this.card.length;i++){
            if(i != num){
                new_arr.push(this.card[i])
            }
        }
        this.card = new_arr
    }
    show_info(){
        var str_toPrint = "Name: "+this.name+"; Cards: "
        for(var i=0;i<this.card.length;i++){
            str_toPrint += this.card[i][0]+" "+this.card[i][1]
            if(i != this.card.length-1){
                str_toPrint+=", "
            }
        }
        console.log(str_toPrint)
    }
    show_all_card_left(){
        super.show_all_card_left()
    }
}

const yudong = new Player("Yudong")
yudong.show_info()
yudong.discard(1)
yudong.show_info()
yudong.takeCard()
yudong.show_info()
yudong.show_all_card_left()
