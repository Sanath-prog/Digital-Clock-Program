function update(){
  const today=new Date();
  let hr=today.getHours();
  let min=today.getMinutes().toLocaleString().padStart(2,0);
  let sec=today.getSeconds().toLocaleString().padStart(2,0);
  const final=document.getElementById('time');
  final.textContent=`${hr}:${min}:${sec}`;
  }
  update();
  setInterval(update,1000);