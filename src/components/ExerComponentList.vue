<template>
  <div :class="{'--otw_zam': ExerciseParameters.otw_zam === true,  'done': ExerciseDone === true}" class="wrapper">
    <div class="exercises"
         @click="MoveWebsite(ExerciseParameters.exercise, ExerciseParameters.answer)"
         >
      {{ ExerciseParameters.name }}
    </div>
    <div class="answer">
      <input class="checkbox" type="checkbox" @change="ChangeIfDone">
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
    MoveWebsite(question, answer) {
      window.open(`${question}`, "one");
      setTimeout(function(){
        window.open(`${answer}`, "two");
      }, 500);
    }
  }
}
</script>

<style scoped lang="scss">
  .wrapper {
    background: #1003b3;
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
      margin: 0;

      .checkbox {
        width: 20px;
        height: 20px;
      }
    }
  }
</style>