<template>
  <div :class="{'--otw_zam': ExerciseParameters.otw_zam === true,  'done': ExerciseDone === true}" class="wrapper">
    <div>
      <div class="exercises" @click="MoveWebsiteEx(ExerciseParameters.exercise)">
        {{ ExerciseParameters.name }}
      </div>
      <div class="answer" @click="MoveWebsiteEx(ExerciseParameters.answer)">
        Odpowiedź
      </div>
    </div>

  </div>

</template>

<script>
export default {
name: "ExerComponentList",
  props: {
    ExerciseParameters: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      ExerciseDone: false
    }
  },
  methods: {
    ChangeIfDone() {
      this.ExerciseDone = !this.ExerciseDone

      console.log(this.ExerciseDone)
    },
    MoveWebsiteEx(answer) {
      window.open(answer, '_blank');
      console.log(answer)
    },
    // MoveWebsiteAns(answer) {
    //   window.open(answer, "_blank");
    //   console.log(answer)
    // },
    // handler:function(arg1,arg2){
    //   this.MoveWebsiteEx(arg1);
    //   this.MoveWebsiteAns(arg2);
    // }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;
  background: #0e038f;
  display: inline-grid;
  grid-template-columns: 70vh;
  grid-template-rows: 30vh;
  font-size: 30px;

  &.--otw_zam {
    background: #022b57;
  }
 &.done {
    transform: scale(0.900);
    opacity: 0.8;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.007);
    background-color: #3b03a1;
    transition: background-color .5s;
  }
  .exercises{
    //display: flex;
    //justify-content: center;
    align-items: center;
    color: #f5f1f1;
    font-weight: bold;
    display: flex;
    justify-content: center;
    margin-top: 10vh;

  }
  .answer {
    color: #f5f1f1;
    height: 7vh;
    width: 70vh;
    background-color: #2c5ad7;
    font-weight: bold;
    //font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    border: solid #d0cfcf 2px;
  }
}


</style>