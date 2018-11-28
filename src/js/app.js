var handleContent = function(){
	var preloader = $('.preloader'); //za dohvatiti preloader element
	var ajaxLoader = '<img class="ajax-loader" src="/img/ajax-loader.gif" />';			//ovo ćemo ubaciti u html s funkcijom append; ali dajemo mu neku klasu tako da ga možemo maknuti kasnije iz htmla kad se traženi podacui učitaju - ne moze biti samo img jer bi onda logika micanja maknula sve img elemente u stranici
	$('.btn').click(function(e){
		e.preventDefault(); //ne znam zasto je ovo, pogledaj a webu
		
		$.ajax({     //sve u ajaxu se sve šalje kao objekt zato je sve u {}
			url:"data/users.json",
			type:"GET", //primjer - specifikacija metode
			data:{"id": 1},		//primjer - prosljedivanje podataka, u vidu obekta što je najčešće
			beforeSend: function(){			//preloader - da se nešto vrti korisniku dok se podaci dohvaćaju (slika uzeta sa www.ajaxload.info)
				preloader.empty();	//počisti ako je nešt oostalo u preloadreu ??
				preloader.append(ajaxLoader);		//vidi kako je to u html kodu definirano kao prazan div i ova funkcija ga dodaje unutra (append ili prepend)
			},			
			success:function(result){  //u ovaj result bi trebali dobiti vraćene podatke od backenda
				console.log(result);
				},
			error:function(xhr, status, error){ //ovom funkcijom hvatamo errore koje se generiraju ako ima problema npr. promjeni format users.json datoteke pa vidi
				//console.log(status);          //i vidi što dobiješ u konzoli...za produkciju ovaj kod dolje s ifom i ispisom korisniku
				if (error){
					preloader.empty();
					preloader.text("Greška. Probaj dohvatiti podatke kasnije");  //ispiši korisniku tekst u skučaju greške
						setTimeout(function(){			//ako želimo da poruka nestane sa stranice nakon 5 sekundi koristimo setTimeout funkciju
							preloader.empty();			//NE RADI _ FALI NEKA JEBENA ZAGRADA ILI TAKO NEŠTO PROVJERI
						}, 5000);
						};
					}
			},
			complete:function(){
				preloader.empty();
			}
		}); 	
	});	
};

var App = function () { //ovdje varijabla drzi funkciju!! a u toj funkciji je više funkcija koje ona drži
    return {
        init: function () {
			handleContent();    
		}
	}
}();