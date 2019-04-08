/*!
 * 增加白色背景 
 * @see https://github.com/mikechambers/ExamplesByMesh/tree/master/HTML5/canvas/exportWithBackgroundColor
 *Returns contents of a canvas as a png based data url, with the specified
 * background color
 */

define(function () {

    function canvasToImage(canvas, backgroundColor, type) {
        //cache height and width        
        var w = canvas.width;
        var h = canvas.height;

        var data;
        var context = canvas.getContext("2d");
        if (backgroundColor) {
            //get the current ImageData for the canvas.
            data = context.getImageData(0, 0, w, h);

            //store the current globalCompositeOperation
            var compositeOperation = context.globalCompositeOperation;

            //set to draw behind current content
            context.globalCompositeOperation = "destination-over";

            //set background color
            context.fillStyle = backgroundColor;

            //draw background / rect on entire canvas
            context.fillRect(0, 0, w, h);
        }

        //get the image data from the canvas
        var imageData = canvas.toDataURL(type);

        if (backgroundColor) {
            //clear the canvas
            context.clearRect(0, 0, w, h);

            //restore it with original / cached ImageData
            context.putImageData(data, 0, 0);

            //reset the globalCompositeOperation to what it was
            context.globalCompositeOperation = compositeOperation;
        }

        //return the Base64 encoded data url string
        return imageData;
    }



    return canvasToImage;

});
