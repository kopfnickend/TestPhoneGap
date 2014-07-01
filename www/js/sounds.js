// Definir lista de extensiones y el tipo de fichero de audio asociado. Puedes añadir más
var html5_audiotypes={ 
	"mp3": "audio/mpeg",
	"mp4": "audio/mp4",
	"ogg": "audio/ogg",
	"wav": "audio/wav"
}

function createsoundbite(sound){
	var html5audio=document.createElement('audio');
	if (html5audio.canPlayType){ //Comprobar soporte para audio HTML5
		for (var i=0; i<arguments.length; i++){
			var sourceel=document.createElement('source');
			sourceel.setAttribute('src', arguments[i]);
			if (arguments[i].match(/.(w+)$/i))
				sourceel.setAttribute('type', html5_audiotypes[RegExp.$1]);
			html5audio.appendChild(sourceel);
		}
		html5audio.load();
		html5audio.playclip=function(){
			html5audio.pause();
			html5audio.currentTime=0;
			html5audio.play();
		}
		return html5audio;
	}
	else{
		return {playclip:function(){throw new Error('Su navegador no soporta audio HTML5')}}
	}
}

function SpeachExercise(exe){
	//alert('asas: ' + 'speach/'+exe+'.mp3');
	speach[exe].playclip();
}

function playPathMp3(ruta){
	var buttomclick = createsoundbite(ruta);
	buttomclick.playclip();
}

//Inicializar sonidos
var buttomclick = createsoundbite('sounds/click.mp3');

//http://translate.google.com/translate_tts?tl=es&q=%22Muy%20bien,%20Fin%20del%20entrenamiento%22
var speach = new Array(
		createsoundbite('speach/0.mp3'),
		createsoundbite('speach/1.mp3'),
		createsoundbite('speach/2.mp3'),
		createsoundbite('speach/3.mp3'),
		createsoundbite('speach/4.mp3'),
		createsoundbite('speach/0.mp3')
);