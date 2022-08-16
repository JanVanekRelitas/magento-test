import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient,createHttpLink, InMemoryCache } from '@apollo/client/core'
import App from './App.vue'

const cache = new InMemoryCache()

const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'https://venia.magento.com/graphql'
  })

const apolloClient = new ApolloClient({
  cache,
  link: httpLink,
})

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.mount('#app');