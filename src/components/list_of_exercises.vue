<template>
  <div class="exercises">
    {{ wh }}
    <div class="show_exercise">
      <ExerComponentList
        v-for="(exer, index) in this.ex"
        :key="index"
        :ExerciseParameters="exer"
      />
    </div>
  </div>
</template>

<script>
import ExerComponentList from "@/components/ExerComponentList";

import { kinematyka_wektory, Dynamikasilypracamocenergia, Rzutywpolugrawitacyjnym, PędZasadazachowaniapędu, Ruchjednostajnypookręgu,
        Ruchobrotowybryłysztywnejmomentsiły, Polegrawitacyjne, Hydrostatyka, Gazy, Termodynamika, Prądstaly,
      Indukcjaelektromagnetyczna, Prądzmienny, DrganiaSprężystośćciał, Falemechaniczne, Akustyka, Optykageometryczna,
      OptykafizycznaFaleelektromagnetyczne, Atomwodoru, ZjawiskofotoelektryczneDualizmkorpuskularnofalowy, Fizykajądrowa,
        Teoriawzględności, Astronomia, Inne, Elektrostatyka, Magnetyzm}
        from "@/assets/physics_exercises";


export default {
name: "list_of_exercises",
  components: {ExerComponentList},
  props: {
    what_exercises: {
      type: String,
      required: true
    }
  },
  data() {
   return {
     ex: null
   }
  },

  computed: {
    // a computed getter
    wh() {
      // `this` points to the vm instance
      return this.chooseRightModule(this.what_exercises)
    }
  },

   methods: {
      chooseRightModule(what_to_switch) {
        switch (what_to_switch) {
          case 'kinematyka_wektory':
            this.ex = kinematyka_wektory;
            break;
          case 'Dynamikasilypracamocenergia':
            this.ex = Dynamikasilypracamocenergia;
            break;
          case 'Rzutywpolugrawitacyjnym':
            this.ex = Rzutywpolugrawitacyjnym;
            break;
          case 'PędZasadazachowaniapędu':
            this.ex = PędZasadazachowaniapędu;
            break;
          case 'Ruchjednostajnypookręgu':
            this.ex = Ruchjednostajnypookręgu;
            break;
          case 'Ruchobrotowybryłysztywnejmomentsiły':
            this.ex = Ruchobrotowybryłysztywnejmomentsiły;
            break;
          case 'Polegrawitacyjne':
            this.ex = Polegrawitacyjne;
            break;
          case 'Hydrostatyka':
            this.ex = Hydrostatyka;
            break;
          case 'Magnetyzm':
            this.ex = Magnetyzm;
            break;
          case 'Gazy':
            this.ex = Gazy;
            break;
          case 'Termodynamika':
            this.ex = Termodynamika;
            break;
          case 'Elektrostatyka':
            this.ex = Elektrostatyka;
            break;
          case 'Prądstaly':
            this.ex = Prądstaly;
            break;
          case 'Indukcjaelektromagnetyczna':
            this.ex = Indukcjaelektromagnetyczna;
            break;
          case 'Prądzmienny':
            this.ex = Prądzmienny;
            break;
          case 'DrganiaSprężystośćciał':
            this.ex = DrganiaSprężystośćciał;
            break;
          case 'Falemechaniczne':
            this.ex = Falemechaniczne;
            break;
          case 'Akustyka':
            this.ex = Akustyka;
            break;
          case 'Optykageometryczna':
            this.ex = Optykageometryczna;
            break;
          case 'OptykafizycznaFaleelektromagnetyczne':
            this.ex = OptykafizycznaFaleelektromagnetyczne;
            break;
          case 'Atomwodoru':
            this.ex = Atomwodoru;
            break;
          case 'ZjawiskofotoelektryczneDualizmkorpuskularnofalowy':
            this.ex = ZjawiskofotoelektryczneDualizmkorpuskularnofalowy;
            break;
          case 'Fizykajądrowa':
            this.ex = Fizykajądrowa;
            break;
          case 'Teoriawzględności':
            this.ex = Teoriawzględności;
            break;
          case 'Astronomia':
            this.ex = Astronomia;
            break;
          case 'Inne':
            this.ex = Inne;
            break;
          default:
            this.ex = kinematyka_wektory;
            break;
          }
        // this.ex = []
        },
      }

}
</script>

<style scoped>



</style>