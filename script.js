// Set up the scene, camera, and renderer (the things that help you see everything)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add some light so the city can shine
const light = new THREE.AmbientLight(0x404040, 5);  // soft white light
scene.add(light);

// Make a simple futuristic building using a cube
function createBuilding(x, y, z) {
    const geometry = new THREE.BoxGeometry(1, 5, 1);  // box shape, tall building
    const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });  // color of the building
    const building = new THREE.Mesh(geometry, material);
    building.position.set(x, y, z);  // place the building at a specific spot
    scene.add(building);
}

// Create a bunch of buildings to form the city
for (let i = -10; i < 10; i++) {
    for (let j = -10; j < 10; j++) {
        createBuilding(i * 2, 2.5, j * 2);  // x, y, z positions of buildings
    }
}

// Move the camera so we can see the whole city
camera.position.z = 20;

// Create an animation to make the city look alive
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);  // update the scene so we can see things change
}

animate();
