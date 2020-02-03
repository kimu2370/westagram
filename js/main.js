const post = document.querySelector('.post');
const comment = document.querySelector('.comment-input');
const postButton = document.querySelector('.comment-Button');
let commentData = "";
comment.addEventListener('change',(event)=>{
   if(event.target.value){
      commentData = event.target.value;
      postFunction();
   }
   event.target.value = "";
});
postButton.addEventListener('click',()=>{
   commentData = comment.value;
   if(commentData){
      postFunction();
   }
});

const postFunction = () => {
   const div = document.createElement('div');
   const span1 = document.createElement('span');
   const span2 = document.createElement('span');
   span1.innerHTML = "k_seungHyun";
   span2.innerHTML = commentData;
   div.appendChild(span1);
   div.appendChild(span2);
   post.appendChild(div);
};