const moment = require('moment');

const getTimes = deadline => {

  let now = new Date().getTime(),
    remainTime = ( new Date( deadline ).getTime() - now + 1000 ) / 1000,
    remainSeconds = ('0' + Math.floor( remainTime % 60 )).slice(-2),
    remainMinutes = ('0' + Math.floor(  remainTime / 60 % 60 )).slice(-2);

  //console.log( moment( new Date().getTime() + ( 0.0833 * 60 * 60 * 1000 ) ).toString() );
  return {
    remainTime,
    remainSeconds,
    remainMinutes
  };
}

const countdown = ( deadline ) => {

   const timerUpdate = setInterval(() => {
     let t = getTimes( deadline );
     if ( t.remainTime <= 1 ) {
       clearInterval( timerUpdate );
     }
     console.log( t.remainMinutes + ':' + t.remainSeconds );
   },1000);
}

countdown( moment( new Date().getTime() + ( 0.0833 * 60 * 60 * 1000 ) ).toString());
