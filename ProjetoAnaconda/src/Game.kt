@file:Suppress("LossyEncoding")

import org.w3c.dom.*
import kotlin.browser.document
import org.w3c.dom.events.*
import kotlin.browser.*
import kotlin.random.Random
import  kotlin.collections.*

data class SnakeBody(val canv:HTMLCanvasElement, val snake:CanvasRenderingContext2D,
                     val table:CanvasRenderingContext2D,
                     val food:CanvasRenderingContext2D,val hearts:MutableList<HTMLImageElement>)
{
    val pieceSize = 20.0
    var speedValue = 8
    val foodSize = 20.0 * 1.5
    val trail = mutableListOf(Coordinates(200.0, 200.0))
    val foodList = mutableListOf(Coordinates(generateRandomFoodXY(), generateRandomFoodXY()))
    var score = 0
    var tail = 1
    var time = 0.0
}

/*
    Objeto para indicar as posicoes dos elementos
 */
data class Coordinates(var x:Double, var y:Double)

val canv = document.getElementById("gameCanvas") as HTMLCanvasElement
val canv2 by lazy { document.getElementById("gameCanvas2") as HTMLCanvasElement }
val canv3 by lazy { document.getElementById("gameCanvas3") as HTMLCanvasElement }

//Jogo que está em execução
var gameSnake = SnakeBody(canv,canv.getContext("2d") as CanvasRenderingContext2D,
        canv.getContext("2d") as CanvasRenderingContext2D,
        canv.getContext("2d") as CanvasRenderingContext2D, mutableListOf())

//region Iniciação dos objetos de acordo com a dificuldade
val game1 by lazy {
    SnakeBody(canv,canv.getContext("2d") as CanvasRenderingContext2D,
            canv.getContext("2d") as CanvasRenderingContext2D,
            canv.getContext("2d") as CanvasRenderingContext2D,
            mutableListOf(get("heart1") as HTMLImageElement,
                    get("heart2") as HTMLImageElement,
                    get("heart3") as HTMLImageElement))
}
val game2 by lazy {
    SnakeBody(canv2,canv2.getContext("2d") as CanvasRenderingContext2D,
            canv2.getContext("2d") as CanvasRenderingContext2D,
            canv2.getContext("2d") as CanvasRenderingContext2D,
            mutableListOf(get("heart4") as HTMLImageElement,
                    get("heart5") as HTMLImageElement,
                    get("heart6") as HTMLImageElement))
}
val game3 by lazy {
    SnakeBody(canv3,canv3.getContext("2d") as CanvasRenderingContext2D,
            canv3.getContext("2d") as CanvasRenderingContext2D,
            canv3.getContext("2d") as CanvasRenderingContext2D,
            mutableListOf(get("heart7") as HTMLImageElement,
                    get("heart8") as HTMLImageElement,
                    get("heart9") as HTMLImageElement))
}
//endregion

/*
    Intervalo que Fica rodando o jogo
 */
