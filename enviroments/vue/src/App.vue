<template>
  <div style="margin: 0 40%;">
    <loading-widget title="Loading..."></loading-widget>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    /* eslint-disable no-console */
    console.log('mount');
    const cmp = document.querySelector('loading-widget');
    cmp.addEventListener('loadingEvent', (data) => {
      console.log(data.detail);
    });
    /* eslint-enable no-console */
  },
  methods: {},
};
</script>
