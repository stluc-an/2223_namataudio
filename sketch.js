function setup(){
cnv = createCanvas(100,100);
cnv.mousePressed(userStartAudio);
sound = new p5.AudioIn();
sound.start();
fft = new p5.FFT();
sound.connect(fft);
}

function draw() {
    background(0);
    
    if (getAudioContext().state !== 'running') {
      background(220);
      text('tap here and enable mic to begin', 10, 20, width - 20);
      return;
    }
    let centroidplot = 0.0;
    let spectralCentroid = 0;

    let spectrum = fft.analyze();

    // get the centroid : c'est ça qui t'intéresse
    spectralCentroid = fft.getCentroid();

    noStroke();
    fill(255,255,255);  // text is white
    text('centroid: ', 10, 20);
    text(round(spectralCentroid)+' Hz', 10, 40);
}