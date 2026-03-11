const { Description } = require("@radix-ui/react-toast");

const video = document.getElementById("video");

Promise.all([
    faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
    faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
    faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
]).then(startWebcam).then(recognizeFaces);


function startWebcam() 
{
   navigator.mediaDevices.getUserMedia(
    { 
        video: true,
        audio: false, 
    }).then((stream) => {
        video.srcObject = stream;
    }).catch((error)=>
        {
            console.error(error);
        });
}

function getLabeledFaceDescriptions()
{
    const labels = ['Person1', 'Person2']; // Add more labels as needed

    return Promise.all(labels.map(async (label)=>
    {
        const Description = [];
        for(let i=1; i<=3; i++)
            {
                const image = await faceapi.fetchImage(``);

                const detections = await faceapi.detectSingleFace(image).withFaceLandmarks().withFaceDescriptor();

                descriptors.push(detections.descriptor)
            }
        return new faceapi.LabeledFaceDescriptors(label, descriptors);
    })
);

}

async function recognizeFaces()
{
    const LabeledFaceDescriptors = await getLabeledFaceDescriptions();
    const faceMatcher = new faceapi.FaceMatcher(LabeledFaceDescriptors);

    video.addEventListener('play', ()=>
        {
            const canvas = faceapi.createCanvasFromMedia(video);
            document.body.append(canvas);

            const displaySize = {wdith: video.width, height: video.height};
            faceapi.matchDimensions(canvas, displaySize);
            setInterval(async()=>
                {
                    const detections = faceapi.detecAllFaces(video).withFaceLandmarks().withFaceDescriptors();

                    const reseizeDetections = faceapi.resizeResults(detections, displaySize);

                    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

                    const results = reseizeDetections.map((d)=>
                        {
                            return faceMatcher.findBestMatch(d.descriptor);
                        });

                    results.forEach((result, i)=>
                        {
                            const box = reseizeDetections[i].detection.box;
                            const drawBox = new faceapi.draw.DrawBox(box, {label: result.toString()});
                            drawBox.draw(canvas);
                        });
                }, 100);
        })
}

startWebcam();