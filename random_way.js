/*
Select Random Way
To Run:
* Install JOSM's Scripting Plugin (only necessary once)
* Place this file in a convenient location on your system (only necessary once)
* Click "Scripting" (on top menu bar)
* Click "Run"
* Click "..." button and select this file.
* Click "Run"
*/
 	var layers = require("josm/layers");
	var layer = layers.activeLayer;
 	var dataset = layer.data;
	var result = dataset.query("type:way");
  var rand = Math.floor(Math.random() * result.length);
	var way = result[rand];
	dataset.selection.add(way);
