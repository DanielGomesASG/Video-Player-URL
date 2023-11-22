document.addEventListener("DOMContentLoaded", function () {
  var buttonLoad = document.getElementById("buttonLoad");
  var videoURL = document.getElementById("videoUrl");
  var videoPlayer = document.getElementById("videoPlayer");

  buttonLoad.addEventListener("click", function () {
    loadVideo(videoURL.value);
  });

  function loadVideo(url) {
    // Limpar mensagens de erro anteriores
    videoURL.setCustomValidity("");

    // Validar a URL do vídeo
    if (isValidVideoUrl(url)) {
      videoPlayer.src = url;
    } else {
      // Exibir mensagem de erro se a URL for inválida
      videoURL.setCustomValidity("URL do vídeo inválida.");
      videoURL.reportValidity();
    }
  }

  function isValidVideoUrl(url) {
    // Validação simples
    return /^(http|https):\/\/[^ "]+$/.test(url);
  }
});
