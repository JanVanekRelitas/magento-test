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
query GetProductsInCategory($categoryUid: [String]) {
    products(
        filter: {
            category_uid: {in: $categoryUid}
        }
        ) {
        items {
            name
            url_key
            small_image{
                url
                label
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

export const PRODUCT_DETAIL = gql`
query GetProductDetail($productUrlKey: [String]) {
    products(
        filter: {
            url_key: {in: $productUrlKey}
        }
        ) {
        items {
            name
            url_key
            small_image{
                url
                label
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