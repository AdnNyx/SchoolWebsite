import * as THREE from "three";

export class HeroScene {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private particles!: THREE.Points;
  private material!: THREE.ShaderMaterial; // Kita simpan material di variabel kelas
  private animationId: number = 0;

  private mouseX: number = 0;
  private mouseY: number = 0;
  private targetX: number = 0;
  private targetY: number = 0;
  private windowHalfX: number = window.innerWidth / 2;
  private windowHalfY: number = window.innerHeight / 2;

  constructor(canvas: HTMLCanvasElement) {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    this.camera.position.z = 5.5;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });

    this.init();
    this.animate();

    window.addEventListener("resize", this.onWindowResize.bind(this));
    document.addEventListener("mousemove", this.onDocumentMouseMove.bind(this));
  }

  private init() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const geometry = new THREE.SphereGeometry(2.8, 220, 220);

    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load(
      "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg",
    );

    // Tetapkan material ke variabel kelas agar bisa diubah warnanya nanti
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        earthTexture: { value: earthTexture },
        // Warna awal, nanti akan di-override di dalam fungsi animate()
        color: { value: new THREE.Color(0x3b82f6) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 1.2 * (5.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform sampler2D earthTexture;
        uniform vec3 color;
        varying vec2 vUv;
        void main() {
          vec4 map = texture2D(earthTexture, vUv);

          if (map.r > 0.5) discard;

          vec2 coord = gl_PointCoord - vec2(0.5);
          if (length(coord) > 0.5) discard;

          // Opacity 0.9 agar tetap tajam
          gl_FragColor = vec4(color, 0.9);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.particles = new THREE.Points(geometry, this.material);
    this.particles.rotation.z = 0.41;
    this.scene.add(this.particles);
  }

  private onDocumentMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX - this.windowHalfX;
    this.mouseY = event.clientY - this.windowHalfY;
  }

  private animate() {
    this.animationId = requestAnimationFrame(this.animate.bind(this));

    // --- LOGIKA DETEKSI TEMA (LIGHT/DARK MODE) ---
    const isDark = document.documentElement.classList.contains("dark");
    // Jika Dark Mode: Biru Cerah (0x3b82f6). Jika Light Mode: Biru Gelap/Dongker (0x1e3a8a)
    const targetColorHex = isDark ? 0x3b82f6 : 0x1e3a8a;
    const targetColor = new THREE.Color(targetColorHex);

    // Lerp: Animasi transisi warna yang sangat halus (smooth transition)
    this.material.uniforms.color.value.lerp(targetColor, 0.05);
    // ---------------------------------------------

    this.targetX = this.mouseX * 0.001;
    this.targetY = this.mouseY * 0.001;

    this.scene.rotation.y += 0.05 * (this.targetX - this.scene.rotation.y);
    this.scene.rotation.x += 0.05 * (this.targetY - this.scene.rotation.x);

    this.particles.rotation.y += 0.0015;

    this.renderer.render(this.scene, this.camera);
  }

  private onWindowResize() {
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  public destroy() {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener("resize", this.onWindowResize.bind(this));
    document.removeEventListener(
      "mousemove",
      this.onDocumentMouseMove.bind(this),
    );
    this.geometryDispose(this.scene);
    this.renderer.dispose();
    this.scene.clear();
  }

  private geometryDispose(object: THREE.Object3D) {
    if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
      object.geometry.dispose();
      if (object.material instanceof THREE.Material) {
        object.material.dispose();
      }
    }
  }
}
