<template>
  <div class="input-form">
    <input
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
      class="input"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Base-input",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: [String],
    },
  },
});
</script>

<style lang="scss" src="./BaseInput.scss"></style>
