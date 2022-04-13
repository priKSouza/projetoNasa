function apod() {
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=OTlCuYyed4ScWgwpaR0TYpHASKNnj4qOCAs08vsS").then((res) => res.json())
    .then((json) => {
      /* let div = document.createElement("div");

      let image = document.createElement('img')
      image.setAttribute('id', 'img')
      image.src = json.url
      image.setAttribute('width', '100%')
      div.append(image)

      let title = document.createElement('p')
      title.innerHTML = json.title + `<br>` + json.date
      title.style.fontWeight = 'bolder'
      div.append(title)

      let info = document.createElement('p')
      info.innerHTML = json.explanation
      div.append(info)

      let foto = document.createElement('a')
      foto_name = json.copyright
      foto.innerHTML = foto_name
    //   foto.href = 
    foto.setAttribute = ('target', '_blanck')
    foto.style.color = 'lightblue'
    foto.style.textDecoration = 'none'
    div.append(foto)

    document.querySelector("#info").append(div) */
    });
}

apod();
