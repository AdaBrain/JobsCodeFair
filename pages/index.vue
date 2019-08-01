<template>
  <div>
    <div id="header" :class="{ smaller: isActive }">
      <div class="module" id="title">
        <h1>
          <a href="/">2019 JobsCodeFair</a>
        </h1>
      </div>
      <div class="module" id="date">
        <h1>
          <a href="/">Aug. 31</a>
        </h1>
      </div>
      <div class="module" id="date">
        <h1>
          <a href="/">Register</a>
        </h1>
      </div>
    </div>
    <div id="container">
      <div id="neonsigns">
        <div class="module">
          <img src="~/assets/computer.jpg" alt class="image-background" />
        </div>
      </div>
      <div id="speakers">
        <div id="home_intro"></div>
        <div class="module">
          <img src="~/assets/man.jpg" alt class="image-background" />
        </div>
        <div class="module">
          <img src="~/assets/man.jpg" alt class="image-background" />
        </div>
        <div class="module">
          <img src="~/assets/man.jpg" alt class="image-background" />
        </div>
        <div class="module">
          <img src="~/assets/man.jpg" alt class="image-background" />
        </div>
      </div>
      <div id="sponsors_home">
        <div id="presenting">
          <h1>Presenting <span><br /></span>Sponsors</h1>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import '~/assets/css/style.css'

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
      console.log(this.windowTop)
    })
  }
}
</script>
