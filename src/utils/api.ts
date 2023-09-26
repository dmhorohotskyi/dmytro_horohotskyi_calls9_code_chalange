export default {
    userUrl: 'https://hacker-news.firebaseio.com/v0/user/jl.json?print=pretty',


    getArticleUrl(articleId: string) {
        return `https://hacker-news.firebaseio.com/v0/item/${articleId}.json?print=pretty`
    }
}