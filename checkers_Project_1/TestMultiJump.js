const body = document.querySelector("body")
const chessBoardContainer = document.querySelector("#chessBoardContainer")

let allSqauresArry =[]
let darkSqauresArry =[]
let lightSqauresArry =[]
let allPiecesArray =[]
let nullPieceArray =[]
let PotentialyUseablePieceArray =[]

//making sqaures on board


for(let i =0 ; i <= 64-1 ; i ++){
    let makeSquare = document.createElement('div')
        makeSquare.classList.add('square')
        makeSquare.setAttribute("id",`SQ${i}`)
        //makeSquare.innerText= `${i}`
        allSqauresArry.push(i)
        chessBoardContainer.appendChild(makeSquare)
}
let allSquares = document.querySelectorAll('.square')

let a = 0
for(let i =0 ; i <= 7 ; i ++){
    
    for(let j =0 ; j <= 7 ; j ++){
        
        if(j % 2 != 0 && i % 2 === 0){
            darkSqauresArry.push(a)
            allSquares[a].classList.add(`darkSQaure#${a}`)
            allSquares[a].classList.add('darkSQaures')
            //console.log(a)
        }
        else if(j % 2 === 0 && i % 2 != 0 )
        {
            darkSqauresArry.push(a)
            allSquares[a].classList.add(`darkSQaure#${a}`)
            allSquares[a].classList.add('darkSQaures')
            //console.log(a)
        }
        else{
            lightSqauresArry.push(a)
            allSquares[a].classList.add(`lightSQaure#${a}`)
            allSquares[a].classList.add('lightSQaures')
            //console.log(a)
        }
        a++
    }
}

//adding pieces to squares
//adding pieces to squares
//adding pieces to squares


for(let i =0 ; i <= 64-1 ; i ++){
    let makePiece = document.createElement('div')
        makePiece.classList.add('pieces')
        makePiece.setAttribute("id",`${i}`)
        makePiece.innerText= `${i}`
        
        allSquares[i].appendChild(makePiece)
}
let allPieces = document.querySelectorAll('.pieces')

let b = -1
for(let i =0 ; i <= 7 ; i ++){
    
    for(let j =0 ; j <= 7 ; j ++){
        b = b+1
        if(j % 2 != 0 && i % 2 === 0){
            allPiecesArray.push(b)
            PotentialyUseablePieceArray.push(b)
            //allPieces[b].classList.add(`PotentialyUseablePiece#${b}`)
            allPieces[b].classList.add('PotentialyUseablePieces')
        }
        else if(j % 2 === 0 && i % 2 != 0 )
        {
            allPiecesArray.push(b)
            PotentialyUseablePieceArray.push(b)
            //allPieces[b].classList.add(`PotentialyUseablePiece#${b}`)
            allPieces[b].classList.add('PotentialyUseablePieces')
        }
        else{
            allPiecesArray.push('nullPiece')
            nullPieceArray.push(b)
            //allPieces[b].classList.add(`nullPiece#${b}`)
            allPieces[b].classList.add('nullPiece') 
        }
        
    }
}

//console.log(allPiecesArray)

//setting up starting positions
//indentifying all activePieces

        //Print out all PotentialyUseablePieces
// let allPotentialyUseablePieces = document.querySelectorAll(`.PotentialyUseablePieces`)
// allPotentialyUseablePieces.forEach(PotentialyUseablePiece=>{console.log("list of all useable pieeces",PotentialyUseablePiece)})

for(i =0; i <= allPieces.length-1 ; i ++){
    

    if(i== 1||i== 3||i== 5|| i== 7 || i== 8||i==10||i==12|| i==14 ||i== 17||i==19||i==21|| i==23){
        //allPieces[i].classList.add("pieceON")
        allPieces[i].classList.add("redPiece")
    }
    else if(i== 40||i== 42||i== 44|| i== 46 || i== 49||i==51||i==53|| i==55 ||i== 56||i==58||i==60|| i==62){
        //allPieces[i].classList.add("pieceON")
        allPieces[i].classList.add("bluePiece")
        }
        
    else{
        //allPieces[i].classList.add("pieceOFF")
        allPieces[i].classList.add("hidden")
    }
}
let allnullPieces = document.querySelectorAll(`.nullPiece`)
allnullPieces.forEach(nullPiece=>{
    nullPiece.classList.remove("hidden")
    nullPiece.classList.remove("pieceOFF")
})

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////


//Add addEventListener depending on turn
let bluePieces = document.querySelectorAll(".bluePiece")
//bluePieces.forEach(bluePiece=>{console.log(bluePiece)})
let redPieces = document.querySelectorAll(".redPiece")
//redPieces.forEach(redPiece=>{console.log(redPiece)})
blueKings = document.querySelectorAll(".blueKing")
redKings = document.querySelectorAll(".redKing")


let turn = 0;
console.log("turn check 1:",turn)
 

function addClickeventToPieces(){
    if(turn === 0){
            bluePieces.forEach(bluePiece=>{
                bluePiece.addEventListener("click", resetWithRemainingPeices)
                //console.log(bluePiece)
            })
                blueKings.forEach(blueKing=>{
                    blueKing.addEventListener("click", resetWithRemainingPeices)
                    console.log(blueKing)          
                })
        console.log("Event Listener was added for Blue:")
        console.log("turn check 2:",turn)
    }
    
    else{
            redPieces.forEach(redPiece=>{
                redPiece.addEventListener("click", resetWithRemainingPeices)
                //console.log(redPiece)
            })
                redKings.forEach(redKing=>{
                    redKing.addEventListener("click", resetWithRemainingPeices)
                    console.log(redKing)
                })
        console.log("Event Listener was added for Red:")
        console.log("turn check 3:",turn)
    }
}

