class OLMapHandler{
  constructor(){
    this.map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: projection.fromLonLat([37.41, 8.82]),
          zoom: 4
        })
    });
    this.map.on("singleclick", this.singleclick);
  }
  singleclick(evt){
    console.log(evt.coordinate);
  }
}