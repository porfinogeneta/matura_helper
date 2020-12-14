<template>
  <div class="home">
    <h1>Internetowy pomocnik maturalny, baza zadań</h1>
    <div class="chooseSubject">
      <div class="subject" @click="MoveWindow('https://github.com/porfinogeneta/matura_helper')">
        <h1>Github</h1>
      </div>
        <router-link to="/fizyka">
          <div class="subject">
            <h1>Fizyka - baza zadań</h1>
          </div>
        </router-link>

      <div class="subject" @click="MoveWindow('http://www.voltwo.webd.pl/1-indexy/index-5-opracowania/00-maturalne-GLOWNA.html')">
        <h1>Oryginalna strona</h1>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  // components: {
  //
  // }
  methods: {
    MoveWindow(link) {
      window.open(link, "one");
    }
  }
}
</script>
<style lang="scss" scoped>

.home {
  .chooseSubject {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50vh;
    grid-column-gap: 30px;


    .subject {
      margin: 30px;
      background: #6189f5;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: black;

      &:hover {
        cursor: pointer;
        color: #f5f1f1;
        background: #1e00be;
      }
    }

  }
}

</style>
