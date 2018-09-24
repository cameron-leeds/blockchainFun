$(function(){ 
    var canvas = document.getElementById('thecanvas');
    var signaturePad = new SignaturePad(canvas);    
    drawSignatureLine();
    $('button.save').click(function(){               
        window.open(signaturePad.toDataURL("image/png"));
    });
    $('button.clear').click(function(){
        signaturePad.clear();        
        drawSignatureLine();
    });
    function drawSignatureLine(){        
          var context = canvas.getContext('2d');          
          context.lineWidth = .5;
          context.strokeStyle = '#333';
          context.beginPath();
          context.moveTo(0, 150);
          context.lineTo(500, 150);
          context.stroke();
    }  
});