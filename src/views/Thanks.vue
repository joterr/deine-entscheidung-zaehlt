<template>
  <div class="wrapper">
    <h1>Danke!</h1>
    <p>
      Mit Deinem Beitrag kann auch zukünftig ein Beitrag für die Tiere geleistet werden.
      <span class="go-vegan">#govegan</span>
    </p>
    <a href="/">Zurück</a>
  </div>
</template>


<style scoped lang="scss">
.wrapper {
  position: relative;
  width: 30vw;
  height: 100vh;
  text-align: center;
  margin: 0 auto;
  padding-top: 25vh;


  @include respond-to("large") {
    width: 45vw;
  }

  @include respond-to("medium") {
    width: 55vw;
  }

  @include respond-to("small") {
    width: 80vw;
  }

  h1 {
    @include std-text();
    color: #fff;
    font-size: 7rem;

    @include respond-to("small") {
      font-size: 5rem;
    }
  }

  p {
    @include std-text();
    color: #fff;
    margin-bottom: 2rem;
    font-size: large;

    .go-vegan {
      color: $cl-accent1;
    }
  }

  a {
    @include std-text-bold-italic();
    color: $cl-accent1;
    font-size: medium;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>