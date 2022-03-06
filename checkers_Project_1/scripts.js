const body = document.querySelector("body")
const chessBoardContainer = document.querySelector("#chessBoardContainer")

let allSqauresArry =[]
let darkSqauresArry =[]
let lightSqauresArry =[]
let allPiecesArray =[]
let useablePieceArray =[]

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
            useablePieceArray.push(b)
            allPieces[b].classList.add(`useablePiece#${b}`)
            allPieces[b].classList.add('useablePieces')
        }
        else if(j % 2 === 0 && i % 2 != 0 )
        {
            useablePieceArray.push(b)
            allPieces[b].classList.add(`useablePiece#${b}`)
            allPieces[b].classList.add('useablePieces')
        }
        else{
            useablePieceArray.push(b)
            allPieces[b].classList.add(`nullPiece#${b}`)
            allPieces[b].classList.add('nullPiece') 
        }
        
    }
}


//setting up starting positions
//indentifying all activePieces
let allUseablePieces = document.querySelectorAll(`.useablePieces`)
allUseablePieces.forEach(UseablePiece=>{console.log(UseablePiece)})

for(i =0; i <= allPieces.length-1 ; i ++){
    

    if(i== 1||i== 3||i== 5|| i== 7 || i== 8||i==10||i==12|| i==14 ||i== 17||i==19||i==21|| i==23){
        allPieces[i].classList.add("pieceON")
        allPieces[i].classList.add("redPiece")
    }
    else if(i== 40||i== 42||i== 44|| i== 46 || i== 49||i==51||i==53|| i==55 ||i== 56||i==58||i==60|| i==62){
        allPieces[i].classList.add("pieceON")
        allPieces[i].classList.add("bluePiece")
        }
        
    else{
        allPieces[i].classList.add("pieceOFF")
        allPieces[i].classList.add("hidden")
    }
}
let allnullPieces = document.querySelectorAll(`.nullPiece`)
allnullPieces.forEach(nullPiece=>{
    nullPiece.classList.remove("hidden")
})

//////////////////////////////////////////////////////////////////////////////////