fun intervalo1(dificuldade: Int)
{
    interval = window.setInterval({
        gameSnake = game1
        if (dificuldade == 0) {
            if (gameSnake.hearts.size>0) drawGame()
            else {
                val person = window.prompt("Jogo Finalizado \n\n Digite Seu Nick (Lim: 6 caracteres)", " ")
                if(person!=null){
                    localStorage.setItem("ranking", JSON.stringify(rank(getRanking(),PlayerInfo(pontu, person.subSequence(0,7).toString()))))
                }
                window.clearInterval(interval)
                window.location.href = window.location.pathname + window.location.search + window.location.hash
            }

            pontu = game1.score
        }
        else if (dificuldade == 1) // Dificuldade Normal - Cobra 1 se move 2x mais rápida que a cobra 2
        {
            if (gameSnake.hearts.size>0) { drawGame() }
            if (gameSnake.hearts.size>0) { drawGame() }
            else {
                gameSnake.snake.fillText("Fim de JOgo ):", 200.0, 200.0, 300.0)
                if (game2.hearts.size<=0) {
                    val person = window.prompt("Jogo Finalizado \n\n Digite Seu Nick (Lim: 6 caracteres)", " ")
                    if(person!=null){
                        localStorage.setItem("ranking", JSON.stringify(rank(getRanking(),PlayerInfo(pontu, person.subSequence(0,7).toString()))))
                    }
                    window.clearInterval(interval)
                    window.location.href = window.location.pathname + window.location.search + window.location.hash
                }
            }

            gameSnake = game2
            if (gameSnake.hearts.size>0) {
                drawGame()
            } else gameSnake.snake.fillText("Fim de JOgo ):", 200.0, 200.0, 300.0)

            pontu = game1.score + (game2.score * 2)
        }
        else // Dificuldade Dificil - Cobra 1 se move 3x mais rápida que a cobra 1
        {
            if (gameSnake.hearts.size>0) { drawGame() }
            if (gameSnake.hearts.size>0) { drawGame() }
            if (gameSnake.hearts.size>0) { drawGame() }
            else {
                gameSnake.snake.fillText("Fim de JOgo ):", 200.0, 200.0, 300.0)
                if (game2.hearts.size<=0 && game3.hearts.size<=0) {
                    val person = window.prompt("Jogo Finalizado \n\n Digite Seu Nick (Lim: 6 caracteres)", " ")
                    if(person!=null){
                        localStorage.setItem("ranking", JSON.stringify(rank(getRanking(),PlayerInfo(pontu, person.subSequence(0,7).toString()))))
                    }
                    window.clearInterval(interval)
                    window.location.href = window.location.pathname + window.location.search + window.location.hash
                }
            }

            gameSnake = game2
            if (gameSnake.hearts.size>0) { drawGame() }
            if (gameSnake.hearts.size>0) { drawGame() }
            else gameSnake.snake.fillText("Fim de JOgo ):", 200.0, 200.0, 300.0)

            gameSnake = game3
            if (gameSnake.hearts.size>0) { drawGame() }
            else gameSnake.snake.fillText("Fim de JOgo ):", 200.0, 200.0, 300.0)

            pontu = game1.score + (game2.score * 2) + (game3.score * 3)

        }
    }, 15)
}

//region Constantes e Variáveis Globais do Programa
const val VK_LEFT=37
const val VK_UP=38
const val VK_RIGHT=39
const val VK_DOWN=40

const val tam = 450 // Tamanho dos canvas
var interval = 0
var pontu = 0 // Pontuação Geral
var xSpeed=0 // Cobra se movendo no eixo 'x'
var ySpeed=0 // Cobra se movendo no eixo 'y'
//endregion

//region Imagens do jogo
val imgFood = get("food") as HTMLImageElement
val imgUpHead = get("upHead") as HTMLImageElement
val imgDownHead = get("downHead") as HTMLImageElement
val imgLeftHead = get("leftHead") as HTMLImageElement
val imgRightHead = get("rightHead") as HTMLImageElement
//endregion

/*
    Função atualiza o tabuleiro graficamente
 */
fun gameCanvas() {
    gameSnake.table.clearRect(0.0,0.0,gameSnake.canv.width.toDouble(),gameSnake.canv.height.toDouble())
    gameSnake.table.fillStyle = "transparent"
    gameSnake.table.fillRect(0.0, 0.0, gameSnake.canv.width.toDouble(), gameSnake.canv.height.toDouble())
    gameSnake.table.strokeRect(0.0, 0.0, gameSnake.canv.width.toDouble(), gameSnake.canv.height.toDouble())
}

/*
    Função atualiza a posição da cobra graficamente.
    Se tail!=0, usamos recursividade para desenhar o rastro da cobra de acordo com o tamanho do tail
 */
