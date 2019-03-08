
export interface DetailArticle {
    author: {
        bio: string;
        following: boolean;
        image: string;
        username: string;
    };
    body: string;
    createdAt: string;
    description: string;
    favorited: boolean;
    favoritesCount: number;
    slug: string;
    tagList: string[];
    title: string;
    updatedAt: string;
}

export interface ListArticle {
    articles: DetailArticle[];
    articlesCount: number;
}

export interface Profile {
    profile: {
        bio: string;
        following: boolean;
        image: string;
        username: string;
    };
}

export interface Comments {
    comments: [{
        author: {
            bio: string;
            following: boolean;
            image: string;
            username: string;
        };
        body: string;
        createdAt: string;
        id: number;
        updatedAt: string;
    }];
}
