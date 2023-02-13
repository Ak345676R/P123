leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    canvas = createCanvas(500, 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(500, 500)

    posenet = ml5.poseNet(video, modelLoaded)
    poseNet.on(gotPoses)
}

function draw() {
    background('#999999')
    textSize(difference)
    fill('#FF0000')
    text("Akshat", 40, 100)
}

function modelLoaded() {
    console.log("Pose Net is Initialized")
}

function gotPoses(results) {
    if(results > 0) {
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x
        difference = floor(leftWristX - rightWristX)

    }
}