setInterval(_=>{
  document.body.innerHTML = "<h1>" + [
    ..."😮😀😁😐😑😬"
  ][new Date%6]
},100)