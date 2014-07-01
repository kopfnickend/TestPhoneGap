var training = new Array(
        		new Array( // Semana 1
					new Array( // Dia 1
						new Array(200,90,60,90,60,90,60,90,300),// Tiempo
			   			new Array(  0, 2, 1, 2, 1, 2, 1, 2,  1,4), // Ejercicio
			   			'Bienvenido a la semana 1: día 1. Hoy es un gran comienzo, te has decidido a salir a correr. Hoy te espera una larga mañana.'
					),
					new Array( // Dia 2
						new Array(300,90,60,90,60,90,60,90,300),// Tiempo
						new Array(  0, 2, 1, 2, 1, 2, 1, 2,  1,4), // Ejercicio
			   			'Bienvenido a la semana 1: día 2. Hoy es un gran comienzo, te has decidido a salir a correr. Hoy te espera una larga mañana.'
					),
					new Array( // Dia 3
						new Array(3,90,60,90,60,90,60,90,300),// Tiempo
			   			new Array(  0, 2, 1, 2, 1, 2, 1, 2,  1,4), // Ejercicio
			   			'Bienvenido a la semana 1: día 3. Hoy es un gran comienzo, te has decidido a salir a correr. Hoy te espera una larga mañana.'
			 		)
				)	
			);
//alert( JSON.stringify(training) );

var exerciseName = new Array('Entrada en calor','Caminar','Correr','Relax','Fin del entrenamiento');
	
	var laps = training[0][0][0];
	var exercise = training[0][0][1];
	

   function startCountDown(){ 
	startCountDown.count = ++startCountDown.count || 0 // f.count is undefined at first

SpeachExercise(exercise[startCountDown.count]);


if (laps.length < 1) return;
if (startCountDown.count >= laps.length){
	$(".type_exercise").text('Fin del entrenamiento =)');
	return;
}

$('.clock_hours,  .clock_minutes').css({ "display": "block"});

$(".type_exercise").text(exerciseName[exercise[startCountDown.count]]);
$(".lap").text(startCountDown.count+1);
$(".laps").text(laps.length+1);


if (laps.length > startCountDown.count+1) $(".type_next_exercise").text(laps[startCountDown.count] + ' seg de ' + exerciseName[exercise[startCountDown.count+1]]);
else $(".type_next_exercise").text(exerciseName[exercise[startCountDown.count+1]]);




JBCountDown({
       secondsColor : "#FFF",
       secondsGlow  : "none",
       
       minutesColor : "#FFF",
       minutesGlow  : "none",
       
       hoursColor   : "#FFF",
       hoursGlow    : "none",
       
       daysColor    : "#FFF",
       daysGlow     : "none",
           
           startDate   : Date.now(),
           endDate     : Date.now()+laps[startCountDown.count],
           now         : Date.now()
       });
}
   
$(document).ready(function(){
	
	
	$(".wrapper_clock").hide();

$(".btnComenzar").click(function() {
	startCountDown();
	$(".wrapper_clock").show();
	$(".nav").hide();
	buttomclick.playclip();
});

$(".playpause").click(function (){
	//JBCountDownStop();
	if(cdownRun) $(".playpause").text("Reanudar");
	else $(".playpause").text("Detener");
	
	cdownRun = !cdownRun;
	//buttomclick.playclip();
});

$("select.target_semana, select.target_dia").change(function() {
	var sem = $("select.target_semana option:selected").val();
	var dia = $("select.target_dia option:selected").val();
	
	laps = training[sem][dia][0];
	exercise = training[sem][dia][1];
	
	$(".txtWelcome").text(training[sem][dia][2]);
	});

});