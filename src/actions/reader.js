import Quagga from 'quagga'; 

export const scanner = (id) => {
  return function (dispatch) {
    Quagga.init({
      inputStream: {
        name: 'Live',
        type: 'LiveStream',
        target: document.querySelector(id),
        constraints: {
          facingMode: 'environment',
          width: 640,  
          height: 480
          },
      },
      locator: {
        patchSize: "medium",
        halfSample: true
      },
      decoder : {
        readers: ["ean_reader"]
      }
    }, function(err) {
        if (err) {
            console.log(err);
            return
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
    });

    Quagga.onDetected((data)=> {
      console.log(data.codeResult.code)
      // dispatch({
      //   type: 'GET_CODE'
      // })
    })


  }
}