function updateData(){
	position_x=parseInt($("#position_x").val());
	position_y=parseInt($("#position_y").val());
	velocity_x=parseInt($("#velocity_x").val());
	velocity_y=parseInt($("#velocity_y").val());
	g_x=parseInt($("#g_x").val());
	g_y=parseInt($("#g_y").val());
	g_f=parseInt($("#g_f").val());
	st=parseInt($("#st").val());
	updateFlag=1;
}   
var position_x=parseInt($("#position_x").val());
var position_y=parseInt($("#position_y").val());
var velocity_x=parseInt($("#velocity_x").val());
var velocity_y=parseInt($("#velocity_y").val());
var g_x=parseInt($("#g_x").val());
var g_y=parseInt($("#g_y").val());
var g_f=parseInt($("#g_f").val());
var st=parseInt($("#st").val());
	
new OneBody('euler_loop', {
    body: 
	{	position: new Vec(position_x, position_y),
        velocity: new Vec(velocity_x, velocity_y),
			gposition: new Vec(g_x, g_y),
				gforce: g_f,
				st: st 
	},
    step: function(center, body){
		if(!updateFlag){
            var delta = 1/st;
            for(var i=0; i<st; i++){
                var acc = acceleration(center, body.position);
				document.getElementById('feedbackAccX').value=acc.x;
				document.getElementById('bugaga').innerHTML+=acc.x+" ";
				document.getElementById('feedbackAccY').value=acc.y;
				document.getElementById('bugaga').innerHTML+=acc.y+" ";
				
                body.velocity.iadd(acc.mul(delta));
				document.getElementById('feedbackVelocityIaddX').value=body.velocity.x;
				document.getElementById('bugaga').innerHTML+=body.velocity.x+" ";
				document.getElementById('feedbackVelocityIaddY').value=body.velocity.y;
				document.getElementById('bugaga').innerHTML+=body.velocity.y+" ";
				
                body.position.iadd(body.velocity.mul(delta));
				document.getElementById('feedbackPositionIaddX').value=body.position.x;
				document.getElementById('bugaga').innerHTML+=body.position.x+" ";
				document.getElementById('feedbackPositionIaddY').value=body.position.y;
				document.getElementById('bugaga').innerHTML+=body.position.y+"\n";
				} 
			}	
			else{
			body.velocity.x=velocity_x;
			body.velocity.y=velocity_y;
			body.position.x=position_x;
			body.position.y=position_y;
			updatePrevious(position_x,position_y);
			updateGPosition(g_x,g_y);
			updateGForce(g_f);
			updateSteps(st);
			//document.getElementById('euler').click();
			updateFlag=0;
		}			
    }
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