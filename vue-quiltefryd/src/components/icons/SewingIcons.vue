<template>
  <component :is="iconName" :class="className" />
</template>

<script setup lang="ts">
import { defineComponent, h, computed } from 'vue'

interface Props {
  name: 'SewingMachine' | 'Thread' | 'Needle' | 'Fabric' | 'Scissors' | 'Button' | 'Quilt' | 'Dress' | 'Curtain'
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  className: 'w-8 h-8'
})

const SewingMachineIcon = defineComponent({
  props: { className: String },
  render() {
    return h('svg', {
      class: this.className,
      viewBox: '0 0 64 64',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    }, [
      h('path', { d: 'M16 48h32v8H16z', fill: 'currentColor' }),
      h('path', { d: 'M20 24h24v24H20z', fill: 'currentColor', opacity: '0.2' }),
      h('path', { 
        d: 'M24 20v-8h4v8m8 0v-8h4v8', 
        stroke: 'currentColor', 
        'stroke-width': '2', 
        'stroke-linecap': 'round' 
      }),
      h('path', { 
        d: 'M20 24h24v24H20z', 
        stroke: 'currentColor', 
        'stroke-width': '2', 
        'stroke-linecap': 'round', 
        'stroke-linejoin': 'round' 
      }),
      h('circle', { 
        cx: '32', 
        cy: '36', 
        r: '4', 
        stroke: 'currentColor', 
        'stroke-width': '2' 
      }),
      h('path', { 
        d: 'M38 30h4m-22 0h4', 
        stroke: 'currentColor', 
        'stroke-width': '2', 
        'stroke-linecap': 'round' 
      })
    ])
  }
})

