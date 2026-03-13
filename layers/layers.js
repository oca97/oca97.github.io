var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Commune_3 = new ol.format.GeoJSON();
var features_Commune_3 = format_Commune_3.readFeatures(json_Commune_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commune_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commune_3.addFeatures(features_Commune_3);
var lyr_Commune_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Commune_3, 
                style: style_Commune_3,
                popuplayertitle: 'Commune',
                interactive: false,
                title: '<img src="styles/legend/Commune_3.png" /> Commune'
            });
var format_Dpartement_4 = new ol.format.GeoJSON();
var features_Dpartement_4 = format_Dpartement_4.readFeatures(json_Dpartement_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dpartement_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dpartement_4.addFeatures(features_Dpartement_4);
var lyr_Dpartement_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dpartement_4, 
                style: style_Dpartement_4,
                popuplayertitle: 'Département',
                interactive: false,
                title: '<img src="styles/legend/Dpartement_4.png" /> Département'
            });
var format_4GFixe_5 = new ol.format.GeoJSON();
var features_4GFixe_5 = format_4GFixe_5.readFeatures(json_4GFixe_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4GFixe_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4GFixe_5.addFeatures(features_4GFixe_5);
var lyr_4GFixe_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4GFixe_5, 
                style: style_4GFixe_5,
                popuplayertitle: '4G Fixe',
                interactive: false,
                title: '<img src="styles/legend/4GFixe_5.png" /> 4G Fixe'
            });
var format_5GFixe_6 = new ol.format.GeoJSON();
var features_5GFixe_6 = format_5GFixe_6.readFeatures(json_5GFixe_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5GFixe_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5GFixe_6.addFeatures(features_5GFixe_6);
var lyr_5GFixe_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5GFixe_6, 
                style: style_5GFixe_6,
                popuplayertitle: '5G Fixe',
                interactive: false,
                title: '<img src="styles/legend/5GFixe_6.png" /> 5G Fixe'
            });
var format_ZoneInterditelacommercialisation_7 = new ol.format.GeoJSON();
var features_ZoneInterditelacommercialisation_7 = format_ZoneInterditelacommercialisation_7.readFeatures(json_ZoneInterditelacommercialisation_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZoneInterditelacommercialisation_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneInterditelacommercialisation_7.addFeatures(features_ZoneInterditelacommercialisation_7);
var lyr_ZoneInterditelacommercialisation_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneInterditelacommercialisation_7, 
                style: style_ZoneInterditelacommercialisation_7,
                popuplayertitle: 'Zone Interdite à la commercialisation',
                interactive: false,
                title: '<img src="styles/legend/ZoneInterditelacommercialisation_7.png" /> Zone Interdite à la commercialisation'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_Commune_3.setVisible(true);lyr_Dpartement_4.setVisible(true);lyr_4GFixe_5.setVisible(true);lyr_5GFixe_6.setVisible(true);lyr_ZoneInterditelacommercialisation_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleRoad_1,lyr_OSMStandard_2,lyr_Commune_3,lyr_Dpartement_4,lyr_4GFixe_5,lyr_5GFixe_6,lyr_ZoneInterditelacommercialisation_7];
lyr_Commune_3.set('fieldAliases', {'fid': 'fid', 'Depcom': 'Depcom', 'Nom_com': 'Nom_com', 'Etiquette': 'Etiquette', 'Fibre': 'Fibre', 'Millesime_Fibre': 'Millesime_Fibre', 'Poids': 'Poids', });
lyr_Dpartement_4.set('fieldAliases', {'fid': 'fid', 'Dep': 'Dep', 'Libelle': 'Libelle', 'Depcom': 'Depcom', 'Nom_com': 'Nom_com', 'Etiquette': 'Etiquette', 'RS': 'RS', 'layer': 'layer', 'path': 'path', });
lyr_4GFixe_5.set('fieldAliases', {'fid': 'fid', '4G +8Mbts': '4G +8Mbts', });
lyr_5GFixe_6.set('fieldAliases', {'fid': 'fid', 'LEGEND': 'LEGEND', });
lyr_ZoneInterditelacommercialisation_7.set('fieldAliases', {'Nom_com': 'Nom_com', 'Etiquette': 'Etiquette', });
lyr_Commune_3.set('fieldImages', {'fid': 'TextEdit', 'Depcom': 'TextEdit', 'Nom_com': 'TextEdit', 'Etiquette': 'TextEdit', 'Fibre': 'TextEdit', 'Millesime_Fibre': 'Range', 'Poids': 'Range', });
lyr_Dpartement_4.set('fieldImages', {'fid': 'TextEdit', 'Dep': 'TextEdit', 'Libelle': 'TextEdit', 'Depcom': 'TextEdit', 'Nom_com': 'TextEdit', 'Etiquette': 'TextEdit', 'RS': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_4GFixe_5.set('fieldImages', {'fid': 'TextEdit', '4G +8Mbts': 'TextEdit', });
lyr_5GFixe_6.set('fieldImages', {'fid': 'TextEdit', 'LEGEND': 'TextEdit', });
lyr_ZoneInterditelacommercialisation_7.set('fieldImages', {'Nom_com': 'TextEdit', 'Etiquette': 'TextEdit', });
lyr_Commune_3.set('fieldLabels', {'fid': 'hidden field', 'Depcom': 'hidden field', 'Nom_com': 'header label - always visible', 'Etiquette': 'hidden field', 'Fibre': 'hidden field', 'Millesime_Fibre': 'hidden field', 'Poids': 'hidden field', });
lyr_Dpartement_4.set('fieldLabels', {'fid': 'no label', 'Dep': 'no label', 'Libelle': 'no label', 'Depcom': 'no label', 'Nom_com': 'no label', 'Etiquette': 'no label', 'RS': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_4GFixe_5.set('fieldLabels', {'fid': 'hidden field', '4G +8Mbts': 'no label', });
lyr_5GFixe_6.set('fieldLabels', {'fid': 'hidden field', 'LEGEND': 'no label', });
lyr_ZoneInterditelacommercialisation_7.set('fieldLabels', {'Nom_com': 'hidden field', 'Etiquette': 'no label', });
lyr_ZoneInterditelacommercialisation_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});