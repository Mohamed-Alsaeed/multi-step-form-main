const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const circle3 = document.getElementById("circle3");
const circle4 = document.getElementById("circle4");
const step1 = document.getElementById("step1");
const inputFields = document.getElementsByTagName("input");
const next1 = document.getElementById("next1");
next1.onclick = function () {
	for (let i = 0; i <= 2; i++) {
		if (inputFields[i].value == "") {
			inputFields[i].placeholder = " This field is required";
			inputFields[i].className = "required";
		}
		if (inputFields[0].value != "" && inputFields[1].value != "" && inputFields[2].value != "") {
			step1.style.display = "none";
			step2.style.display = "block";
			circle1.classList.remove("circle_active");
			circle2.classList.add("circle_active");
		}
	}
};
const step2 = document.getElementById("step2");
const back2 = document.getElementById("back2");
const next2 = document.getElementById("next2");
const step2options = [document.getElementById("arcade"), document.getElementById("advanced"), document.getElementById("pro")];
const monthYearStep2 = document.getElementById("month_year_step2");
let nextMonYea = monthYearStep2.firstElementChild;
let p = document.getElementById("p");
let monthStep2 = document.getElementById("month");
let yearStep2 = document.getElementById("year");
let val = 1;
const arcadeYear = document.getElementById("arcadeYear");
const advancedYear = document.getElementById("advancedYear");
const proYear = document.getElementById("proYear");
p.style.left = "5px";
monthStep2.style.color = "var(--Marine-blue)";
yearStep2.style.color = "var(--Cool-gray)";
monthYearStep2.onclick = function () {
	val++;
	if (val % 2 === 0) {
		p.style.removeProperty("left");
		p.style.right = "5px";
		yearStep2.style.color = "var(--Marine-blue)";
		monthStep2.style.color = "var(--Cool-gray)";
		document.styleSheets[0].rules[29].style.removeProperty("visibility");
		arcadeYear.textContent = "$90/ye";
		advancedYear.textContent = "$120/ye";
		proYear.textContent = "$150/ye";
		step2Needs(1);
	} else {
		p.style.removeProperty("right");
		p.style.left = "5px";
		monthStep2.style.color = "var(--Marine-blue)";
		yearStep2.style.color = "var(--Cool-gray)";
		document.styleSheets[0].rules[29].style.setProperty("visibility", "hidden");
		arcadeYear.textContent = "$9/mo";
		advancedYear.textContent = "$12/mo";
		proYear.textContent = "$15/mo";
		step2Needs(2);
	}
};
var r = 0;
step2options[0].addEventListener("click", function () {
	this.classList.add("step2_choosen");
	step2options[1].classList.remove("step2_choosen");
	step2options[2].classList.remove("step2_choosen");
	r = 0;
});
step2options[1].addEventListener("click", function () {
	this.classList.add("step2_choosen");
	step2options[0].classList.remove("step2_choosen");
	step2options[2].classList.remove("step2_choosen");
	r = 1;
});
step2options[2].addEventListener("click", function () {
	this.classList.add("step2_choosen");
	step2options[1].classList.remove("step2_choosen");
	step2options[0].classList.remove("step2_choosen");
	r = 2;
});
back2.onclick = function () {
	step1.style.display = "flex";
	step2.style.display = "none";
	circle2.classList.remove("circle_active");
	circle1.classList.add("circle_active");
};
next2.onclick = function () {
	step2.style.display = "none";
	step3.style.display = "flex";
	circle2.classList.remove("circle_active");
	circle3.classList.add("circle_active");
};
const step3 = document.getElementById("step3");
const back3 = document.getElementById("back3");
const next3 = document.getElementById("next3");
const onlineServiceBox = document.getElementById("Online_Service");
const onlineServiceDiv = document.getElementById("onlineServiceDiv");
var onlineServiceCost = document.getElementById("onlineServiceCost");
const largerStorageBox = document.getElementById("Larger_storage");
const largerStorageDiv = document.getElementById("largerStorageDiv");
var largerStorageCost = document.getElementById("largerStorageCost");
const customizableProfileBox = document.getElementById("Customizable_Profile");
const customizableProfileDiv = document.getElementById("customizableProfileDiv");
var customizableProfileCost = document.getElementById("customizableProfileCost");
onlineServiceBox.onclick = () => {
	onlineServiceDiv.classList.toggle("step3choose");
};
largerStorageBox.onclick = () => {
	largerStorageDiv.classList.toggle("step3choose");
};
customizableProfileBox.onclick = () => {
	customizableProfileDiv.classList.toggle("step3choose");
};
function step2Needs(a) {
	if ((a = 1)) {
		onlineServiceCost.textContent = "+$10/ye";
		largerStorageCost.textContent = "+$20/ye";
		customizableProfileCost.textContent = "+$20/ye";
	} else {
		onlineServiceCost.textContent = "+$1/mo";
		largerStorageCost.textContent = "+$2/mo";
		customizableProfileCost.textContent = "+$2/mo";
	}
}
back3.onclick = function () {
	step2.style.display = "flex";
	step3.style.display = "none";
	circle2.classList.add("circle_active");
	circle3.classList.remove("circle_active");
};
next3.onclick = function () {
	step3.style.display = "none";
	step4.style.display = "flex";
	circle3.classList.remove("circle_active");
	circle4.classList.add("circle_active");
	step4needs();
};
const step4 = document.getElementById("step4");
const back4 = document.getElementById("back4");
const next4 = document.getElementById("next4");
const step2Choosen = document.getElementById("step2_choosen");
const step4cost = document.getElementById("step4cost");
const step3Choosen1 = document.getElementById("step3_choosen1");
const step3Choosen2 = document.getElementById("step3_choosen2");
const step3Choosen3 = document.getElementById("step3_choosen3");
const choosen1Value = document.getElementById("choosen1_value");
const choosen2Value = document.getElementById("choosen2_value");
const choosen3Value = document.getElementById("choosen3_value");
const monthYearStep4 = document.getElementById("month_year_step4");
const step4totalcost = document.getElementById("step4totalcost");
var step4totalcostValue = 0;
function step4needs() {
	if (val % 2 === 0) {
		choosen1Value.textContent = " $10/ye";
		choosen2Value.textContent = " $20/ye";
		choosen3Value.textContent = " $20/ye";
		switch (r) {
			case 0:
				step2Choosen.textContent = "Arcade ( Yearly )";
				step4cost.textContent = " $90/ye";
				step4totalcostValue = 90;
				break;
			case 1:
				step2Choosen.textContent = "Advanced ( Yearly )";
				step4cost.textContent = " $120/ye";
				step4totalcostValue = 120;
				break;
			case 2:
				step2Choosen.textContent = "Pro ( Yearly )";
				step4cost.textContent = " $120/ye";
				step4totalcostValue = 120;
				break;
		}
		monthYearStep4.textContent = " Year";
		coststep4options(1);
		step4totalcost.textContent = `$${step4totalcostValue}/ye`;
	} else {
		switch (r) {
			case 0:
				step2Choosen.textContent = "Arcade ( Monthly )";
				step4cost.textContent = " $9/mo";
				step4totalcostValue = 9;
				break;
			case 1:
				step2Choosen.textContent = "Advanced ( Monthly )";
				step4cost.textContent = " $12/mo";
				step4totalcostValue = 12;
				break;
			case 2:
				step2Choosen.textContent = "Pro ( Monthly )";
				step4cost.textContent = " $12/mo";
				step4totalcostValue = 12;
				break;
		}
		monthYearStep4.textContent = " Month";
		coststep4options(2);
		step4totalcost.textContent = `$${step4totalcostValue}/mo`;
	}
	function coststep4options(a) {
		if (a === 1) {
			onlineServiceDiv.classList.contains("step3choose") ? (step4totalcostValue += 10) : (step3Choosen1.style.display = "none");
			largerStorageDiv.classList.contains("step3choose") ? (step4totalcostValue += 20) : (step3Choosen2.style.display = "none");
			customizableProfileDiv.classList.contains("step3choose") ? (step4totalcostValue += 20) : (step3Choosen3.style.display = "none");
		} else {
			onlineServiceDiv.classList.contains("step3choose") ? (step4totalcostValue += 1) : (step3Choosen1.style.display = "none");
			largerStorageDiv.classList.contains("step3choose") ? (step4totalcostValue += 2) : (step3Choosen2.style.display = "none");
			customizableProfileDiv.classList.contains("step3choose") ? (step4totalcostValue += 2) : (step3Choosen3.style.display = "none");
		}
	}
	onlineServiceDiv.classList.contains("step3choose")
		? val % 2 === 0
			? (step4totalcostValue += 10)
			: (step4totalcostValue += 1)
		: (step3Choosen1.style.display = "none");
	largerStorageDiv.classList.contains("step3choose")
		? val % 2 === 0
			? (step4totalcostValue += 20)
			: (step4totalcostValue += 2)
		: (step3Choosen2.style.display = "none");
	customizableProfileDiv.classList.contains("step3choose")
		? val % 2 === 0
			? (step4totalcostValue += 20)
			: (step4totalcostValue += 2)
		: (step3Choosen3.style.display = "none");
}
back4.onclick = function () {
	step3.style.display = "flex";
	step4.style.display = "none";
	circle3.classList.add("circle_active");
	circle4.classList.remove("circle_active");
};
next4.onclick = function () {
	step4.style.display = "none";
	step5.style.display = "flex";
	circle4.classList.add("circle_active");
	circle3.classList.add("circle_active");
	circle2.classList.add("circle_active");
	circle1.classList.add("circle_active");
};
const step5 = document.getElementById("step5");
