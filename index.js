let btnClickAfter=document.getElementById("comment_text");
let increamentBtn=document.getElementById('btnIncreament');
increamentBtn.addEventListener('click',()=>{
    btnClickAfter.value=parseInt(btnClickAfter.value)+1;
})