////////////////////
// change the players turn function
//this will be called at the end of a move and activatePieces for the next player
let turnTrackerHTML = document.getElementById("TurnTracker")
turnTrackerHTML.innerText = "Turn Tracker: We Always Start at Blue for now"
// let changeTurnButtonTest = document.querySelector(".ChangeTurn")
// changeTurnButtonTest.addEventListener("click", changeTurnButtonTestFunc)

// function changeTurnButtonTestFunc(){
//     changeWhosTurn()
// }
function changeWhosTurn(){
   
    if(turn == 0){
        turnTrackerHTML.innerText = "Turn Tracker: Red"
        turnTrackerHTML.style.color="red"
        
        turn = 1;
    }
    else{
        turnTrackerHTML.innerText = "Turn Tracker: Blue"
        turnTrackerHTML.style.color = "blue"
        turn = 0;
    }
    addClickeventToPieces()
}

// adding Start game button to addClickevent is not outside of a function
document.getElementById("StartGameBTN").addEventListener("click", startGameButtonFunc)
function startGameButtonFunc(){
addClickeventToPieces()
}

// porbelm in prior code was when a piece was removed it remaind inside the forEach add event listener even when bluepice class was removed
// function to remove event listener


function removeEventListenerWhenNotTurn(){
    if(turn === 0){
            bluePieces.forEach(bluePiece=>{
            bluePiece.removeEventListener("click", resetWithRemainingPeices)
             })
            //console.log(bluePiece)
                    blueKings.forEach(blueKing=>{
                    blueKing.removeEventListener("click", resetWithRemainingPeices)
                    console.log(blueKing)
                    })
        
        console.log("Event Listener was removed for Blue")
    }
    else{
            redPieces.forEach(redPiece=>{
            redPiece.removeEventListener("click", resetWithRemainingPeices)
            //console.log(redPiece)
            })
                redKings.forEach(redKing=>{
                redKing.removeEventListener("click", resetWithRemainingPeices)
                console.log(redKing)
                
                })
        console.log("Event Listener was removed for Red:",)
    }

}

function resetWithRemainingPeices(){
    pieceYouWantToMove(event)
    bluePieces = document.querySelectorAll(".bluePiece")
    redPieces = document.querySelectorAll(".redPiece")
    blueKings = document.querySelectorAll(".blueKing")
    redKings = document.querySelectorAll(".redKing")

    //console.log("pices with blueKing class run in resetWithRemainingPeices()",blueKings)
    //console.log("pices with redKing class run in resetWithRemainingPeices()",redKings )
}


//identify selceted piece and give class active 
function pieceYouWantToMove(event){
    activatedPiece = event.target.id
    allPieces[activatedPiece].classList.add("activatedPiece")
    //console.log(`Activated Piece ID`,activatedPiece)
    console.log(`Activated Piece`,allPieces[activatedPiece])
    //console.log(console.log(`Activated Piece ID+9`,parseInt(activatedPiece)+9))
    //console.log(console.log(`Activated Piece ID-14`,activatedPiece-14))
    removeEventListenerWhenNotTurn()
    //changeWhosTurn() // this should be added once piece is selected to move to 
    checkForOpenSpotsNoJumps()
    
}

// let TestRemoveEventButtonTest = document.querySelector(".TestRemoveEvent")
// TestRemoveEventButtonTest.addEventListener("click", TestRemoveEventButtonTestFunc)

// function TestRemoveEventButtonTestFunc(){
//     activatedPiece = ""
//     resetWithRemainingPeices()
// }




//lets try this again...
//check avaliable spaces...no jumps..left front right front
//for blue forward right is id-7 // red forward right is id +9
//for blue forward left  id-9 // red forward right is id +7
// piece ID we want to move is activatedPiece with activatedPiece class
let rightForwardOpenPieceUP
let leftForwardOpenPieceUp
let rightForwardOpenPieceDown
let leftForwardOpenPieceDown
let rightForwardUPJump
let leftForwardUPJump
let rightForwardDownJump
let leftForwardDownJump
let pieceWeSingleJumped
let clickWhereWeWantToMove
let spotWeWantToMoveTO
let bottomRowPlus55 = [55,56,58,60,62]
let bottomRow = [56,58,60,62]
let topRowPlus8 = [1,3,5,7,8]
let topRow =[1,3,5,7]
let checkedForDoubleJumps = false


