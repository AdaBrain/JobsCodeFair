<template>
  <div id="container">
    <div id="content" class="form2019" v-if="registration">
      <h1>Registration</h1>
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
        id="client"
        value
        title="First Name"
        maxlength="80"
        autocomplete="on"
        required="required"
        v-model="first_name"
      />
      <label for="last_name">
        Last Name
        <span class="pink">*</span>
        <br />
      </label>
      <input
        type="text"
        id="client"
        value
        title="Last Name"
        maxlength="80"
        autocomplete="on"
        required="required"
        v-model="last_name"
      />
      <label for="nick_name">
        Nick Name
        <span class="pink">*</span>
        <br />
      </label>
      <input
        type="text"
        id="client"
        value
        title="Nick Name"
        maxlength="80"
        autocomplete="on"
        required="required"
        v-model="nick_name"
      />
      <label for="email">
        E-mail Address
        <span class="pink">*</span>
        <br />
      </label>
      <input
        type="text"
        value
        id="email"
        title="Email"
        maxlength="80"
        autocomplete="on"
        required="required"
        v-model="email"
      />
      <label for="phone">
        Mobile Number
        <span class="pink">*</span>
        <br />
      </label>
      <input
        type="text"
        value
        id="phone"
        title="Phone"
        maxlength="80"
        autocomplete="on"
        required="required"
        v-model="phone"
      />
      <label for="education">
        Education
        <span class="pink">*</span>
        <br />
      </label>
      <input
        type="text"
        value
        id="phone"
        title="Phone"
        maxlength="80"
        autocomplete="on"
        required="required"
        v-model="education"
      />
      <label for="education">
        University
        <span class="pink">*</span>
        <br />
      </label>
      <input
        type="text"
        value
        id="phone"
        title="Phone"
        maxlength="80"
        autocomplete="on"
        required="required"
        v-model="university"
      />
      <button class="submit-register" @click="registation">Submit</button>
    </div>
    <div id="content" class="form2019" v-if="regis_success">
      <h1>Registration</h1>
      <div class="regis-success">
        <h2><strong>Applicant Number:</strong> {{ applicant_number }}</h2>
        <h4><strong>Name:</strong> {{ first_name }} {{ last_name }}</h4>
        <h4><strong>Nickname:</strong> {{ nick_name }}</h4>
        <h4><strong>Eamil:</strong> {{ email }}</h4>
        <h4><strong>Mobile number:</strong> {{ phone }}</h4>
        <h4><strong>Education:</strong> {{ education }}</h4>
        <h4><strong>University:</strong> {{ university }}</h4>
        <button class="submit-register" @click="$router.push({path: '/'})">>OK</button>
      </div>
    </div>
  </div>
</template>

<script>
// import { dbStore } from '~/plugins/firebase.config.js'
import { db } from '~/plugins/firebase.config.js'

export default {
  data () {
    return {
      applicant_number: '',
      university: '',
      email: '',
      first_name: '',
      last_name: '',
      education: '',
      nick_name: '',
      phone: '',
      selected_gender: 'Male',
      genders: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' }
      ],
      registration: true,
      regis_success: false
    }
  },
  methods: {
    registation () {
      const newGuid = 'JC-xxxx'.replace(/[xy]/g, (c) => {
        const r = Math.floor(Math.random() * Math.floor(9))
        return (c === 'x' ? r : r & 0x3).toString(10)
      })
      // return newGuid
      // dbStore
      //   .collection('member')
      //   .add({
      //     id: newGuid,
      //     gender: 'female',
      //     first_name: 'SIRIMA',
      //     last_name: 'INSON',
      //     nick_name: 'EARNG EARN',
      //     email: 'sirimainson@mail.com',
      //     phone: '0888154751',
      //     education: 'Programmer',
      //     university: 'Ada Brain'
      //   })
      this.applicant_number = newGuid
      const database = db.ref('member').child(newGuid)
      database.set({
        id: newGuid,
        gender: this.selected_gender,
        first_name: this.first_name,
        last_name: this.last_name,
        nick_name: this.nick_name,
        email: this.email,
        phone: this.phone,
        education: this.education,
        university: this.university
      })

      this.registration = false
      this.regis_success = true
    }
  }
}
</script>
