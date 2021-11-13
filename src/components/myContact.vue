<template>
  <div v-if="setContact == '' || setContact == null || isLoading == true">
    <spinner />
  </div>
  <div v-else>
    <div class="row text-center">
      <div class="col-md-6 offset-md-3">
        <div class="text-center">
          <h2 class="text-danger">This is an ever growing list</h2>
          <p>
            I go by the username casjay I have been using that username since I created my first
            account on yahoo in 1997.. <br />
            Other usernames include chmweb and casjaysdev. I try to sign every commit so it can be
            verified
          </p>
          <br />
          <h2 class="text-danger">Personal websites:</h2>
          <div v-if="setContact.websites == null">
            <h3 class="text-primary">Problem loading data</h3>
            <spinner />
            <br />
          </div>
          <div v-else>
            <div>
              <span class="m-5" v-for="[name, url] in setContact.websites" v-bind:key="name">
                <a :href="`${url}`"> {{ name }} </a>
                <br />
              </span>
              <br />
            </div>
          </div>
          <h2 class="text-danger">Phone/Fax:</h2>
          <div v-if="setContact.phone == null">
            <h3 class="text-primary">Problem loading data</h3>
            <spinner />
            <br />
          </div>
          <div v-else>
            <div>
              <span v-for="[name, number] in setContact.phone" v-bind:key="name">
                {{ name }}: {{ number }}
                <br />
              </span>
              <br />
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-danger">E-Mail:</h2>
          <div v-if="setContact.email_primary == null">
            <h3 class="text-primary">Problem loading data</h3>
            <spinner />
            <br />
          </div>
          <div v-else>
            <span v-for="[name, url, display] in setContact.email_primary" v-bind:key="`${name}`">
              {{ name }}: <a :href="`mailto:${url}`">{{ display }}</a>
              <br />
            </span>
            <br />
          </div>
        </div>
        <div>
          <h2 class="text-danger">Other E-mail:</h2>
          <div v-if="setContact.email_other == null">
            <h3 class="text-primary">Problem loading data</h3>
            <spinner />
            <br />
          </div>
          <div v-else>
            <span v-for="[name, url, display] in setContact.email_other" v-bind:key="`${name}`">
              {{ name }}: <a :href="`mailto:${url}`">{{ display }}</a>
              <br />
            </span>
            <br />
          </div>
        </div>
        <div>
          <h2 class="text-danger">Chat:</h2>
          <div v-if="setContact.chat == null">
            <h3 class="text-primary">Problem loading data</h3>
            <spinner />
            <br />
          </div>
          <div v-else>
            <span v-for="[name, url, display] in setContact.chat" v-bind:key="`${name}`">
              {{ display }}: <a :href="`http://${url}`">{{ name }}</a>
              <br />
            </span>
          </div>
        </div>
        <div>
          <h2 class="text-danger">Public and Social links:</h2>
          <div v-if="setContact.sociala == null">
            <h3 class="text-primary">Problem loading data</h3>
            <spinner />
            <br />
          </div>
          <div v-else>
            <span v-for="[name, url] in setContact.social" v-bind:key="`${name}`">
              <a :href="`http://${url}`">{{ name }}</a>
              <br />
            </span>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mb-5"></div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';
import Spinner from '@/loaders/spinner.vue';

@Options({
  props: {
    msg: String,
    msgSpinner: { type: String },
  },
  components: { Spinner },
  computed: {},
  methods: {
    isLoading() {
      this.isLoading = true;
    },
  },
  data() {
    return {
      isLoading: true,
      setContact: [],
    };
  },
  mounted() {
    axios
      .get('https://raw.githubusercontent.com/casjay/casjay/main/profile.json')
      .then((response) => {
        this.setContact = response.data;
        if (!this.setContact) {
          this.isLoading = true;
        }
      });
    this.isLoading = false;
  },
})
export default class myContact extends Vue {}
</script>
