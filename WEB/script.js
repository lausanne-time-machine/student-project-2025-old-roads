var pos_1=0.25
var pos_2=0.5
var pos_3=0.75
var sliding=0
function update1(){
    if(pos_1<0){
        pos_1=0;
    }
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
    if(pos_3>1){
        pos_3=1;
    }
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
        set_update_i(sliding,e.clientX/document.body.clientWidth)
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

var layer1 = L.tileLayer.swiss(options);
var layers = [layer1];
const road_layers = [];
const road_style = {
    "color": "#4A051C",
    "weight": "2"
}
var road_status = true

function toggle_roads(){
    if (road_status) {
        road_layers.forEach(layer => {layer.remove();});
        road_status = false;
        document.getElementById("route").style.filter = "invert(0%)";
        } else {
        road_layers[0].addTo(map1);
        road_layers[1].addTo(map2);
        road_layers[2].addTo(map3);
        road_layers[3].addTo(map4);
        road_status = true;
        document.getElementById("route").style.filter = "invert(70%)";
        }
}

var map1 = L.map("map1", {
    crs: L.CRS.EPSG2056,
    layers: layers,
    center: [46.5276975, 6.630272],
	zoom: 21
});
L.control.scale().addTo(map1);

fetch('roads/roads_1875_wgs84.geojson').then(resp=>{
    resp.json().then(geojson=>{
        var geojson_layer = L.geoJSON(geojson, {style: road_style});
        geojson_layer.addTo(map1);
        road_layers.push(geojson_layer);
    });
});

var options = {
    format: "png",
    layer: "ch.swisstopo.zeitreihen",
    maxNativeZoom: 26,
    timestamp: "19281231",
    opacity: 1
};

var layer2 = L.tileLayer.swiss(options);
var layers = [layer2];

var map2 = L.map("map2", {
    crs: L.CRS.EPSG2056,
    layers: layers,
    center: [46.5276975, 6.630272],
	zoom: 21
});
L.control.scale().addTo(map2);

fetch('roads/roads_1928_wgs84.geojson').then(resp=>{
    resp.json().then(geojson=>{
        var geojson_layer = L.geoJSON(geojson, {style: road_style});
        geojson_layer.addTo(map2);
        road_layers.push(geojson_layer);
    });
});

var options = {
    format: "png",
    layer: "ch.swisstopo.zeitreihen",
    maxNativeZoom: 26,
    timestamp: "19751231",
    opacity: 1
};

var layer3 = L.tileLayer.swiss(options);
var layers = [layer3];

var map3 = L.map("map3", {
    crs: L.CRS.EPSG2056,
    layers: layers,
    center: [46.5276975, 6.630272],
	zoom: 21
});
L.control.scale().addTo(map3);

fetch('roads/roads_1975_wgs84.geojson').then(resp=>{
    resp.json().then(geojson=>{
        var geojson_layer = L.geoJSON(geojson, {style: road_style});
        geojson_layer.addTo(map3);
        road_layers.push(geojson_layer);
    });
});

var options = {
    format: "png",
    layer: "ch.swisstopo.zeitreihen",
    maxNativeZoom: 26,
    timestamp: "20211231",
    opacity: 1
};

var layer4 = L.tileLayer.swiss(options);
var layers = [layer4];

var map4 = L.map("map4", {
    crs: L.CRS.EPSG2056,
    layers: layers,
    center: [46.5276975, 6.630272],
	zoom: 21
});
L.control.scale().addTo(map4);

fetch('roads/roads_2025_wgs84.geojson').then(resp=>{
    resp.json().then(geojson=>{
        var geojson_layer = L.geoJSON(geojson, {style: road_style});
        geojson_layer.addTo(map4);
        road_layers.push(geojson_layer);
    });
});

var current_map_level = 2;
function toggle_map(){
    current_map_level += 1;
    if (current_map_level>2){
        current_map_level = 0
    }
    let opacity = current_map_level * 0.33 + 0.33;
    layer1.setOpacity(opacity);
    layer2.setOpacity(opacity);
    layer3.setOpacity(opacity);
    layer4.setOpacity(opacity);
    let invert_level = 30+30*current_map_level;
    document.getElementById("map_toggle").style.filter = "invert("+ invert_level +"%)";
}

const densities_layers = [];
densities_style = {
    opacity: 0,
    color: "red",
};

fetch('densities/density_incr_1875_to_1928_wgs84_n30.geojson').then(resp=>{
    resp.json().then(geojson => {
        var geojson_layer = L.geoJSON(geojson, {
            onEachFeature: (feature, layer) => {layer.setStyle({fillOpacity: feature.properties["1875_to_1928"]/0.036066608822823476});},
            style: densities_style
        });
        densities_layers.push(geojson_layer);
    });
});

fetch('densities/density_incr_1928_to_1975_wgs84_n30.geojson').then(resp=>{
    resp.json().then(geojson => {
        var geojson_layer = L.geoJSON(geojson, {
            onEachFeature: (feature, layer) => {layer.setStyle({fillOpacity: feature.properties["1928_to_1975"]/0.03299214648698071});},
            style: densities_style
        });
        densities_layers.push(geojson_layer);
    });
});

fetch('densities/density_incr_1975_to_2025_wgs84_n30.geojson').then(resp=>{
    resp.json().then(geojson => {
        var geojson_layer = L.geoJSON(geojson, {
            onEachFeature: (feature, layer) => {layer.setStyle({fillOpacity: feature.properties["1975_to_2025"]/0.03299214648698071});},
            style: densities_style
        });
        densities_layers.push(geojson_layer);
    });
});

var density_status = false
function toggle_density(){
    density_status = !density_status;
    if (density_status) {
        densities_layers[0].addTo(map2);
        densities_layers[1].addTo(map3);
        densities_layers[2].addTo(map4);
        document.getElementById("densite").style.filter = "invert(70%)";
    } else {
        densities_layers.forEach(layer => {layer.remove();});
        document.getElementById("densite").style.filter = "invert(0%)";
    }
}

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

const SLIDER = {
    1928 : 1,
    1975 : 2,
    2025 : 3,
}

async function show_description(point){
    document.getElementById('popup_title').innerText=point.title;
    document.getElementById('popup_info').innerHTML=point.description;
    reduce_popup();
    document.getElementById('popup').style.display='block';

    map1.panTo([point.latitude,point.longitude], 22, {noMoveStart: true, duration: 0});
    map2.panTo([point.latitude,point.longitude], 22, {noMoveStart: true, duration: 0});
    map3.panTo([point.latitude,point.longitude], 22, {noMoveStart: true, duration: 0});
    map4.panTo([point.latitude,point.longitude], 22, {noMoveStart: true, duration: 0});

    let i = SLIDER[point.year];
    set_update_i(i-1, 0.049);
    set_update_i(i, 0.5);
    set_update_i(i+1, 0.967);
}

fetch('data.json').then(response => {
    response.json().then(points => {
        points.forEach(point => {
            function on_click(){
                show_description(point);
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
