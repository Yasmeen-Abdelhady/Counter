let secOne = document.querySelector('.secOne'),
    secTwo = document.querySelector('.secTwo'),
    minOne = document.querySelector('.minOne'),
    minTwo = document.querySelector('.minTwo'),
    go = document.querySelector('.go'),
    stop = document.querySelector('.stop');

let timer;

let counter = 0;
let counterTwo =0;
let counterThree = 0;
let counterFour = 0;

go.addEventListener('click' ,function(){
    timer = setInterval(function(){
        counter++;
        if(counter === 10){
            counter =0;
            setSecTwo();
        }
        secOne.innerHTML = counter;
    },1000)

    this.setAttribute('disabled','true');
    } 
);
stop.addEventListener('click' , function(){
    clearInterval(timer);
    go.removeAttribute('disabled');
});

function setSecTwo(){
    counterTwo++;
    if(counterTwo === 6){
        counterTwo = 0;
        setMinOne();
    }
    secTwo.innerHTML = counterTwo; 
}

function setMinOne(){
    counterThree++;
    if(counterThree  === 10){
        counterThree = 0;
        setMinTwo();
    }
    minOne.innerHTML = counterThree;
}

function setMinTwo(){
    counterFour++;
    if(counterFour === 6){
        counterFour =0;
        clearInterval(timer);
    }
    minTwo.innerHTML = counterFour;
}
