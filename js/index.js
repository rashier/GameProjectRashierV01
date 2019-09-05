window.onload = () => {
  let characterMarvin01 = new Image();
  characterMarvin01.src = "img/Marvin the MartianRun01.png";
  characterMarvin01.onload = function() {
    let characterMarvin02 = new Image();
    characterMarvin02.src = "img/Marvin the MartianRun02.png";
    characterMarvin02.onload = function() {
      let characterDot03 = new Image();
      characterDot03.src = "img/Dotwarner01.png";
      characterDot03.onload = function() {
        let characterDot04 = new Image();
        characterDot04.src = "img/Dotwarner02.png";
        characterDot04.onload = function() {
          let obstacleImage = new Image();
          obstacleImage.src = "img/floor01.png";
          obstacleImage.onload = function() {
            let backgroundImage = new Image();
            backgroundImage.src = "img/planet07.png";
            backgroundImage.onload = function() {
              Game.init(`canvas`, [
                characterMarvin01,
                characterMarvin02,
                characterDot03,
                characterDot04,
                obstacleImage,
                backgroundImage
              ]);
            };
          };
        };
      };
    };
  };
};
