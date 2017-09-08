// The states we may be in
const TYPIST_TYPING = 0;
const TYPIST_ERASING = 1;
const TYPIST_WAITING = 2;

//-- Start typist --
(function() {
    var element = document.querySelector(".typist-text");
    if (element != null) {
        var state = typistInit(element);
        typistStateMachine(element, state);
    } else {
        console.log("Warning: Found no typist element. Add tag typist-text to text you want to animate or emove this script!");
    }
}).call(this);

//-- Init method called before starting state machine  --
function typistInit(element, state = TYPIST_TYPING, charDelay = 60, textDelay = 2000) {

    var startText = element.innerHTML;
    var texts = element.getAttribute("typist-extra");
    texts = texts.split(",");
    texts.splice(0, 0, startText);
    texts = texts.map(s => s.trim());
    
    var state = {
        element: null,
        state: TYPIST_TYPING,
        currentTextIndex: 0,
        currentTypedChars: 0,
        texts: texts,
        charDelay: charDelay,
        textDelay: textDelay
    };

    return state;
}

//-- The state machine that loops forever. --
function typistStateMachine(element, state) {
    var text = state.texts[state.currentTextIndex] ;
    
    switch(state.state) {
        case TYPIST_TYPING:
            if (state.currentTypedChars > text.length) {
                // Whole text is now shown -> Switch to waiting mode
                state.state = TYPIST_WAITING;
                setTimeout(typistStateMachine, state.textDelay, element, state);
            } else {
                typistUpdateHtml(element, state);
                state.currentTypedChars++;
                setTimeout(typistStateMachine, state.charDelay, element, state);
            }
            break;

        case TYPIST_WAITING:
            state.state = TYPIST_ERASING;
            setTimeout(typistStateMachine, state.charDelay, element, state);
            break;
        
        case TYPIST_ERASING:
            if (state.currentTypedChars <= 0) {
                // Whole text is now erased -> Next text + Switch to typing mode
                state.state = TYPIST_TYPING;
                state.currentTextIndex = state.currentTextIndex + 1;
                if (state.currentTextIndex >= state.texts.length)
                    state.currentTextIndex = 0;
                state.currentTypedChars = 0;
                setTimeout(typistStateMachine, state.charDelay, element, state);
            } else {
                state.currentTypedChars--;
                typistUpdateHtml(element, state);
                setTimeout(typistStateMachine, state.charDelay, element, state);
            }
            break;
        
        default:
            console.log("ERROR: Bad state: " + state.state);
    }
}

//-- Helper to update the html according to our state. --
function typistUpdateHtml(element, state) {
    var text = state.texts[state.currentTextIndex];
    var typed = text.substring(0, state.currentTypedChars);
    var untyped = text.substring(state.currentTypedChars);
    
    element.innerHTML = typed + " <span class=\"typist-untyped\">" + untyped + "</span>";
}

