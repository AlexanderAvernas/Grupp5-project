<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <nav class="navbar fixed-top">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Resturang</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">Hem</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/booking">Boka Bord</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/menu">Meny</RouterLink>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mer
              </a>
              <ul class="dropdown-menu">
                <li>
                  <RouterLink class="nav-link" to="/ThanksForOrdering"
                    >Kontakt</RouterLink
                  >
                </li>
                <li>
                  <RouterLink class="nav-link" to="/about">Om Oss</RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
<style scoped>
.nav-link {
  text-decoration: none;
  color: #000;
  transition: 0.4s;
}

.nav-link:hover {
  color: green;
}

.navbar-toggler {
  border: none;
  font-size: 1.5rem;
}
</style>
