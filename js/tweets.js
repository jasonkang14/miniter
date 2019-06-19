const elNewTweet = document.querySelector('.newTweet');
const elShowTweets = document.querySelector('.showTweets');
const elMakeBtn = document.querySelector('.make-btn');
const elUserName = document.querySelector('.userName');
const elTweetList = document.querySelector('.tweetList');
const elTextarea = document.querySelector('.newMessage');
const elToolBar = document.querySelector('.toolBar');
const elNoTweet = document.querySelector('.noTweet');
const elTweetCount = document.querySelector('.tweetCount');
let count = 0;

fetch ('/data/getAllTimeline.json')
  .then (
    (response) => {
      response.json().then((data) => {
        for (let i=0; i<data.result.length; i++) {
          const originalTweet = document.createElement('li');
          originalTweet.innerHTML = makeTweetList(data.result[i]);
          elTweetList.appendChild(originalTweet);
        }
      });
    }
  )

const getDate = () => {
  let now = new Date();
  let y = now.getFullYear();
  let m = now.getMonth() + 1;
  let d = now.getDate();
  return `${y}${(m < 10 ? '0' : '') + m}${(d < 10 ? '0' : '') + d}`;
}

const makeTweetList = (obj) => {
  let tweet = 
  `
    <span class="user">${obj.user}</span>
    <span class="date">${obj.date}</span>
    <div class="content">${obj.contents}</div>
  `
  return tweet;
};

const makeNewTweet = () => {
  count++;
  if (elTextarea.value === "") {
    alert("write your tweet");
    event.preventDefault();
    return;
  }


  const newTweet = document.createElement('li');
  newTweet.className = "tweet";
  let tweetObj = {
    user: elUserName.innerHTML,
    date: getDate(),
    contents: elTextarea.value
  }
  newTweet.innerHTML = makeTweetList(tweetObj);
  elTweetList.insertBefore(newTweet, elTweetList.childNodes[0]);
  elTextarea.value = "";
  elNoTweet.style.display = "none";
  elTweetCount.innerHTML = count;
}

const enlargeTextarea = () => {
  event.stopPropagation();
  elTextarea.style.height = "150px";
  elToolBar.style.display = "block";
}

elMakeBtn.addEventListener('click', makeNewTweet);
elTextarea.addEventListener('click', enlargeTextarea);

document.addEventListener('click', () => {
  elTextarea.style.height = "50px";
  elToolBar.style.display = "none";
});