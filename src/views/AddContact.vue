<template>
  <div class="container mt-5">

    <h2 class="mb-4">
      Add New Contact
    </h2>


    <form @submit.prevent="save">


      <div class="mb-3">
        <label class="form-label">
          First Name
        </label>

        <input 
          type="text"
          class="form-control"
          v-model="contact.firstName"
          required
        >
      </div>



      <div class="mb-3">
        <label class="form-label">
          Last Name
        </label>

        <input 
          type="text"
          class="form-control"
          v-model="contact.lastName"
          required
        >
      </div>



      <div class="mb-3">
        <label class="form-label">
          Email
        </label>

        <input 
          type="email"
          class="form-control"
          v-model="contact.email"
          required
        >
      </div>



      <div class="mb-3">
        <label class="form-label">
          Phone
        </label>

        <input 
          type="text"
          class="form-control"
          v-model="contact.phone"
        >
      </div>



      <div class="mb-3">
        <label class="form-label">
          Address
        </label>

        <textarea
          class="form-control"
          v-model="contact.address"
        ></textarea>

      </div>



      <button class="btn btn-success">
        Save Contact
      </button>


    </form>

  </div>
</template>



<script setup>

import { reactive } from "vue"
import { addContact } from "../utils/storage"
import { useRouter } from "vue-router"


const router = useRouter()


const contact = reactive({

  firstName:"",
  lastName:"",
  email:"",
  phone:"",
  address:""

})



function save(){

  const newContact = {

    id: Date.now(),

    ...contact

  }


  addContact(newContact)


  router.push(
    "/contact/" + newContact.id
  )

}



</script>