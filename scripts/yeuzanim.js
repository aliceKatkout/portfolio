let delayy = 100;
let imgNumber = 0;
let totalimgNumber = 9;
let anim = [];
let start = document.getElementById("cligne");
let timer;

for (i=0; i<totalimgNumber; i++){
  anim[i]= new Image (2000, 815);
  anim[i].src ="images/oeil"+ (i+1)+ ".png";
}

function switch2() {
  document.oeilAnim.src = anim[imgNumber].src;
  imgNumber++;
  if (imgNumber >= totalimgNumber) {
   imgNumber = 0;
   clearInterval(timer);
 }
}

function animate1() {
  console.log("animate ok");
  //  switch2();
  timer= setInterval(switch2, delayy);
  //setTimeout(animate1, delay);
}

start.addEventListener("mouseover", function(event) {
  console.log("j'ai vu");
  animate1();
});

const wipe = document.querySelector('.wipe-transition');
//const allBandes = document.querySelectorAll('.bande');
const TLAnim = new TimelineMax();

function delay(n) {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n)
  })
}

barba.init({

  sync: true,

  transitions: [
    {
      async leave(){

        const done = this.async();

        // TLAnim
        // .to(allBandes, {height: '100%', stagger: 0.05})

        TLAnim.to(wipe, {left: '0%', ease: "power2.out", duration: 0.5});

        await delay(1000);
        done();

      },
      enter(){

         TLAnim
         .to(wipe, {left: '100%', ease:"power2.in", duration: 0.5})
         .set(wipe, {left: '-100%'})

        // TLAnim
        // .to(allBandes, {height: '0%', stagger: 0.05})

      }
    }
  ]

})
