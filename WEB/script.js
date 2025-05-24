var pos_1=0.25
var pos_2=0.5
var pos_3=0.75
var sliding=0
function update1(){
	if(pos_1>pos_2){
		pos_2=pos_1;
		update2();
	}
	document.getElementById('slide1').style.width=''+(pos_1*100)+'%';
	document.getElementById('slider1').style.left='calc('+(pos_1*100)+'% - 5px)';
	document.getElementById('handle1').style.left='calc('+(pos_1*100)+'% - 1.5em)';
	if(pos_1>0.05){
	    document.getElementById('year1875').style.display='block';
	    document.getElementById('year1875').style.left=''+(pos_1*50)+'%';
	}else{
	    document.getElementById('year1875').style.display='none';
	}
	if(pos_2-pos_1>0.05){
	    document.getElementById('year1928').style.display='block';
	    document.getElementById('year1928').style.left=''+((pos_2+pos_1)*50)+'%';
	}else{
	    document.getElementById('year1928').style.display='none';
	}
}
function update2(){
	if(pos_2>pos_3){
		pos_3=pos_2;
		update3();
	}
	if(pos_2<pos_1){
		pos_1=pos_2;
		update1();
	}
	document.getElementById('slide2').style.width=''+(pos_2*100)+'%';
	document.getElementById('slider2').style.left='calc('+(pos_2*100)+'% - 5px)';
	document.getElementById('handle2').style.left='calc('+(pos_2*100)+'% - 1.5em)';
    if(pos_2-pos_1>0.05){
	    document.getElementById('year1928').style.display='block';
	    document.getElementById('year1928').style.left=''+((pos_2+pos_1)*50)+'%';
	}else{
	    document.getElementById('year1928').style.display='none';
	}
	if(pos_3-pos_2>0.05){
	    document.getElementById('year1975').style.display='block';
	    document.getElementById('year1975').style.left=''+((pos_3+pos_2)*50)+'%';
	}else{
	    document.getElementById('year1975').style.display='none';
	}
}
function update3(){
	if(pos_3<pos_2){
		pos_2=pos_3;
		update2();
	}
	document.getElementById('slide3').style.width=''+(pos_3*100)+'%';
	document.getElementById('slider3').style.left='calc('+(pos_3*100)+'% - 5px)';
	document.getElementById('handle3').style.left='calc('+(pos_3*100)+'% - 1.5em)';
	if(pos_3-pos_2>0.05){
	    document.getElementById('year1975').style.display='block';
	    document.getElementById('year1975').style.left=''+((pos_3+pos_2)*50)+'%';
	}else{
	    document.getElementById('year1975').style.display='none';
	}
	if(1-pos_3>0.05){
	    document.getElementById('year2025').style.display='block';
	    document.getElementById('year2025').style.left=''+((1+pos_3)*50)+'%';
	}else{
	    document.getElementById('year2025').style.display='none';
	}
}

function set_update_i(i,pos){
    if(i==1){
        pos_1=pos;
        update1();
    }
    if(i==2){
        pos_2=pos;
        update2();
    }
    if(i==3){
        pos_3=pos;
        update3();
    }
}

for(let i=1;i<=3;i++){
    document.getElementById('handle'+i).addEventListener('mousedown', (e) => {
        sliding=i;
        document.body.style.cursor = 'ew-resize';
    });    
}

document.addEventListener('mousemove', (e) => {
    if (sliding>0) {
        set_update_i(sliding,e.clientX/window.screen.availWidth)
    }
});

document.addEventListener('mouseup', () => {
    sliding=0;
    document.body.style.cursor = 'default';
});

L_NO_TOUCH = false;
L_DISABLE_3D = false;

var options = {
    format: "png",
    layer: "ch.swisstopo.zeitreihen",
    maxNativeZoom: 26,
    timestamp: "18751231",
    opacity: 1
};

var layers = [ L.tileLayer.swiss(options)];

var map1 = L.map("map1", {
    crs: L.CRS.EPSG2056,
    layers: layers,
    center: [46.5276975, 6.630272],
	zoom: 21
});
L.control.scale().addTo(map1);

fetch('../notebooks/roads_1975_wgs84.geojson').then(resp=>{
    resp.json().then(geojson=>{
        var geojson_layer = L.geoJSON(geojson);
        geojson_layer.addTo(map1);
    });
});

var options = {
    format: "png",
    layer: "ch.swisstopo.zeitreihen",
    maxNativeZoom: 26,
    timestamp: "19281231",
    opacity: 1
};

var layers = [ L.tileLayer.swiss(options)];

var map2 = L.map("map2", {
    crs: L.CRS.EPSG2056,
    layers: layers,
    center: [46.5276975, 6.630272],
	zoom: 21
});
L.control.scale().addTo(map2);

fetch('../notebooks/roads_2025_wgs84.geojson').then(resp=>{
    resp.json().then(geojson=>{
        var geojson_layer = L.geoJSON(geojson);
        geojson_layer.addTo(map2);
    });
});

var options = {
    format: "png",
    layer: "ch.swisstopo.zeitreihen",
    maxNativeZoom: 26,
    timestamp: "19751231",
    opacity: 1
};

var layers = [ L.tileLayer.swiss(options)];

var map3 = L.map("map3", {
    crs: L.CRS.EPSG2056,
    layers: layers,
    center: [46.5276975, 6.630272],
	zoom: 21
});
L.control.scale().addTo(map3);

