function checkPowerPoint(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    descriptor.value = function () {
        if(this.ppAvailable==0){
        console.log(`${this.name} has no PP enough to use ${move?.name}!`);
        }
    };
    return descriptor;
}

class Pokemon {
    name: string;
    ppAvailable = 1;
    constructor(name: string, ppAvailable: number) {
        this.name = name;
        this.ppAvailable = ppAvailable;
    }

    @checkPowerPoint
    figth(move: any) {
        console.log(`${this.name} used ${move?.name}!`);
        this.ppAvailable -= 1;
    }
}

const move = { name: "thunderbolt", power: 90 };
const pikachu = new Pokemon("pikachu", 1);
pikachu.figth(move);
pikachu.figth(move);