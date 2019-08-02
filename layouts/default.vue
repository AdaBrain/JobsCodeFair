<template>
  <div>
    <div id="header" :class="{ smaller: isActive }">
      <div id="title" class="module">
        <h1>
          <a href="/">2019 JobsCodeFair</a>
        </h1>
      </div>
      <div id="date" class="module">
        <h1>
          <a href="/">Aug. 31</a>
        </h1>
      </div>
      <div id="date" class="module">
        <h1>
          <a href="/register">Register</a>
        </h1>
      </div>
    </div>
    <nuxt />
    <div id="footer">
      <div id="footer_content">
        <div id="footer_col_02" class="module">
          <h2>CONTACT</h2>
          <h3>Facebook: JobsCodeFair</h3>
          <h3>Phone (088) 581-4781</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      windowTop: 0,
      isActive: false
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      this.windowTop = window.scrollY
      if (window.scrollY > 5) {
        this.isActive = true
      } else {
        this.isActive = false
      }
    })
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
