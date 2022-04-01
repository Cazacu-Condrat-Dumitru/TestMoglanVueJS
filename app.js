class Tour {
    constructor (name, costOneDay, days, insurance){
        this.name = name;
        this.costOneDay = costOneDay;
        this.days = days;
        this.insurance = insurance;
    }

    get getPrice(){
        return this.costOneDay * this.days + this.insurance; //task1
    }

    
    get getName(){                      //
        return this.name;               //
    }                                   //
    get getcostOneDay(){                //
        return this.costOneDay;         //task4
    }                                   //
    get getdays(){                      //
        return this.days;               //  
    }                                   //
    get getinsurance(){                 //
        return this.insurance;          //
    }

    get getPriceNetto(){
        return this.getPrice - ((this.getPrice * this.tax)/100) //task6
    }

    increasedays = (nr) => {
        this.days += nr
    }

    setTax = (percent) => {
        return this.tax = percent
    }
}

const TourInfo = (Tour) => {
    console.log("Name: " , Tour.getName)
    console.log("costOneDay: " , Tour.getcostOneDay)
    console.log("Hour Rate: " , Tour.getdays)
    console.log("insurance: " , Tour.getinsurance)
    console.log("Price Netto: " , Tour.getPriceNetto)
}

const theBiggestTour = () => {
    if (Tour1.getPrice > Tour2.getPrice) {
        console.log(`Tour ${Tour1.name + " has a price of" + Tour1.costOneDay} price difference is ${Tour1.getPrice - Tour2.getPrice} and is = ${Tour1.getPrice}`)
    }else{
        console.log(`Tour ${Tour2.name + "has a price of " + Tour2.costOneDay} ,price difference is ${Tour2.getPrice - Tour1.getPrice} and is = ${Tour2.getPrice}`)
    }
}

//task2 && 7(in 7 need to create 3)
let Tour1 = new Tour ("Itally",100,10,176);
let Tour2 = new Tour ("USA",200,12,169);
let Tour3 = new Tour ("Moldova", 300,9,200);

let Tours = [Tour1,Tour2,Tour3];

for (let i = 0; i < Tours.length; i++) {
    TourInfo(Tours[i]);
}

theBiggestTour();

Tour1.increasedays(3);
Tour1.setTax(5);
TourInfo(Tour1);