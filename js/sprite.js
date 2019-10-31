function createSprite(selector) {

    const $elemento = $(selector);

    const frames = [
        'frame1', 'frame2', 'frame3', 'frame4', 'frame5',
        'frame6', 'frame7', 'frame8', 'frame9'
    ];

    let atual = 0;

    const last = frames.length -1; 

    $elemento.addClass(frames[atual]);  

    function moveFrame (from, to) {

        $elemento.removeClass(from).addClass(to);
    };

    function hasNext() {

        return atual <= last;
    };

    function nextFrame() {

        if(hasNext()){
            moveFrame(frames[atual], frames[atual++]);

        };
    };

    function reset() {
        moveFrame(frames[atual],frames[0]);
        atual = 0;
        
    };

    function isFinished() {

        return atual + 1>= last;
        
    };

    return {
        nextFrame: nextFrame,
        reset: reset,
        isFinished: isFinished
    };
}