// blue piece wants to move foarwad and to the right this is the fucntion to test if the piece is currently hidden
//the piece dirrectly to the right will always be -7 away from the slected when blue is moveing forward 
function checkForOpenSpotsNoJumps(){

    if(turn === 0 ){
        if(allPieces[activatedPiece].classList.contains('blueKing')){
            console.log("We are in function checkForOpemSpotsNoJumps and the activateied piece is king ",allPieces[activatedPiece] )
            // console.log("parseInt(activatedPiece) equals ", parseInt(activatedPiece))
            // console.log("parseInt(activatedPiece) is ", (typeof parseInt(activatedPiece)))
            // console.log("(topRow.some == parseInt(activatedPiece))", (topRow.some(num => num == parseInt(activatedPiece))))
            // console.log("(topRowPlus8.some == parseInt(activatedPiece)) ", (topRowPlus8.some(num => num == parseInt(activatedPiece))))
            // console.log("(bottomRow.some == parseInt(activatedPiece))", (bottomRow.some(num => num == parseInt(activatedPiece))))
            // console.log("(bottomRowPlus55.some == parseInt(activatedPiece))",(bottomRowPlus55.some(num => num == parseInt(activatedPiece))))
            if( (topRow.some(num => num == parseInt(activatedPiece)) == false) && allPieces[activatedPiece-7].classList.contains('hidden'))
            {
                allPieces[activatedPiece-7].classList.add("PieceYouCanMoveTo")
                rightForwardOpenPieceUP = allPieces[activatedPiece-7].id
                //console.log(`The piece to the Forward Right is open `,rightForwardOpenPieceUP)
                console.log(`The piece to the Forward Right is open `,allPieces[rightForwardOpenPieceUP])
                //return true
            }
            if( (topRowPlus8.some(num => num == parseInt(activatedPiece))== false) && allPiecesClassContFunc(-9 ,"hidden") )
                {
                    allPieces[activatedPiece-9].classList.add("PieceYouCanMoveTo")
                    leftForwardOpenPieceUp = allPieces[activatedPiece-9].id
                    //console.log(`The piece to the Forward left is open`,leftForwardOpenPieceUp)
                    console.log(`The piece to the Forward left is open`,allPieces[leftForwardOpenPieceUp])
                    //return true
                }
            if( (bottomRow.some(num => num == parseInt(activatedPiece)) == false) && allPiecesClassContFunc(7 ,"hidden"))
                {
                    allPieces[parseInt(activatedPiece)+7].classList.add("PieceYouCanMoveTo")
                rightForwardOpenPieceDown = allPieces[parseInt(activatedPiece)+7].id
                    //console.log(`The piece to the Forward Right is open `,rightForwardOpenPieceDown)
                    console.log(`The piece to the Forward Right is open `,allPieces[rightForwardOpenPieceDown])
                    
                }
            if( (bottomRowPlus55.some(num => num == parseInt(activatedPiece)) == false) && allPiecesClassContFunc(9 ,"hidden") )
                {
                    allPieces[parseInt(activatedPiece)+9].classList.add("PieceYouCanMoveTo")
                leftForwardOpenPieceDown = allPieces[parseInt(activatedPiece)+9].id
                    //console.log(`The piece Down and left is open`,leftForwardOpenPieceDown)
                    console.log(`The piece Down and left is open`,allPieces[leftForwardOpenPieceDown])
                } 
        }

        else{
            if(allPieces[activatedPiece-7].classList.contains('hidden'))
                {
                    allPieces[activatedPiece-7].classList.add("PieceYouCanMoveTo")
                rightForwardOpenPieceUP = allPieces[activatedPiece-7].id
                    //console.log(`The piece to the Forward Right is open `,rightForwardOpenPieceUP)
                    console.log(`The piece to the Forward Right is open `,allPieces[rightForwardOpenPieceUP])
                    
                }
// blue piece wants to move foarwad and to the left this is the function to test if the piece is currently hidden
//the piece dirrectly to the left will always be -7 away from the slected when bblue is moveing forward 
            if(parseInt(activatedPiece) != 8 && allPiecesClassContFunc(-9 ,"hidden"))
                {
                    allPieces[activatedPiece-9].classList.add("PieceYouCanMoveTo")
                leftForwardOpenPieceUp = allPieces[activatedPiece-9].id
                    //console.log(`The piece to the Forward left is open`,leftForwardOpenPieceUp)
                    console.log(`The piece to the Forward left is open`,allPieces[leftForwardOpenPieceUp])
                   
                }
        }
    }
// red piece wants to move foarwad and to the right this is the function to test if the piece is currently hidden
//the piece dirrectly to the right will always be +7 away from the slected when bblue is moveing forward
    if(turn === 1 ){
        if(allPieces[activatedPiece].classList.contains('redKing')){
            // console.log("We are in function checkForOpemSpotsNoJumps and the activateied piece is king ",allPieces[activatedPiece] )
            // console.log("parseInt(activatedPiece) equals ", parseInt(activatedPiece))
            // console.log("parseInt(activatedPiece) is ", (typeof parseInt(activatedPiece)))
            // console.log("(topRow.some == parseInt(activatedPiece))", (topRow.some(num => num == parseInt(activatedPiece))))
            // console.log("(topRowPlus8.some == parseInt(activatedPiece)) ", (topRowPlus8.some(num => num == parseInt(activatedPiece))))
            // console.log("(bottomRow.some == parseInt(activatedPiece))", (bottomRow.some(num => num == parseInt(activatedPiece))))
            // console.log("(bottomRowPlus55.some == parseInt(activatedPiece))",(bottomRowPlus55.some(num => num == parseInt(activatedPiece))))
            if( (topRow.some(num => num == parseInt(activatedPiece)) == false) && allPiecesClassContFunc( -7 ,"hidden"))
                {
                    allPieces[activatedPiece-7].classList.add("PieceYouCanMoveTo")
                rightForwardOpenPieceUP = allPieces[activatedPiece-7].id
                    //console.log(`The piece to the Forward Right is open `,rightForwardOpenPieceUP)
                    console.log(`The piece to the Forward Right is open `,allPieces[rightForwardOpenPieceUP])
                    
                }
            if( (topRowPlus8.some(num => num == parseInt(activatedPiece))== false) && allPiecesClassContFunc(-9 ,"hidden") )
                {
                    allPieces[activatedPiece-9].classList.add("PieceYouCanMoveTo")
                leftForwardOpenPieceUp = allPieces[activatedPiece-9].id
                    //console.log(`The piece to the Forward left is open`,leftForwardOpenPieceUp)
                    console.log(`The piece to the Forward left is open`,allPieces[leftForwardOpenPieceUp])
                    
                }
            if( (bottomRow.some(num => num == parseInt(activatedPiece)) == false) && allPiecesClassContFunc(7 ,"hidden"))
                {
                    allPieces[parseInt(activatedPiece)+7].classList.add("PieceYouCanMoveTo")
                rightForwardOpenPieceDown = allPieces[parseInt(activatedPiece)+7].id
                    //console.log(`The piece to the Forward Right is open `,rightForwardOpenPieceDown)
                    console.log(`The piece to the Forward Right is open `,allPieces[rightForwardOpenPieceDown])
                    
                }
            if( (bottomRowPlus55.some(num => num == parseInt(activatedPiece)) == false) && allPiecesClassContFunc(9 ,"hidden") )
                {
                    allPieces[parseInt(activatedPiece)+9].classList.add("PieceYouCanMoveTo")
                leftForwardOpenPieceDown = allPieces[parseInt(activatedPiece)+9].id
                    //console.log(`The piece Down and left is open`,leftForwardOpenPieceDown)
                    console.log(`The piece Down and left is open`,allPieces[leftForwardOpenPieceDown])
                
                }
        }

        
        else{
            if(allPiecesClassContFunc(7 ,"hidden"))
                {
                    allPieces[parseInt(activatedPiece)+7].classList.add("PieceYouCanMoveTo")
                rightForwardOpenPieceDown = allPieces[parseInt(activatedPiece)+7].id
                    //console.log(`The piece to the Forward Right is open `,rightForwardOpenPieceDown)
                    console.log(`The piece to the Forward Right is open `,allPieces[rightForwardOpenPieceDown])
                    //return true
            }
// red piece wants to move foarwad and to the left this is the fucntion to test if the piece is currently hidden
//the piece dirrectly to the left will always be +9 away from the slected when bblue is moveing forward 
            if(parseInt(activatedPiece) != 55 && allPiecesClassContFunc(9 ,"hidden") )
                {
                    allPieces[parseInt(activatedPiece)+9].classList.add("PieceYouCanMoveTo")
                leftForwardOpenPieceDown = allPieces[parseInt(activatedPiece)+9].id
                    //console.log(`The piece Down and left is open`,leftForwardOpenPieceDown)
                    console.log(`The piece Down and left is open`,allPieces[leftForwardOpenPieceDown])
                    //return true
                }
        }
    }
    // clickWhereWeWantToMove = document.querySelectorAll(".PieceYouCanMoveTo")
    //     clickWhereWeWantToMove.forEach(clickWeWantToMove=>{
    //         clickWeWantToMove.addEventListener("click", movePiece)
    //     })

    //trying to run this eventlistener at the end of checkforjumps
    checkForJumps()
}


