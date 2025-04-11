 const notefield = document.getElementById("note");
 const savemsg = document.getElementById('savedmsg');

 window .onload = () => {
    const savednote = localStorage.getItem('note');
    if (savednote) {
        notefield.value = savednote;
    }
 };

 function savednote(){
    const note = notefield.value;
    localStorage.setItem('note,note');
    savedmsg.style.display = 'block';
    setTimeout(() =>savedmsg.style.display ='none,',2000 {
        
    }, timeout);
 }
 function clearnote( {
    notefield.value = '',
    localStorage.remomveitem ('note');
    savedmsg.style.display = 'none'
 })
    
 
