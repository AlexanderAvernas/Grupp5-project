<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <h1 class="navbar-brand">Restaurang</h1>
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
            <RouterLink class="nav-link" to="/">Hem</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/menu">Meny</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">Om Oss</RouterLink>
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
              <li>
                <RouterLink class="nav-link" to="/contact">Kontakt</RouterLink>
              </li>
              <li><RouterLink class="nav-link" to="/more">Mer</RouterLink></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
<style>
.nav-link {
  text-decoration: none;
}
</style>
