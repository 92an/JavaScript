describe("Calculator", function() {

    beforeEach(function() {
        calc = new Calculator;
    });
    

    describe("Addition tests", function() {
        it("should return 42", function() {
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("should return 50", function() {
            calc.add(25);
            calc.add(25);
            expect(calc.value).toBe(50);
        });
        it("should return an error if we dont supply two numbers", function() {
           spyOn(window, "alert");
           calc.add("Hitchhiker");
           expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});


describe("DrinkAgeQuestion", function(){

    describe("Age Test", function(){
        it("Should return 'Sorry. I can’t tell what drink because that age is incorrect!'", function(){
            expect(whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        })
        it("Should return 'Drink Toddy'", function(){
            expect(whatCanIDrink(8)).toBe("Drink Toddy");
        })
        it("Should return 'Drink Coke'", function(){
            expect(whatCanIDrink(17)).toBe("Drink Coke");
        })
        it("Should return 'Drink Beer'", function(){
            expect(whatCanIDrink(20)).toBe("Drink Beer");
        })
        it("Should return 'Drink Wiskey'", function(){
            expect(whatCanIDrink(40)).toBe("Drink Wiskey");
        })
        it("Should return An alert error", function(){
            spyOn(window, "alert");
            whatCanIDrink("Hi");
            expect(window.alert).toHaveBeenCalledWith("Error: please enter a valid age");
        })
    })

})




