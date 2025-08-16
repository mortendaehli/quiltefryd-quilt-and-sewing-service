<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

interface Props {
  mobile?: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  itemClick: []
}>()

const route = useRoute()

const navItems = [
  { href: '/', label: 'Hjem' },
  { href: '/tjenester', label: 'Tjenester' },
  { href: '/priser', label: 'Priser' },
  { href: '/om', label: 'Om Marit' },
  { href: '/kontakt', label: 'Kontakt' },
]

const handleItemClick = () => {
  emit('itemClick')
}
</script>

<template>
  <ul :class="mobile ? 'space-y-2' : 'flex space-x-2'">
    <li v-for="item in navItems" :key="item.href">
      <RouterLink
        :to="item.href"
        @click="handleItemClick"
        :class="[
          mobile ? 'block py-2 text-lg' : 'px-4 py-2',
          route.path === item.href 
            ? 'text-quilt-burgundy font-medium' 
            : 'text-gray-700 hover:text-quilt-burgundy',
          'transition-colors duration-200',
          !mobile && 'rounded-lg hover:bg-quilt-cream'
        ]"
      >
        {{ item.label }}
      </RouterLink>
    </li>
  </ul>
</template>