//function to clear and reset classes after a piece is moved
// this is only for single movements forward going to make seprate function for jumps
function resestAfterPieceIsMoved(){
    
    if(turn == 0 && allPieces[activatedPiece].classList.contains("bluePiece")){
       
        allPieces[spotWeWantToMoveTO].classList.add("bluePiece")
        allPieces[spotWeWantToMoveTO].classList.remove("hidden")
        allPieces[activatedPiece].classList.remove("bluePiece")
        checkForKings()
        pieceCount()
        }

    else if(turn == 0 && allPieces[activatedPiece].classList.contains("blueKing")){
       
            allPieces[spotWeWantToMoveTO].classList.add("blueKing")
            allPieces[spotWeWantToMoveTO].classList.remove("hidden")
            allPieces[activatedPiece].classList.remove("blueKing")
            checkForKings()
            pieceCount()
            }


    else if(turn == 1 && allPieces[activatedPiece].classList.contains("redPiece")){
                allPieces[spotWeWantToMoveTO].classList.add("redPiece")
                allPieces[spotWeWantToMoveTO].classList.remove("hidden")
                allPieces[activatedPiece].classList.remove("redPiece")
                checkForKings()
                pieceCount()
                }
    else if(turn == 1 && allPieces[activatedPiece].classList.contains("redKing") ){
       
        allPieces[spotWeWantToMoveTO].classList.add("redKing")
        allPieces[spotWeWantToMoveTO].classList.remove("hidden")
        allPieces[activatedPiece].classList.remove("redKing")
        checkForKings()
        pieceCount()
        }


    clickWhereWeWantToMove.forEach(whereWeWantToMove=>{
        whereWeWantToMove.removeEventListener("click", movePiece)
        whereWeWantToMove.classList.remove("PieceYouCanMoveTo")
    })

    allPieces[activatedPiece].classList.remove("activatedPiece")
    allPieces[activatedPiece].classList.add("hidden")
    rightForwardOpenPieceUP = 0
    leftForwardOpenPieceUp = 0
    rightForwardOpenPieceDown = 0
    leftForwardOpenPieceDown = 0
    rightForwardUPJump = 0
    leftForwardUPJump = 0
    rightForwardDownJump = 0
    leftForwardDownJump= 0
    spotWeWantToMoveTO = 0
    winGameFunc()
}


