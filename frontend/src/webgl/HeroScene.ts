import * as THREE from "three";

export class HeroScene {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private particles!: THREE.Points;
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
    this.camera.position.z = 5;

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

    // 1. Tambahkan jumlah partikel agar lebih padat seperti bintang
    const particlesCount = 2000;
    const geometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      // Sebaran posisi yang lebih luas untuk menciptakan kedalaman (depth)
      posArray[i] = (Math.random() - 0.5) * 15;

      // Variasi warna: Campuran antara putih dan biru muda
      const mixedColor = new THREE.Color();
      mixedColor.setHSL(0.6, 0.8, Math.random() * 0.5 + 0.5); // Range biru ke putih
      colorArray[i] = mixedColor.r;
      colorArray[i + 1] = mixedColor.g;
      colorArray[i + 2] = mixedColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3));

    // 2. Gunakan Canvas Texture untuk membuat partikel berbentuk bulat bercahaya
    const material = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true, // Mengaktifkan variasi warna yang kita buat di atas
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true, // Membuat partikel mengecil saat jauh dari kamera
    });

    // Trick: Membuat tekstur bulat via program (tanpa file eksternal)
    material.map = this.createCircleTexture();

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  // Fungsi pembantu untuk membuat tekstur bintang bulat yang smooth
  private createCircleTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext("2d")!;
    const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
    // Menggunakan warna biru cerah (Tailwind blue-500) agar kontras di latar putih & hitam
    gradient.addColorStop(0, "rgba(59, 130, 246, 1)");
    gradient.addColorStop(0.2, "rgba(59, 130, 246, 0.8)");
    gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.2)");
    gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 64, 64);

    return new THREE.CanvasTexture(canvas);
  }
  private onDocumentMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX - this.windowHalfX;
    this.mouseY = event.clientY - this.windowHalfY;
  }

  private animate() {
    this.animationId = requestAnimationFrame(this.animate.bind(this));

    // Logika interaksi mouse (smooth lerp)
    this.targetX = this.mouseX * 0.0008;
    this.targetY = this.mouseY * 0.0008;

    this.particles.rotation.y +=
      0.05 * (this.targetX - this.particles.rotation.y);
    this.particles.rotation.x +=
      0.05 * (this.targetY - this.particles.rotation.x);

    // 3. Putaran otomatis konstan (Autopilot)
    // Membuat bintang seolah-olah berotasi perlahan di galaksi
    this.particles.rotation.y += 0.0015;
    this.particles.rotation.z += 0.0005;

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
