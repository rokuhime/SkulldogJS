class UserSave {
    constructor(tag, id, gacha) {  // Constructor
      this.tag = tag;
      this.id = id;
      this.gacha = gacha;
    }

    constructor(tag, id) {  // Constructor
        this.tag = tag;
        this.id = id;
        this.gacha = [0]; //int array? holds id of gacha owned
    }

    getTag(){
      return this.tag;
    }

    getId(){
      return this.id;
    }

    getGacha(){
      return this.gacha;
    }

    addGacha(g){
      this.gacha.push(g); 
    }

    subGacha(g){
      this.gacha.splice(g);
    }
}