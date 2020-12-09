import React, { useCallback } from "react";
import ReactCountdownClock from "react-countdown-clock";
import { render } from "react-dom";
import swal from "sweetalert";
// const fromTime = new Date(0, 0, 0, 0, 0, 0, 0);
function notifiaction() {
  swal({
    title: "Hết giờ!",
    text: "Đã hết thời gian đã định \nTỉ lệ gõ đúng: 100%\nĐiểm: 80",
    icon: "warning",
    buttons: {
      cancel: true,
      catch: {
        text: "Bắt đầu lại!",
        value: "catch",
      },
    },
  }).then((value) => {
    switch (value) {
   
    //   case "defeat":
    //     swal("Pikachu fainted! You gained 500 XP!");
    //     break;
   
      case "catch":
        // useCallback();
        
        break;
   
    //   default:
    //     swal("Got away safely!");
    }
  });
}
const CountdownTime = (props) => {
  return (
    <ReactCountdownClock
      seconds={props.time === null ? 10 : props.time}
      color="#39f"
      alpha={0.9}
      size={150}
      onComplete={notifiaction}
    />
  );
};

export default CountdownTime;
