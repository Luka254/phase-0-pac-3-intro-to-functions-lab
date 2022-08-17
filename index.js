function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(HELLO) {
    HELLO.toUpperCase()
    console.log(HELLO.toUpperCase( ));
}

function logWhisper(string) {
    string.toLowerCase()
    console.log(string.toLowerCase( ));
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return `I can't hear you!`;
    }
    else if (string === string.toUpperCase()) {
      return 'YES INDEED!';
    }
    else {
      return `I would love to!`
    }
  }
