
function updateData(){
position_x=parseInt($("#position_x").val());
position_y=parseInt($("#position_y").val());
previous_x=parseInt($("#previous_x").val());
previous_y=parseInt($("#previous_y").val());
g_x=parseInt($("#g_x").val());
g_y=parseInt($("#g_y").val());
g_f=parseInt($("#g_f").val());
updateFlag=1;
}

			var position_x=parseInt($("#position_x").val());
			var position_y=parseInt($("#position_y").val());
			var previous_x=parseInt($("#previous_x").val());
			var previous_y=parseInt($("#previous_y").val());
			var g_x=parseInt($("#g_x").val());
			var g_y=parseInt($("#g_y").val());
			var g_f=parseInt($("#g_f").val());
   
    new OneBody('verlet', {
        body: {
            position: new Vec(position_x, position_y),
            previous: new Vec(previous_x, previous_y),
			    gposition: new Vec(g_x, g_y),
				  gforce: g_f
        },
        step: function(center, body){
		if(!updateFlag){
            var acc = acceleration(center, body.position);
				document.getElementById('feedbackAccX').value=acc.x;
				document.getElementById('bugaga').innerHTML+=acc.x+" ";
				document.getElementById('feedbackAccY').value=acc.y;
				document.getElementById('bugaga').innerHTML+=acc.y+" ";
            var position = body.position.mul(2);
				document.getElementById('feedbackPositionIaddX').value=body.position.mul(2).x;
				document.getElementById('bugaga').innerHTML+=body.position.mul(2).x+" ";
				document.getElementById('feedbackPositionIaddY').value=body.position.mul(2).y;
				document.getElementById('bugaga').innerHTML+=body.position.mul(2).y+" ";
            position.isub(body.previous);
            position.iadd(acc);
            body.previous = body.position;
				document.getElementById('feedbackPreviousIaddX').value=body.previous.x;
				document.getElementById('bugaga').innerHTML+=body.previous.x+" ";
				document.getElementById('feedbackPreviousIaddY').value=body.previous.y;
				document.getElementById('bugaga').innerHTML+=body.previous.y+"\n";
			
            body.position = position;
        }
		else{
			body.previous.x=previous_x;
			body.previous.y=previous_y;
			body.position.x=position_x;
			body.position.y=position_y;
			updatePrevious(position_x,position_y);
			updateGPosition(g_x,g_y);
			updateGForce(g_f);
			//document.getElementById('euler').click();
			updateFlag=0;
			}}
    });

            $(function() {
                $('#nav > div').hover(
                function () {
                    var $this = $(this);
                    $this.find('img').stop().animate({
                        'width'     :'199px',
                        'height'    :'199px',
                        'top'       :'-25px',
                        'left'      :'-25px',
                        'opacity'   :'1.0'
                    },500,'easeOutBack',function(){
                        $(this).parent().find('ul').fadeIn(700);
                    });
                    $this.find('a:first,h2').addClass('active');
                },
                function () {
                    var $this = $(this);
                    $this.find('ul').fadeOut(500);
                    $this.find('img').stop().animate({
                        'width'     :'52px',
                        'height'    :'52px',
                        'top'       :'0px',
                        'left'      :'0px',
                        'opacity'   :'0.1'
                    },5000,'easeOutBack');
                    $this.find('a:first,h2').removeClass('active');
                }
            );
            });