fun snakeCanvas(aux:Int) {
    gameSnake.snake.fillStyle = "#8EC63D"
    gameSnake.food.strokeStyle="black"
    val e = get("dificuldade") as HTMLSelectElement
    val strUser = e.value
    if (xSpeed!=0) {
        if (xSpeed>0)
            gameSnake.snake.drawImage(imgRightHead,gameSnake.trail[0].x, gameSnake.trail[0].y, gameSnake.pieceSize, gameSnake.pieceSize)
        else
            gameSnake.snake.drawImage(imgLeftHead,gameSnake.trail[0].x, gameSnake.trail[0].y, gameSnake.pieceSize, gameSnake.pieceSize)
    } else {
        if (ySpeed>0)
            gameSnake.snake.drawImage(imgDownHead,gameSnake.trail[0].x, gameSnake.trail[0].y, gameSnake.pieceSize, gameSnake.pieceSize)
        else
            gameSnake.snake.drawImage(imgUpHead,gameSnake.trail[0].x, gameSnake.trail[0].y, gameSnake.pieceSize, gameSnake.pieceSize)
    }
    val size = gameSnake.hearts.size
    if (gameSnake.tail != 0) {
        if (aux<gameSnake.tail) {
            if((strUser==("0") && aux>3) || (strUser==("1") && aux>5) || (strUser==("2") && aux>7))
                gameSnake.snake.fillRect(gameSnake.trail[aux-1].x, gameSnake.trail[aux-1].y, gameSnake.pieceSize, gameSnake.pieceSize)
            if ((gameSnake.trail[0].x==gameSnake.trail[aux].x && gameSnake.trail[0].y==gameSnake.trail[aux].y) && aux > 1) {
                gameSnake.tail=aux
                gameSnake.hearts[size-1].style.display = "none"
                gameSnake.hearts.removeAt(size-1)
            }
            snakeCanvas(aux+1)
        }
    }
}

/*
    Inicializa a função acima
 */
fun snakeCanvas() {
    snakeCanvas(1)
}

/*
    Função responsável por adicionar a coordenada da cabeça na posição 0 e deixar a lista com apenas a quantidade de
    elementos referente ao tamanho do rastro, apagando a ultima parte do rastro
 */
fun moveTrail() {
    val head = Coordinates(gameSnake.trail[0].x,gameSnake.trail[0].y)
    gameSnake.trail.add(0, head)
    snakeCanvas()
}

/*
    Função desenha a comida
 */
fun foodCanvas() {
    gameSnake.food.drawImage(imgFood,gameSnake.foodList[0].x, gameSnake.foodList[0].y,gameSnake.foodSize,gameSnake.foodSize)
}

/*
    Retorna um Double de acordo com os limites do tabuleiro
 */
fun generateRandomFoodXY(): Double {
    return Random.nextDouble(10.0,430.0)
}

/*
    Função chamada ao pontuar, se pontuar, aumentamos o score, o tamanho do rastro e as coordenadas da comida é alterada
    na lista
 */
fun generateFood() {
    if ((gameSnake.trail[0].x<gameSnake.foodList[0].x+gameSnake.foodSize && gameSnake.trail[0].x>gameSnake.foodList[0].x-gameSnake.pieceSize) &&
            (gameSnake.trail[0].y>gameSnake.foodList[0].y-gameSnake.pieceSize && gameSnake.trail[0].y<gameSnake.foodList[0].y+gameSnake.foodSize)) {
        gameSnake.time=0.0
        gameSnake.score+=10
        gameSnake.tail+=1
        gameSnake.foodList[0].x=generateRandomFoodXY()
        gameSnake.foodList[0].y=generateRandomFoodXY()
    }
    foodCanvas()
}

/*
    Função chamada para mostrar a pontuação em tempo real no HTML
 */
fun showScore() {
    document.getElementById("score")?.innerHTML= "<br> Pontuação Total: " + pontu
}

/*
    Função que aparece o tempo que precisa pegar uma comida
 */
fun showTime() {
    if(game1.time>=5000) {
        get("timer1").style.display = "block"
        document.getElementById("timer1")?.innerHTML = "" + ((10000 - game1.time) / 1000).toInt()
    }
    else get("timer1").style.display = "none"
    if(game2.time>=5000) {
        get("timer2").style.display = "block"
        document.getElementById("timer2")?.innerHTML = "" + ((10000 - game2.time) / 1000).toInt()
    }
    else get("timer2").style.display = "none"
    if(game3.time>=5000) {
        get("timer3").style.display = "block"
        document.getElementById("timer3")?.innerHTML = "" + ((10000 - game3.time) / 1000).toInt()
    }
    else get("timer3").style.display = "none"
}


/*
    Identifica os comandos da cobra e garante que serão movimentos válidos
 */
