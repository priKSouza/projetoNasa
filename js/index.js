$("#btn").click(function (event) {
  event.preventDefault("");
  imgNasa();
});

function imgNasa() {
  const date = $("#data").val();
  const title = $("#title");
  const img = $("#img");
  const video = $("#video");
  const textImg = $("#text-img");
  const direitos = $("#direitos");

  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=OTlCuYyed4ScWgwpaR0TYpHASKNnj4qOCAs08vsS&date=${date}`,
    success: function (resposta) {
      if (resposta.media_type == "image") {
        img.show();
        video.hide();
        $("#box-text").css("visibility", "visible");
        title.text(resposta.title);
        textImg.text(resposta.explanation);
        direitos.text(resposta.copyright);
        img.attr("src", resposta.url);
      } else {
        img.hide();
        video.show();
        $("#box-text").css("visibility", "visible");
        title.text(resposta.title);
        title.text(resposta.title);
        textImg.text(resposta.explanation);
        direitos.text(resposta.copyright);
        video.attr("src", resposta.url);
      }
    },
  });
}
