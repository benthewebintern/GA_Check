
function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
    while (node) {
        html += node.outerHTML;
        node = node.nextSibling;
    }
    var city = "";
            switch (true) {
	    case html.includes("UA-9296528-5"):
			city += 'Middleton';
	    	break;
	    case html.includes("UA-9296528-13"):
			city += 'Rhinelander';
	        break;
	    case html.includes("UA-9296528-39"):
			city += 'West Bend';
	        break;
	    case html.includes("UA-9296528-21"):
			city += 'Vilas County';
	        break;
	    case html.includes("UA-9296528-8"):
			city += 'Oneida County';
	        break;
	    case html.includes("UA-9296528-4"):
			city += 'Wisconsin Travel Best Bets';
	        break;
	    case html.includes("UA-9296528-10"):
			city += ' Boulder Junction';
	        break;
	    case html.includes("UA-3678323-79"):
			city += 'Fitchburg';
			break;
		case html.includes("'UA-9296528-22'"):
			city += ' Porcupine Mountains';
			break;
		case html.includes("UA-9296528-15"):
			city += 'Rusk County';
			break;
		case html.includes("UA-19063200-2"):
			city += ' Marshfield';
			break;
		case html.includes("UA-9296528-19"):
			city += 'Miss. River Parkway Commission';
			break;
		case html.includes("UA-25665374-1"):
			city += 'Tomahawk';
			break;
	     default:
	     	city += 'Missing tag';
	     }
	var count = (html.match(/UA-/g) || [] ).length;
	return "The code is for " + city + '\n'
		+ "GA tag was called " + count + " times." + '\n'
	 	+ " Target is 2 times";
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});