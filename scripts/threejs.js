var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var points = [
  {x: 0, y: 0, z: 0},
  {x: 1, y: 1, z: 1},
  {x: 2, y: 2, z: 2},
];

points.forEach(function(point) {
  var geometry = new THREE.SphereGeometry( 0.1, 32, 32 );
  var material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
  var mesh = new THREE.Mesh( geometry, material );
  mesh.position.set(point.x, point.y, point.z);
  scene.add( mesh );
});

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();