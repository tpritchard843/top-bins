// your code here

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "1458fbec424eedbdabea3056d8e61cd7");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://v3.football.api-sports.io/leagues", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    console.log(result.response);
    for (let i = 0; i < 10; i++) {
        console.log(i, result.response[i])
    }
  })
  .catch(error => console.log('error', error));

