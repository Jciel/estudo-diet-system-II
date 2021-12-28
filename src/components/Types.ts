
export type User = {
    id: Number,
    name: string,
    profilePhoto: string,
    records: Array<Register>
}

export type CommentRegister = {
    id: string,
    comment: string
}

export type Register = {
    id: Number,
    title: string,
    date: Date,
    description: string,
    image: string,
    comments: Array<CommentRegister>
}