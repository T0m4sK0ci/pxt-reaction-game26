let actualLight: number = 0;
let referenceLight: number = 0;
const thresholdLight: number = 30;

basic.pause(1000)

for(let i = 1; i < 6; i +=1) {
    referenceLight += input.lightLevel()
}

referenceLight /= 5

basic.forever(function() {
    actualLight = input.lightLevel()
    if (actualLight < referenceLight - thresholdLight) {
        console.log(1);
    }
    else {
        console.log(0)
    }
})

