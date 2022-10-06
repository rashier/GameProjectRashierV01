let characterMarvin01 = new Image();
let characterMarvin02 = new Image();
let characterDot03 = new Image();
let characterDot04 = new Image();
let obstacleImage = new Image();
let backgroundImage = new Image();



let start = document.getElementById('btn-start');
start.addEventListener('click', () => {
  loadData().then(() => {
      let firstScreen = document.getElementById('first-screen');
      firstScreen.classList.add('d-none');
    
      Game.init(`canvas`, [
        characterMarvin01,
        characterMarvin02,
        characterDot03,
        characterDot04,
        obstacleImage,
        backgroundImage
      ]);
  })
})

const loadData = () => { 
  return new Promise((resolve, reject) => {
      characterMarvin01.src = "img/Marvin the MartianRun01.png";
      characterMarvin02.src = "img/Marvin the MartianRun02.png";
      characterDot03.src = "img/Dotwarner01.png";
      characterDot04.src = "img/Dotwarner02.png";
      obstacleImage.src = "img/floor01.png";
      backgroundImage.src = "img/planet07.png";
      resolve();
  });
}
