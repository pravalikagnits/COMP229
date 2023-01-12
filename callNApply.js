function theFunction(name, color) {
    console.log("fruit:  " + name + " and color is :  " + color +".");
}
theFunction("Apple", "red");
theFunction.apply(undefined, ["Grape", "Green"]); // apply we can pass array
theFunction.call(undefined, "Orange", "Orange"); // for call we pass params
theFunction.call(undefined, ...["Berry", "Black"]); //spread