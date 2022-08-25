function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
function wrapAdjective(wrap = '*'){
    return function (adj = 'special'){
        return `You are ${wrap}${adj}${wrap}!`
    }
}
const mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}