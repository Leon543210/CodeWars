function past(h, m, s){
    let ms = 1000; //1000
    let sec = s * ms;//1 second is 1000 milliseconds
    let min = m * 60 * ms // 1 minute is 60 seconds; 60 seconds should be 60,000 milliseconds; replace sec with 1000
    let hour = 60 * 60 * 1000 * h// 1 hour is 60 minutes, 60 minutes should be 3,600seconds, which should be 3,600,000milliseconds

    //1 * 60 * 60 * 1000;
    //hour / minutes per hour / seconds per minute / milliseconds per second
    
    // let sec = 1000 * s; // 1,000 milliseconds
    // let min = 1000 * s; // 60,000 milliseconds
    // let hour = 60 * min;
    
    if(0 <= h <= 23){
        if( 0 <= m <= 59){
            if(0 <= s <= 59){
                let milsec = (hour + min + sec);
                return milsec;
            }
        }
    }
}

/*function past(h, m, s){
    var miliseconds = 0;
    miliseconds = miliseconds + s * 1000;
    miliseconds = miliseconds + m * 60000;
    miliseconds = miliseconds + h * 3600000;
    return miliseconds;
  }*/