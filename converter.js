var car;
function ltn2pgn () {
car = document.converter.input.value.toLowerCase();

	// Huruf Kombinasi
	car = car.replace(/dh/g, "ḍ");
	car = car.replace(/th/g, "ṭ");
	car = car.replace(/ny/g, "ñ");
	car = car.replace(/ng/g, "ŋ");
	car = car.replace(/ts/g, "ṡ");
	car = car.replace(/'h/g, "ḥ");
	car = car.replace(/dz/g, "ż");
	car = car.replace(/sy/g, "ś");
	car = car.replace(/sh/g, "ṣ");
	car = car.replace(/dl/g, "ḍh");
	car = car.replace(/tl/g, "ṭh");
	car = car.replace(/zh/g, "ẓ");
	car = car.replace(/t-/g, "ẗ");
	car = car.replace(/gh/g, "غ");
	car = car.replace(/kh/g, "خ");
	car = car.replace(/ḍh/g, "ض");
	car = car.replace(/ṭh/g, "ط");
	
// Kombinasi Vokal
	car = car.replace(/i([aāuūeĕěêèéo])/g, "iy$1");
	car = car.replace(/u([aāiīeĕěêèéo])/g, "uw$1");
	car = car.replace(/\u0020([aiueĕěêèéo])/g, "\u0020ā$1");
	
// Nglagena JGST
	car = car.replace(/h/g, "ه");
	car = car.replace(/n/g, "ن");
	car = car.replace(/c/g, "چ");
	car = car.replace(/r/g, "ر");
	car = car.replace(/k/g, "ك");
	car = car.replace(/d/g, "د");
	car = car.replace(/t/g, "ت");
	car = car.replace(/s/g, "س");
	car = car.replace(/[ūw]/g, "و");
	car = car.replace(/l/g, "ل");
	car = car.replace(/p/g, "ڤ");
	car = car.replace(/ḍ/g, "ڊ");
	car = car.replace(/j/g, "ج");
	car = car.replace(/[īy]/g, "ي");
	car = car.replace(/ñ/g, "ۑ");
	car = car.replace(/m/g, "م");
	car = car.replace(/g/g, "ڮ");
	car = car.replace(/b/g, "ب");
	car = car.replace(/ṭ/g, "ڟ");
	car = car.replace(/ŋ/g, "ڠ");

	// Arabic JGST + Kemenag
	car = car.replace(/ṡ/g, "ث");
	car = car.replace(/ḥ/g, "ح");
	car = car.replace(/ż/g, "ذ");
	car = car.replace(/z/g, "ز");
	car = car.replace(/ś/g, "ش");
	car = car.replace(/ṣ/g, "ص");
	car = car.replace(/ẓ/g, "ظ");
	car = car.replace(/'/g, "ع");
	car = car.replace(/f/g, "ف");
	car = car.replace(/q/g, "ق");
	car = car.replace(/ẗ/g, "ة");
	car = car.replace(/ā/g, "ا");
	

	
	//Harakat
	car = car.replace(/ai/g, "َيْ");
	car = car.replace(/au/g, "َوْ");
	car = car.replace(/a/g, "َ");
	car = car.replace(/i/g, "ِ");
	car = car.replace(/u/g, "ُ");
	car = car.replace(/[eĕěê]/g, "ࣤ");
	car = car.replace(/[èé]/g, "َي");
	car = car.replace(/o/g, "َو");

	
	car = car.replace(/0/g, "٠");
	car = car.replace(/1/g, "١");
	car = car.replace(/2/g, "٢");
	car = car.replace(/3/g, "٣");
	car = car.replace(/4/g, "٤");
	car = car.replace(/5/g, "٥");
	car = car.replace(/6/g, "٦");
	car = car.replace(/7/g, "٧");
	car = car.replace(/8/g, "٨");
	car = car.replace(/9/g, "٩");
	car = car.replace(/\u002c/g, "\u060c");
	car = car.replace(/\u002e/g, "\u06d4");

document.converter.output.value=car;
}
