export default function parse(patternString) {
    const tokens = tokenize(patternString);
}

function tokenize(patternString) {
    //
}

function parseChar(buf) {
    const char = buf.pop();
}

/*

character           a abc
group
    captured        ()
    uncaptured      (?:)
range               [a] [abc] [a-zA-Z0-9]
repeat
    count           a{3}
    range           a{5,10}
    0 or 1          a?
    0 or more       a*
    1 or more       a+
    lazy 0 or more  a*?
    lazy 1 or more  a+?

*/
