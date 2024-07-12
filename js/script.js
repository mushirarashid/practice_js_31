// const user = [{
//     id: 1,
//     name: "musu",
//     job: "kisu na",
// }]

// console.log(user[0].name)

// const data = {
//     count: 5000,
//     info:[
//         {id: 1, name: "musu", job: "kisu na"},

//         {id: 2, name: "musu", job: "bekar",}

//     ]
    
// }

// console.log(data.info[1].job);

// ============= map

// const mapNumbers = [3, 4, 8, 5];

// const half = mapNumbers.map(num => num * 2);
// console.log(half);

// const frindName = ["Mim", "Rumi Akter", "Mim Akter Dim"];

// const mapWork = frindName.map( name => name.length);
// console.log(mapWork);

// const product = [
//         {id: 1, name: "musu", job: "kisu na"},

//         {id: 2, name: "mushira", job: "bekar",}
    
// ]

// const ans = product.map(p => p.job);

// console.log(ans) 

// ==================================

// const abc = [5, 8, 9, 12, 25];

// const abcAns = abc.filter(filtering => filtering > 10);
// console.log(abcAns);

// ================
// const abc2 = [5, 8, 9, 12, 25];
// const abcAns2 = abc2.find(finding => finding < 10);
// console.log(abcAns2);

// =============

// const abc3 = [5, 8, 9, 12, 25];
// const abcAns3 = abc3.reduce((previous, current) => previous * current, 1);
// console.log(abcAns3);

// ==============Class Structer=========
class Commoncls{
    name;
    location;

    constructor(peraName, peraLocation){

        this.name = peraName;
        this.location = peraLocation;
    }
}


class Classname extends Commoncls{
    job = "web sectore"
    team = "web team"

    constructor(peraName, peraLocation){
        super(peraName, peraLocation)
    }
    makeFunction(pera){
        console.log(`no reason ${pera}`)
    }
}

const musu = new Classname("musu", "dhaka")
console.log(musu)
// const musu = new Classname("musu", "Dhaka");
// musu.makeFunction()
// console.log(musu)