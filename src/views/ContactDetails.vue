<template>
  <div class="container mt-5">

    <div v-if="contact">

      <div class="card shadow p-4">

        <h2>
          {{ contact.firstName }}
          {{ contact.lastName }}
        </h2>

        <hr>

        <p>
          <b>Email:</b>
          {{ contact.email }}
        </p>

        <p>
          <b>Phone:</b>
          {{ contact.phone }}
        </p>

        <p>
          <b>Address:</b>
          {{ contact.address }}
        </p>


        <div class="mt-3">

          <router-link
            :to="'/edit/' + contact.id"
            class="btn btn-warning me-2"
          >
            Edit
          </router-link>


          <button
            class="btn btn-danger"
            @click="remove"
          >
            Delete
          </button>

        </div>


      </div>

    </div>


    <div v-else>

      <h3>
        Contact Not Found
      </h3>

    </div>


  </div>
</template>



<script setup>

import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import { getContacts, deleteContact } from "../utils/storage"



const route = useRoute()
const router = useRouter()


const contact = ref(null)



const id = route.params.id


const contacts = getContacts()


contact.value = contacts.find(
  item => item.id == id
)



function remove(){

  deleteContact(id)

  router.push("/")

}


</script>