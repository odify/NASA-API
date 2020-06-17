window.onload = getData();

    setInterval(getData,5000);
    async function getData(){
    var api = "https://api.nasa.gov/planetary/apod?api_key=XA6IuMbstRjVQf0EFkp2cdhQPOB4QuLhsMZUu4B5";
 var expla = document.querySelector(".expla");
 var title = document.querySelector(".title");
var img = document.querySelector(".img1");
       const res = await fetch(api)
      const data = await res.json()

      //console.log(data)


      expla.innerHTML = data.explanation;
      title.innerHTML = data.title;
      img.src = data.url
    };
