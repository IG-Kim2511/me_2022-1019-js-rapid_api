

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
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
getApi();


    // // 👉🍀c18, listen
    // app.listen(process.env.PORT || 8080, function () {
    //     console.log((`bgBrightMagenta`).bgBrightMagenta)
    //     console.log(`ig node server gogo, port: ${process.env.PORT}`.rainbow);
        
    // });