const ThreadIcon = defineComponent({
  props: { className: String },
  render() {
    return h('svg', {
      class: this.className,
      viewBox: '0 0 64 64',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    }, [
      h('ellipse', { cx: '32', cy: '24', rx: '12', ry: '16', stroke: 'currentColor', 'stroke-width': '2' }),
      h('ellipse', { cx: '32', cy: '24', rx: '6', ry: '8', stroke: 'currentColor', 'stroke-width': '2' }),
      h('path', { d: 'M32 40v16', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round' }),
      h('path', { d: 'M26 8c0-2 2-4 6-4s6 2 6 4', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round' })
    ])
  }
})

const NeedleIcon = defineComponent({
  props: { className: String },
  render() {
    return h('svg', {
      class: this.className,
      viewBox: '0 0 64 64',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    }, [
      h('path', { d: 'M32 8v40', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round' }),
      h('circle', { cx: '32', cy: '12', r: '3', stroke: 'currentColor', 'stroke-width': '2' }),
      h('path', { d: 'M28 48c0 4 4 8 4 8s4-4 4-8', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round' })
    ])
  }
})

const FabricIcon = defineComponent({
  props: { className: String },
  render() {
    return h('svg', {
      class: this.className,
      viewBox: '0 0 64 64',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    }, [
      h('path', { d: 'M12 20h40v32H12z', fill: 'currentColor', opacity: '0.2' }),
      h('path', { 
        d: 'M12 20h40v32H12z', 
        stroke: 'currentColor', 
        'stroke-width': '2', 
        'stroke-linecap': 'round', 
        'stroke-linejoin': 'round' 
      }),
      h('path', { 
        d: 'M12 20l8 8m0-8l8 8m0-8l8 8m0-8l8 8m0-8l8 8', 
        stroke: 'currentColor', 
        'stroke-width': '1', 
        opacity: '0.4' 
      }),
      h('path', { 
        d: 'M52 20v32l-8-4v-24z', 
        stroke: 'currentColor', 
        'stroke-width': '2', 
        'stroke-linecap': 'round', 
        'stroke-linejoin': 'round' 
      })
    ])
  }
})

const ScissorsIcon = defineComponent({
  props: { className: String },
  render() {
    return h('svg', {
      class: this.className,
      viewBox: '0 0 64 64',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    }, [
      h('circle', { cx: '20', cy: '48', r: '8', stroke: 'currentColor', 'stroke-width': '2' }),
      h('circle', { cx: '44', cy: '48', r: '8', stroke: 'currentColor', 'stroke-width': '2' }),
      h('path', { 
        d: 'M26 44L32 32m6 12L32 32m0 0V12', 
        stroke: 'currentColor', 
        'stroke-width': '2', 
        'stroke-linecap': 'round' 
      }),
      h('circle', { cx: '20', cy: '48', r: '2', fill: 'currentColor' }),
      h('circle', { cx: '44', cy: '48', r: '2', fill: 'currentColor' })
    ])
  }
})

const ButtonIcon = defineComponent({
  props: { className: String },
  render() {
    return h('svg', {
      class: this.className,
      viewBox: '0 0 64 64',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    }, [
      h('circle', { cx: '32', cy: '32', r: '16', stroke: 'currentColor', 'stroke-width': '2' }),
      h('circle', { cx: '26', cy: '28', r: '2', fill: 'currentColor' }),
      h('circle', { cx: '38', cy: '28', r: '2', fill: 'currentColor' }),
      h('circle', { cx: '26', cy: '36', r: '2', fill: 'currentColor' }),
      h('circle', { cx: '38', cy: '36', r: '2', fill: 'currentColor' })
    ])
  }
})

const QuiltIcon = defineComponent({
  props: { className: String },
  render() {
    return h('svg', {
      class: this.className,
      viewBox: '0 0 64 64',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    }, [
      h('rect', { x: '12', y: '12', width: '40', height: '40', stroke: 'currentColor', 'stroke-width': '2' }),
      h('path', { d: 'M12 12l20 20l20-20M12 52l20-20l20 20', stroke: 'currentColor', 'stroke-width': '2' }),
      h('path', { d: 'M32 12v40M12 32h40', stroke: 'currentColor', 'stroke-width': '2' })
    ])
  }
})

const DressIcon = defineComponent({
  props: { className: String },
  render() {
    return h('svg', {
      class: this.className,
      viewBox: '0 0 64 64',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    }, [
      h('path', { 
        d: 'M24 12c0-4 3-6 8-6s8 2 8 6', 
        stroke: 'currentColor', 
        'stroke-width': '2', 
        'stroke-linecap': 'round' 
      }),
      h('path', { 
        d: 'M24 12v8l-4 8l4 4v20h16V32l4-4l-4-8v-8', 
        stroke: 'currentColor', 
        'stroke-width': '2', 
        'stroke-linecap': 'round', 
        'stroke-linejoin': 'round' 
      }),
      h('path', { d: 'M28 32h8', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round' })
    ])
  }
})

const CurtainIcon = defineComponent({
  props: { className: String },
  render() {
    return h('svg', {
      class: this.className,
      viewBox: '0 0 64 64',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg'
    }, [
      h('rect', { x: '12', y: '8', width: '40', height: '4', fill: 'currentColor' }),
      h('path', { 
        d: 'M16 12v40c0 2 2 4 4 4s4-2 4-4V12M24 12v40c0 2 2 4 4 4s4-2 4-4V12M32 12v40c0 2 2 4 4 4s4-2 4-4V12M40 12v40c0 2 2 4 4 4s4-2 4-4V12',
        stroke: 'currentColor', 
        'stroke-width': '2', 
        'stroke-linecap': 'round' 
      })
    ])
  }
})

const iconComponents = {
  SewingMachine: SewingMachineIcon,
  Thread: ThreadIcon,
  Needle: NeedleIcon,
  Fabric: FabricIcon,
  Scissors: ScissorsIcon,
  Button: ButtonIcon,
  Quilt: QuiltIcon,
  Dress: DressIcon,
  Curtain: CurtainIcon
}

const iconName = computed(() => iconComponents[props.name])
</script>