fun snakeMove(key: Int) {
    if (key == VK_LEFT) {
        if (xSpeed!=gameSnake.speedValue){
            xSpeed = -gameSnake.speedValue
            ySpeed=0
        }
    } else if (key == VK_RIGHT) {
        if (xSpeed!=-gameSnake.speedValue){
            xSpeed = gameSnake.speedValue
            ySpeed=0
        }
    } else if (key == VK_DOWN) {
        if (ySpeed!=-gameSnake.speedValue) {
            ySpeed = gameSnake.speedValue
            xSpeed = 0
        }
    } else if (key == VK_UP) {
        if (ySpeed!= gameSnake.speedValue) {
            ySpeed = -gameSnake.speedValue
            xSpeed = 0
        }
    } else {

    }
}

/*
    Funcao para fazer a cobra teleportar pro outro lado
    O Limete pode ser fixo porque para cada canvas ele vai de 0-450 independente de onde estiver o canvas
 */
fun easyGameLimit() {
    if (gameSnake.trail[0].x>tam) {
        gameSnake.trail[0].x=12.0
    } else if (gameSnake.trail[0].x<-10.0) {
        gameSnake.trail[0].x=tam-15.0
    } else if (gameSnake.trail[0].y>tam-10) {
        gameSnake.trail[0].y=11.0
    } else if (gameSnake.trail[0].y<-10.0) {
        gameSnake.trail[0].y=tam-11.0
    }
}

/*
    Zera tudo se for perdido e inicializa a lista
    se quiser que o play reinicie o game é so tirar o primeiro if mas uma hora ou outra vai ser alterada com
    a adicao de outros botoes e o menuzin
 */
fun init() {
    if(gameSnake.hearts.size<=0) {
        if (gameSnake.trail.size != 0)
            gameSnake.trail.clear()
        if (gameSnake.foodList.size != 0)
            gameSnake.foodList.clear()
        xSpeed = 0
        ySpeed = 0
        gameSnake.score = 0
        gameSnake.tail = 0
    }

    //Gera uma posição fixa para a cobra e uma posição aleatória para a comida
    gameSnake.trail.add(Coordinates(200.0,200.0))
    gameSnake.foodList.add(Coordinates(generateRandomFoodXY(),generateRandomFoodXY()))
}

/*
    Desenha tudo no jogo, atualiza as coordenadas da cabeça da cobra e se acabou, chama init()
 */
fun drawGame() {
    if (gameSnake.hearts.size<=0) {
        init()
    }
    timer()
    showTime()
    gameSnake.trail[0].x += xSpeed
    gameSnake.trail[0].y += ySpeed
    checkMoves()
    easyGameLimit()
    gameCanvas()
    moveTrail()
    generateFood()
    showScore()
}

fun timer () {
    val e = get("dificuldade") as HTMLSelectElement
    val strUser = e.value
    if (strUser=="0") {
        if (game1.tail>0 && game1.hearts.size > 0) {
            game1.time += 15
        }
    } else if (strUser=="1") {
        if (game1.tail > 0 && game1.hearts.size > 0) {
            if (game2.hearts.size > 0) game1.time += 5
            else game1.time += 10
        }
        if (game2.tail > 0 && game2.hearts.size > 0) {
            if (game1.hearts.size > 0) game2.time += 5
            else game2.time += 10
        }
    } else {
        if (game1.tail > 0 && game1.hearts.size > 0) {
            if (game2.hearts.size > 0 && game3.hearts.size > 0) game1.time += 2.5
            else if (game2.hearts.size > 0 || game3.hearts.size > 0)  game1.time += 5
            else game1.time += 8
        }
        if (game2.tail > 0 && game2.hearts.size > 0) {
            if (game1.hearts.size > 0 && game3.hearts.size > 0) game2.time += 2.5
            else if (game1.hearts.size > 0 || game3.hearts.size > 0)  game2.time += 5
            else game2.time += 8
        }
        if (game3.tail>0 && game3.hearts.size > 0) {
            if (game1.hearts.size > 0 && game2.hearts.size > 0) game3.time += 2.5
            else if (game1.hearts.size > 0 || game2.hearts.size > 0)  game3.time += 5
            else game3.time += 8
        }
    }
    if(gameSnake.time>10000) {
        gameSnake.time=0.0
        gameSnake.hearts[gameSnake.hearts.size-1].style.display = "none"
        gameSnake.hearts.removeAt(gameSnake.hearts.size-1)
    }
}