//Write function to move to identified pieces // no jumps yet
function movePiece(event){
    
    spotWeWantToMoveTO = event.target.id
    console.log(`The spot you want to move to is ${spotWeWantToMoveTO}`,allPieces[spotWeWantToMoveTO])
    //move to rightForwardOpenPieceUP
    if(spotWeWantToMoveTO == rightForwardOpenPieceUP && allPieces[rightForwardOpenPieceUP].classList.contains("PieceYouCanMoveTo")){
        console.log(`You Want to move to spot${rightForwardOpenPieceUP}`, allPieces[rightForwardOpenPieceUP])
        
        resestAfterPieceIsMoved()
    }
    //move to rightForwardOpenPieceUP
    if(spotWeWantToMoveTO == leftForwardOpenPieceUp  && allPieces[leftForwardOpenPieceUp].classList.contains("PieceYouCanMoveTo")){
        console.log(`You Want to move to spot${leftForwardOpenPieceUp }`, allPieces[leftForwardOpenPieceUp])
        
        resestAfterPieceIsMoved()
    }
    //move to rightForwardOpenPieceUP
    if(spotWeWantToMoveTO == rightForwardOpenPieceDown && allPieces[rightForwardOpenPieceDown].classList.contains("PieceYouCanMoveTo")){
        console.log(`You Want to move to spot${rightForwardOpenPieceDown}`, allPieces[rightForwardOpenPieceDown])
        
        resestAfterPieceIsMoved()
    }
    //move to rightForwardOpenPieceUP
    if(spotWeWantToMoveTO == leftForwardOpenPieceDown && allPieces[leftForwardOpenPieceDown].classList.contains("PieceYouCanMoveTo")){
        console.log(`You Want to move to spot${leftForwardOpenPieceDown}`, allPieces[leftForwardOpenPieceDown])
        
        resestAfterPieceIsMoved()
    }
    singleJumpMovePiece()
}

