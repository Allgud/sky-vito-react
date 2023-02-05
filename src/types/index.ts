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
    id: number,
    name: string,
    email: string,
    city: string,
    avatar: string,
    sells_from: string,
    phone: string,
    role?: string,
    surname: string
}

export type Good = {
    title: string,
    description: string,
    price: number,
    id: number,
    images: GoodImage[],
    user_id: number,
    created_on: string,
    user: User,
}

export type AdsState = {
    allGoods: Good[],
    appGoods: Good[],
    loading: boolean,
    error: string | null,
    currentGood: Good | null,
    comments: Comment[],
    sellerGoods: Good[],
    isUserGood: boolean
}

export type AdsImage = {
    url: string,
    id: number,
    ad_id: number
}

export type UserState = {
    user: User,
    isUser: boolean,
    isAuth: boolean,
    userGoods: Good[]
}

export type FormValues = {
    email: string,
    password: string,
    confirm_password?: string,
    name?: string,
    surname?: string,
    city?: string,
}

export type ProfileFormValues = {
    name: string,
    surname: string,
    city: string,
    phone: string
}

export type AuthData = {
    access_token: string,
    refresh_token: string,
    token_type: string
}

export type SellerState = {
    currentSeller: User
}

export type ComponentTitle = {
    title: string
}

export type AdsFormProps = {
    ads_title: string,
    text: string,
    price: string,
    data?: Array<File>
}

export type ExtAdsFormProps = {
    body: AdsFormProps,
    id: number
}

export type ExtAdsImage = {
    formdata: FormData,
    id: number
}