/**
 * Uma Função que Checa as teclas pressionadas
 */
fun checkMoves() {
    document.addEventListener("keydown", fun(event){
        if (event.defaultPrevented)
            return
        val key = event as KeyboardEvent
        snakeMove(key.keyCode)
    })
}

/*
    Inicia o setInterval
 */
fun game(dif:Int) {
    intervalo1(dif)
}

/*
    Funcao chamada quando o botao "Play" é apertado, muda o style de none pra block e faz o jogo vísivel
 */
fun play() {
    fechaRanking(divRank) // caso o ranking esteja aberto. //TODO pode tirar dps

    get("menu").style.display = "none"

    //Obtém a Dificuldade Escolhida
    val e = get("dificuldade") as HTMLSelectElement
    val strUser = e.value

    //Configuração do tamanho da imagem de fundo
    val imageFundo = get("imageFundo") as HTMLImageElement
    imageFundo.style.width = (window.innerWidth + 10).toString()+ "px"
    imageFundo.style.height = (window.innerHeight + 10).toString()+"px"
    imageFundo.style.display = "block"

    get("playcontainer").style.display = "block"

    when (strUser) {
        "0" -> {

            game1.hearts[0].style.display = "block"
            game1.hearts[1].style.display = "block"
            game1.hearts[2].style.display = "block"

            //region Configurações do Canvas - Determinar os Tamanho e a posição do Canvas
            game1.canv.width  = tam
            game1.canv.height = tam
            game1.canv.style.left = "35%"
            game1.table.globalAlpha = 0.8
            //endregion

            //region Configuração do Layout dos Times
            get("timer1").style.left = "50%"
            get("timer2").style.display = "none"
            get("timer3").style.display = "none"
            //endregion

            //Fazer o Canvas Visível
            game1.canv.style.display = "block"

            game(strUser.toInt())      //Esceutar o Game
        }
        "1" -> {

            //region Configuração das Posição dos Corações
            game1.hearts[0].style.left = "39%"
            game1.hearts[0].style.display = "block"
            game1.hearts[1].style.left = "39%"
            game1.hearts[1].style.display = "block"
            game1.hearts[2].style.left = "39%"
            game1.hearts[2].style.display = "block"

            game2.hearts[0].style.left = "57%"
            game2.hearts[0].style.display = "block"
            game2.hearts[1].style.left = "57%"
            game2.hearts[1].style.display = "block"
            game2.hearts[2].style.left = "57%"
            game2.hearts[2].style.display = "block"
            //endregion

            //region Configrações dos Canvas - Determinar os Tamanho e as posições dos Canvas
            game1.canv.width  = tam
            game1.canv.height = tam
            game1.canv.style.left = "8%"
            game1.table.globalAlpha = 0.8


            game2.canv.width  = tam
            game2.canv.height = tam
            game2.canv.style.left = "63%"
            game2.table.globalAlpha = 0.8
            //endregion

            game1.speedValue = 4
            game2.speedValue = 4
            gameSnake.speedValue = 4

            // Fazer os canvas visível
            game1.canv.style.display = "block"
            game2.canv.style.display = "block"

            //region Configuração do Layout dos Times
            get("timer1").style.left = "23%"
            get("timer2").style.left = "78%"
            get("timer3").style.display = "none"
            //endregion

            game(strUser.toInt())     //Esceutar o Game

        }
        "2" -> {

            //region Configuração das Posição dos Corações
            var variacao = 0
            for (x in 0..2)
            {
                game1.hearts[x].style.left = (4+variacao).toString() + "%"
                game1.hearts[x].style.top = "78%"
                game1.hearts[x].style.width = "30"
                game1.hearts[x].style.height = "30"
                game1.hearts[x].style.display = "block"
                variacao+=8
            }

            variacao = 0
            for (x in 0..2)
            {
                game2.hearts[x].style.left = (36+variacao).toString() + "%"
                game2.hearts[x].style.top = "78%"
                game2.hearts[x].style.width = "30"
                game2.hearts[x].style.height = "30"
                game2.hearts[x].style.display = "block"
                variacao+=8
            }

            variacao = 0
            for (x in 0..2)
            {
                game3.hearts[x].style.left = (71+variacao).toString() + "%"
                game3.hearts[x].style.top = "78%"
                game3.hearts[x].style.width = "30"
                game3.hearts[x].style.height = "30"
                game3.hearts[x].style.display = "block"
                variacao+=8
            }
            //endregion

            //region Configurações dos Canvas - Determinar os Tamanho e as posições dos Canvas
            game1.canv.width  = tam
            game1.canv.height = tam
            game1.canv.style.left = "2%"
            game1.table.globalAlpha = 0.8

            game2.canv.width  = tam
            game2.canv.height = tam
            game2.canv.style.left = "35%"
            game2.table.globalAlpha = 0.8

            game3.canv.width  = tam
            game3.canv.height = tam
            game3.canv.style.left = "69%"
            game3.table.globalAlpha = 0.8
            //endregion

            //Velciodade do Jogo
            game1.speedValue = 3
            game2.speedValue = 3
            game3.speedValue = 3

            // Fazer os canvas visível
            game1.canv.style.display = "block"
            game2.canv.style.display = "block"
            game3.canv.style.display = "block"

            game(strUser.toInt())      //Executar o Game
        }
    }


}

