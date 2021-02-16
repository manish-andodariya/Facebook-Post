window.addEventListener("load", () => {
  swal(
    "This is static page so, first try to add sub comment and then try to add comments and likes 🔥"
  );
});

let commentcount = 1;
let likecount = 0;

let subcommentcount = 1;
let sublikecount = 0;
/**********sub comment */

document.querySelector(".sub-comment-btn").addEventListener("click", () => {
  console.log("clicked");
  swal("Write Comment here:", {
    content: "input",
  }).then((value) => {
    if (value != "" && value != null) {
      document.querySelector(".main-comment").innerHTML += `
        <div class="sub-comment">
                    <div class="comment">
                        <img src="https://www.flaticon.com/svg/vstatic/svg/3003/3003035.svg?token=exp=1613482162~hmac=cbbc3b30c4235a0c58c0fd2b1b041e36"
                            alt="" height="50px" width="50px">
                        <div>
                            <p><b>Manish Andodariya</b> <br>
                                ${value}</div>
                    </div>
                </div>
        `;
      subcommentcount = subcommentcount + 1;
      document.querySelector(".sub-comment-btn").innerText =
        subcommentcount + " Comments";
      console.log(value);
    } else {
      swal("No Comment Added");
    }
  });
});

/*************main comment */
document.querySelector(".comment-btn").addEventListener("click", () => {
  swal("Write Comment here:", {
    content: "input",
  }).then((value) => {
    if (value != "" && value != null) {
      document.querySelector(".comment-container").innerHTML += `
        <div class="main-comment-temp">
                <div class="comment-temp">
                    <img src="https://www.flaticon.com/svg/vstatic/svg/3003/3003035.svg?token=exp=1613482162~hmac=cbbc3b30c4235a0c58c0fd2b1b041e36"
                        alt="" height="50px" width="50px">
                    <div>
                        <p><b>Manish Andodariya</b> <br>
                            ${value}</p>
                        <button class="comment-like-temp">Like</button>
                        <button id="sub-comment-btn-temp">Comment</button>
                    </div>
                </div>
            </div>
          `;
      commentcount = commentcount + 1;
      document.querySelector(".comment-btn").innerText =
        commentcount + " Comment";
    } else {
      swal("No Comment Added");
    }
  });
});

/**********main like btn */
document.querySelector(".like-btn").addEventListener("click", () => {
  likecount = likecount + 1;
  document.querySelector(".like-btn").innerText = likecount + " Like";
});

/***********sub-likes */
document.querySelector(".comment-like").addEventListener("click", () => {
  sublikecount = sublikecount + 1;
  document.querySelector(".comment-like").innerText = sublikecount + " Like";
});

document.querySelector(".post-info-right").addEventListener("click", () => {
  swal("Function is comming soon!👍 ");
});
