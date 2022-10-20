const test = document.querySelector(".test");

const data = [];

const url =
  "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50";

function getApi(params) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": config.RAPID_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((response) =>
      //  console.log(response)
      {
        data.push(response.items);
        inner();
      }
    )

    .catch((err) => console.error(err));
}
getApi();

function inner(params) {
  console.log(data);
  test.innerHTML = `
    <div>
      ${data[0][0].id.videoId}
      ${data[0][0].snippet.channelTitle}
      <img src="${data[0][0].snippet.thumbnails.default.url}" alt=""> 
    </div>
  `;
}
