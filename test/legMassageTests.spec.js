describe("TransitLegMassage", function () {
		
    describe("Given im the only tourist and the machine is not broken ", function () {
        it("should return y as the fastest runner", function() {
            // arrange
            var massage = new legMassage();
            // act
            var actual = massage.fastestRunner(12,1,0,0,0,0,false);
            // assert
            expect(actual).toBe("y");
            });
    })

    describe("Given its me and another tourist and the machine is not broken ", function () {
        it("should return t1 as the fastest runner", function() {
            // arrange
            var massage = new legMassage();
            // act
            var actual = massage.fastestRunner(12,1,10,1,0,0,false);
            // assert
            expect(actual).toBe("t1");
            });
    })

   describe("Given its me and another tourist and the machine is broken ", function () {
        it("should return y as the fastest runner", function() {
            // arrange
            var massage = new legMassage();
            // act
            var actual = massage.fastestRunner(12,1,9,1,0,0,true);
            // assert
            expect(actual).toBe("y");
            });
    })

    describe("Given its me and 2 other tourists and the machine is not broken ", function () {
        it("should return t2 as the fastest runner", function() {
            // arrange
            var massage = new legMassage();
            // act
            var actual = massage.fastestRunner(12,1,9,1,12,2,false);
            // assert
            expect(actual).toBe("t2");
            });
    })

    describe("Given its me and 2 other tourists and the machine is broken ", function () {
        it("should return t1 as the fastest runner", function() {
            // arrange
            var massage = new legMassage();
            // act
            var actual = massage.fastestRunner(12,1,13,1,30,2,true);
            // assert
            expect(actual).toBe("t1");
            });
    })


});