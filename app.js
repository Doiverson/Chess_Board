
(function (){
    let _cellBlack = '<div class="black"></div>',
        _cellWhite = '<div class="white"></div>';
    const MAX_CELL = 8;

    let _gridContainer = document.querySelector('#container');
    for(let j = 0; j < MAX_CELL; j++){
        for(let i = 0; i < MAX_CELL; i++){
            if((i+j) % 2 === 0){
                _gridContainer.insertAdjacentHTML('beforeend', _cellBlack);
            } else {
                _gridContainer.insertAdjacentHTML('beforeend', _cellWhite);
            }
        }
    }
})();