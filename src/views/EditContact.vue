<template>
  <div class="container mt-5">

    <h2 class="mb-4">
      Edit Contact
    </h2>


    <form @submit.prevent="update">


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
        Update Contact
      </button>


    </form>

  </div>
</template>



<script setup>

import { reactive } from "vue"
import { useRoute, useRouter } from "vue-router"

import { 
  getContacts,
  updateContact
} from "../utils/storage"



const route = useRoute()
const router = useRouter()



const id = route.params.id



const contacts = getContacts()



const oldContact = contacts.find(
  item => item.id == id
)



const contact = reactive({

  id: oldContact.id,

  firstName: oldContact.firstName,

  lastName: oldContact.lastName,

  email: oldContact.email,

  phone: oldContact.phone,

  address: oldContact.address

})



function update(){

  updateContact(contact)


  router.push(
    "/contact/" + contact.id
  )

}


</script>