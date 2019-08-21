<template>
  <div id="container">
    <div v-if="registration" id="content" class="form2019">
      <h1>Registration</h1>
      <label for="gender">
        Gender
        <span class="pink">*</span>
        <br>
      </label>
      <select v-model="selected_gender">
        <option v-for="(gen, i) in genders" :key="i">
          {{ gen.text }}
        </option>
      </select>
      <label for="first_name">
        First Name
        <span class="pink">*</span>
        <br>
      </label>
      <input
        id="client"
        v-model="first_name"
        type="text"
        value
        title="First Name"
        maxlength="80"
        autocomplete="on"
      >
      <label for="last_name">
        Last Name
        <span class="pink">*</span>
        <br>
      </label>
      <input
        id="client"
        v-model="last_name"
        type="text"
        value
        title="Last Name"
        maxlength="80"
        autocomplete="on"
      >
      <label for="nick_name">
        Nick Name
        <!-- <span class="pink">*</span>
        <br> -->
      </label>
      <input
        id="client"
        v-model="nick_name"
        type="text"
        value
        title="Nick Name"
        maxlength="80"
        autocomplete="on"
      >
      <label for="email">
        E-mail Address
        <span class="pink">*</span>
        <br>
      </label>
      <input
        id="email"
        v-model="email"
        type="text"
        value
        title="Email"
        maxlength="80"
        autocomplete="on"
      >
      <label for="phone">
        Mobile Number
        <span class="pink">*</span>
        <br>
      </label>
      <input
        id="phone"
        v-model="phone"
        type="text"
        value
        title="Phone"
        maxlength="80"
        autocomplete="on"
      >
      <label for="education">
        Education
        <span class="pink">*</span>
        <br>
      </label>
      <input
        id="education"
        v-model="education"
        type="text"
        value
        title="Education"
        maxlength="80"
        autocomplete="on"
      >
      <label for="education">
        University
        <span class="pink">*</span>
        <br>
      </label>
      <input
        id="university"
        v-model="university"
        type="text"
        value
        title="University"
        maxlength="80"
        autocomplete="on"
      >
      <!-- <button class="submit-register" @click="registation">
        Submit
      </button> -->
      <h5 v-if="request" class="text-center">
        กรุณากรอกข้อมูลให้ครบ
        <span class="pink">*</span>
      </h5>
      <button class="snip1535" @click="registation">
        Submit
      </button>
    </div>
    <b-modal
      ref="my-modal"
      hide-footer
      centered
      hide-header-close
      no-close-on-backdrop
      title="Registrate"
    >
      <div class="d-block">
        <div class="regis-success">
          <p><strong>Applicant Number:</strong> {{ applicant_number }}</p>
          <p><strong>Name:</strong> {{ first_name }} {{ last_name }}</p>
          <p><strong>Nickname:</strong> {{ nick_name }}</p>
          <p><strong>Eamil:</strong> {{ email }}</p>
          <p><strong>Mobile number:</strong> {{ phone }}</p>
          <p><strong>Education:</strong> {{ education }}</p>
          <p><strong>University:</strong> {{ university }}</p>
        </div>
      </div>
      <!-- <b-button class="mt-3 link-group" variant="success" block href="http://line.me/ti/g/A5rFnLRXnF">
        Join Group
      </b-button> -->
      <br>
      <p class="group-line">Scan Me:</p>
      <img src="~/assets/images/qr_code.jpg" alt="" class="group-line">
      <b-button class="mt-3 group-line" variant="success" block href="https://jcf2019.adabrain.com/">
        OK
      </b-button>

      <b-button class="mt-3 link-qr" variant="success" block href="http://line.me/ti/g/A5rFnLRXnF">
        Join Group
      </b-button>
      <!-- <b-button class="mt-3" variant="success" block @click="$bvModal.hide('my-modal')">
        Join Group
      </b-button> -->
    </b-modal>
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
      regis_success: false,
      request: false
    }
  },
  methods: {
    showMsgBoxTwo () {
      this.boxTwo = ''
      this.$bvModal.msgBoxOk('Data was submitted successfully', {
        title: 'Confirmation',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'success',
        headerClass: 'p-2 border-bottom-0',
        footerClass: 'p-2 border-top-0',
        centered: true
      })
    },
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
      if (this.first_name === '' || this.last_name === '' || this.email === '' || this.phone === '' || this.education === '' || this.university === '') {
        this.$bvModal.msgBoxOk('Please check the accuracy of the information you have provided before submission.', {
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
      } else {
        database.set({
          id: newGuid,
          gender: this.selected_gender,
          first_name: this.first_name,
          last_name: this.last_name,
          nick_name: this.nick_name,
          email: this.email,
          mobile_number: this.phone,
          education: this.education,
          university: this.university
        })
        this.$refs['my-modal'].show()
        // this.registration = false
        // this.regis_success = true
      }
    }
  }
}
</script>

<style>
  img.group-line {
    width: 50%;
  }

  @media screen and (max-width: 760px) {
    img.group-line, a.group-line {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    a.link-qr {
      display: none;
    }
  }
</style>
