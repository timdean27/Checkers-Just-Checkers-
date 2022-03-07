const body = document.querySelector("body")
const chessBoardContainer = document.querySelector("#chessBoardContainer")

let allSqauresArry =[]
let darkSqauresArry =[]
let lightSqauresArry =[]
let allPiecesArray =[]
let nullPieceArray =[]
let PotentialyUseablePieceArray =[]

for(let i =0 ; i <= 64-1 ; i ++){
    let makeSquare = document.createElement('div')
        makeSquare.classList.add('square')
        makeSquare.setAttribute("id",`SQ${i}`)
        makeSquare.innerText= `${i}`
        allSqauresArry.push(i)
        chessBoardContainer.appendChild(makeSquare)
}
let allSquares = document.querySelectorAll('.square')

let a = -1
for(let i =0 ; i <= 7 ; i ++){
    
    for(let j =0 ; j <= 7 ; j ++){
        a = a+1
        if(j % 2 != 0 && i % 2 === 0){
            darkSqauresArry.push(a)
            allSquares[a].classList.add(`darkSQaure#${a}`)
            allSquares[a].classList.add('darkSQaures')
        }
        else if(j % 2 === 0 && i % 2 != 0 )
        {
            darkSqauresArry.push(a)
            allSquares[a].classList.add(`darkSQaure#${a}`)
            allSquares[a].classList.add('darkSQaures')
        }
        else{
            lightSqauresArry.push(a)
            allSquares[a].classList.add(`lightSQaure#${a}`)
            allSquares[a].classList.add('lightSQaures') 
        }
        
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
        allPiecesArray.push(i)
        allSquares[i].appendChild(makePiece)
}
let allPieces = document.querySelectorAll('.pieces')

let b = -1
for(let i =0 ; i <= 7 ; i ++){
    
    for(let j =0 ; j <= 7 ; j ++){
        b = b+1
        if(j % 2 != 0 && i % 2 === 0){
            
            PotentialyUseablePieceArray.push(b)
            //allPieces[b].classList.add(`PotentialyUseablePiece#${b}`)
            allPieces[b].classList.add('PotentialyUseablePieces')
        }
        else if(j % 2 === 0 && i % 2 != 0 )
        {
            
            PotentialyUseablePieceArray.push(b)
            //allPieces[b].classList.add(`PotentialyUseablePiece#${b}`)
            allPieces[b].classList.add('PotentialyUseablePieces')
        }
        else{
            
            nullPieceArray.push(b)
            //allPieces[b].classList.add(`nullPiece#${b}`)
            allPieces[b].classList.add('nullPiece') 
        }
        
    }
}


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
//Working on piece movement logic 



//first click
//activativng blue piece, this click should contain the test fucntions
// returning true for all availiable movements 
let BluePieces = document.querySelectorAll(".bluePiece")
BluePieces.forEach(BluePiece=>{
    BluePiece.addEventListener("click",BluePieceYouWantToMove)
    console.log(BluePiece)
})

function BluePieceYouWantToMove(event){
    activatedBluePiece = event.target.id
    allPieces[activatedBluePiece].classList.add("activatedBluePiece")
    console.log(`Activated Piece ID`,activatedBluePiece)
    console.log(`Activated Piece`,allPieces[activatedBluePiece])
    checkblueForwardRight()
    checkblueForwardLeft()
    console.log(checkblueForwardRight())
    console.log(checkblueForwardLeft())

    //second click
    //We are clicking the piece we want to move to we should only be able to click the purple peices with class PieceYouCanMoveTo
            let piecesYouCanMoveTo = document.querySelectorAll(".PieceYouCanMoveTo")
            piecesYouCanMoveTo.forEach(pieceYouCanMoveTo=>{
                pieceYouCanMoveTo.addEventListener("click",PieceWeWantToMoveToFunc)
                console.log("This is a piece you can move to ",pieceYouCanMoveTo)
            })

            function PieceWeWantToMoveToFunc(event){
                let selcetedPiecetomoveto = event.target.id
                console.log(`The piece to the Forwar Right is open`,rightForwardOpenPiece)
                console.log("You want to move to this piece",selcetedPiecetomoveto)

                    //moveing to forward right piece
                    if(selcetedPiecetomoveto == rightForwardOpenPiece && checkblueForwardRight() ==true){
                                            //add back hidden to activatedBluePiece and remove class "activatedBluePiece"
                                            allPieces[activatedBluePiece].classList.add('hidden')
                                            allPieces[activatedBluePiece].classList.remove("activatedBluePiece")
                                            allPieces[activatedBluePiece].classList.remove("bluePiece")
                                            //add back hidden to unselected piece and removing  ".PieceYouCanMoveTo"
                                            allPieces[leftForwardOpenPiece].classList.remove("PieceYouCanMoveTo")
                                            //add class "bluePiece" to the new piece we are moving to and remove hidden and ".PieceYouCanMoveTo"
                                            allPieces[rightForwardOpenPiece].classList.remove("hidden")
                                            allPieces[rightForwardOpenPiece].classList.remove("PieceYouCanMoveTo")
                                            allPieces[rightForwardOpenPiece].classList.add("bluePiece")

                                        }
                //moveing to forward left piece
                        else if(selcetedPiecetomoveto == leftForwardOpenPiece  && checkblueForwardLeft() == true){
                            //add back hidden to activatedBluePiece and remove class "activatedBluePiece"
                                    allPieces[activatedBluePiece].classList.add('hidden')
                                    allPieces[activatedBluePiece].classList.remove("activatedBluePiece")
                                    allPieces[activatedBluePiece].classList.remove("bluePiece")
                                    //add back hidden to unselected piece and removing  ".PieceYouCanMoveTo"
                                    allPieces[rightForwardOpenPiece].classList.remove("PieceYouCanMoveTo")
                                    //add class "bluePiece" to the new piece we are moving to and remove hidden and ".PieceYouCanMoveTo"
                                    allPieces[leftForwardOpenPiece].classList.remove("hidden")
                                    allPieces[leftForwardOpenPiece].classList.remove("PieceYouCanMoveTo")
                                    allPieces[leftForwardOpenPiece].classList.add("bluePiece")

                        }
                        else{
                            console.log("Cant move to that spot");
                        }

                        activatedBluePiece = ""

                        console.log(`Activated Piece ID`,activatedBluePiece)
                        console.log(`Activated Piece`,allPieces[activatedBluePiece])
            }

    
}



// blue piece wants to move foarwad and to the right this is the fucntion to test if the piece is currently hidden
//the piece dirrectly to the right will always be -7 away from the slected when bblue is moveing forward 
let rightForwardOpenPiece
function checkblueForwardRight(){
    if(allPieces[activatedBluePiece-7].classList.contains('hidden'))
    {
        allPieces[activatedBluePiece-7].classList.add("PieceYouCanMoveTo")
        rightForwardOpenPiece = allPieces[activatedBluePiece-7].id
        //console.log(`The piece to the Forwar Right is open`,allPieces[activatedBluePiece-7])
        return true
    }
    else{
        console.log("The piece to the Forwar Right is NOT open")
        return false
    }
}

// blue piece wants to move foarwad and to the left this is the fucntion to test if the piece is currently hidden
//the piece dirrectly to the left will always be -7 away from the slected when bblue is moveing forward 
let leftForwardOpenPiece
function checkblueForwardLeft(){
    if(allPieces[activatedBluePiece-9].classList.contains('hidden'))
    {
        allPieces[activatedBluePiece-9].classList.add("PieceYouCanMoveTo")
        leftForwardOpenPiece = allPieces[activatedBluePiece-9].id
        //console.log("The piece to the Forwar left is open",allPieces[activatedBluePiece-9])
        return true
    }
    else{
        console.log("The piece to the Forwar left is NOT open")
        return false
    }
}



