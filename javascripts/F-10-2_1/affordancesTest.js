params.id = "ggbApplet01";
params.ggbBase64 = ggb_F_10_2_1_A1;
var applet = new GGBApplet(params, true);

params.appletOnLoad = function(api) {
    alert("appletOnLoad");
    alert($("canvas").size());
}

applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');
window.addEventListener("load", function() {
    applet.inject('ggb-element');
});