// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera ( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;
const camera1 = new THREE.PerspectiveCamera ( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera1.position.z = 5;

// Sizes
const sizes =
{
    width: 800,
    height: 600
}

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

// Object
const geometry = new THREE.BoxGeometry(1, 1, 2);
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00});
const cube = new THREE.Mesh( geometry, material);
cube.position.y = (2)

scene.add( cube );

// Object
const geometry1 = new THREE.BoxGeometry(2, 2, 1);
const material1 = new THREE.MeshBasicMaterial( {color: "red"});
const cube1 = new THREE.Mesh( geometry1, material1);
cube1.position.x = (2)
scene.add( cube1 );

// Animasi
function animate()
{
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    cube1.rotation.x += 0.05;
    cube1.rotation.y += 0.05;

    renderer.render( scene, camera );
    renderer.render( scene, camera1 );
};
animate();
//renderer.render( scene, camera );