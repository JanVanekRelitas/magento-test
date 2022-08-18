import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { provideApolloClient } from "@vue/apollo-composable";




const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: '/magentoGraphql'
})
provideApolloClient(apolloClient)

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

app.use(router)
app.mount('#app');