<template>
  <div class="pokedex">
    <TopPanel />
    <LeftPanel class="pokedex-left" />
    <Divider />
    <RightPanel class="pokedex-right" />
  </div>
</template>

<script>
import Divider from './Divider/Divider.vue';
import TopPanel from './TopPanel/TopPanel.vue';
import LeftPanel from './LeftPanel/LeftPanel.vue';
import RightPanel from './RightPanel/RightPanel.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Pokedex',
  components: {
    TopPanel,
    Divider,
    LeftPanel,
    RightPanel,
  },
};
</script>

<style lang="scss" scoped>
  .pokedex {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 960px;
    height: 100%;
  @media(min-width: $viewport-medium) {
    max-height: 700;
    flex-direction: row;
  }

  &--left,
  &--right {
    position: relative;
    display: flex;
    height: 50%;
    perspective: 1700px;
    transform-style: preserve-3d;

    @media (min-width: $viewport-medium) {
      height: 100%;
    }

  }
}

</style>