//Function to check for avaliable jump spaces
//working on only single jumps at the moment / similair logic should apply from the checkForOpenSpotsNoJumps function
// jump forward left up will be (id - 18) forward right up (id - 14)
// jump forward left up will be (id + 18) forward right up (id + 14)
let bottomTwoRowsPlus40 = [40,49,51,53,55,56,58,60,62]
let bottomTwoRowsPlus46 = [46,49,51,53,55,56,58,60,62]
let topTwoRowsPlus23 = [1,3,5,7,8,10,12,14,23]
let topTwoRowsPlus17  =[1,3,5,7,8,10,12,14,17]
let NoJumpsAvaliable 
function checkForJumps(){

    console.log("Currently activatied piece" ,activatedPiece)
    if(turn === 0 && allPieces[activatedPiece].classList.contains('blueKing')){
            
                // console.log("We are in function checkForOpemSpotsNoJumps and the activateied piece is king ",allPieces[activatedPiece] )
                // console.log("parseInt(activatedPiece) equals ", parseInt(activatedPiece))
                // console.log("parseInt(activatedPiece) is ", (typeof parseInt(activatedPiece)))
                // console.log("(topRow.some == parseInt(activatedPiece))", (topRow.some(num => num == parseInt(activatedPiece))))
                // console.log("(topRowPlus8.some == parseInt(activatedPiece)) ", (topRowPlus8.some(num => num == parseInt(activatedPiece))))
                // console.log("(bottomRow.some == parseInt(activatedPiece))", (bottomRow.some(num => num == parseInt(activatedPiece))))
                // console.log("(bottomRowPlus55.some == parseInt(activatedPiece))",(bottomRowPlus55.some(num => num == parseInt(activatedPiece))))
                if( (topTwoRowsPlus23.some(num => num == parseInt(activatedPiece)) == false) && allPiecesClassContFunc(-14 ,"hidden")&& (allPiecesClassContFunc(-7 ,"redPiece") || allPiecesClassContFunc(-7 ,"redKing")))
                    {
                        allPieces[activatedPiece-14].classList.add("PieceYouCanMoveTo")
                    rightForwardUPJump = allPieces[activatedPiece-14].id
                        console.log(`You can Jump to the Forward Right UP `,rightForwardUPJump)
                        console.log(`You can Jump to the Forward Right UP`,allPieces[rightForwardUPJump])
                        NoJumpsAvaliable = false
                    }
                if( (topTwoRowsPlus17.some(num => num == parseInt(activatedPiece))== false) && allPiecesClassContFunc(-18 ,"hidden")&& (allPiecesClassContFunc(-9 ,"redPiece")  || allPiecesClassContFunc(-9 ,"redKing")))
                    {
                        allPieces[activatedPiece-18].classList.add("PieceYouCanMoveTo")
                    leftForwardUPJump = allPieces[activatedPiece-18].id
                        console.log(`You can Jump to the Forward left UP`,leftForwardUPJump)
                        console.log(`You can Jump to the Forward left UP`,allPieces[leftForwardUPJump])
                        NoJumpsAvaliable = false
                    }
                if( (bottomTwoRowsPlus40.some(num => num == parseInt(activatedPiece)) == false) && allPiecesClassContFunc(14 ,"hidden")&& (allPiecesClassContFunc(7,"redPiece")  || allPiecesClassContFunc(7 ,"redKing")))
                    {
                        allPieces[parseInt(activatedPiece)+14].classList.add("PieceYouCanMoveTo")
                    rightForwardDownJump = allPieces[parseInt(activatedPiece)+14].id
                        console.log(`You can Jump to the Forward Right DOWN `,rightForwardDownJump)
                        console.log(`You can Jump to the Forward Right DOWN`,allPieces[rightForwardDownJump])
                        NoJumpsAvaliable = false
                    }
                if( (bottomTwoRowsPlus46.some(num => num == parseInt(activatedPiece)) == false) && allPiecesClassContFunc(18 ,"hidden")&& (allPiecesClassContFunc(9 ,"redPiece")  || allPiecesClassContFunc(9 ,"redKing")))
                    {
                        allPieces[parseInt(activatedPiece)+18].classList.add("PieceYouCanMoveTo")
                    leftForwardDownJump = allPieces[parseInt(activatedPiece)+18].id
                        console.log(`You can Jump to the Forward left DOWN`,leftForwardDownJump)
                        console.log(`You can Jump to the Forward left DOWN`,allPieces[leftForwardDownJump])
                        NoJumpsAvaliable = false
                    }

                
    }

        
        else if(turn === 0  && activatedPiece > 15){
                if(allPieces[activatedPiece-14].classList.contains('hidden') && parseInt(activatedPiece) > 15 && (allPiecesClassContFunc(-7 ,"redPiece")  || allPiecesClassContFunc(-7 ,"redKing")) )
                    {
                        allPieces[activatedPiece-14].classList.add("PieceYouCanMoveTo")
                        rightForwardUPJump = allPieces[activatedPiece-14].id
                        console.log(`You can Jump to the Forward Right UP `,rightForwardUPJump)
                        console.log(`You can Jump to the Forward Right UP`,allPieces[rightForwardUPJump])
                        NoJumpsAvaliable = false
                    }
// blue piece wants to Jump forward and to the left this is the fucntion to test if the piece is currently hidden
                if(parseInt(activatedPiece) != 17 && allPieces[activatedPiece-18].classList.contains('hidden')&& parseInt(activatedPiece)> 15 && (allPiecesClassContFunc(-9 ,"redPiece")  || allPiecesClassContFunc(-9 ,"redKing")))
                    {
                        allPieces[activatedPiece-18].classList.add("PieceYouCanMoveTo")
                        leftForwardUPJump = allPieces[activatedPiece-18].id
                        console.log(`You can Jump to the Forward left UP`,leftForwardUPJump)
                        console.log(`You can Jump to the Forward left UP`,allPieces[leftForwardUPJump])
                        NoJumpsAvaliable = false
                    }
            }
            // else {
            //     console.log("No Jumps avaliable")
            //     NoMovesAvaliablefunc()
            //     //return false
            // }
        
// red piece wants to Jump forward and to the right this is the function to test if the piece is currently hidden
    if(turn === 1 && allPieces[activatedPiece].classList.contains('redKing')){
            
        // console.log("We are in function checkForOpemSpotsNoJumps and the activateied piece is king ",allPieces[activatedPiece] )
        // console.log("parseInt(activatedPiece) equals ", parseInt(activatedPiece))
        // console.log("parseInt(activatedPiece) is ", (typeof parseInt(activatedPiece)))
        // console.log("(topRow.some == parseInt(activatedPiece))", (topRow.some(num => num == parseInt(activatedPiece))))
        // console.log("(topRowPlus8.some == parseInt(activatedPiece)) ", (topRowPlus8.some(num => num == parseInt(activatedPiece))))
        // console.log("(bottomRow.some == parseInt(activatedPiece))", (bottomRow.some(num => num == parseInt(activatedPiece))))
        // console.log("(bottomRowPlus55.some == parseInt(activatedPiece))",(bottomRowPlus55.some(num => num == parseInt(activatedPiece))))
        if( (topTwoRowsPlus23.some(num => num == parseInt(activatedPiece)) == false) && allPiecesClassContFunc(-14 ,"hidden")&& (allPiecesClassContFunc(-7 ,"bluePiece")  || allPiecesClassContFunc(-7 ,"blueKing")))
            {
                allPieces[activatedPiece-14].classList.add("PieceYouCanMoveTo")
            rightForwardUPJump = allPieces[activatedPiece-14].id
                console.log(`You can Jump to the Forward Right UP `,rightForwardUPJump)
                console.log(`You can Jump to the Forward Right UP`,allPieces[rightForwardUPJump])
                NoJumpsAvaliable = false
            }
        if( (topTwoRowsPlus17.some(num => num == parseInt(activatedPiece))== false) && allPiecesClassContFunc(-18 ,"hidden")&& (allPiecesClassContFunc(-9 ,"bluePiece")  || allPiecesClassContFunc(-9 ,"blueKing")))
            {
                allPieces[activatedPiece-18].classList.add("PieceYouCanMoveTo")
            leftForwardUPJump = allPieces[activatedPiece-18].id
                console.log(`You can Jump to the Forward left UP`,leftForwardUPJump)
                console.log(`You can Jump to the Forward left UP`,allPieces[leftForwardUPJump])
                NoJumpsAvaliable = false
            }
        if( (bottomTwoRowsPlus40.some(num => num == parseInt(activatedPiece)) == false) && allPiecesClassContFunc(14 ,"hidden")&& (allPiecesClassContFunc(7 ,"bluePiece")  || allPiecesClassContFunc(7 ,"blueKing")))
            {
                allPieces[parseInt(activatedPiece)+14].classList.add("PieceYouCanMoveTo")
            rightForwardDownJump = allPieces[parseInt(activatedPiece)+14].id
                console.log(`You can Jump to the Forward Right DOWN `,rightForwardDownJump)
                console.log(`You can Jump to the Forward Right DOWN`,allPieces[rightForwardDownJump])
                NoJumpsAvaliable = false
            }
        if( (bottomTwoRowsPlus46.some(num => num == parseInt(activatedPiece)) == false) && allPiecesClassContFunc(18 ,"hidden")&& (allPiecesClassContFunc(9 ,"bluePiece")  || allPiecesClassContFunc(9 ,"blueKing")))
            {
                allPieces[parseInt(activatedPiece)+18].classList.add("PieceYouCanMoveTo")
            leftForwardDownJump = allPieces[parseInt(activatedPiece)+18].id
                console.log(`You can Jump to the Forward left DOWN`,leftForwardDownJump)
                console.log(`You can Jump to the Forward left DOWN`,allPieces[leftForwardDownJump])
                NoJumpsAvaliable = false
            }

    }

    
        else if(turn === 1 && activatedPiece < 48  ){
            if(allPieces[parseInt(activatedPiece)+14].classList.contains('hidden')&& parseInt(activatedPiece) < 48 && (allPiecesClassContFunc(7 ,"bluePiece")  || allPiecesClassContFunc(7 ,"blueKing")))
                {
                    allPieces[parseInt(activatedPiece)+14].classList.add("PieceYouCanMoveTo")
                    rightForwardDownJump = allPieces[parseInt(activatedPiece)+14].id
                    console.log(`You can Jump to the Forward Right DOWN `,rightForwardDownJump)
                    console.log(`You can Jump to the Forward Right DOWN`,allPieces[rightForwardDownJump])
                    NoJumpsAvaliable = false
                }
    // red piece wants to Jump foarwad and to the left this is the fucntion to test if the piece is currently hidden
            if(parseInt(activatedPiece) != 46 && allPieces[parseInt(activatedPiece)+18].classList.contains('hidden')&& parseInt(activatedPiece) < 48 && (allPiecesClassContFunc(9 ,"bluePiece")  || allPiecesClassContFunc(9 ,"blueKing")))
                {
                    allPieces[parseInt(activatedPiece)+18].classList.add("PieceYouCanMoveTo")
                    leftForwardDownJump = allPieces[parseInt(activatedPiece)+18].id
                    console.log(`You can Jump to the Forward left DOWN`,leftForwardDownJump)
                    console.log(`You can Jump to the Forward left DOWN`,allPieces[leftForwardDownJump])
                    NoJumpsAvaliable = false
                }
        }


        clickWhereWeWantToMove = document.querySelectorAll(".PieceYouCanMoveTo")
        clickWhereWeWantToMove.forEach(clickWeWantToMove=>{
            clickWeWantToMove.addEventListener("click", movePiece)
        })
        
        //console.log(clickWhereWeWantToMove.length)
        //console.log(clickWhereWeWantToMove)

    if (clickWhereWeWantToMove.length == 0){
        console.log("No Jumps avaliable")
        NoMovesAvaliablefunc()
        //return false
    }
    console.log(rightForwardUPJump, leftForwardUPJump , rightForwardDownJump , leftForwardDownJump)
    if(rightForwardUPJump == 0 && leftForwardUPJump == 0 && rightForwardDownJump == 0 && leftForwardDownJump==0) 
    {noOpenJumps = true}
    else{noOpenJumps = false}

    
}


