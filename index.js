// code your solution here

function saturdayFun(){
    return `This Saturday, I want to roller-skate!`
}
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };function wrapAdjective(wrapper = "*") {
    return function(adjective = "special") {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }
