
import React, { Component } from 'react';
import ReactCountdownClock from "react-countdown-clock";
import { render } from "react-dom";
import swal from "sweetalert";
import $ from "jquery";
// const fromTime = new Date(0, 0, 0, 0, 0, 0, 0);
function reset() {
  console.log("Hết giờ!");
}


// const CountdownTime = (props) => {
//   return (
//     <ReactCountdownClock
//       seconds={props.time === null ? 10 : props.time}
//       color="#39f"
//       alpha={0.9}
//       size={150}
//       onComplete={notifiaction}
//     />
//   );
// };

class CountdownTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.time,
    };
    this.setState.bind(this);
    this.setTime = this.setTime.bind(this);
    this.notifiaction = this.notifiaction.bind(this);
    console.log("Chlid" + this.state.time);
  }
  componentWillReceiveProps({time}) {
    this.setState({...this.state,time})
  }
  setTime(){
    this.setState({
      time: this.state.time + 0.000001
    });
  }
  notifiaction() {
    
    return (
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
      // this.setTime();
      
      switch (value) {
     
      //   case "defeat":
      //     swal("Pikachu fainted! You gained 500 XP!");
      //     break;
     
        case "catch":
          // useCallback();
          // reset();
          // this.setTime();
          this.setTime();
          break;
     
      //   default:
      //     swal("Got away safely!");
      }
    })
    );
  }
  render() {
    return (
      <ReactCountdownClock
      seconds={this.state.time === null ? 10 : this.state.time}
      color="#39f"
      alpha={0.9}
      size={150}
      // onClick={this.setTime}
      onComplete={this.notifiaction}
    />
    );
  }
}
export default CountdownTime;
