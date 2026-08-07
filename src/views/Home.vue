<template>
  <div class="container mt-5">


    <!-- Header -->
    <div class="contact-header mb-4">

      <div>
        <h1>
          My Contact Book
        </h1>

        <p>
          Manage your contacts easily
        </p>
      </div>


      <router-link 
        to="/add" 
        class="btn btn-light"
      >
        + Add Contact
      </router-link>

    </div>



    <!-- Contact Count -->

    <div class="count-box mb-4">

      Total Contacts:
      <b>{{ contacts.length }}</b>

    </div>




    <!-- Search -->

    <div class="search-box mb-4">

      <input
        type="text"
        class="form-control"
        placeholder="Search contact by name..."
        v-model="search"
      >

    </div>





    <!-- Contact Cards -->

    <div class="row">


      <div
        class="col-lg-4 col-md-6 mb-4"
        v-for="contact in filteredContacts"
        :key="contact.id"
      >


        <router-link
          :to="'/contact/' + contact.id"
        >


          <div class="card contact-card p-4">


            <div class="avatar">

              {{ contact.firstName.charAt(0) }}

            </div>



            <h5>

              {{ contact.firstName }}
              {{ contact.lastName }}

            </h5>


            <p>
              {{ contact.email }}
            </p>



          </div>


        </router-link>


      </div>


    </div>





    <!-- Empty -->

    <div
      v-if="filteredContacts.length === 0"
      class="empty-box"
    >

      <h3>
        No Contacts Found
      </h3>

      <p>
        Add your first contact now.
      </p>


    </div>



  </div>
</template>





<script setup>

import { ref, computed } from "vue"

import { getContacts } from "../utils/storage"



const search = ref("")



const contacts = ref(
  getContacts()
)



// sort by last name

contacts.value.sort((a,b)=>

a.lastName.localeCompare(b.lastName)

)




const filteredContacts = computed(()=>{


return contacts.value.filter(contact=>{


const name =
contact.firstName +
" " +
contact.lastName



return name
.toLowerCase()
.includes(
search.value.toLowerCase()
)



})


})


</script>