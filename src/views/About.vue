<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a @click="btoa">btoa</a>
    <a @click="atob">atob</a>
  </div>
</template>

<script>
// @ is an alias to /src
import { Octokit } from '@octokit/core'
import { Base64 } from 'js-base64'

const octokit = new Octokit({ auth: process.env.VUE_APP_GITHUB_TOKEN })

export default {
  name: 'About',
  setup () {
    const count
    const atob = () => {
      console.log(Base64.decode(process.env.VUE_APP_GITHUB_TOKEN))
      // octokit.request('POST /repos/LarchLiu/gh-twitter/dispatches', {
      //   event_type: 'changeuser'
      // }).then(res => {
      //   console.log(res.data)
      // }).catch(e => {
      //   console.log(e)
      // })
    }
    const btoa = () => {
      console.log(Base64.encode(Base64.decode(process.env.VUE_APP_GITHUB_TOKEN)))
    }

    return {
      atob,
      btoa
    }
  }
}
</script>
