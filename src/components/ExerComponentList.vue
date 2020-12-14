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



<!--    <div class="answer">-->
<!--      <input class="checkbox" type="checkbox" @change="ChangeIfDone">-->
<!--    </div>-->
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
    background: #0e038f;
    display: inline-grid;
    grid-template-columns: max-content 1fr 1fr 1fr;
    grid-template-rows: 1fr max-content;
    //margin: 20px 20px 20px 20px;
    justify-content: center;
    align-items: center;

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
      color: #f5f1f1;
      font-weight: bold;
      font-size: 20px;
      height: 30vh;
      width: 60vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .answer {
      color: #f5f1f1;
      margin-bottom: 0;
      height: 7vh;
      width: 60vh;
      background-color: #2c5ad7;
      font-weight: bold;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: solid #d0cfcf 2px;

      .checkbox {
        width: 20px;
        height: 20px;
      }
    }
  }
</style>