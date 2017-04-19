
let timer = window.setTimeout(repeatNotes,8000);

function repeatNotes(note, timestamp) {
// console.log('coucou');
}



var nowInMilliseconds = new Date().getTime();

(function() {
    var firstClick;

    function clickHandler() {
        var now, duration;

        now = new Date().getTime();
        if (!firstClick) {
            // Remember the time of the first click
            firstClick = now;
                    console.log(firstClick);
        }
        else {
            // Second click; how long as it been?
            duration = now - firstClick;

        console.log(duration);
            // Reset so we're waiting for the first click again
            if (duration > 8000) {
              firstClick = undefined;
            }


        }
    }

    function pageLoad() {
        $('#button').click(clickHandler);
    }

    window.onload = pageLoad; // or jQuery.ready() or whatever
})();
