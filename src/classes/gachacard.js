class GachaCard {
    constructor(id, name, rarity, pic, origin){
        this.id = id;
        this.name = name;
        this.rarity = rarity;
        this.pic = pic;
        this.origin = origin;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getRarity(){
        return this.rarity;
    }

    getPic(){
        return this.pic;
    }

    getOrigin(){
        return this.origin;
    }
}