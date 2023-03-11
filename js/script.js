const slider_items = document.querySelectorAll('.slider_container .slider_item')
const slider_track = document.querySelector('.slider_track')
const btns = document.querySelector('.block_4 nav')
const last_item = slider_items[slider_items.length-1]

const item_width = last_item.offsetWidth
const track_width = item_width * slider_items.length
console.log(track_width);

let move = 0
btns.addEventListener('click', function(e){
    // console.log(e.target);
    // To left
    if (e.target == btns.children[0]){
        if (move < 0){
            move += 330;
            btns.children[0].classList.add('inactive')
        }
        else{
            move = 0;
            btns.children[0].classList.add('inactive')
        }
    }
    // To right
    else if (e.target == btns.children[1]){
        if (move > -(track_width-3*item_width)){
            move -= 330;
            btns.children[0].classList.remove('inactive')
        }
        else{
            move -= move
            btns.children[0].classList.add('inactive')
        }
    }
    // console.log('move', move);
    setPosition1()
})

function setPosition1() {
    slider_track.style.cssText = `transform: translateX(${move}px);`;
    // console.log(move);
  }





//   container_burger
document.querySelector('.container_burger').addEventListener('click', function(){
    document.querySelector('.menu_burger').classList.add('menu_burger-Opened')
})
document.querySelector('.burger_close').addEventListener('click', function(){
    document.querySelector('.menu_burger').classList.remove('menu_burger-Opened')
})
const menu_burgerList = document.querySelectorAll('.menu_burger a')
document.querySelector('.menu_burger').addEventListener('click', function(e){
    menu_burgerList.forEach(element => {
        if (e.target == element){
            document.querySelector('.menu_burger').classList.remove('menu_burger-Opened')
        }
    });
})