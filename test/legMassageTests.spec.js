describe("TransitLegMassage", function () {
		
    describe("Given you the only tourist and the machine is not broken ", function () {
        it("should return you as the fastest runner", function() {
            // arrange
            var massage = new legMassage();
            // act
            var actual = massage.fastestRunner(12, 1, 0, 0, 0, 0, false);
            // assert
            expect(actual).toBe("y");
            });
    })

    describe("Given you the only tourist and the machine is broken ", function () {
        it("should return you as the fastest runner", function() {
            // arrange
            var massage = new legMassage();
            // act
            var actual = massage.fastestRunner(12, 1, 0, 0, 0, 0, true);
            // assert
            expect(actual).toBe("y");
            });
    })

    describe("Given there's you and another tourist and the machine is not broken ", function () {
        it("should return t1 as the fastest runner", function() {
            // arrange
            var massage = new legMassage();
            // act
            var actual = massage.fastestRunner(12, 1, 9, 1.2, 0, 0, false);
            // assert
            expect(actual).toBe("t1");
            });
    })

   describe("Given there's you and another tourist and the machine is broken ", function () {
        it("should return you as the fastest runner", function() {
            // arrange
            var massage = new legMassage();
            // act
            var actual = massage.fastestRunner(12, 1, 9, 1.2, 0, 0 ,true);
            // assert
            expect(actual).toBe("y");
            });
    })

    

    describe("Given there's you and 2 other tourists and the machine is not broken ", function () {
        it("should return t2 as the fastest runner", function() {
            // arrange
            var massage = new legMassage();
            // act
            var actual = massage.fastestRunner(12, 1 ,9, 1.2, 15, 2,false);
            // assert
            expect(actual).toBe("t2");
            });
    })

    describe("Given there's you and 2 other tourists and the machine is broken ", function () {
        it("should return t1 as the fastest runner", function() {
            // arrange
            var massage = new legMassage();
            // act
            var actual = massage.fastestRunner(12, 1,9, 1.2, 15, 2, true);
            // assert
            expect(actual).toBe("t1");
            });
    })


});