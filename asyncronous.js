//ASYNCRONOUS JAVASCRIPT
(()=>{
    const second = () => {
        setTimeout(() => {
            console.log('delay')
        }, 3000);
    
    }
    
    const first = () => {
        console.log('First');
        second();
        console.log('After')
    }
    
    first(); 
    
});

(() => {

    //CALLBACK HELL
    //PROMISES ARE USED TO AVOID PROMISES

    function getRecipes(){
        setTimeout(() => {
            const recipeIDs = [23, 54, 65, 23, 45];
            console.log(recipeIDs);

            setTimeout(id => {
                const recipe = {
                    recipeName: 'Making Pasta',
                    author: 'Eric'
                }
                console.log(`Recipe ${id} is ${recipe.recipeName} made by ${recipe.author}`);

                setTimeout(publisher => {
                    const recipe2 = {
                        recipeName: 'Pizza',
                        author: 'Eric'
                    }
                    console.log(recipe2);

                }, 1500, recipe.author);
            }, 1000, recipeIDs[3])

        }, 1500);
    }
    getRecipes();
});


//PROMISES -- Keeps track of whether an event happened

(() => {

    const getIDs = new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('Missed some data');  //Resolve and reject act as kind of RETURNs because program execution ends immidiately one of them is executed
            resolve([23, 54, 65, 23, 45]);
        }, 1500);
    });

    const getRecipe = recipeID => {
        return new Promise((resolve, reject) =>{
            setTimeout(id => {
                const recipe = {
                    recipeName: 'Making Pasta',
                    author: 'Eric'
                }
                resolve(`Recipe ID ${id} is ${recipe.recipeName} made by ${recipe.author}`);
            }, 1500, recipeID)
        });
    }

    const recipe2 = publisher => {
        return new Promise((resolve, reject) => {
            setTimeout(id => {
                const recipe2Obj = {
                    recipeName: 'Pizza',
                }
                console.log(`2nd recipe: ${recipe2Obj.recipeName}`);
            }, 1500, publisher)
        });
    }

    //Consuming the promises -- in ES6 (ES2015)
    /*
    getIDs.then(IDs => {
        console.log(IDs);
        return getRecipe(IDs[2]);
    })
    .then(recipe => {
        console.log(recipe);
        return recipe2(recipe.author)
    })
    .catch(error => {
        console.log('ERROR!!')
    });
    */

    //ASYNC AWAIT -- Consuming promises in a better way -- ES8 (ES2017)
    async function getRecipeAsync(){
        const IDs = await getIDs;
        // console.log(IDs);

        const recipe = await getRecipe(IDs[4]);
        console.log(recipe);

        const recipeTwo = await recipe2(recipe.author);
        console.log(recipeTwo);

        return recipe;
    }

    getRecipeAsync().then(res => console.log(`ID: ${res}`));

});

//AJAX REQUESTS AND APIs -- Using METAWEATHER and CrossOrigin

(() =>{

    const getWeather = (woeid) => {
        fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`).then(result => {
            console.log(result);
            return result.json();
        })
        .then(data => {
            const today = data.consolidated_weather[0];
            console.log(`Temperatures in ${data.title} stay between ${today.min_Temp} and ${today.max_temp}`);
        })
        .catch(error => {
            console.log(error)
        });
    }

    // getWeather(2487956);
    // getWeather(44418);

    //USING ASYNC AWAIT function
    async function getWeatherAW(woeid){

        try {
            const result = await fetch(`https://crossorigin.me/https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
            const data = await result.json();
            const today = data.consolidated_weather[0];
            console.log(`Temperatures in ${data.title} stay between ${today.min_Temp} and ${today.max_temp}`);
            return data;
        } catch(error){
            console.log(error);
        }
    }

    getWeatherAW(2487956);
    getWeatherAW(44418).then(data => {
        const london = data;
        console.log(london);
    });
    
});










