<template>
  <div>
    <div>
      <h1>Wybierz dział z fizyki</h1>
    </div>
    <form class="choosePhysicsModule">
      <label for="selectedPhysicsModule">Wybierz dział, który Cię interesuje: </label>
      <select class="select_Module" id="selectedPhysicsModule" v-model="state.selectedPhysicsModule">
        <option :value="option.value" v-for="(option, index) in modules" :key="index">
          {{option.name}}
        </option>
      </select>
    </form>
    <div v-if="state.selectedPhysicsModule">
      <list_of_exercises :what_exercises="state.selectedPhysicsModule"/>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import {modules} from '@/assets/physics_modules.js';
import list_of_exercises from "@/components/list_of_exercises";

export default {
  name: 'ChoosePhysicsModule',
  components: {list_of_exercises},
  setup() {
    const state = reactive({
      selectedPhysicsModule: '',
    })
    return {
      state,
      modules
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .choosePhysicsModule {
    font-size: 30px;
    .select_Module {
      background-color: #2600ff;
      font-size: 30px;
      color: white;
    }
  }

</style>
