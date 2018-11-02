var wms_layers = [];

        var lyr_MapSurferOSMRoadsGrayscale_0 = new ol.layer.Tile({
            'title': 'MapSurferOSMRoadsGrayscale_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://korona.geog.uni-heidelberg.de/tiles/roadsg/x={x}&y={y}&z={z}'
            })
        });var format_Parishes_LDOTD_2007_1 = new ol.format.GeoJSON();
var features_Parishes_LDOTD_2007_1 = format_Parishes_LDOTD_2007_1.readFeatures(json_Parishes_LDOTD_2007_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parishes_LDOTD_2007_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Parishes_LDOTD_2007_1.addFeatures(features_Parishes_LDOTD_2007_1);var lyr_Parishes_LDOTD_2007_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parishes_LDOTD_2007_1, 
                style: style_Parishes_LDOTD_2007_1,
                title: '<img src="styles/legend/Parishes_LDOTD_2007_1.png" /> Parishes_LDOTD_2007'
            });var format_Casesinfloodways_2 = new ol.format.GeoJSON();
var features_Casesinfloodways_2 = format_Casesinfloodways_2.readFeatures(json_Casesinfloodways_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casesinfloodways_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Casesinfloodways_2.addFeatures(features_Casesinfloodways_2);var lyr_Casesinfloodways_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Casesinfloodways_2, 
                style: style_Casesinfloodways_2,
    title: 'Cases in floodways<br />\
    <img src="styles/legend/Casesinfloodways_2_0.png" /> AWARD APPEALS IN PROGRESS<br />\
    <img src="styles/legend/Casesinfloodways_2_1.png" /> FLOODWAY-HOLD APPLICATION<br />\
    <img src="styles/legend/Casesinfloodways_2_2.png" /> INELIGIBLE<br />\
    <img src="styles/legend/Casesinfloodways_2_3.png" /> Mobile Home<br />\
    <img src="styles/legend/Casesinfloodways_2_4.png" /> SOLUTION 4<br />\
    <img src="styles/legend/Casesinfloodways_2_5.png" /> Survey Rejected<br />\
    <img src="styles/legend/Casesinfloodways_2_6.png" /> Survey Rejected: Duplicate Address<br />\
    <img src="styles/legend/Casesinfloodways_2_7.png" /> WITHDRAWN<br />\
    <img src="styles/legend/Casesinfloodways_2_8.png" /> ZERO AWARD<br />\
    <img src="styles/legend/Casesinfloodways_2_9.png" /> [no data]<br />'
        });

lyr_MapSurferOSMRoadsGrayscale_0.setVisible(true);lyr_Parishes_LDOTD_2007_1.setVisible(true);lyr_Casesinfloodways_2.setVisible(true);
var layersList = [lyr_MapSurferOSMRoadsGrayscale_0,lyr_Parishes_LDOTD_2007_1,lyr_Casesinfloodways_2];
lyr_Parishes_LDOTD_2007_1.set('fieldAliases', {'PARISH': 'PARISH', 'FIPS': 'FIPS', 'PARISH_FIP': 'PARISH_FIP', 'Parish_Num': 'Parish_Num', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Casesinfloodways_2.set('fieldAliases', {'Account_ID': 'Account_ID', 'Response_I': 'Response_I', 'Address': 'Address', 'City': 'City', 'State': 'State', 'Zip': 'Zip', 'Parish': 'Parish', 'Name': 'Name', 'eGrants_Ty': 'eGrants_Ty', 'ERR_Type': 'ERR_Type', 'STATUS': 'STATUS', 'addrtype': 'addrtype', 'addrlocat': 'addrlocat', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_Parishes_LDOTD_2007_1.set('fieldImages', {'PARISH': 'TextEdit', 'FIPS': 'TextEdit', 'PARISH_FIP': 'TextEdit', 'Parish_Num': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Casesinfloodways_2.set('fieldImages', {'Account_ID': 'TextEdit', 'Response_I': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Zip': 'TextEdit', 'Parish': 'TextEdit', 'Name': 'TextEdit', 'eGrants_Ty': 'TextEdit', 'ERR_Type': 'TextEdit', 'STATUS': 'TextEdit', 'addrtype': 'TextEdit', 'addrlocat': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_Parishes_LDOTD_2007_1.set('fieldLabels', {'PARISH': 'inline label', 'FIPS': 'no label', 'PARISH_FIP': 'no label', 'Parish_Num': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Casesinfloodways_2.set('fieldLabels', {'Account_ID': 'inline label', 'Response_I': 'inline label', 'Address': 'no label', 'City': 'no label', 'State': 'no label', 'Zip': 'no label', 'Parish': 'no label', 'Name': 'no label', 'eGrants_Ty': 'inline label', 'ERR_Type': 'inline label', 'STATUS': 'no label', 'addrtype': 'no label', 'addrlocat': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_Casesinfloodways_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});