<template>
  <div class="broadcast">
    <vue-feather type="radio"></vue-feather>
    <vue-carousel :data="data" :controls="false" :indicators="false" :interval="3000" direction="up"></vue-carousel>
  </div>
</template>

<script>
import { h, resolveComponent } from 'vue';

export default {
  data() {
    return {
      data: [
        {
          id: 1,
          message: 'Rolling broadcast message',
        },
        {
          id: 2,
          message: 'Rolling broadcast message',
        },
        {
          id: 3,
          message: 'Rolling broadcast message',
        },
      ].map((item) => (function VueCarouselItem() {
        return h(
          'a',
          {
            href: '#',
            class: 'broadcast-content',
          },
          [
            h('span', [`${item.message} ${item.id}`]),
            h(resolveComponent('VueFeather'), {
              size: 16,
              type: 'chevron-right',
            }),
          ],
        );
      })),
    };
  },
};
</script>

<style scoped>
.broadcast {
  border: 1px solid #eee;
  border-radius: 0.25rem;
  display: flex;
  padding: 0.5rem 0.75rem;
}

.broadcast > .vue-feather {
  margin-right: 0.5rem;
}

.broadcast > .vue-carousel {
  flex: 1;
}

.broadcast-content {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
</style>