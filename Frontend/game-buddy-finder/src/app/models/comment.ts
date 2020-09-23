import { User } from './user'
export class Comment {
    commentId: number;          //Server Generated
    postId: number;
    posterUserId: number;
    content: string;
    postTime: VarDate;          //Server Generated
    Poster: User;               //Server Generated

    public constructor(postId: number, posterUserId: number, content: string) {
        this.postId = postId;
        this.posterUserId = posterUserId;
        this.content = content;
    }
}