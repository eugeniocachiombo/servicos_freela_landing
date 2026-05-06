<script setup>
import sistemastudio from '@/assets/img/portfolio/sistemastudio.png';
import mifelviagens from '@/assets/img/portfolio/mifelviagens.png';
import pryanick from '@/assets/img/portfolio/pryanick.png';
import sistemaaposta from '@/assets/img/portfolio/sistemaaposta.png';
import diagnosticocaes from '@/assets/img/portfolio/diagnosticocaes.png';
import johnsabores from '@/assets/img/portfolio/johnsabores.png';
</script>

<template>
   <section id="portfolio" class="py-5 bg-dark">
    <div class="container">
      <h2 class="section-title text-center">Portfólio</h2>
      <div class="row g-4">
        <div class="col-md-4" data-aos="fade-up">
          <img :src="sistemastudio" class="img-fluid rounded-3 shadow" alt="Projeto 1">
        </div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
          <img :src="mifelviagens" class="img-fluid rounded-3 shadow" alt="Projeto 2">
        </div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
          <img :src="pryanick" class="img-fluid rounded-3 shadow" alt="Projeto 3">
        </div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
          <img :src="diagnosticocaes" class="img-fluid rounded-3 shadow" alt="Projeto 3">
        </div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
          <img :src="sistemaaposta" class="img-fluid rounded-3 shadow" alt="Projeto 3">
        </div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
          <img :src="johnsabores" class="img-fluid rounded-3 shadow" alt="Projeto 3">
        </div>
      </div>
      <div class="text-center mt-4">
        <a href="#" class="btn btn-outline-light">Ver todos os projetos <i class="fas fa-arrow-right ms-2"></i></a>
      </div>
    </div>
  </section>
</template>
