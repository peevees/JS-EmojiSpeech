# JS-EmojiSpeech

idea
https://www.codementor.io/mauriziocarboni/how-i-made-a-talking-emoji-using-regular-emojis-and-javascript-etmz7svtg

example code:
setInterval(_=>{
  document.body.innerHTML = "<h1>" + [
    ..."😮😀😁😐😑😬"
  ][new Date%6]
},99)
