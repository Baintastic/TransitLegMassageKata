function legMassage() {
    fastestRunner = function (yd, ys, t1d, t1s, t2d, t2s, broken) {
        let time1 = yd / ys;
        let time2 = t1d / t1s;
        let time3 = t2d / t2s;
        let time = [time1, time2, time3];
        let tourists = ["y", "t1", "t2"];
        //console.log(time1);
        //console.log(time2);
        let firstRunner = "";
        let fastestTime = time[0];
        let distanceBetweenMachines = 2;
        let reactionTime = 3;
        //console.log("tour is " + tourists);
       // console.log("time is " + time);
        for (let i = 0; i <= tourists.length; i++) {
            //console.log("time is " + time[i]);
            if (time[i]==="undefined"|| isNaN(time[i]) || time[i]===0 ) {
                time.splice(i, 1);
                tourists.splice(i, 1);
                //console.log(time);
                //console.log("first timelist is " + time);
            }
            else {
                if (time[i] <= fastestTime) {
                    fastestTime = time[i];
                    firstRunner = tourists[i];
                    //console.log("second timelist is" + time);
                }
            }
           
            
        }
        console.log("first runner is " + firstRunner);
        if (broken === true) {
            fastestTime += reactionTime + distanceBetweenMachines;
            fastestTouristIndex = tourists.indexOf(firstRunner);
            time[fastestTouristIndex] = fastestTime;
            console.log("first runner is " + fastestTime);

            for (let j = 0; j <= tourists.length; j++) {
                
                console.log("first person is " + time[j]);
                if (time[j] <= fastestTime) {
                    fastestTime = time[j];
                    firstRunner = tourists[j];
                    console.log("fastest runer is " + firstRunner);
                      console.log("third timelist is " + time);
                }

            }
           
        }
        

        // if (broken === true) {
        //     fastestTime += reactionTime + distanceBetweenMachines;

        //     for(let j=0;j<tourists.length;j++){
        //         if (time[j] < fastestTime) {
                   
        //             fastestTime = time[j];
        //             firstRunner = tourists[j];
        //             console.log("fastest runer is " + firstRunner);
        //             console.log("first runner is " + time);
        //         }
        //     }
           

        //     }
            return firstRunner;
        }
       
    

    return {
        fastestRunner: fastestRunner
    }
}