fetch('../notebooks/roads_1975_wgs84.geojson').then(resp=>{
    resp.json().then(geojson=>{
        var geojson_layer = L.geoJSON(geojson);
        geojson_layer.addTo(map3);
    });
});

var options = {
    format: "png",
    layer: "ch.swisstopo.zeitreihen",
    maxNativeZoom: 26,
    timestamp: "20211231",
    opacity: 1
};

var layers = [ L.tileLayer.swiss(options)];

var map4 = L.map("map4", {
    crs: L.CRS.EPSG2056,
    layers: layers,
    center: [46.5276975, 6.630272],
	zoom: 21
});
L.control.scale().addTo(map4);

fetch('../notebooks/roads_2025_wgs84.geojson').then(resp=>{
    resp.json().then(geojson=>{
        var geojson_layer = L.geoJSON(geojson);
        geojson_layer.addTo(map4);
    });
});

let moving=0;
function update_maps(center,zoom,orig){
    if(orig!==moving) return;
    if(orig!==1) map1.setView(center,zoom);
    if(orig!==2) map2.setView(center,zoom);
    if(orig!==3) map3.setView(center,zoom);
    if(orig!==4) map4.setView(center,zoom);
}
map1.addEventListener('zoom',event=>{
    update_maps(map1.getCenter(),map1.getZoom(),1);
});
map1.addEventListener('move',event=>{
    update_maps(map1.getCenter(),map1.getZoom(),1);
});
map1.addEventListener('mousedown',event=>{
    moving=1;
});
document.getElementById('map1').addEventListener('wheel',event=>{
    moving=1;
});
map2.addEventListener('zoom',event=>{
    update_maps(map2.getCenter(),map2.getZoom(),2);
});
map2.addEventListener('move',event=>{
    update_maps(map2.getCenter(),map2.getZoom(),2);
});
map2.addEventListener('mousedown',event=>{
    moving=2;
});
document.getElementById('map2').addEventListener('wheel',event=>{
    moving=2;
});
map3.addEventListener('zoom',event=>{
    update_maps(map3.getCenter(),map3.getZoom(),3);
});
map3.addEventListener('move',event=>{
    update_maps(map3.getCenter(),map3.getZoom(),3);
});
map3.addEventListener('mousedown',event=>{
    moving=3;
});
document.getElementById('map3').addEventListener('wheel',event=>{
    moving=3;
});
map4.addEventListener('zoom',event=>{
    update_maps(map4.getCenter(),map4.getZoom(),4);
});
map4.addEventListener('move',event=>{
    update_maps(map4.getCenter(),map4.getZoom(),4);
});
map4.addEventListener('mousedown',event=>{
    moving=4;
});
document.getElementById('map4').addEventListener('wheel',event=>{
    moving=4;
});

update1();
update2();
update3();

const delay = ms => new Promise(res => setTimeout(res, ms));
async function recenter_maps(){
    console.log("start recentring within 0.1s");
    await delay(100);
    console.log("start recentring");
    document.getElementById('slide1').style.width='100%';
    document.getElementById('slide2').style.width='100%';
    document.getElementById('slide3').style.width='100%';
    map1.invalidateSize();
    map2.invalidateSize();
    map3.invalidateSize();
    moving=4;
    update_maps(map4.getCenter(),map4.getZoom(),4);
    update1();
    update2();
    update3();
}

window.onresize = recenter_maps

function reset_map(){
    moving=5;
    update_maps([46.5276975, 6.630272],21,5);
}

const ICONS = {
    1928 : L.icon({'iconUrl':'icon1928.png'}),
    1975 : L.icon({'iconUrl':'icon1975.png'}),
    2025 : L.icon({'iconUrl':'icon2025.png'})
}

function show_description(title,description){
    document.getElementById('popup_title').innerText=title;
    document.getElementById('popup_info').innerHTML=description;
    reduce_popup();
    document.getElementById('popup').style.display='block';
}

fetch('data.json').then(response => {
    response.json().then(points => {
        points.forEach(point => {
            function on_click(){
                show_description(point.title,point.description);
            }
            marker1 = L.marker([point.latitude,point.longitude],{'icon':ICONS[point.year]}).addTo(map1).on('click',on_click);
            marker2 = L.marker([point.latitude,point.longitude],{'icon':ICONS[point.year]}).addTo(map2).on('click',on_click);
            marker3 = L.marker([point.latitude,point.longitude],{'icon':ICONS[point.year]}).addTo(map3).on('click',on_click);
            marker4 = L.marker([point.latitude,point.longitude],{'icon':ICONS[point.year]}).addTo(map4).on('click',on_click);
        });
    });
});

var popup_is_enlarged=false;

function enlarge_popup(){
    popup_is_enlarged=true;
    document.getElementById('popup').style.top='20%';
    //document.getElementById('popup').style.bottom='10%';
    document.getElementById('popup_button_resize').className='fleche-bas';
}
function reduce_popup(){
    popup_is_enlarged=false;
    document.getElementById('popup').style.top='70%';
    document.getElementById('popup').style.bottom='0';
    document.getElementById('popup_button_resize').className='fleche-haut';
}
function toggle_popup_size(){
    if(popup_is_enlarged){
        reduce_popup();
    }else{
        enlarge_popup();
    }
}
function hide_popup(){
    reduce_popup();
    document.getElementById('popup').style.display='none';
}


document.getElementById('popup').onscroll=enlarge_popup;
document.getElementById('popup_button_resize').onclick=toggle_popup_size;
document.getElementById('popup_button_close').onclick=hide_popup;