val btnMostra = document.getElementById("btn-Ranking") as HTMLButtonElement // BOTAO PARA TESTE, ABRE O RANKING
val btnFecha = document.getElementById("btn-Close") as HTMLButtonElement // BOTAO PARA TESTE, ABRE O RANKING
val divRank =document.getElementById("mySidebar") as HTMLDivElement

fun main() {
    if(localStorage.get("ranking")==null){
        localStorage.set("ranking", "null")

    }

    btnMostra.onclick = {
        mostraRanking(divRank)
        null
    }
    btnFecha.onclick ={
        fechaRanking(divRank)
    }

}

data class PlayerInfo(val score:Int , val nickName:String) // classe referente as informacoes do jogador

data class PlayerList(val player: PlayerInfo, val nextPlayer: PlayerList?)  // classe referente a uma lista com informacoes dos jogadores


fun rank(list: PlayerList?, newPlayer: PlayerInfo):PlayerList?{     // metodo recebe a lista, e um jogador novo.
    if(list==null){
        return PlayerList(newPlayer, null)
    }
    else{
        if(newPlayer.score<list.player.score){                      // se a pontuacao do jogador for menor que o jogador verificado na lista
            return PlayerList(newPlayer, list)
        }
        else{
            return PlayerList(list.player, rank(list.nextPlayer, newPlayer))
        }
    }
}

fun getRanking():PlayerList?{
    if(localStorage.getItem("ranking") == "null"){             // retorna o ranking (lista de jogadores)
        return null
    }
    else{
        val list = localStorage.getItem("ranking")
        return JSON.parse(list!!)
    }
}

fun mostraRanking(divRank:HTMLDivElement){
    document.getElementById("rPlayer")?.innerHTML = "Player"                  // essas duas linhas limpam a pagina
    document.getElementById("rScore")?.innerHTML = "Score"
    preencheRanking(getRanking())
    divRank.style.width = "250px"
}

fun fechaRanking(divRank:HTMLDivElement){
    divRank.style.width = "0"
}

fun preencheRanking(list:PlayerList?):Unit{
    if(list==null){
        return
    }
    else{
        preencheRanking(list.nextPlayer)
        document.getElementById("rPlayer")?.innerHTML += "<br> ${list.player.nickName} "
        document.getElementById("rScore")?.innerHTML += "<br> ${list.player.score}"
    }
}

fun about() {
    window.alert("Snake - Anaconda selvagem ® é um jogo arcade desenvolvido por estudantes da Universidade de Pernambuco")
}

fun rules() {
    window.alert("O jogador usa as setas do teclado para controlar a cobra, se a cobra comer a maçã, ela cresce." +
            " O jogador perde uma vida ao mover em si mesmo ou não tiver comido uma maçã nos últimos 10 segundos.")
}
