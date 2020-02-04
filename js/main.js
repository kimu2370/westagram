const post = document.querySelector('.post');
const comment = document.querySelector('.comment-input');
const postButton = document.querySelector('.comment-Button');
let commentData = "";
comment.addEventListener('change',(event)=>{
   if(event.target.value){
      commentData = event.target.value;
      addPost();
   }
   event.target.value = ""; // 포커스를 떠나는 순간 value를 빈문자열로 바꾼다.
});

postButton.addEventListener('click',()=>{
   commentData = comment.value;
   if(commentData){
      addPost();
   }
});

const addPost = () => {
   const div = document.createElement('div');
   const span1 = document.createElement('span');
   const span2 = document.createElement('span');
   let backUpData = "";
   span1.innerHTML = "k_seungHyun";
   span2.innerHTML = commentData;
   div.appendChild(span1);
   div.appendChild(span2);
   post.appendChild(div);
   const postUserName = document.querySelector('.post').querySelectorAll('div');
   postUserName.forEach(item=>{  
      item.addEventListener('click',()=>{    //댓글 삭제 기능
         item.remove();
         backUpData = post;
      });
   });
}