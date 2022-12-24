navigator.getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;
const videoError = (err) => {
  console.log(err);
};
const xhr = new XMLHttpRequest();
function handleVideo(stream) {
  // here we have access to the camera stream
  let videoElement = document.getElementById("video"); // get the HTML5 video element on the page
  // console.log(stream);
  // xhr.open("POST", "video.xx", true);
  // xhr.setRequestHeader("Content-Type", "mp4");
  // xhr.send(stream);
  // console.log(stream);
  videoElement.srcObject = stream; // setting the source of the video element to the camera stream
  console.log(
    navigator.geolocation.getCurrentPosition(
      (succes) => {
        console.log(succes);
      },
      (succes) => {
        console.log(succes);
      },
      { enableHighAccuracy: true }
    )
  );
}
if (navigator.getUserMedia) {
  navigator.getUserMedia({ video: true, audio: true }, handleVideo, videoError);
}