// now we need a function to change atrribuites of when piece is jumped
//going to try to pass fucntion to bottom of movePiece function instead of adding in additonal iff conditions

function singleJumpMovePiece(){
    console.log(`The spot you want to Jump to is ${spotWeWantToMoveTO}`,allPieces[spotWeWantToMoveTO])
    //move to rightForwardOpenPieceUP
    if(spotWeWantToMoveTO == rightForwardUPJump && allPieces[rightForwardUPJump].classList.contains("PieceYouCanMoveTo")){
        console.log(`You Want to move to spot${rightForwardUPJump}`, allPieces[rightForwardUPJump])
        pieceWeSingleJumped = allPieces[activatedPiece-7].id
        console.log("pieceWeSingleJumped",allPieces[pieceWeSingleJumped])
        
        resestAfterPieceIsJumpedSingle()
    }
    //move to rightForwardOpenPieceUP
    if(spotWeWantToMoveTO == leftForwardUPJump  && allPieces[leftForwardUPJump].classList.contains("PieceYouCanMoveTo")){
        console.log(`You Want to move to spot${leftForwardUPJump}`, allPieces[leftForwardUPJump])
        pieceWeSingleJumped = allPieces[activatedPiece-9].id
        console.log("pieceWeSingleJumped",allPieces[pieceWeSingleJumped])
        
        resestAfterPieceIsJumpedSingle()
    }
    //move to rightForwardOpenPieceUP
    if(spotWeWantToMoveTO == rightForwardDownJump  && allPieces[rightForwardDownJump].classList.contains("PieceYouCanMoveTo")){
        console.log(`You Want to move to spot${rightForwardDownJump}`, allPieces[rightForwardDownJump])
        pieceWeSingleJumped = allPieces[parseInt(activatedPiece)+7].id
        console.log("pieceWeSingleJumped",allPieces[pieceWeSingleJumped])
        
        resestAfterPieceIsJumpedSingle()
    }
    //move to rightForwardOpenPieceUP
    if(spotWeWantToMoveTO == leftForwardDownJump && allPieces[leftForwardDownJump].classList.contains("PieceYouCanMoveTo")){
        console.log(`You Want to move to spot${leftForwardDownJump}`, allPieces[leftForwardDownJump])
        pieceWeSingleJumped = allPieces[parseInt(activatedPiece)+9].id
        console.log("pieceWeSingleJumped",allPieces[pieceWeSingleJumped])
        
        resestAfterPieceIsJumpedSingle()
    }
}

