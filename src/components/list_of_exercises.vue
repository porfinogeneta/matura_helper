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

// import { Rzutywpolugrawitacyjnym, PędZasadazachowaniapędu, Ruchjednostajnypookręgu,
//         Ruchobrotowybryłysztywnejmomentsiły, Polegrawitacyjne, Hydrostatyka, Gazy, Termodynamika, Prądstaly,
//       Indukcjaelektromagnetyczna, Prądzmienny, DrganiaSprężystośćciał, Falemechaniczne, Akustyka, Optykageometryczna,
//       OptykafizycznaFaleelektromagnetyczne, Atomwodoru, ZjawiskofotoelektryczneDualizmkorpuskularnofalowy, Fizykajądrowa,
//         Teoriawzględności, Astronomia, Inne, Elektrostatyka, Magnetyzm}
//         from "@/assets/physics_exercises.js";

import kinematyka_wektory from "@/assets/kinematyka_wektory.json"
import Dynamikasilypracamocenergia from "@/assets/Dynamikasilypracamocenergia.json"
import Rzutywpolugrawitacyjnym from "@/assets/Rzutywpolugrawitacyjnym.json"
import PędZasadazachowaniapędu from "@/assets/PędZasadazachowaniapędu.json"
import Ruchjednostajnypookręgu from "@/assets/Ruchjednostajnypookręgu.json"
import Ruchobrotowybryłysztywnejmomentsiły from "@/assets/Ruchobrotowybryłysztywnejmomentsiły.json"
import Polegrawitacyjne from "@/assets/Polegrawitacyjne.json"
import Hydrostatyka from "@/assets/Hydrostatyka.json"
import Gazy from "@/assets/Gazy.json"
import Termodynamika from "@/assets/Termodynamika.json"
import Prądstaly from "@/assets/Prądstaly.json"
import Indukcjaelektromagnetyczna from "@/assets/Indukcjaelektromagnetyczna.json"
import Prądzmienny from "@/assets/Prądzmienny.json"
import DrganiaSprężystośćciał from "@/assets/DrganiaSprężystośćciał.json"
import Falemechaniczne from "@/assets/Falemechaniczne.json"
import Akustyka from "@/assets/Akustyka.json"
import Optykageometryczna from "@/assets/Optykageometryczna.json"
import OptykafizycznaFaleelektromagnetyczne from "@/assets/OptykafizycznaFaleelektromagnetyczne.json"
import Atomwodoru from "@/assets/Atomwodoru.json"
import ZjawiskofotoelektryczneDualizmkorpuskularnofalowy from "@/assets/ZjawiskofotoelektryczneDualizmkorpuskularnofalowy.json"
import Fizykajądrowa from "@/assets/Dynamikasilypracamocenergia.json"
import Teoriawzględności from "@/assets/Teoriawzględności.json"
import Astronomia from "@/assets/Astronomia.json"
import Inne from "@/assets/Inne.json"
import Elektrostatyka from "@/assets/Elektrostatyka.json"
import Magnetyzm from "@/assets/Magnetyzm.json"


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