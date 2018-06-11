function legMassage() {
    function fastestRunner(yd, ys, t1d, t1s, t2d, t2s, broken) {

        let times = getTimes(yd, ys, t1d, t1s, t2d, t2s);
        let tourists = ["y", "t1", "t2"];
        let firstRunner = "";
        let fastestTime = times[0];
        
        for (let i = 0; i <= tourists.length; i++) {
            if (isNaN(times[i])) {
                deleteTourist(i);
            }
            else {
                FindFastestRunner(i);
            }
        }

        if (broken === true) {
            addMoreTimeToFirstRunner();
            for (let j = 0; j <= tourists.length; j++) {
                FindFastestRunner(j);
            }
        }
       
        return firstRunner;

        function deleteTourist(i) {
            times.splice(i, 1);
            tourists.splice(i, 1);
        }

        function FindFastestRunner(index){
            if (times[index] <= fastestTime) {
                fastestTime = times[index];
                firstRunner = tourists[index];
            }     
        } 

        function addMoreTimeToFirstRunner() {
            const reactionTime = 5;
            fastestTime += reactionTime;
            fastestTouristIndex = tourists.indexOf(firstRunner);
            times[fastestTouristIndex] = fastestTime;
        }
    }

    function getTimes(yd, ys, t1d, t1s, t2d, t2s){
        let time1 = yd / ys;
        let time2 = t1d / t1s;
        let time3 = t2d / t2s;
        return [time1, time2, time3]
    } 

    return {
        fastestRunner: fastestRunner
    }
}