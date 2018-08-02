<template>
  <b-container fluid>
    <b-row no-gutters>
      <b-col class="padding-0 mb-5">
        <navigation></navigation>
      </b-col>
    </b-row>
    <b-row>
      <b-col xl="9" offset-xl="2" class="pb-3 mt-4">
        <b-form-input
        v-model="search"
        type="text"
        placeholder="Search Word"></b-form-input>
      </b-col>
      <b-col>
        <b-button v-b-modal.modal-center variant="primary" class="mt-4">Add word</b-button>
      </b-col>
      <b-col xl="10" offset-xl="2" class="padding-table">
        <b-table striped hover responsive :items="items"></b-table>
      </b-col>
    </b-row>
    <b-modal id="modal-center" centered title="Add word">
      <b-form>
        <b-form-group id="wordId"
            label="Word:"
            label-for="enterWord">
          <b-form-input id="enterWord"
            type="text"
            placeholder="Enter word">
          </b-form-input>
        </b-form-group>
        <b-form-group id="tranId"
            label="Transcription:"
            label-for="enterTran">
          <b-form-input id="enterTran"
            type="text"
            placeholder="Enter transcription">
          </b-form-input>
        </b-form-group>
      </b-form>
    </b-modal>
  </b-container>
</template>

<script>
import Navigation from '@/components/App/NavigationApp'
export default {
  components: {
    Navigation
  },
  data () {
    return {
      items: [
        { word: 'test', transcription: 'тест', details: 'ds' },
        { word: 'hello', transcription: 'привет', details: 'ds' },
        { word: 'world', transcription: 'мир', details: 'ds' },
        { word: 'what', transcription: 'что', details: 'ds' },
        { word: 'where', transcription: 'где', details: 'ds' },
        { word: 'where', transcription: 'где', details: 'ds' },
        { word: 'where', transcription: 'где', details: 'ds' },
        { word: 'where', transcription: 'где', details: 'ds' },
        { word: 'where', transcription: 'где', details: 'ds' },
        { word: 'where', transcription: 'где', details: 'ds' },
        { word: 'where', transcription: 'где', details: 'ds' },
        { word: 'where', transcription: 'где', details: 'ds' },
        { word: 'where', transcription: 'где', details: 'ds' },
        { word: 'where', transcription: 'где', details: 'ds' },
        { word: 'where', transcription: 'где', details: 'ds' },
        { word: 'where', transcription: 'где', details: 'ds' }
      ]
    }
  }
}
</script>

<style>
.container-fluid {
  padding: 0;
}
.padding-0 {
  padding: 0
}
.padding-table {
  padding: 15px 25px 0px 15px
}
tr:nth-child(2n) {
  background-color: #007BFF;
  color: #ffffff;
  font-weight: 600
}
tr:nth-child(2n+1) {
  background-color: #ffffff !important;
  font-weight: 600
}
thead {
  color:#007BFF
}
tr:hover {
  background-color: #ffffff;
  color: #007BFF
}
</style>
