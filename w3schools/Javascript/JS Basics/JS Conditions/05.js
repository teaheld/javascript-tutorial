var text;
switch(new Date().getDay()) {
	case 6:
		text = "Today is Saturday!";
		break;

	case 0:
		text = "Today is Sunday!";
		break;

	default:
		text = "Looking forwart to the Weekend!";
}

document.getElementById("demo").innerHTML = text;
