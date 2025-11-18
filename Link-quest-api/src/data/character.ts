import map from "./hyrule";

interface Character {
    name: string
    hp: number
    strength: number
    strengthLimit: number
}

class Link implements Character {
    name: string
    hp: number
    strength: number
    strengthLimit: number

    constructor(name: string, hp: number, strength: number, strengthLimit: number){
        this.name = 'Link';
        this.hp = 20;
        this.strength = 10
        this.strengthLimit = 100
    };

    walk(): void {
        let position: number = 0
        let step: number = position + 1

        if(map[0] && step > map[0].width){
            return alert("cannot go further");
        }
        
    }

    run(): void {
        let position: number = 0
        let step: number = position + 2

        if(map[0] && step > map[0].width){
            return alert("cannot go further");
        }
    }
}
