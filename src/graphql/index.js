import gql from 'graphql-tag'

export const CATEGORY_LIST_QUERY = gql`
query GetCategoryList {
  categoryList {
    children_count
    children {
      uid
      level
      name
      path
      url_path
      url_key
      children {
        uid
        level
        name
        path
        url_path
        url_key
      }
    }
  }
}
`
export const PRODUCTS_IN_CATEGORY_QUERY = gql`
query GetProductsInCategory($categoryUID: [String]) {
    products(
        filter: {
            category_uid: {in: $categoryUID}
        }
        ) {
        items {
            name
            sku
            small_image{
                url
            }
            price_range {
            minimum_price {
                regular_price {
                value
                currency
                }
            }
            }
        }
    }
}
`