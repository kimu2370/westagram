const post = document.querySelector('.post');
const comment = document.querySelector('.comment-input');
const postButton = document.querySelector('.comment-Button');
let commentData = "";
comment.addEventListener('keydown',(event)=>{
   if(event.key==="Enter"){
      commentData = event.target.value;
      addPost();
   event.target.value = ""; 
   }
});

/*
comment.addEventListener('change',(event)=>{
   if(event.target.value){
      commentData = event.target.value;
      addPost();
   }
   event.target.value = ""; // 포커스를 떠나는 순간 value를 빈문자열로 바꾼다.
});
onChange 일때 댓글이 달리게 만들지말고,

댓글이 입력창에 작성되어있는 상태에서
엔터키를 치거나 작성버튼이 눌렸을때
댓글이 달리도록 만들어보세요
*/

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
   div.addEventListener('click',()=>{
      div.remove();
      backUpData=post;
   });
}
/*
const postUserName = document.querySelector('.post').querySelectorAll('div');
   postUserName.forEach(item=>{  
      item.addEventListener('click',()=>{    //댓글 삭제 기능
         item.remove();
         backUpData = post;
      });
   });
생성되는 댓글 노드가 담긴 변수인 div 에 이벤트핸들러를 달고, div 변수에게 remove를 실행시키면 더 정확합니다.
*/
