<template>
  <component :is="iconName" :class="className" />
</template>

<script setup lang="ts">
import { defineComponent, h, computed } from 'vue'

interface Props {
  name: 'Phone' | 'Chat' | 'Sparkles' | 'Check' | 'Star' | 'Shield'
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  className: 'w-6 h-6'
})

const PhoneIcon = defineComponent({
  props: { className: String },
  render() {
    return h('svg', {
      class: this.className,
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': 1.5,
        d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
      })
    ])
  }
})

const ChatIcon = defineComponent({
  props: { className: String },
  render() {
    return h('svg', {
      class: this.className,
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': 1.5,
        d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
      })
    ])
  }
})

const SparklesIcon = defineComponent({
  props: { className: String },
  render() {
    return h('svg', {
      class: this.className,
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': 1.5,
        d: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
      })
    ])
  }
})

const CheckIcon = defineComponent({
  props: { className: String },
  render() {
    return h('svg', {
      class: this.className,
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': 2,
        d: 'M5 13l4 4L19 7'
      })
    ])
  }
})

const StarIcon = defineComponent({
  props: { className: String },
  render() {
    return h('svg', {
      class: this.className,
      fill: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        d: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
      })
    ])
  }
})

const ShieldIcon = defineComponent({
  props: { className: String },
  render() {
    return h('svg', {
      class: this.className,
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': 1.5,
        d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
      })
    ])
  }
})

const iconComponents = {
  Phone: PhoneIcon,
  Chat: ChatIcon,
  Sparkles: SparklesIcon,
  Check: CheckIcon,
  Star: StarIcon,
  Shield: ShieldIcon
}

const iconName = computed(() => iconComponents[props.name])
</script>