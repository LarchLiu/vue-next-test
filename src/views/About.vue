<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a @click="webhook">webhook</a>
  </div>
</template>

<script>
// @ is an alias to /src
// import { Octokit } from '@octokit/core'

// const octokit = new Octokit({ auth: process.env.VUE_APP_GITHUB_TOKEN })

export default {
  name: 'About',
  setup () {
    const webhook = () => {
      console.log(process.env.VUE_APP_GITHUB_TOKEN)
      // octokit.request('POST /repos/LarchLiu/gh-twitter/dispatches', {
      //   event_type: 'changeuser'
      // }).then(res => {
      //   console.log(res.data)
      // }).catch(e => {
      //   console.log(e)
      // })
    }

    return {
      webhook
    }
  }
}
</script>
