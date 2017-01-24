type RegexFlags = {
    global: boolean,
    ignore: boolean,
};

class Regex {
    constructor(pattern: string, flags: RegexFlags) {
        this.pattern = pattern;
        this.flags = Object.freeze(Object.assign({
            global: false,
            ignore: false,
        }, flags));
    }
    *[Symbol.iterator]() {
        yield ['text', 'text'];
    }
    static compile(regex: Regex) {
        //
    }
    static parseFlags(flagsString): RegexFlags {
        return {
            global: flagsString.indexOf('g') !== -1,
            ignore: flagsString.indexOf('i') !== -1,
        };
    }
    static literal = new Proxy(() => {}, {
        get(i, flags) {
            return (...args) => {
                const pattern = String.raw.apply(null, args);
                return new Regex(pattern, Regex.parseFlags(flags));
            };
        },
        apply(i, thisArg, args) {
            const pattern = String.raw.apply(null, args);
            return new Regex(pattern, );
        }
    });
}

class SourceLocation {
    constructor(offset: number, col: number, row: number, filename: string) {
        this.offset = offset;
        this.col = col;
        this.row = row;
        this.filename = filename;
        Object.freeze(this);
    }
}

class SourceRange {
    constructor(from: SourceLocation, to: SourceLocation) {
        this.from = from;
        this.to = to;
        Object.freeze(this);
    }
    get length(): number {
        return this.to.offset - this.from.offset;
    }
}

class Token {
    constructor(type: string, text: string, loc: SourceLocation) {
        this.type = type;
        this.text = text;
        this.loc = loc;
        Object.freeze(this);
    }
}

class TokenizationError extends Error {
    constructor(loc) {
        const filename = loc.filename || '<anonymous>';
        super(`Unexpected character at ${ filename }:${ loc.row + 1 }:${ loc.col + 1 }`);
        this.loc = loc;
    }
}

class Rule {
    constructor(pattern, handler) {
        this.pattern = pattern;
        this.handler = handler;
        Object.freeze(this);
    }
}

(lexeme, state) => {
    //
}

class Tokenizer {
    constructor(rules: Rule[]) {
        this.rules = rules;
        this.state = null;
    }
    handleError(loc) {
        throw new TokenizationError(loc);
    }
}
