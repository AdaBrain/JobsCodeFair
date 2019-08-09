<template>
  <div id="container">
    <div id="content" class="form2019">
      <h1>Registation</h1>
      <label for="gender">
        Gender
        <span class="pink">*</span>
        <br />
      </label>
      <select v-model="selected_gender">
        <option v-for="(gen, i) in genders" :key="i">{{ gen.text }}</option>
      </select>
      <label for="first_name">
        First Name
        <span class="pink">*</span>
        <br />
      </label>
      <input
        type="text"
        name="entries[0][first_name]"
        id="client"
        value
        title="First Name"
        maxlength="80"
        autocomplete="on"
        required="required"
      />
      <label for="last_name">
        Last Name
        <span class="pink">*</span>
        <br />
      </label>
      <input
        type="text"
        name="entries[0][last_name]"
        id="client"
        value
        title="Last Name"
        maxlength="80"
        autocomplete="on"
        required="required"
      />
      <label for="nick_name">
        Nick Name
        <span class="pink">*</span>
        <br />
      </label>
      <input
        type="text"
        name="entries[0][nick_name]"
        id="client"
        value
        title="Nick Name"
        maxlength="80"
        autocomplete="on"
        required="required"
      />
      <label for="email">
        E-mail Address
        <span class="pink">*</span>
        <br />
      </label>
      <input
        type="text"
        name="entries[0][email]"
        value
        id="email"
        title="Email"
        maxlength="80"
        autocomplete="on"
        required="required"
      />
      <label for="phone">
        Phone
        <span class="pink">*</span>
        <br />
      </label>
      <input
        type="text"
        name="entries[0][phone]"
        value
        id="phone"
        title="Phone"
        maxlength="80"
        autocomplete="on"
        required="required"
      />
      <label for="education">
        Education / Job Title
        <span class="pink">*</span>
        <br />
      </label>
      <input
        type="text"
        name="entries[0][phone]"
        value
        id="phone"
        title="Phone"
        maxlength="80"
        autocomplete="on"
        required="required"
      />
      <label for="education">
        University / Company
        <span class="pink">*</span>
        <br />
      </label>
      <input
        type="text"
        name="entries[0][phone]"
        value
        id="phone"
        title="Phone"
        maxlength="80"
        autocomplete="on"
        required="required"
      />
      <label for="education">
        Address
        <span class="pink">*</span>
        <br />
      </label>
      <input
        type="text"
        name="entries[0][phone]"
        value
        id="phone"
        title="Phone"
        maxlength="80"
        autocomplete="on"
        required="required"
      />
      <button class="submit-register" @click="registation">Regis</button>
    </div>
  </div>
</template>

<script>
// import firebase from '~/plugins/firebase.config.js'
export default {
  data () {
    return {
      selected_gender: 'Male',
      genders: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' }
      ]
    }
  },
  methods: {
    registation () {
      const newGuid = 'JC-xxxx'.replace(/[xy]/g, (c) => {
        const r = Math.floor(Math.random() * Math.floor(9))
        return (c === 'x' ? r : r & 0x3).toString(10)
      })
      console.log(newGuid)
      return newGuid
    }
  }
}
</script>
