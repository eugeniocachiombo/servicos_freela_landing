<script setup lang="ts"></script>

<template>
  <!-- NAV -->
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <a class="navbar-brand fw-bold text-white" href="#">Eugénio Cachiombo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link text-white" href="#servicos">Serviços</a></li>
          <li class="nav-item"><a class="nav-link text-white" href="#portfolio">Portfólio</a></li>
          <li class="nav-item"><a class="nav-link text-white" href="#sobre">Sobre Mim</a></li>
          <li class="nav-item"><a class="nav-link text-white" href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero text-center">
    <div class="container" data-aos="fade-up">
      <img src="https://via.placeholder.com/220" alt="Eugénio Cachiombo" class="mx-auto mb-4">
      <h1 class="display-4 fw-bold mb-3">Eugénio Cachiombo</h1>
      <p class="lead highlight fs-3 mb-2">Especialista em Soluções Digitais</p>
      <p class="col-lg-8 mx-auto fs-5 mb-4">
        Desenvolvo sistemas e aplicações personalizadas que automatizam processos, reduzem custos e impulsionam o crescimento do seu negócio.
      </p>
      <a href="#contacto" class="btn btn-custom btn-lg">Solicitar Orçamento</a>
    </div>
  </section>

  <!-- ESTATÍSTICAS -->
  <section class="py-5 bg-dark">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-4 mb-4" data-aos="fade-up">
          <div class="stat-number">+25</div>
          <p class="fs-5 mt-2">Projetos Concluídos</p>
        </div>
        <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
          <div class="stat-number">+18</div>
          <p class="fs-5 mt-2">Clientes Satisfeitos</p>
        </div>
        <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
          <div class="stat-number">100%</div>
          <p class="fs-5 mt-2">Taxa de Satisfação</p>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVIÇOS -->
  <section id="servicos" class="py-5">
    <div class="container">
      <h2 class="section-title text-center">Meus Serviços</h2>
      <div class="row g-4">
        <div class="col-md-6 col-lg-3" data-aos="fade-up">
          <div class="card card-custom p-4 text-center">
            <i class="fas fa-globe fa-3x mb-3 highlight"></i>
            <h5>Websites Profissionais</h5>
            <p class="small text-muted">Sites institucionais, e-commerces e blogs com design moderno e otimizado para conversão.</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
          <div class="card card-custom p-4 text-center">
            <i class="fas fa-mobile-alt fa-3x mb-3 highlight"></i>
            <h5>Aplicações Web</h5>
            <p class="small text-muted">Sistemas web responsivos e aplicações personalizadas para gestão interna.</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
          <div class="card card-custom p-4 text-center">
            <i class="fas fa-rocket fa-3x mb-3 highlight"></i>
            <h5>Landing Pages</h5>
            <p class="small text-muted">Páginas de alta conversão para campanhas de marketing e lançamento de produtos.</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
          <div class="card card-custom p-4 text-center">
            <i class="fas fa-cogs fa-3x mb-3 highlight"></i>
            <h5>Sistemas Personalizados</h5>
            <p class="small text-muted">Automação de processos, ERP, CRM e integrações com outras plataformas.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PORTFÓLIO -->
  <section id="portfolio" class="py-5 bg-dark">
    <div class="container">
      <h2 class="section-title text-center">Portfólio</h2>
      <div class="row g-4">
        <div class="col-md-4" data-aos="fade-up">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" class="img-fluid rounded-3 shadow" alt="Projeto 1">
        </div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" class="img-fluid rounded-3 shadow" alt="Projeto 2">
        </div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
          <img src="https://images.unsplash.com/photo-1551281044-8b1c1f5c2f0c" class="img-fluid rounded-3 shadow" alt="Projeto 3">
        </div>
      </div>
      <div class="text-center mt-4">
        <a href="#" class="btn btn-outline-light">Ver todos os projetos <i class="fas fa-arrow-right ms-2"></i></a>
      </div>
    </div>
  </section>

  <!-- PORQUÊ EU -->
  <section class="py-5">
    <div class="container">
      <h2 class="section-title text-center">Porquê escolher-me?</h2>
      <div class="row text-center g-4">
        <div class="col-md-3" data-aos="zoom-in">
          <i class="fas fa-user-check fa-3x mb-3 highlight"></i>
          <h5>Soluções Personalizadas</h5>
          <p>Cada projeto é desenvolvido de acordo com as necessidades específicas do seu negócio.</p>
        </div>
        <div class="col-md-3" data-aos="zoom-in" data-aos-delay="100">
          <i class="fas fa-headset fa-3x mb-3 highlight"></i>
          <h5>Suporte Contínuo</h5>
          <p>Acompanhamento pós-entrega e manutenção técnica sempre que precisar.</p>
        </div>
        <div class="col-md-3" data-aos="zoom-in" data-aos-delay="200">
          <i class="fas fa-clock fa-3x mb-3 highlight"></i>
          <h5>Entrega no Prazo</h5>
          <p>Compromisso com prazos realistas e comunicação transparente.</p>
        </div>
        <div class="col-md-3" data-aos="zoom-in" data-aos-delay="300">
          <i class="fas fa-chart-line fa-3x mb-3 highlight"></i>
          <h5>Foco em Resultados</h5>
          <p>Não entrego apenas código — entrego soluções que geram valor real.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- DEPOIMENTOS -->
  <section class="py-5 bg-dark">
    <div class="container">
      <h2 class="section-title text-center">O que os clientes dizem</h2>
      <div class="row g-4">
        <div class="col-md-4" data-aos="fade-up">
          <div class="card card-custom p-4">
            <p>"O sistema desenvolvido pelo Eugénio transformou completamente a gestão da minha empresa. Recomendo fortemente!"</p>
            <div class="mt-3">
              <strong>— João Mendes</strong><br>
              <small class="text-muted">Gestor, Empresa de Logística</small>
            </div>
          </div>
        </div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
          <div class="card card-custom p-4">
            <p>"Profissionalismo, rapidez e qualidade excepcional. O website superou todas as minhas expectativas."</p>
            <div class="mt-3">
              <strong>— Maria António</strong><br>
              <small class="text-muted">Empreendedora</small>
            </div>
          </div>
        </div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
          <div class="card card-custom p-4">
            <p>"Excelente trabalho! Entrega no prazo e com um suporte fantástico. Voltarei a trabalhar com ele."</p>
            <div class="mt-3">
              <strong>— Pedro Silva</strong><br>
              <small class="text-muted">Diretor Comercial</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PREÇOS / CTA -->
  <section class="py-5 text-center">
    <div class="container">
      <h2 class="mb-3">Pronto para transformar o seu negócio?</h2>
      <p class="highlight fs-4">Planos a partir de 40.000 Kz</p>
      <a href="#contacto" class="btn btn-custom btn-lg mt-3">Falar com Eu Agora</a>
    </div>
  </section>

  <!-- CONTACTO -->
  <section id="contacto" class="py-5 bg-dark">
    <div class="container">
      <h2 class="section-title text-center">Contacto</h2>
      <div class="text-center">
        <p class="mb-2"><i class="fas fa-phone me-2"></i> <strong>921 439 849</strong> / <strong>957 387 033</strong></p>
        <p><i class="fas fa-envelope me-2"></i> <strong>eugeniocachiombo@gmail.com</strong></p>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="py-4 text-center">
    <div class="container">
      <p class="mb-0">&copy; 2026 Eugénio Cachiombo - Soluções Digitais. Todos os direitos reservados.</p>
    </div>
  </footer>

  
</template>

<style scoped></style>
