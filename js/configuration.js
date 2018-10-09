Reveal.initialize({
    history: true,
    slideNumber: true,
    mouseWheel: true,
    dependencies: [
        {src: 'plugin/shortcuts/shortcuts.js'},
        { src: 'plugin/mouse-pointer/mouse-pointer.js'},
        { src: 'plugin/toolbar/toolbar.js', async: true },
        {src: 'plugin/markdown/marked.js'},
        {src: 'plugin/markdown/markdown.js'},
        {src: 'plugin/notes/notes.js', async: true},
        { src: 'plugin/reveal.js-menu/menu.js', async: true },
        {
            src: 'plugin/highlight/highlight.js', async: true, callback: function () {
                hljs.initHighlightingOnLoad();
            }
        }
    ],
    toolbar: {
        // Specifies where the toolbar will be shown: 'top' or 'bottom'
        position: 'top',

        // Add button to toggle fullscreen mode for the presentation
        fullscreen: true,

        // Add button to toggle the overview mode on and off
        overview: false,

        // Add button to pause (hide) the presentation display
        pause: false,

        // Add button to show the speaker notes
        notes: true,

        // Add button to show the help overlay
        help: false,

        // If true, the reveal.js-menu will be moved into the toolbar.
        // Set to false to leave the menu on its own.
        captureMenu: true,

        // If true, the playback control will be moved into the toolbar.
        // This is only relevant if the presentation is configured to autoSlide.
        // Set to false to leave the menu on its own.
        capturePlaybackControl: true,

        // By default the menu will load it's own font-awesome library
        // icons. If your presentation needs to load a different
        // font-awesome library the 'loadIcons' option can be set to false
        // and the menu will not attempt to load the font-awesome library.
        loadIcons: true
    },
    menu: {
        // Specifies which side of the presentation the menu will
        // be shown. Use 'left' or 'right'.
        side: 'left',

        // Add slide numbers to the titles in the slide list.
        // Use 'true' or format string (same as reveal.js slide numbers)
        numbers: false,

        // Specifies which slide elements will be used for generating
        // the slide titles in the menu. The default selects the first
        // heading element found in the slide, but you can specify any
        // valid css selector and the text from the first matching
        // element will be used.
        // Note: that a section data-menu-title attribute or an element
        // with a menu-title class will take precedence over this option
        titleSelector: 'h1, h2',

        // If slides do not have a matching title, attempt to use the
        // start of the text content as the title instead
        useTextContentForMissingTitles: false,

        // Hide slides from the menu that do not have a title.
        // Set to 'true' to only list slides with titles.
        hideMissingTitles: true,

        // Add markers to the slide titles to indicate the
        // progress through the presentation
        markers: false,

        // Specify custom panels to be included in the menu, by
        // providing an array of objects with 'title', 'icon'
        // properties, and either a 'src' or 'content' property.
        custom: false,

        // Specifies the themes that will be available in the themes
        // menu panel. Set to 'false' to hide themes panel.
        themes: [
            { name: 'Adventiel', theme: 'css/theme/adventiel.css' },
            { name: 'Black', theme: 'css/theme/black.css' },
            { name: 'White', theme: 'css/theme/white.css' },
            { name: 'League', theme: 'css/theme/league.css' },
            { name: 'Sky', theme: 'css/theme/sky.css' },
            { name: 'Beige', theme: 'css/theme/beige.css' },
            { name: 'Simple', theme: 'css/theme/simple.css' },
            { name: 'Serif', theme: 'css/theme/serif.css' },
            { name: 'Blood', theme: 'css/theme/blood.css' },
            { name: 'Night', theme: 'css/theme/night.css' },
            { name: 'Moon', theme: 'css/theme/moon.css' },
            { name: 'Solarized', theme: 'css/theme/solarized.css' }
        ],

        // Specifies if the transitions menu panel will be shown.
        transitions: true,

        // Adds a menu button to the slides to open the menu panel.
        // Set to 'false' to hide the button.
        openButton: true,

        // If 'true' allows the slide number in the presentation to
        // open the menu panel. The reveal.js slideNumber option must
        // be displayed for this to take effect
        openSlideNumber: false,

        // If true allows the user to open and navigate the menu using
        // the keyboard. Standard keyboard interaction with reveal
        // will be disabled while the menu is open.
        keyboard: true,

        // Normally the menu will close on user actions such as
        // selecting a menu item, or clicking the presentation area.
        // If 'true', the sticky option will leave the menu open
        // until it is explicitly closed, that is, using the close
        // button or pressing the ESC or m key (when the keyboard
        // interaction option is enabled).
        sticky: false,

        // If 'true' standard menu items will be automatically opened
        // when navigating using the keyboard. Note: this only takes
        // effect when both the 'keyboard' and 'sticky' options are enabled.
        autoOpen: true,

        // If 'true' the menu will not be created until it is explicitly
        // requested by calling RevealMenu.init(). Note this will delay
        // the creation of all menu panels, including custom panels, and
        // the menu button.
        delayInit: false,

        // By default the menu will load it's own font-awesome library
        // icons. If your presentation needs to load a different
        // font-awesome library the 'loadIcons' option can be set to false
        // and the menu will not attempt to load the font-awesome library.
        loadIcons: true
    }

});