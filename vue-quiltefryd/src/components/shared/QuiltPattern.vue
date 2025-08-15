<template>
  <div :class="`absolute inset-0 overflow-hidden ${className}`">
    <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="quiltPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <rect width="30" height="30" fill="currentColor" opacity="0.02" />
          <rect x="30" y="30" width="30" height="30" fill="currentColor" opacity="0.02" />
          <path d="M0,0 L30,30 M30,0 L0,30 M30,30 L60,60 M60,30 L30,60" 
                stroke="currentColor" stroke-width="0.5" opacity="0.05" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#quiltPattern)" />
    </svg>
  </div>
</template>

<script setup lang="ts">
interface Props {
  className?: string
}

withDefaults(defineProps<Props>(), {
  className: ''
})
</script>