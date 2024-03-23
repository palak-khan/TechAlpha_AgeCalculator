
function getDOB() {
    // Getting input from HTML input element
    let data = document.getElementById("inputDob").value;
    
    // Convert input data to usable format as day, month, and year
    let dob = new Date(data);
    let day = dob.getDate();
    let month = dob.getMonth();
    let year = dob.getFullYear();
 
    // Getting current date
    let now = new Date();
    
    // Calculating the difference between the current date and the date of birth
    let yearDiff = now.getFullYear() - year;
    let monthDiff = now.getMonth() - month;
    let dateDiff = now.getDate() - day;
 
    // Adjusting differences based on months and days
    if (monthDiff < 0 || (monthDiff === 0 && dateDiff < 0)) {
        yearDiff--;
        monthDiff += 12;
    }
    if (dateDiff < 0) {
        dateDiff += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        monthDiff--;
    }
 
    // Show calculated age as output
    // and "Invalid Date" if wrong input is given
    if (yearDiff < 0)
        document.getElementById("currentAge").innerHTML = "Invalid Date";
    else
        document.getElementById("currentAge").innerHTML = "Your current Age is " + yearDiff + " years " + monthDiff + " months " + dateDiff + " days";
}

// Calling getDOB() function when the "Calculate" button is clicked
document.querySelector('button').addEventListener('click', getDOB);

// Function to provide default date value
function currentDate() {
	console.log(formatted());
	let d = document.getElementById("cdate");
	d.value = formatted();
}

function formatted(date = new Date()) {
	return [
		date.getFullYear(),
		short(date.getMonth() + 1),
		short(date.getDate()),
	].join("-");
}
function short(num) {
	return num.toString().padStart(2, "0");
}

// Calling current date function to set default date value
currentDate();

function clearAge() {
    document.getElementById("currentAge").innerHTML = "";

    // Reset input fields
    document.getElementById("inputDob").value = "2000-01-01";
    document.getElementById("cdate").value = "";
}

// Calling clearAge() function when the "Clear Age" button is clicked
document.getElementById('clearButton').addEventListener('click', clearAge);