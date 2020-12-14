<template>
  <div id="app">
    <div id="nav">
      <div class="home_button">
        <router-link to="/">Strona Głowna</router-link>
      </div>
      <router-link to="/about">O stronie</router-link>
    </div>
    <router-view/>
  </div>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  #nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 2%;
    background-color: #2600ff;
    color: #ffffff;

    .home_button {
      font-weight: bold;
      font-size: 30px;
    }
  }
}


</style>
