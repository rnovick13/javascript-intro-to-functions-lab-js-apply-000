function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function () => {
  if (whisper) {
    return "I can't hear you";
  } else if(shout) {
    return "YES INDEED!";
  } else if("I love you, Grandma") {
    return "I love you, too.";
  }
}