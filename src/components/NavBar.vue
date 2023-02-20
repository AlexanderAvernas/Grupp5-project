<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Restaurang</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/about">Boka</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about">Meny</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about">Om Oss</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><RouterLink to="/about">Kontakt</RouterLink></li>
              <li><RouterLink to="/about">Mer</RouterLink></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
<style></style>
