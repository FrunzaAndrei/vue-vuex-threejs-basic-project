<template>
    <div>
        <md-card md-with-hover id="configurator">
      <md-ripple>
        <md-card-header>
          <div class="md-title"> 
              <md-toolbar class="md-primary">
                  <h3 class="md-title">Configurator</h3>
             </md-toolbar>
            </div>
         </md-card-header>

        <md-card-content>
           <div id="shape">
               <md-card>
                   <md-card-header>
                      <md-toolbar class="md-primary">
                           <h3 class="md-title">Shape</h3>
                      </md-toolbar>
                   </md-card-header>
                   <md-card-content>
                       <md-radio v-model="getToAllProperties.shape" value="Cube" class="md-primary">Cube</md-radio>
                       <md-radio v-model="getToAllProperties.shape" value="Sphere" class="md-primary">Sphere</md-radio>
                       <md-radio v-model="getToAllProperties.shape" value="Plane" class="md-primary">Plane</md-radio>
                   </md-card-content>
               </md-card>
           </div>
           <div id="number">
               <md-card>
                   <md-card-header>
                      <md-toolbar class="md-primary">
                           <h3 class="md-title">Number of shape</h3>
                      </md-toolbar>
                   </md-card-header>
                   <md-card-content>
                       <md-radio v-model="getToAllProperties.number" value="10" class="md-primary">10</md-radio>
                       <md-radio v-model="getToAllProperties.number" value="300" class="md-primary">300</md-radio>
                       <md-radio v-model="getToAllProperties.number" value="1000" class="md-primary">1000</md-radio>
                   </md-card-content>
               </md-card>
           </div>
           <div id="scale">
               <md-card>
                   <md-card-header>
                      <md-toolbar class="md-primary">
                           <h3 class="md-title">Scale of shape</h3>
                      </md-toolbar>
                   </md-card-header>
                   <md-card-content>
                       <md-radio v-model="getToAllProperties.scale" value="1" class="md-primary">x1</md-radio>
                       <md-radio v-model="getToAllProperties.scale" value="2" class="md-primary">x2</md-radio>
                       <md-radio v-model="getToAllProperties.scale" value="3" class="md-primary">x3</md-radio>
                   </md-card-content>
               </md-card>
           </div>
           <div id="rotation">
               <md-card>
                   <md-card-header>
                      <md-toolbar class="md-primary">
                           <h3 class="md-title">Speed Rotation</h3>
                      </md-toolbar>
                   </md-card-header>
                   <md-card-content>
                       <md-radio v-model="getToAllProperties.speed" value="0.025" class="md-primary">x1</md-radio>
                       <md-radio v-model="getToAllProperties.speed" value="0.05" class="md-primary">x2</md-radio>
                       <md-radio v-model="getToAllProperties.speed" value="0.75" class="md-primary">x3</md-radio>
                   </md-card-content>
               </md-card>
           </div>
        </md-card-content>
        <p>{{getToAllProperties}}</p>
      </md-ripple>
    </md-card>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "configurator",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["updateProperties"]),
    afisare() {
      this.updateProperties(this.getToAllProperties);
    }
  },
  computed: {
    ...mapGetters(["getToAllProperties"]),
    changes() {
      return this.$store.state.propertyChange;
    }
  },
  watch: {
    changes: {
      handler(val) {
      },
      deep: true
    }
  }
};
</script>

<style>
#shape,
#number,
#scale ,
#rotation{
  width: 250px;
  margin: 1rem;
}
#shape .md-card .md-card-content,
#number .md-card .md-card-content,
#scale .md-card .md-card-content ,
#rotation .md-card .md-card-content {
  display: flex;
  flex-direction: column;
}
#configurator .md-ripple .md-card-content {
  display: flex;
  flex-wrap: wrap;
}
</style>
