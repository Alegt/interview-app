export const productSearchQuery = `
  fragment ProductsFragment on Product {
    id
    name
    url
    stockStatus
    brand {
      name
    }
    aggregates {
      totalColors
      totalVariations
      variationsOnSale
      minDiscount
      minListPrice
      minSalePrice
      maxDiscount
      maxListPrice
      maxSalePrice
      pastSeasonColors
    }
    flags {
      isExclusive
      isNewArrival
      isPastSeason
      isGearheadPick
    }
    reviewAggregates {
      totalReviews
      averageRating
    }
    colors {
      colorId
      name
      tileImage
      pliImage
    }
  }

  query searchPLP($term: String!, $first: Int!, $after: String, $catalog: String!) {
    search(
      term: $term
      catalog: $catalog
      first: $first
      after: $after
    ) {
      requestId
      totalCount
      edges {
        node {
          ...ProductsFragment
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        pages {
          value
          cursor
        }
        firstPage {
          value
          cursor
          hasGap
        }
        lastPage {
          value
          cursor
          hasGap
        }
      }
    }
  }
`;
