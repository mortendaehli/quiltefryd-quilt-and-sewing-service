<template>
  <section class="relative bg-gradient-to-br from-quilt-cream via-white to-quilt-beige overflow-hidden min-h-[80vh] flex items-center">
    <!-- Pattern overlay -->
    <QuiltPattern class="text-quilt-moss pointer-events-none opacity-50" />
    
    <div class="container-custom py-20 md:py-32 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Text Content -->
        <div class="animate-fade-in space-y-6">
          <div class="inline-block">
            <span class="text-quilt-gold uppercase tracking-[0.2em] text-sm font-medium">Velkommen til</span>
          </div>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-serif text-quilt-burgundy leading-[1.1] font-light">
            Quilt- og sømtjenester
            <span class="block text-3xl md:text-4xl lg:text-5xl text-quilt-forest mt-2">i Tønsberg</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
            Longarm-quilting, gardiner og puter, diverse søm.
            Med nesten 10 års erfaring fra Quiltefryd hjelper jeg deg med dine sømprosjekter.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <router-link to="/kontakt" class="btn-primary text-center inline-flex items-center justify-center gap-2 group">
              <SewingIcons name="Button" class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
              Kontakt meg
            </router-link>
            <router-link to="/tjenester" class="btn-secondary text-center inline-flex items-center justify-center gap-2 group">
              <SewingIcons name="Thread" class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
              Se tjenester
            </router-link>
          </div>

          <!-- Quick Info -->
          <div class="mt-12 flex flex-wrap gap-8 text-sm">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-quilt-burgundy/10 flex items-center justify-center">
                <span class="text-quilt-burgundy text-lg">✓</span>
              </div>
              <span class="text-gray-700 font-medium">Erfaren quilter</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-quilt-burgundy/10 flex items-center justify-center">
                <span class="text-quilt-burgundy text-lg">✓</span>
              </div>
              <span class="text-gray-700 font-medium">Longarm-maskin</span>
            </div>
          </div>
        </div>

        <!-- Hero Video -->
        <div class="relative">
          <div class="relative h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl animate-slide-up transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <video
              autoplay
              muted
              playsinline
              loop
              preload="auto"
              :poster="heroPoster"
              class="w-full h-full object-cover object-left"
            >
              <source :src="heroWebm" type="video/webm" />
              <source :src="heroMp4" type="video/mp4" />
            </video>
            <!-- Decorative elements -->
            <div class="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <span class="text-quilt-forest font-serif text-lg">Quiltefryd</span>
            </div>
          </div>
          <!-- Decorative corner accent -->
          <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-quilt-gold/20 rounded-full blur-2xl" />
          <div class="absolute -top-4 -left-4 w-32 h-32 bg-quilt-burgundy/10 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import QuiltPattern from '@/components/shared/QuiltPattern.vue'
import SewingIcons from '@/components/icons/SewingIcons.vue'
import heroMp4 from '@/assets/videos/hero.mp4'
import heroWebm from '@/assets/videos/hero.webm'
import heroPoster from '@/assets/videos/hero-poster.jpg'
</script>
