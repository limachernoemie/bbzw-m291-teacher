body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

body {
  display: flex;
  flex-direction: column;
  font-family: Helvetica, sans-serif;

}

.header {
  background-color: #00559D;
  height: 90px;
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  padding-left: 150px;
  padding-top: 10px;
}

h1 {
  font-family: Helvetica, sans-serif;
  height: 25px;
  color: white;
}

.footer {
  background-color: #00559D;
  height: auto;
  padding-top: 30px;
  padding-left: 150px;
  padding-bottom: 30px;
  color: white;
}

a:link {
  text-decoration: none;
  color: white;
}

a:visited {
  text-decoration: none;
  color: white;
}

  
  #score,
  #highscore {
    text-align: center;
    font-size: 2rem;
    margin-top: 20px;
  
  }
  
  
  
  #game {
    width: 600px;
    height: 300px;
    border: 2px solid black;
    margin: auto;
    margin-top: 100px;
  }
  
  
  #dino {
    height: 75px;
    width: 75px;
    top: 225px;
    position: relative;
    background-image: url("../../image/spielfigur-game.png");
    background-size: cover;
  }
  
  .dino-dies {
    background-color: red;
  }
  
  #rock {
    width: 50px;
    height: 50px;
    position: relative;
    top: 175px;
    left: 550px;
    background-image: url("../../image/imac-game.png");
    background-size: cover;
    animation: rock 1.33s infinite;
  }
  
  @keyframes rock {
    0% {
      left: 550px;
    }
  
    100% {
      left: -50px;
    }
  }
  
  .jump-animation {
    animation: jump 0.5s;
  }
  
  @keyframes jump {
    0% {
      top: 225px;
    }
  
    50% {
      top: 75px;
    }
  
    75% {
      top: 75px;
    }
  
    100% {
      top: 225px;
    }
  }
  
  
  
  #background {
    position: absolute;
    width: 600px;
    height: 300px;
    background-image: url("../../image/background.png");
    background-size: cover;
    animation: moveBg 10.33s linear infinite;
  }
  
  @keyframes moveBg {
    0% {
      background-position: 0 0;
    }
   
    100% {
      background-position:  -600px 0;
    }
  }
  

  
