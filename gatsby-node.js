const path = require("path");

exports.createPages = async ({graphql, actions}) => {
    const { data } = await graphql(`
    query Article {
  allStrapiArticle {
    edges {
      node {
        id
        count
        description
        created_at(locale: "ru")
        title
      }
    }
    totalCount
  }
}   
    `)

    const {allStrapiArticle} = data;
    console.log(allStrapiArticle);

    allStrapiArticle.edges.forEach( node => {
        actions.createPage({
            path: `/articles/${node.node.id}`,
            component: path.resolve("./src/templates/article.js"),
            context: {...node.node}
        })
    })

}