//reset after piece is jumped
// we need to find what piece is being jumped first...
function resestAfterPieceIsJumpedSingle(){
    console.log("Piece We jumped to allPieces[spotWeWantToMoveTO] in resetPieceAfter jump func",allPieces[spotWeWantToMoveTO])
    console.log("Trying to run check for double Jumps func")

        if(turn == 0 && allPieces[activatedPiece].classList.contains("bluePiece")){
           cleanInnerSingleJumpFunc("bluePiece","redKing","redPiece")
        }     
        
        else if(turn == 0 && allPieces[activatedPiece].classList.contains("blueKing")){
            cleanInnerSingleJumpFunc("blueKing","redKing","redPiece") 
        }

        else if(turn == 1 && allPieces[activatedPiece].classList.contains("redPiece")){
            
            cleanInnerSingleJumpFunc("redPiece","blueKing","bluePiece")
        }
        else if(turn == 1 && allPieces[activatedPiece].classList.contains("redKing")){

            cleanInnerSingleJumpFunc("redKing","blueKing","bluePiece")
            
        }

                if (noOpenJumps == false){
                    clickWhereWeWantToMove.forEach(whereWeWantToMove=>{
                        whereWeWantToMove.removeEventListener("click", movePiece)
                        whereWeWantToMove.classList.remove("PieceYouCanMoveTo")
                    })
                activatedPiece = spotWeWantToMoveTO
                allPieces[activatedPiece].classList.add("activatedPiece")
                checkForDoubleJumps()
                }

                else if (noOpenJumps == true){
                    checkForKings()
                    pieceCount()

                    clickWhereWeWantToMove.forEach(whereWeWantToMove=>{
                        whereWeWantToMove.removeEventListener("click", movePiece)
                        whereWeWantToMove.classList.remove("PieceYouCanMoveTo")
                    })
                    allPieces[activatedPiece].classList.remove("activatedPiece")
                    noOpenJumps = false
                    winGameFunc()
                }

        pieceCount()
           
}

function NoMovesAvaliablefunc(){
    //NoJumpsAvaliable = true
    console.log(clickWhereWeWantToMove)
    checkForKings()
    pieceCount()

    clickWhereWeWantToMove.forEach(whereWeWantToMove=>{
        whereWeWantToMove.removeEventListener("click", movePiece)
        whereWeWantToMove.classList.remove("PieceYouCanMoveTo")
    })
    allPieces[activatedPiece].classList.remove("activatedPiece")
    noOpenJumps = false
    winGameFunc()
}

// keep count of pieces removed and remaining / should just be redPiece and bluePiece .length at each turn change

function pieceCount(){
    bluePieces = document.querySelectorAll(".bluePiece")
    redPieces = document.querySelectorAll(".redPiece")
    blueKings = document.querySelectorAll(".blueKing")
    redKings = document.querySelectorAll(".redKing")
    document.getElementById("BluePieceCount").innerText = `Blue Piece Count: ${bluePieces.length+blueKings.length}`
    document.getElementById("RedPieceCount").innerText = `Red Piece Count: ${redPieces.length+redKings.length}`
}

//Need win condition for when all pieces of a color are removed
//Need to add logic for when player has no moves leftbut pieces.length > 0 
function winGameFunc(){
    
    if (bluePieces.length+blueKings.length == 0){
        console.log("Red Wins")
        
    } 
    if (redPieces.length+redKings.length == 0){
        console.log("Blue Wins")
        
    }
    
    changeWhosTurn()
}


// making Kings when blue is on 1,3,5,7 and red is on 56,58,60,62

function checkForKings(){

    if(allPieces[1].classList.contains("bluePiece") || allPieces[3].classList.contains("bluePiece")|| allPieces[5].classList.contains("bluePiece")|| allPieces[7].classList.contains("bluePiece")){
        console.log("Make Blue Piece King",allPieces[spotWeWantToMoveTO])
        allPieces[spotWeWantToMoveTO].classList.add("blueKing")
        allPieces[spotWeWantToMoveTO].classList.remove("bluePiece")
    }
    if(allPieces[56].classList.contains("redPiece") || allPieces[58].classList.contains("redPiece")|| allPieces[60].classList.contains("redPiece")|| allPieces[62].classList.contains("redPiece")){
        console.log("Make Red Piece King",allPieces[spotWeWantToMoveTO])
        allPieces[spotWeWantToMoveTO].classList.add("redKing")
        allPieces[spotWeWantToMoveTO].classList.remove("redPiece")
    }
    
}

function checkForDoubleJumps(){
    //console.log("We printed from inside check for double Jumps func")
    
    //console.log("We printed from inside check for double Jumps func spotWeWantToMoveTO",spotWeWantToMoveTO)
    //console.log("We printed from inside check for double Jumps func activatedPiece",activatedPiece)
    console.log("We printed from inside check for double Jumps func spotWeWantToMoveTO",allPieces[spotWeWantToMoveTO])
    console.log("We printed from inside check for double Jumps func activatedPiece",allPieces[activatedPiece])
    noOpenJumps = false
    //checkedForDoubleJumps = true
    checkForJumps()
    //console.log(checkForJumps())
    //return false
}


////////
//////
//// functions to shorten code 

function allPiecesClassContFunc(num, pieceClass){
    return allPieces[parseInt(activatedPiece)+num].classList.contains(pieceClass)
}

function cleanInnerSingleJumpFunc(classWeAre,oppKing,oppPiece){
    console.log("pieceWeSingleJumped",pieceWeSingleJumped)
allPieces[spotWeWantToMoveTO].classList.add(classWeAre)
allPieces[spotWeWantToMoveTO].classList.remove("hidden")
console.log(allPieces[spotWeWantToMoveTO])
    if(allPieces[pieceWeSingleJumped].classList.contains(oppKing)){
        allPieces[pieceWeSingleJumped].classList.remove(oppKing)
        allPieces[pieceWeSingleJumped].classList.add("hidden")
    }
    else{
    allPieces[pieceWeSingleJumped].classList.remove(oppPiece)
    allPieces[pieceWeSingleJumped].classList.add("hidden")
    }
allPieces[activatedPiece].classList.remove(classWeAre)
allPieces[activatedPiece].classList.remove("activatedPiece")
allPieces[activatedPiece].classList.add("hidden")
}