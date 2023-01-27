export type GoodImage = {
    id: number,
    adId: number,
    url: string,
}

export type User = {
    userId: number,
    name: string,
    email: string,
    city: string,
    avatar: string,
    salesFrom: string,
    phone: string,
}

export type Good = {
    title: string,
    description: string,
    price: number,
    id: number,
    images: Array<GoodImage>,
    userId: number,
    created_on: string,
    user: User,
}

export type AdsState = {
    allGoods: Good[],
    appGoods: Good[],
    loading: boolean,
    error: string | null,
}