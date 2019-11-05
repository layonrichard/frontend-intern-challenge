var xmlhttp = new XMLHttpRequest();
var url = "JavaScript/urls.json";
var get = "";
var input = "";
var link = [];
var shortLink = [];
var i;
var close = "";
var count_clicks = 0;
var number_clicks = "";
var arr_links = [];
var count_links = 0;
var l1 = 0,l2 = 0,l3 = 0,l4 = 0,l5 = 0,l6 = 0,l7 = 0,l8 = 0,l9 = 0,l10 = 0;
var link_1 = "", link_2 = "", link_3 = "", link_4 = "", link_5 = "";
var count_views_1 = 0, count_views_2 = 0, count_views_3 = 0, count_views_4 = 0, count_views_5 = 0;
var aux;

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var linkArr = JSON.parse(this.responseText);
        linkFunction(linkArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function linkFunction(url) {
    for(i = 0; i < url.length; i++) {
        shortLink.push(url[i].shortUrl);
        link.push(url[i].url);
    }
}

function getLink(){
    get = document.getElementById('link').value;
    input = document.getElementById('link');
    close = document.getElementById('close');
    number_clicks = document.getElementById('number_clicks');
    for(i = 0; i < link.length; i++){
        if(get == link[i]){
            input.value = shortLink[i];
            close.hidden = false;
            change = true;        
            count_clicks++;
            url[i].clicks = count_clicks;
            if(get === 'http://globo.com'){
            	l1++;
            } else if(get === 'http://google.com'){
            	l2++;
            }else if(get === 'http://terra.com.br'){
            	l3++;
            }else if(get === 'http://facebook.com'){
            	l4++;
            }else if(get === 'http://diariocatarinense.com.br'){
            	l5++;
            }else if(get === 'http://uol.com.br'){
            	l6++;
            }else if(get === 'http://chaordic.com.br'){
            	l7++;
            }else if(get === 'http://youtube.com'){
            	l8++;
            }else if(get === 'http://twitter.com'){
            	l9++;
            }else if(get === 'http://bing.com'){
            	l10++;
            }
            number_clicks.value = count_clicks;
            /*if(count_clicks < 1000){
                number_clicks.value = count_clicks;
            } else if(count_clicks >= 1000){
                number_clicks.value = count_clicks;
            }*/
            break;
        }
    }
    if(arr_links != null || arr_links.length != 0){
		if(link.indexOf(get) > -1){
			arr_links.push(link[i]);
		}
    }
}

function reset(){
    for (i = 0; i < shortLink.length; i++) {
        if(get == link[i]){
            input.value = link[i];
        }
    }
    input.style.color = 'orange';
    close.hidden = true;
}

/*function ranking(url){
	link_1 = document.getElementById('link_1');
	link_2 = document.getElementById('link_2');
	link_3=document.getElementById('link_3');
	link_4=document.getElementById('link_4');
	link_5=document.getElementById('link_5');
	count_views_1 = document.getElementById('count_views_1');
	count_views_2 = document.getElementById('count_views_2');
	count_views_3 = document.getElementById('count_views_3');
	count_views_4 = document.getElementById('count_views_4');
	count_views_5 = document.getElementById('count_views_5');
    for(i = 0; i < url.length; i++) {
    	console.log(url[i].clicks)
    }

	if((l1 > l2) && (l1 > l3) && (l1 > l4) && (l1 > l5) && (l1 > l6) && (l1 > l7) && (l1 > l8) && (l1 > l9) && (l1 > l10)){
		link_1.text = 'http://globo.com';
		count_views_1.innerHTML = l1;
		if((l2 > l3) && (l2 > l4) && (l2 > l5) && (l1 > l6) && (l1 > l7) && (l1 > l8) && (l1 > l9) && (l1 > l10)){
			link_2.text = 'http://google.com';
			count_views_2.innerHTML = l2;
		} else if((l3 > l4) && (l3 > l5) && (l3 > l6) && (l3 > l7) && (l3 > l8) && (l3 > l9) && (l3 > l10)){
			link_3.text = 'http://terra.com.br';
			count_views_2.innerHTML = l2;
		}
	}
}*/