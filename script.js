const container = document.getElementById('container');
const card = document.getElementById('card');
let cardback = document.getElementById('cardback');
let cardOpen = false;
let heart1 = document.getElementById('heart1')
let heart2 = document.getElementById('heart2')
let heart3 = document.getElementById('heart3')
let heart1open = false;
let heart2open = false;
let heart3open = false;
const paper = document.getElementById('paper')
const butterfly1 = document.getElementById('butterfly1');
const butterfly2 = document.getElementById('butterfly2');
const butterfly3 = document.getElementById('butterfly3');
const butterfly4 = document.getElementById('butterfly4');
const butterfly5 = document.getElementById('butterfly5');
const cardinside = document.getElementById('cardinside');
const heartcontainer = document.getElementById('heartcontainer');
const info = document.getElementById('info');
const infocloud = document.getElementById('infocloud');
const openbtn = document.getElementById('open');
const closebtn = document.getElementById('close');
const menu = document.getElementById('menu')


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function heartclick(clickedheart){
    if (clickedheart==='heart1'){
        heart1.style.top = '-300%';
        heart1.style.left = '-210%';
        heart1open = true;
    } else if((clickedheart==='heart2')){
        heart2.style.top = '-150%';
        heart2.style.left = '-244%';
        heart2open = true;
    } else if((clickedheart==='heart3')){
        heart3.style.top = '0%';
        heart3.style.left = '-277%';
        heart3open = true;
    }
    if (heart1open==true && heart2open===true && heart3open===true && cardOpen===false){
        paper.play()
        cardOpen=true;
        card.style.transform = 'rotateX(160deg)';
        butterfly1.style.top = '-600px';
        butterfly1.style.left = '-650px';
        
        butterfly2.style.top = '-16vh';
        butterfly2.style.left = '-750px';
        
        butterfly3.style.top = '600px';
        butterfly3.style.left = '40vw';
        
        butterfly4.style.top = '600px';
        butterfly4.style.left = '-10vw';
        
        
        butterfly5.style.top = '-16vh';
        butterfly5.style.left = '1300px';
        
        butterfly1.style.zIndex = '5'
        
        if (window.innerWidth< 675){
            container.style.transform = 'translate(-50%, -20%) scale(0.5)';
            butterfly1.style.left = '-40vw';
            butterfly3.style.top = '800px';
            butterfly4.style.top = '800px';
        } else if (window.innerWidth < 1300 && window.innerWidth > 675) {
            container.style.transform = 'translate(-50%, -10%) scale(0.8)';
        } else{
            container.style.transform = 'translate(-50%, -10%) scale(1)';
        }
        document.body.appendChild(heartcontainer);
        heartcontainer.style.top = '69%';
        

        await sleep(3000);
        butterfly1.style.display = 'none';
        butterfly2.style.display = 'none';
        butterfly3.style.display = 'none';
        butterfly4.style.display = 'none';
        butterfly5.style.display = 'none';
    }
}

heart1.addEventListener('click', () => heartclick('heart1'))
heart2.addEventListener('click', () => heartclick('heart2'))
heart3.addEventListener('click', () => heartclick('heart3'))




async function infocheck(){
    infocloud.style.width = '280px';
    await sleep(2000);
    infocloud.style.width = '0'
}

info.addEventListener('click', infocheck);


function togglemenu(btn){
    if (btn==='open'){
        menu.style.left = '0';
    } else{
        menu.style.left = '-250px';
    }
}

openbtn.addEventListener('click', () => togglemenu('open'));
closebtn.addEventListener('click', () => togglemenu('close'));
