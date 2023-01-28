export type GoodImage = {
    id: number,
    adId: number,
    url: string,
}

export type Comment = {
    author: User,
    created_on: string,
    id: number,
    text: string
}

export type User = {
    userId: number,
    name: string,
    email: string,
    city: string,
    avatar: string,
    sells_from?: string,
    phone: string,
}

export type Good = {
    title: string,
    description: string,
    price: number,
    id: number,
    images: GoodImage[],
    userId: number,
    created_on: string,
    user: User,
}

export type AdsState = {
    allGoods: Good[],
    appGoods: Good[],
    loading: boolean,
    error: string | null,
    currentGood: Good | null,
    comments: Comment[]
}

export type AdsImage = {
    url: string,
    id: number,
    ad_id: number
}
