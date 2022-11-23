// code your solution here
const array = (function (thingToAdd) {
    const base = 3;
    return [
      function () {
        return base + thingToAdd;
      },
      function () {
        return base;
      },
    ];
  })(2);

function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (function (activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
});

function wrapAdjective(s = "*"){
    const statement = (function(adjective = 'special'){return `You are ${s}${adjective}${s}!`});
    return statement;
}

console.log(wrapAdjective("%")("a dedicated programmer"));