(function (doc, win) {
    "use strict"


    function initModule () {
        setKeyboards()
        if (window.Reveal.registerKeyboardShortcut) {
            Reveal.registerKeyboardShortcut('P', 'Print');
        }
    }

    function setKeyboards(params) {
        document.addEventListener('keydown', function (event) {
            if (event.keyCode === 80) {
                event.preventDefault()
                window.location = '//' +  window.location.host + window.location.pathname + '?print-pdf';
            }

            else if (event.keyCode === 77) {
                event.preventDefault()
                window.open("https://gitlab.adventiel.com/formation/git-adventiel-slides")
            }
        }, false )
    }


    initModule()
})(document, window)