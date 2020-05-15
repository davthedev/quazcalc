<template>
  <q-page class="calc-page">
      <div class="column calc-output q-pa-sm">
        <p class="text-right q-mb-none text-grey-5 calc-output-caption">CALC</p>
        <p class="col text-center q-mb-none text-grey-9" v-if="!value_buffer">
          Type in....</p>
        <p class="text-right q-mb-none text-white" v-if="value_buffer">{{value_buffer}}</p>
      </div>
        
      <q-btn class="btn-1" unelevated color="grey-7" label="1" @click="typeNewDigit(1)"/>
      <q-btn class="btn-2" unelevated color="grey-7" label="2" @click="typeNewDigit(2)"/>
      <q-btn class="btn-3" unelevated color="grey-7" label="3" @click="typeNewDigit(3)"/>
      <q-btn class="btn-4" unelevated color="grey-7" label="4" @click="typeNewDigit(4)"/>
      <q-btn class="btn-5" unelevated color="grey-7" label="5" @click="typeNewDigit(5)"/>
      <q-btn class="btn-6" unelevated color="grey-7" label="6" @click="typeNewDigit(6)"/>
      <q-btn class="btn-7" unelevated color="grey-7" label="7" @click="typeNewDigit(7)"/>
      <q-btn class="btn-8" unelevated color="grey-7" label="8" @click="typeNewDigit(8)"/>
      <q-btn class="btn-9" unelevated color="grey-7" label="9" @click="typeNewDigit(9)"/>
      <q-btn class="btn-0" unelevated color="grey-7" label="0" @click="typeNewDigit(0)"/>
      <q-btn class="btn-point" unelevated color="grey-9" label="." @click="typeNewDigit('.')"/>
      <q-btn class="btn-plus" unelevated color="grey-9" label="+" @click="typeNewDigit('+')"/>
      <q-btn class="btn-minus" unelevated color="grey-9" @click="typeNewDigit('-')">&minus;</q-btn>
      <q-btn class="btn-multiply" unelevated color="grey-9" @click="typeNewDigit('*')">&times;</q-btn>
      <q-btn class="btn-divide" unelevated color="grey-9" @click="typeNewDigit('/')">&divide;</q-btn>
      <q-btn class="btn-erase" unelevated color="pink-12" icon="backspace" @click="eraseOneDigit"/>
      <q-btn class="btn-clear" unelevated color="pink-12" icon="delete" @click="eraseAll"/>
      <q-btn class="btn-exe" unelevated label="=" color="light-green-14" @click="calculate"/>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  data() {
    return {
      value_buffer: '',
    };
  },

  mounted() {
    window.addEventListener('keypress', e => {
      console.log(String.fromCharCode(e.keyCode));
    });
  },

  methods: {
    typeNewDigit(digit) {
      this.value_buffer += digit;
    },

    eraseOneDigit() {
      if (this.value_buffer === '') {
        return;
      }
      this.value_buffer = this.value_buffer.substring(0, this.value_buffer.length - 1);
    },

    eraseAll() {
      this.value_buffer = '';
    },

    calculate() {
      let result = eval(this.value_buffer);// eslint-disable-line no-eval
      this.value_buffer = String(result);
    },
  },
};
</script>

<style lang="sass">

@media (orientation: portrait)
  .calc-page
    grid-template-columns: 1fr 1fr 1fr 1fr
    grid-template-rows: 1.5fr 1fr 1fr 1fr 1fr 1fr

    .btn-0
      grid-column : 2
      grid-row: 6

    .btn-1
      grid-column : 1
      grid-row: 5
    .btn-2
      grid-column : 2
      grid-row: 5
    .btn-3
      grid-column : 3
      grid-row: 5

    .btn-4
      grid-column : 1
      grid-row: 4
    .btn-5
      grid-column : 2
      grid-row: 4
    .btn-6
      grid-column : 3
      grid-row: 4

    .btn-7
      grid-column : 1
      grid-row: 3
    .btn-8
      grid-column : 2
      grid-row: 3
    .btn-9
      grid-column : 3
      grid-row: 3
    .btn-point
      grid-column : 3
      grid-row: 6

    .btn-plus
      grid-column : 3
      grid-row: 2
    .btn-minus
      grid-column : 4
      grid-row: 2
    .btn-multiply
      grid-column : 4
      grid-row: 3
    .btn-divide
      grid-column : 4
      grid-row: 4

    .btn-erase
      grid-column : 1
      grid-row: 2
    .btn-clear
      grid-column : 2
      grid-row: 2

    .btn-exe
      grid-column : 4
      grid-row: 5 / span 2

    
@media (orientation: landscape)
  .calc-page
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr
    grid-template-rows: 1.5fr 1fr 1fr 1fr 1fr

    .btn-0
      grid-column : 2
      grid-row: 5

    .btn-1
      grid-column : 1
      grid-row: 4
    .btn-2
      grid-column : 2
      grid-row: 4
    .btn-3
      grid-column : 3
      grid-row: 4

    .btn-4
      grid-column : 1
      grid-row: 3
    .btn-5
      grid-column : 2
      grid-row: 3
    .btn-6
      grid-column : 3
      grid-row: 3

    .btn-7
      grid-column : 1
      grid-row: 2
    .btn-8
      grid-column : 2
      grid-row: 2
    .btn-9
      grid-column : 3
      grid-row: 2
    .btn-point
      grid-column : 3
      grid-row: 5

    .btn-plus
      grid-column : 4
      grid-row: 3
    .btn-minus
      grid-column : 5
      grid-row: 3
    .btn-multiply
      grid-column : 4
      grid-row: 4
    .btn-divide
      grid-column : 4
      grid-row: 5

    .btn-erase
      grid-column : 4
      grid-row: 2
    .btn-clear
      grid-column : 5
      grid-row: 2

    .btn-exe
      grid-column : 5
      grid-row: 4 / span 2

.calc-page
  background-color: $grey-10
  display: grid
  grid-row-gap: 4px
  grid-column-gap: 4px
  padding: 4px

  .q-btn
    font-size : 6vmin
    .q-icon
      font-size : 6vmin

  .calc-output
    grid-row: 1
    grid-column : 1 / span 5
    p
      line-height: 1
      font-size: 10vh
      font-weight : 300
    
    .calc-output-caption
      font-size: 5vh

</style>
