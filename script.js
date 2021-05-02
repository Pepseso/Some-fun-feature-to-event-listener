$('.first').on('click', () => {
    console.log("Yeah, you clicked me")
  });
$('.second').on('click', () => {
    $(".first").css("background-color", "blue")
  });
  $('.third').one('click', () => {
    $("button").css("background-color", document.getElementById('barva').value)
});