var xhr = new XMLHttpRequest();

xhr.open("GET", 'https://white64.com/articles/?pg=1', true); 

xhr.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var json = JSON.parse(xhr.responseText);
    console.log(json); // log the returned data
    // Here you can manipulate your DOM to include the data retrieved
  }
}

xhr.send();
