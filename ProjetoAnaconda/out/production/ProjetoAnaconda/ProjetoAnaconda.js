if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'ProjetoAnaconda'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ProjetoAnaconda'.");
}
var ProjetoAnaconda = function (_, Kotlin) {
  'use strict';
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwCCE = Kotlin.throwCCE;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Unit = Kotlin.kotlin.Unit;
  var equals = Kotlin.equals;
  var Random = Kotlin.kotlin.random.Random;
  var toString = Kotlin.toString;
  var numberToInt = Kotlin.numberToInt;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function SnakeBody(canv, snake, table, food, hearts) {
    this.canv = canv;
    this.snake = snake;
    this.table = table;
    this.food = food;
    this.hearts = hearts;
    this.pieceSize = 20.0;
    this.speedValue = 8;
    this.foodSize = 20.0 * 1.5;
    this.trail = mutableListOf([new Coordinates(200.0, 200.0)]);
    this.foodList = mutableListOf([new Coordinates(generateRandomFoodXY(), generateRandomFoodXY())]);
    this.score = 0;
    this.tail = 1;
    this.time = 0.0;
  }
  SnakeBody.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SnakeBody',
    interfaces: []
  };
  SnakeBody.prototype.component1 = function () {
    return this.canv;
  };
  SnakeBody.prototype.component2 = function () {
    return this.snake;
  };
  SnakeBody.prototype.component3 = function () {
    return this.table;
  };
  SnakeBody.prototype.component4 = function () {
    return this.food;
  };
  SnakeBody.prototype.component5 = function () {
    return this.hearts;
  };
  SnakeBody.prototype.copy_sasyk7$ = function (canv, snake, table, food, hearts) {
    return new SnakeBody(canv === void 0 ? this.canv : canv, snake === void 0 ? this.snake : snake, table === void 0 ? this.table : table, food === void 0 ? this.food : food, hearts === void 0 ? this.hearts : hearts);
  };
  SnakeBody.prototype.toString = function () {
    return 'SnakeBody(canv=' + Kotlin.toString(this.canv) + (', snake=' + Kotlin.toString(this.snake)) + (', table=' + Kotlin.toString(this.table)) + (', food=' + Kotlin.toString(this.food)) + (', hearts=' + Kotlin.toString(this.hearts)) + ')';
  };
  SnakeBody.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.canv) | 0;
    result = result * 31 + Kotlin.hashCode(this.snake) | 0;
    result = result * 31 + Kotlin.hashCode(this.table) | 0;
    result = result * 31 + Kotlin.hashCode(this.food) | 0;
    result = result * 31 + Kotlin.hashCode(this.hearts) | 0;
    return result;
  };
  SnakeBody.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.canv, other.canv) && Kotlin.equals(this.snake, other.snake) && Kotlin.equals(this.table, other.table) && Kotlin.equals(this.food, other.food) && Kotlin.equals(this.hearts, other.hearts)))));
  };
  function Coordinates(x, y) {
    this.x = x;
    this.y = y;
  }
  Coordinates.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Coordinates',
    interfaces: []
  };
  Coordinates.prototype.component1 = function () {
    return this.x;
  };
  Coordinates.prototype.component2 = function () {
    return this.y;
  };
  Coordinates.prototype.copy_lu1900$ = function (x, y) {
    return new Coordinates(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Coordinates.prototype.toString = function () {
    return 'Coordinates(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Coordinates.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Coordinates.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  var canv;
  function canv2$lambda() {
    var tmp$;
    return Kotlin.isType(tmp$ = document.getElementById('gameCanvas2'), HTMLCanvasElement) ? tmp$ : throwCCE();
  }
  var canv2;
  function get_canv2() {
    return canv2.value;
  }
  function canv3$lambda() {
    var tmp$;
    return Kotlin.isType(tmp$ = document.getElementById('gameCanvas3'), HTMLCanvasElement) ? tmp$ : throwCCE();
  }
  var canv3;
  function get_canv3() {
    return canv3.value;
  }
  var gameSnake;
  function game1$lambda() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    return new SnakeBody(canv, Kotlin.isType(tmp$ = canv.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = canv.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE(), Kotlin.isType(tmp$_1 = canv.getContext('2d'), CanvasRenderingContext2D) ? tmp$_1 : throwCCE(), mutableListOf([Kotlin.isType(tmp$_2 = get_0('heart1'), HTMLImageElement) ? tmp$_2 : throwCCE(), Kotlin.isType(tmp$_3 = get_0('heart2'), HTMLImageElement) ? tmp$_3 : throwCCE(), Kotlin.isType(tmp$_4 = get_0('heart3'), HTMLImageElement) ? tmp$_4 : throwCCE()]));
  }
  var game1;
  function get_game1() {
    return game1.value;
  }
  function game2$lambda() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    return new SnakeBody(get_canv2(), Kotlin.isType(tmp$ = get_canv2().getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = get_canv2().getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE(), Kotlin.isType(tmp$_1 = get_canv2().getContext('2d'), CanvasRenderingContext2D) ? tmp$_1 : throwCCE(), mutableListOf([Kotlin.isType(tmp$_2 = get_0('heart4'), HTMLImageElement) ? tmp$_2 : throwCCE(), Kotlin.isType(tmp$_3 = get_0('heart5'), HTMLImageElement) ? tmp$_3 : throwCCE(), Kotlin.isType(tmp$_4 = get_0('heart6'), HTMLImageElement) ? tmp$_4 : throwCCE()]));
  }
  var game2;
  function get_game2() {
    return game2.value;
  }
  function game3$lambda() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    return new SnakeBody(get_canv3(), Kotlin.isType(tmp$ = get_canv3().getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = get_canv3().getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE(), Kotlin.isType(tmp$_1 = get_canv3().getContext('2d'), CanvasRenderingContext2D) ? tmp$_1 : throwCCE(), mutableListOf([Kotlin.isType(tmp$_2 = get_0('heart7'), HTMLImageElement) ? tmp$_2 : throwCCE(), Kotlin.isType(tmp$_3 = get_0('heart8'), HTMLImageElement) ? tmp$_3 : throwCCE(), Kotlin.isType(tmp$_4 = get_0('heart9'), HTMLImageElement) ? tmp$_4 : throwCCE()]));
  }
  var game3;
  function get_game3() {
    return game3.value;
  }
  function intervalo1$lambda(closure$dificuldade) {
    return function () {
      gameSnake = get_game1();
      if (closure$dificuldade === 0) {
        if (gameSnake.hearts.size > 0)
          drawGame();
        else {
          var person = window.prompt('Jogo Finalizado \n\n Digite Seu Nick (Lim: 6 caracteres)', ' ');
          if (person != null) {
            localStorage.setItem('ranking', JSON.stringify(rank(getRanking(), new PlayerInfo(pontu, person.substring(0, 7).toString()))));
          }
          window.clearInterval(interval);
          window.location.href = window.location.pathname + window.location.search + window.location.hash;
        }
        pontu = get_game1().score;
      }
       else if (closure$dificuldade === 1) {
        if (gameSnake.hearts.size > 0) {
          drawGame();
        }
        if (gameSnake.hearts.size > 0) {
          drawGame();
        }
         else {
          gameSnake.snake.fillText('Fim de JOgo ):', 200.0, 200.0, 300.0);
          if (get_game2().hearts.size <= 0) {
            var person_0 = window.prompt('Jogo Finalizado \n\n Digite Seu Nick (Lim: 6 caracteres)', ' ');
            if (person_0 != null) {
              localStorage.setItem('ranking', JSON.stringify(rank(getRanking(), new PlayerInfo(pontu, person_0.substring(0, 7).toString()))));
            }
            window.clearInterval(interval);
            window.location.href = window.location.pathname + window.location.search + window.location.hash;
          }
        }
        gameSnake = get_game2();
        if (gameSnake.hearts.size > 0) {
          drawGame();
        }
         else
          gameSnake.snake.fillText('Fim de JOgo ):', 200.0, 200.0, 300.0);
        pontu = get_game1().score + (get_game2().score * 2 | 0) | 0;
      }
       else {
        if (gameSnake.hearts.size > 0) {
          drawGame();
        }
        if (gameSnake.hearts.size > 0) {
          drawGame();
        }
        if (gameSnake.hearts.size > 0) {
          drawGame();
        }
         else {
          gameSnake.snake.fillText('Fim de JOgo ):', 200.0, 200.0, 300.0);
          if (get_game2().hearts.size <= 0 && get_game3().hearts.size <= 0) {
            var person_1 = window.prompt('Jogo Finalizado \n\n Digite Seu Nick (Lim: 6 caracteres)', ' ');
            if (person_1 != null) {
              localStorage.setItem('ranking', JSON.stringify(rank(getRanking(), new PlayerInfo(pontu, person_1.substring(0, 7).toString()))));
            }
            window.clearInterval(interval);
            window.location.href = window.location.pathname + window.location.search + window.location.hash;
          }
        }
        gameSnake = get_game2();
        if (gameSnake.hearts.size > 0) {
          drawGame();
        }
        if (gameSnake.hearts.size > 0) {
          drawGame();
        }
         else
          gameSnake.snake.fillText('Fim de JOgo ):', 200.0, 200.0, 300.0);
        gameSnake = get_game3();
        if (gameSnake.hearts.size > 0) {
          drawGame();
        }
         else
          gameSnake.snake.fillText('Fim de JOgo ):', 200.0, 200.0, 300.0);
        pontu = get_game1().score + (get_game2().score * 2 | 0) + (get_game3().score * 3 | 0) | 0;
      }
      return Unit;
    };
  }
  function intervalo1(dificuldade) {
    interval = window.setInterval(intervalo1$lambda(dificuldade), 15);
  }
  var VK_LEFT;
  var VK_UP;
  var VK_RIGHT;
  var VK_DOWN;
  var tam;
  var interval;
  var pontu;
  var xSpeed;
  var ySpeed;
  var imgFood;
  var imgUpHead;
  var imgDownHead;
  var imgLeftHead;
  var imgRightHead;
  function gameCanvas() {
    gameSnake.table.clearRect(0.0, 0.0, gameSnake.canv.width, gameSnake.canv.height);
    gameSnake.table.fillStyle = 'transparent';
    gameSnake.table.fillRect(0.0, 0.0, gameSnake.canv.width, gameSnake.canv.height);
    gameSnake.table.strokeRect(0.0, 0.0, gameSnake.canv.width, gameSnake.canv.height);
  }
  function snakeCanvas(aux) {
    var tmp$;
    gameSnake.snake.fillStyle = '#8EC63D';
    gameSnake.food.strokeStyle = 'black';
    var e = Kotlin.isType(tmp$ = get_0('dificuldade'), HTMLSelectElement) ? tmp$ : throwCCE();
    var strUser = e.value;
    if (xSpeed !== 0) {
      if (xSpeed > 0)
        gameSnake.snake.drawImage(imgRightHead, gameSnake.trail.get_za3lpa$(0).x, gameSnake.trail.get_za3lpa$(0).y, gameSnake.pieceSize, gameSnake.pieceSize);
      else
        gameSnake.snake.drawImage(imgLeftHead, gameSnake.trail.get_za3lpa$(0).x, gameSnake.trail.get_za3lpa$(0).y, gameSnake.pieceSize, gameSnake.pieceSize);
    }
     else {
      if (ySpeed > 0)
        gameSnake.snake.drawImage(imgDownHead, gameSnake.trail.get_za3lpa$(0).x, gameSnake.trail.get_za3lpa$(0).y, gameSnake.pieceSize, gameSnake.pieceSize);
      else
        gameSnake.snake.drawImage(imgUpHead, gameSnake.trail.get_za3lpa$(0).x, gameSnake.trail.get_za3lpa$(0).y, gameSnake.pieceSize, gameSnake.pieceSize);
    }
    var size = gameSnake.hearts.size;
    if (gameSnake.tail !== 0) {
      if (aux < gameSnake.tail) {
        if (equals(strUser, '0') && aux > 3 || (equals(strUser, '1') && aux > 5) || (equals(strUser, '2') && aux > 7))
          gameSnake.snake.fillRect(gameSnake.trail.get_za3lpa$(aux - 1 | 0).x, gameSnake.trail.get_za3lpa$(aux - 1 | 0).y, gameSnake.pieceSize, gameSnake.pieceSize);
        if (gameSnake.trail.get_za3lpa$(0).x === gameSnake.trail.get_za3lpa$(aux).x && gameSnake.trail.get_za3lpa$(0).y === gameSnake.trail.get_za3lpa$(aux).y && aux > 1) {
          gameSnake.tail = aux;
          gameSnake.hearts.get_za3lpa$(size - 1 | 0).style.display = 'none';
          gameSnake.hearts.removeAt_za3lpa$(size - 1 | 0);
        }
        snakeCanvas(aux + 1 | 0);
      }
    }
  }
  function snakeCanvas_0() {
    snakeCanvas(1);
  }
  function moveTrail() {
    var head = new Coordinates(gameSnake.trail.get_za3lpa$(0).x, gameSnake.trail.get_za3lpa$(0).y);
    gameSnake.trail.add_wxm5ur$(0, head);
    snakeCanvas_0();
  }
  function foodCanvas() {
    gameSnake.food.drawImage(imgFood, gameSnake.foodList.get_za3lpa$(0).x, gameSnake.foodList.get_za3lpa$(0).y, gameSnake.foodSize, gameSnake.foodSize);
  }
  function generateRandomFoodXY() {
    return Random.Default.nextDouble_lu1900$(10.0, 430.0);
  }
  function generateFood() {
    if (gameSnake.trail.get_za3lpa$(0).x < gameSnake.foodList.get_za3lpa$(0).x + gameSnake.foodSize && gameSnake.trail.get_za3lpa$(0).x > gameSnake.foodList.get_za3lpa$(0).x - gameSnake.pieceSize && (gameSnake.trail.get_za3lpa$(0).y > gameSnake.foodList.get_za3lpa$(0).y - gameSnake.pieceSize && gameSnake.trail.get_za3lpa$(0).y < gameSnake.foodList.get_za3lpa$(0).y + gameSnake.foodSize)) {
      gameSnake.time = 0.0;
      gameSnake.score = gameSnake.score + 10 | 0;
      gameSnake.tail = gameSnake.tail + 1 | 0;
      gameSnake.foodList.get_za3lpa$(0).x = generateRandomFoodXY();
      gameSnake.foodList.get_za3lpa$(0).y = generateRandomFoodXY();
    }
    foodCanvas();
  }
  function showScore() {
    var tmp$;
    (tmp$ = document.getElementById('score')) != null ? (tmp$.innerHTML = '<br> Pontua\xE7\xE3o Total: ' + toString(pontu)) : null;
  }
  function showTime() {
    var tmp$, tmp$_0, tmp$_1;
    if (get_game1().time >= 5000) {
      get_0('timer1').style.display = 'block';
      (tmp$ = document.getElementById('timer1')) != null ? (tmp$.innerHTML = '' + toString(numberToInt((10000 - get_game1().time) / 1000))) : null;
    }
     else
      get_0('timer1').style.display = 'none';
    if (get_game2().time >= 5000) {
      get_0('timer2').style.display = 'block';
      (tmp$_0 = document.getElementById('timer2')) != null ? (tmp$_0.innerHTML = '' + toString(numberToInt((10000 - get_game2().time) / 1000))) : null;
    }
     else
      get_0('timer2').style.display = 'none';
    if (get_game3().time >= 5000) {
      get_0('timer3').style.display = 'block';
      (tmp$_1 = document.getElementById('timer3')) != null ? (tmp$_1.innerHTML = '' + toString(numberToInt((10000 - get_game3().time) / 1000))) : null;
    }
     else
      get_0('timer3').style.display = 'none';
  }
  function snakeMove(key) {
    if (key === 37) {
      if (xSpeed !== gameSnake.speedValue) {
        xSpeed = -gameSnake.speedValue | 0;
        ySpeed = 0;
      }
    }
     else if (key === 39) {
      if (xSpeed !== (-gameSnake.speedValue | 0)) {
        xSpeed = gameSnake.speedValue;
        ySpeed = 0;
      }
    }
     else if (key === 40) {
      if (ySpeed !== (-gameSnake.speedValue | 0)) {
        ySpeed = gameSnake.speedValue;
        xSpeed = 0;
      }
    }
     else if (key === 38) {
      if (ySpeed !== gameSnake.speedValue) {
        ySpeed = -gameSnake.speedValue | 0;
        xSpeed = 0;
      }
    }
  }
  function easyGameLimit() {
    if (gameSnake.trail.get_za3lpa$(0).x > 450) {
      gameSnake.trail.get_za3lpa$(0).x = 12.0;
    }
     else if (gameSnake.trail.get_za3lpa$(0).x < -10.0) {
      gameSnake.trail.get_za3lpa$(0).x = 450 - 15.0;
    }
     else if (gameSnake.trail.get_za3lpa$(0).y > 440) {
      gameSnake.trail.get_za3lpa$(0).y = 11.0;
    }
     else if (gameSnake.trail.get_za3lpa$(0).y < -10.0) {
      gameSnake.trail.get_za3lpa$(0).y = 450 - 11.0;
    }
  }
  function init() {
    if (gameSnake.hearts.size <= 0) {
      if (gameSnake.trail.size !== 0)
        gameSnake.trail.clear();
      if (gameSnake.foodList.size !== 0)
        gameSnake.foodList.clear();
      xSpeed = 0;
      ySpeed = 0;
      gameSnake.score = 0;
      gameSnake.tail = 0;
    }
    gameSnake.trail.add_11rb$(new Coordinates(200.0, 200.0));
    gameSnake.foodList.add_11rb$(new Coordinates(generateRandomFoodXY(), generateRandomFoodXY()));
  }
  function drawGame() {
    if (gameSnake.hearts.size <= 0) {
      init();
    }
    timer();
    showTime();
    gameSnake.trail.get_za3lpa$(0).x = gameSnake.trail.get_za3lpa$(0).x + xSpeed;
    gameSnake.trail.get_za3lpa$(0).y = gameSnake.trail.get_za3lpa$(0).y + ySpeed;
    checkMoves();
    easyGameLimit();
    gameCanvas();
    moveTrail();
    generateFood();
    showScore();
  }
  function timer() {
    var tmp$;
    var e = Kotlin.isType(tmp$ = get_0('dificuldade'), HTMLSelectElement) ? tmp$ : throwCCE();
    var strUser = e.value;
    if (equals(strUser, '0')) {
      if (get_game1().tail > 0 && get_game1().hearts.size > 0) {
        get_game1().time = get_game1().time + 15;
      }
    }
     else if (equals(strUser, '1')) {
      if (get_game1().tail > 0 && get_game1().hearts.size > 0) {
        if (get_game2().hearts.size > 0)
          get_game1().time = get_game1().time + 5;
        else
          get_game1().time = get_game1().time + 10;
      }
      if (get_game2().tail > 0 && get_game2().hearts.size > 0) {
        if (get_game1().hearts.size > 0)
          get_game2().time = get_game2().time + 5;
        else
          get_game2().time = get_game2().time + 10;
      }
    }
     else {
      if (get_game1().tail > 0 && get_game1().hearts.size > 0) {
        if (get_game2().hearts.size > 0 && get_game3().hearts.size > 0)
          get_game1().time = get_game1().time + 2.5;
        else if (get_game2().hearts.size > 0 || get_game3().hearts.size > 0)
          get_game1().time = get_game1().time + 5;
        else
          get_game1().time = get_game1().time + 8;
      }
      if (get_game2().tail > 0 && get_game2().hearts.size > 0) {
        if (get_game1().hearts.size > 0 && get_game3().hearts.size > 0)
          get_game2().time = get_game2().time + 2.5;
        else if (get_game1().hearts.size > 0 || get_game3().hearts.size > 0)
          get_game2().time = get_game2().time + 5;
        else
          get_game2().time = get_game2().time + 8;
      }
      if (get_game3().tail > 0 && get_game3().hearts.size > 0) {
        if (get_game1().hearts.size > 0 && get_game2().hearts.size > 0)
          get_game3().time = get_game3().time + 2.5;
        else if (get_game1().hearts.size > 0 || get_game2().hearts.size > 0)
          get_game3().time = get_game3().time + 5;
        else
          get_game3().time = get_game3().time + 8;
      }
    }
    if (gameSnake.time > 10000) {
      gameSnake.time = 0.0;
      gameSnake.hearts.get_za3lpa$(gameSnake.hearts.size - 1 | 0).style.display = 'none';
      gameSnake.hearts.removeAt_za3lpa$(gameSnake.hearts.size - 1 | 0);
    }
  }
  function checkMoves$lambda(event) {
    var tmp$;
    if (event.defaultPrevented)
      return;
    var key = Kotlin.isType(tmp$ = event, KeyboardEvent) ? tmp$ : throwCCE();
    snakeMove(key.keyCode);
  }
  function checkMoves() {
    document.addEventListener('keydown', checkMoves$lambda);
  }
  function game(dif) {
    intervalo1(dif);
  }
  function play() {
    var tmp$, tmp$_0;
    fechaRanking(divRank);
    get_0('menu').style.display = 'none';
    var e = Kotlin.isType(tmp$ = get_0('dificuldade'), HTMLSelectElement) ? tmp$ : throwCCE();
    var strUser = e.value;
    var imageFundo = Kotlin.isType(tmp$_0 = get_0('imageFundo'), HTMLImageElement) ? tmp$_0 : throwCCE();
    imageFundo.style.width = (window.innerWidth + 10 | 0).toString() + 'px';
    imageFundo.style.height = (window.innerHeight + 10 | 0).toString() + 'px';
    imageFundo.style.display = 'block';
    get_0('playcontainer').style.display = 'block';
    switch (strUser) {
      case '0':
        get_game1().hearts.get_za3lpa$(0).style.display = 'block';
        get_game1().hearts.get_za3lpa$(1).style.display = 'block';
        get_game1().hearts.get_za3lpa$(2).style.display = 'block';
        get_game1().canv.width = 450;
        get_game1().canv.height = 450;
        get_game1().canv.style.left = '35%';
        get_game1().table.globalAlpha = 0.8;
        get_0('timer1').style.left = '50%';
        get_0('timer2').style.display = 'none';
        get_0('timer3').style.display = 'none';
        get_game1().canv.style.display = 'block';
        game(toInt(strUser));
        break;
      case '1':
        get_game1().hearts.get_za3lpa$(0).style.left = '39%';
        get_game1().hearts.get_za3lpa$(0).style.display = 'block';
        get_game1().hearts.get_za3lpa$(1).style.left = '39%';
        get_game1().hearts.get_za3lpa$(1).style.display = 'block';
        get_game1().hearts.get_za3lpa$(2).style.left = '39%';
        get_game1().hearts.get_za3lpa$(2).style.display = 'block';
        get_game2().hearts.get_za3lpa$(0).style.left = '57%';
        get_game2().hearts.get_za3lpa$(0).style.display = 'block';
        get_game2().hearts.get_za3lpa$(1).style.left = '57%';
        get_game2().hearts.get_za3lpa$(1).style.display = 'block';
        get_game2().hearts.get_za3lpa$(2).style.left = '57%';
        get_game2().hearts.get_za3lpa$(2).style.display = 'block';
        get_game1().canv.width = 450;
        get_game1().canv.height = 450;
        get_game1().canv.style.left = '8%';
        get_game1().table.globalAlpha = 0.8;
        get_game2().canv.width = 450;
        get_game2().canv.height = 450;
        get_game2().canv.style.left = '63%';
        get_game2().table.globalAlpha = 0.8;
        get_game1().speedValue = 4;
        get_game2().speedValue = 4;
        gameSnake.speedValue = 4;
        get_game1().canv.style.display = 'block';
        get_game2().canv.style.display = 'block';
        get_0('timer1').style.left = '23%';
        get_0('timer2').style.left = '78%';
        get_0('timer3').style.display = 'none';
        game(toInt(strUser));
        break;
      case '2':
        var variacao = 0;
        for (var x = 0; x <= 2; x++) {
          get_game1().hearts.get_za3lpa$(x).style.left = (4 + variacao | 0).toString() + '%';
          get_game1().hearts.get_za3lpa$(x).style.top = '78%';
          get_game1().hearts.get_za3lpa$(x).style.width = '30';
          get_game1().hearts.get_za3lpa$(x).style.height = '30';
          get_game1().hearts.get_za3lpa$(x).style.display = 'block';
          variacao = variacao + 8 | 0;
        }

        variacao = 0;
        for (var x_0 = 0; x_0 <= 2; x_0++) {
          get_game2().hearts.get_za3lpa$(x_0).style.left = (36 + variacao | 0).toString() + '%';
          get_game2().hearts.get_za3lpa$(x_0).style.top = '78%';
          get_game2().hearts.get_za3lpa$(x_0).style.width = '30';
          get_game2().hearts.get_za3lpa$(x_0).style.height = '30';
          get_game2().hearts.get_za3lpa$(x_0).style.display = 'block';
          variacao = variacao + 8 | 0;
        }

        variacao = 0;
        for (var x_1 = 0; x_1 <= 2; x_1++) {
          get_game3().hearts.get_za3lpa$(x_1).style.left = (71 + variacao | 0).toString() + '%';
          get_game3().hearts.get_za3lpa$(x_1).style.top = '78%';
          get_game3().hearts.get_za3lpa$(x_1).style.width = '30';
          get_game3().hearts.get_za3lpa$(x_1).style.height = '30';
          get_game3().hearts.get_za3lpa$(x_1).style.display = 'block';
          variacao = variacao + 8 | 0;
        }

        get_game1().canv.width = 450;
        get_game1().canv.height = 450;
        get_game1().canv.style.left = '2%';
        get_game1().table.globalAlpha = 0.8;
        get_game2().canv.width = 450;
        get_game2().canv.height = 450;
        get_game2().canv.style.left = '35%';
        get_game2().table.globalAlpha = 0.8;
        get_game3().canv.width = 450;
        get_game3().canv.height = 450;
        get_game3().canv.style.left = '69%';
        get_game3().table.globalAlpha = 0.8;
        get_game1().speedValue = 3;
        get_game2().speedValue = 3;
        get_game3().speedValue = 3;
        get_game1().canv.style.display = 'block';
        get_game2().canv.style.display = 'block';
        get_game3().canv.style.display = 'block';
        game(toInt(strUser));
        break;
    }
  }
  var btnMostra;
  var btnFecha;
  var divRank;
  function main$lambda(it) {
    mostraRanking(divRank);
    return null;
  }
  function main$lambda_0(it) {
    fechaRanking(divRank);
    return Unit;
  }
  function main() {
    if (localStorage['ranking'] == null) {
      localStorage['ranking'] = 'null';
    }
    btnMostra.onclick = main$lambda;
    btnFecha.onclick = main$lambda_0;
  }
  function PlayerInfo(score, nickName) {
    this.score = score;
    this.nickName = nickName;
  }
  PlayerInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayerInfo',
    interfaces: []
  };
  PlayerInfo.prototype.component1 = function () {
    return this.score;
  };
  PlayerInfo.prototype.component2 = function () {
    return this.nickName;
  };
  PlayerInfo.prototype.copy_19mbxw$ = function (score, nickName) {
    return new PlayerInfo(score === void 0 ? this.score : score, nickName === void 0 ? this.nickName : nickName);
  };
  PlayerInfo.prototype.toString = function () {
    return 'PlayerInfo(score=' + Kotlin.toString(this.score) + (', nickName=' + Kotlin.toString(this.nickName)) + ')';
  };
  PlayerInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.score) | 0;
    result = result * 31 + Kotlin.hashCode(this.nickName) | 0;
    return result;
  };
  PlayerInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.score, other.score) && Kotlin.equals(this.nickName, other.nickName)))));
  };
  function PlayerList(player, nextPlayer) {
    this.player = player;
    this.nextPlayer = nextPlayer;
  }
  PlayerList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayerList',
    interfaces: []
  };
  PlayerList.prototype.component1 = function () {
    return this.player;
  };
  PlayerList.prototype.component2 = function () {
    return this.nextPlayer;
  };
  PlayerList.prototype.copy_18shz1$ = function (player, nextPlayer) {
    return new PlayerList(player === void 0 ? this.player : player, nextPlayer === void 0 ? this.nextPlayer : nextPlayer);
  };
  PlayerList.prototype.toString = function () {
    return 'PlayerList(player=' + Kotlin.toString(this.player) + (', nextPlayer=' + Kotlin.toString(this.nextPlayer)) + ')';
  };
  PlayerList.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.player) | 0;
    result = result * 31 + Kotlin.hashCode(this.nextPlayer) | 0;
    return result;
  };
  PlayerList.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.player, other.player) && Kotlin.equals(this.nextPlayer, other.nextPlayer)))));
  };
  function rank(list, newPlayer) {
    if (list == null) {
      return new PlayerList(newPlayer, null);
    }
     else {
      if (newPlayer.score < list.player.score) {
        return new PlayerList(newPlayer, list);
      }
       else {
        return new PlayerList(list.player, rank(list.nextPlayer, newPlayer));
      }
    }
  }
  function getRanking() {
    if (equals(localStorage.getItem('ranking'), 'null')) {
      return null;
    }
     else {
      var list = localStorage.getItem('ranking');
      return JSON.parse(ensureNotNull(list));
    }
  }
  function mostraRanking(divRank) {
    var tmp$, tmp$_0;
    (tmp$ = document.getElementById('rPlayer')) != null ? (tmp$.innerHTML = 'Player') : null;
    (tmp$_0 = document.getElementById('rScore')) != null ? (tmp$_0.innerHTML = 'Score') : null;
    preencheRanking(getRanking());
    divRank.style.width = '250px';
  }
  function fechaRanking(divRank) {
    divRank.style.width = '0';
  }
  function preencheRanking(list) {
    var tmp$, tmp$_0;
    if (list == null) {
      return;
    }
     else {
      preencheRanking(list.nextPlayer);
      tmp$ = document.getElementById('rPlayer');
      tmp$ != null ? (tmp$.innerHTML = (tmp$ != null ? tmp$.innerHTML : null) + ('<br> ' + list.player.nickName + ' ')) : null;
      tmp$_0 = document.getElementById('rScore');
      tmp$_0 != null ? (tmp$_0.innerHTML = (tmp$_0 != null ? tmp$_0.innerHTML : null) + ('<br> ' + list.player.score)) : null;
    }
  }
  function about() {
    window.alert('Snake - Anaconda selvagem \xAE \xE9 um jogo arcade desenvolvido por estudantes da Universidade de Pernambuco');
  }
  function rules() {
    window.alert('O jogador usa as setas do teclado para controlar a cobra, se a cobra comer a ma\xE7\xE3, ela cresce.' + ' O jogador perde uma vida ao mover em si mesmo ou n\xE3o tiver comido uma ma\xE7\xE3 nos \xFAltimos 10 segundos.');
  }
  function get_0(name) {
    var tmp$;
    var e = document.getElementById(name);
    if (e == null) {
      println('Elemento nao encontrado: ' + name);
    }
    return Kotlin.isType(tmp$ = e, HTMLElement) ? tmp$ : throwCCE();
  }
  _.SnakeBody = SnakeBody;
  _.Coordinates = Coordinates;
  Object.defineProperty(_, 'canv', {
    get: function () {
      return canv;
    }
  });
  Object.defineProperty(_, 'canv2', {
    get: get_canv2
  });
  Object.defineProperty(_, 'canv3', {
    get: get_canv3
  });
  Object.defineProperty(_, 'gameSnake', {
    get: function () {
      return gameSnake;
    },
    set: function (value) {
      gameSnake = value;
    }
  });
  Object.defineProperty(_, 'game1', {
    get: get_game1
  });
  Object.defineProperty(_, 'game2', {
    get: get_game2
  });
  Object.defineProperty(_, 'game3', {
    get: get_game3
  });
  _.intervalo1_za3lpa$ = intervalo1;
  Object.defineProperty(_, 'VK_LEFT', {
    get: function () {
      return VK_LEFT;
    }
  });
  Object.defineProperty(_, 'VK_UP', {
    get: function () {
      return VK_UP;
    }
  });
  Object.defineProperty(_, 'VK_RIGHT', {
    get: function () {
      return VK_RIGHT;
    }
  });
  Object.defineProperty(_, 'VK_DOWN', {
    get: function () {
      return VK_DOWN;
    }
  });
  Object.defineProperty(_, 'tam', {
    get: function () {
      return tam;
    }
  });
  Object.defineProperty(_, 'interval', {
    get: function () {
      return interval;
    },
    set: function (value) {
      interval = value;
    }
  });
  Object.defineProperty(_, 'pontu', {
    get: function () {
      return pontu;
    },
    set: function (value) {
      pontu = value;
    }
  });
  Object.defineProperty(_, 'xSpeed', {
    get: function () {
      return xSpeed;
    },
    set: function (value) {
      xSpeed = value;
    }
  });
  Object.defineProperty(_, 'ySpeed', {
    get: function () {
      return ySpeed;
    },
    set: function (value) {
      ySpeed = value;
    }
  });
  Object.defineProperty(_, 'imgFood', {
    get: function () {
      return imgFood;
    }
  });
  Object.defineProperty(_, 'imgUpHead', {
    get: function () {
      return imgUpHead;
    }
  });
  Object.defineProperty(_, 'imgDownHead', {
    get: function () {
      return imgDownHead;
    }
  });
  Object.defineProperty(_, 'imgLeftHead', {
    get: function () {
      return imgLeftHead;
    }
  });
  Object.defineProperty(_, 'imgRightHead', {
    get: function () {
      return imgRightHead;
    }
  });
  _.gameCanvas = gameCanvas;
  _.snakeCanvas_za3lpa$ = snakeCanvas;
  _.snakeCanvas = snakeCanvas_0;
  _.moveTrail = moveTrail;
  _.foodCanvas = foodCanvas;
  _.generateRandomFoodXY = generateRandomFoodXY;
  _.generateFood = generateFood;
  _.showScore = showScore;
  _.showTime = showTime;
  _.snakeMove_za3lpa$ = snakeMove;
  _.easyGameLimit = easyGameLimit;
  _.init = init;
  _.drawGame = drawGame;
  _.timer = timer;
  _.checkMoves = checkMoves;
  _.game_za3lpa$ = game;
  _.play = play;
  Object.defineProperty(_, 'btnMostra', {
    get: function () {
      return btnMostra;
    }
  });
  Object.defineProperty(_, 'btnFecha', {
    get: function () {
      return btnFecha;
    }
  });
  Object.defineProperty(_, 'divRank', {
    get: function () {
      return divRank;
    }
  });
  _.main = main;
  _.PlayerInfo = PlayerInfo;
  _.PlayerList = PlayerList;
  _.rank_sgmtt1$ = rank;
  _.getRanking = getRanking;
  _.mostraRanking_e0t6x9$ = mostraRanking;
  _.fechaRanking_e0t6x9$ = fechaRanking;
  _.preencheRanking_yj1kww$ = preencheRanking;
  _.about = about;
  _.rules = rules;
  _.get_61zpoe$ = get_0;
  var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
  canv = Kotlin.isType(tmp$ = document.getElementById('gameCanvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
  canv2 = lazy(canv2$lambda);
  canv3 = lazy(canv3$lambda);
  gameSnake = new SnakeBody(canv, Kotlin.isType(tmp$_0 = canv.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE(), Kotlin.isType(tmp$_1 = canv.getContext('2d'), CanvasRenderingContext2D) ? tmp$_1 : throwCCE(), Kotlin.isType(tmp$_2 = canv.getContext('2d'), CanvasRenderingContext2D) ? tmp$_2 : throwCCE(), ArrayList_init());
  game1 = lazy(game1$lambda);
  game2 = lazy(game2$lambda);
  game3 = lazy(game3$lambda);
  VK_LEFT = 37;
  VK_UP = 38;
  VK_RIGHT = 39;
  VK_DOWN = 40;
  tam = 450;
  interval = 0;
  pontu = 0;
  xSpeed = 0;
  ySpeed = 0;
  imgFood = Kotlin.isType(tmp$_3 = get_0('food'), HTMLImageElement) ? tmp$_3 : throwCCE();
  imgUpHead = Kotlin.isType(tmp$_4 = get_0('upHead'), HTMLImageElement) ? tmp$_4 : throwCCE();
  imgDownHead = Kotlin.isType(tmp$_5 = get_0('downHead'), HTMLImageElement) ? tmp$_5 : throwCCE();
  imgLeftHead = Kotlin.isType(tmp$_6 = get_0('leftHead'), HTMLImageElement) ? tmp$_6 : throwCCE();
  imgRightHead = Kotlin.isType(tmp$_7 = get_0('rightHead'), HTMLImageElement) ? tmp$_7 : throwCCE();
  btnMostra = Kotlin.isType(tmp$_8 = document.getElementById('btn-Ranking'), HTMLButtonElement) ? tmp$_8 : throwCCE();
  btnFecha = Kotlin.isType(tmp$_9 = document.getElementById('btn-Close'), HTMLButtonElement) ? tmp$_9 : throwCCE();
  divRank = Kotlin.isType(tmp$_10 = document.getElementById('mySidebar'), HTMLDivElement) ? tmp$_10 : throwCCE();
  main();
  Kotlin.defineModule('ProjetoAnaconda', _);
  return _;
}(typeof ProjetoAnaconda === 'undefined' ? {} : ProjetoAnaconda, kotlin);
