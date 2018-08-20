<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Counter">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

    <StackLayout>
      <FlexboxLayout flexDirection="row" justifyContent="center">
        <Button @tap="decrement" text="-" class="btn btn-outline"/>
        <Label :text="message" alignSelf="baseline" class="h2"/>
        <Button @tap="increment" text="+" class="btn btn-outline"/>
      </FlexboxLayout>
      <Image v-if="surprise" src="~/images/NativeScript-Vue.png"/>
    </StackLayout>

  </Page>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator'

  @Component
  export default class Counter extends Vue {
    get message () {
      return this.$store.state.counter.count.toString();
    }
    get surprise () {
      return (this.$store.state.counter.count >= 5);
    }

    decrement () {
      this.$store.dispatch('decrement')
    }
    increment () {
      this.$store.dispatch('increment')
    }

  };
</script>
