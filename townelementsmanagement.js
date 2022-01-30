/*
1. Problem Statement
Suppose that you’re working in a small town administration, and you’re in charge of two town elements:

Parks
Streets
It’s a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:

Tree density of each park in the town (formula: number of trees/park area);
Average age of each town’s park (formula: sum of all ages/number of parks);
The name of the park that has more than 1000 trees;
Total and average length of the town’s streets;
Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal.
All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/



{
    class Element{
        constructor(name, buildYear){
            this.name = name;
            this.buildYear = buildYear;

        }
    }

    class Park extends Element {
        constructor(name, buildYear, parkArea, noOfTrees){
            super(name, buildYear);
            this.noOfTrees = noOfTrees;
            this.parkArea = parkArea;
        }

        treeDensity(){
            const density = this.noOfTrees / this.parkArea;
            console.log(`${this.name} has a tree density of ${density.toFixed(2)} trees per sq kilometers`);
        }

    } 

    class Street extends Element {
        constructor(name, buildYear, length, size = 3){
            super(name, buildYear);
            this.length = length;
            this.size = size;
        }

        classifyStreet(){
            const classification = new Map();
            classification.set(1, 'tiny');
            classification.set(2, 'small');
            classification.set(3, 'normal');
            classification.set(4, 'big');
            classification.set(5, 'huge');
            console.log(`${this.name}, build in ${this.buildYear} is a ${classification.get(this.size)} street.`)

        }
    }

    const allParks = [
        new Park('Mango Park', 1987, 0.2, 215),
        new Park('Hall 6 Park', 1991, 0.35, 187),
        new Park('Cedar Park', 2000, 0.52, 362)
        ]
    const allStreets = [
        new Street('Main gate', 1970, 250, 5),
        new Street('Gate C', 1975, 130),
        new Street('Gate B', 1980, 100, 2),
        new Street('Gate D', 2015, 150, 4)
        ]

    function calcAge(arr){
        const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
        return [sum, sum/arr.length];
    }

    function reportPark(p){
         //Density
         console.log('------PARK REPORT------');

         p.forEach(el => el.treeDensity());

         //Average Age
         const ages = p.map(el => new Date().getFullYear() - el.buildYear)
         const [totalAge, avgAge] = calcAge(ages);
         console.log(`Our ${p.length} parks have an average of ${avgAge.toFixed(0)} years`);

         console.log(p.map(el => el.noOfTrees));

         const i = p.map(el => el.noOfTrees).findIndex(el => el >= 100)
         console.log(`${p[i].name} has more than 100 trees.`);
         
    }
    reportPark(allParks);

    function reportStreets(s){
        console.log('------STREET REPORT------');

        //Total and average length of the town's streets
        const [totalLength, avgLength] = calcAge(s.map(el => el.length))
        console.log(`Our ${s.length} streets have a total length of ${totalLength}km, with an average of ${avgLength}`);

        //Classify street
        s.forEach(el => el.classifyStreet());

    }
    reportStreets(allStreets);

}
