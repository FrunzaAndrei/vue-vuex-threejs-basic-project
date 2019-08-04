<template>
<div>
  <div id="webGL">
  </div>
  
  </div>
</template>

<script>
import * as THREE from "three";
import { mapState, mapGetters } from "vuex";

export default {
  name: "three",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      mesh: null,
      container: null,
      object3D: null,
      reqAnimFrameID: null,
      geometryVariable: {
        Cube: {
          geometry: THREE.BoxGeometry,
          props: [1, 1, 1]
        },
        Sphere: {
          geometry: THREE.SphereGeometry,
          props: [1, 32, 32]
        },
        Plane: {
          geometry: THREE.PlaneGeometry,
          props: [2, 2, 32]
        }
      }
    };
  },
  methods: {
    init() {
      this.container = document.getElementById("webGL");
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.container.appendChild(this.renderer.domElement);

     if (
        this.getToAllProperties.shape &&
        this.getToAllProperties.scale &&
        this.getToAllProperties.number
      ) {
        this.constructShape();
      }
      this.camera.position.z = 200;
    },
    animate() {
      this.reqAnimFrameID = requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
      if (this.object3D) this.object3D.rotation.y += Number(this.getToAllProperties.speed);
    },
    constructShape() {
      this.object3D = new THREE.Object3D();
      let forma = this.getToAllProperties.shape;
      let objectsCount = this.getToAllProperties.number;

      let geometry = new this.geometryVariable[forma].geometry(
        ...this.geometryVariable[forma].props
      );
      let material = new THREE.MeshNormalMaterial({
        side :THREE.DoubleSide
      });

      for (let i = 0; i < objectsCount; i++) {
        this.mesh = new THREE.Mesh(geometry, material.clone());
        this.mesh.scale.set(
          this.getToAllProperties.scale,
          this.getToAllProperties.scale,
          this.getToAllProperties.scale
        );
        this.mesh.position.set(
          Math.floor(Math.random() < 0.5 ? -Math.random()*50 : Math.random()*50),
          Math.floor(Math.random() < 0.5 ? -Math.random()*90 : Math.random()*90),
          Math.floor(Math.random() < 0.5 ? -Math.random()*50 : Math.random()*50)


        )

        this.object3D.add(this.mesh);
      }
      this.scene.add(this.object3D);
    },

    removeShape() {
      this.scene.remove(this.mesh);
      this.mesh.geometry.dispose();
      this.mesh.material.dispose();
      this.mesh = undefined;
    }
  },
  computed: {
    ...mapGetters(["getToAllProperties"])
  },
  mounted() {
    this.init();
    this.animate();
  },
  beforeDestroy() {
    cancelAnimationFrame(this.reqAnimFrameID);
    this.renderer = undefined;
    this.scene = undefined;
    this.camera = undefined;
    this.object3D = undefined;
  }
};
</script>


<style scoped>
#webGL {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>