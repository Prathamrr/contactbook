<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">

    <div class="container">

      <router-link 
        to="/" 
        class="navbar-brand"
      >
        Contact Book
      </router-link>


      <div>

        <router-link 
          to="/" 
          class="btn btn-light me-2"
        >
          Home
        </router-link>


        <router-link 
          to="/add" 
          class="btn btn-warning"
        >
          Add Contact
        </router-link>

      </div>


    </div>

  </nav>
</template>