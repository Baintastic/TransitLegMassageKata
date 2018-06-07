function legMassage() {
    fastestRunner = function (yd, ys, t1d, t1s, t2d, t2s, broken) {
        
        let getTimes = function(){
            let time1 = yd / ys;
            let time2 = t1d / t1s;
            let time3 = t2d / t2s;
            return [time1, time2, time3]
        }

        let FindFastestRunner = function(index){
            if (times[index] <= fastestTime) {
                fastestTime = times[index];
                firstRunner = tourists[index];
            }     
        }
        let times = getTimes();
        let tourists = ["y", "t1", "t2"];
        let firstRunner = "";
        let fastestTime = times[0];

        for (let i = 0; i <= tourists.length; i++) {
            if (isNaN(times[i])) {
                times.splice(i, 1);
                tourists.splice(i, 1);
            }
            else {
                FindFastestRunner(i);
            }
        }

        if (broken === true) {
            let reactionTime = 5;
            fastestTime += reactionTime;
            fastestTouristIndex = tourists.indexOf(firstRunner);
            times[fastestTouristIndex] = fastestTime;
            for (let j = 0; j <= tourists.length; j++) {
                FindFastestRunner(j);
            }
        }
        return firstRunner;
    }

    return {
        fastestRunner: fastestRunner
    }
}