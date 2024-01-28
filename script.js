function sprawdz_pesel() {
	event.preventDefault();

	var a1 = document.getElementById("position_1").value;
	var a2 = document.getElementById("position_2").value;
	var a3 = document.getElementById("position_3").value;
	var a4 = document.getElementById("position_4").value;
	var a5 = document.getElementById("position_5").value;
	var a6 = document.getElementById("position_6").value;
	var a7 = document.getElementById("position_7").value;
	var a8 = document.getElementById("position_8").value;
	var a9 = document.getElementById("position_9").value;
	var a10 = document.getElementById("position_10").value;
	var a11 = document.getElementById("position_11").value;

	var pesel_array = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11];
	var isValidPesel = true;

	for (var i = 0; i < 11; i++) {
		if (pesel_array[i] <= 9 && pesel_array[i] >= 0) {
			// Dobrze, nic nie rób
		} else {
			isValidPesel = false;
			break; // Jeśli napotkasz niepoprawną cyfrę, przerwij pętlę
		}
	}

	if (isValidPesel) {
		document.getElementById("wynik").innerHTML =
			"Poprawny PESEL. Twój płeć to:";
		if (pesel_array[9] % 2 === 0) {
			document.getElementById("wynik").innerHTML = "M";
		} else {
			document.getElementById("wynik").innerHTML = "K";
		}
	} else {
		document.getElementById("wynik").innerHTML =
			"Niepoprawny PESEL. Wprowadź poprawny PESEL";
	}
}
