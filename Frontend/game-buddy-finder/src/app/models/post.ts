import { User } from './user'
import { Comment } from './comment'

export class Post {
    postId: number;                 //Server Generated
    posterUserId: number;
    content: string;
    postTime;              //Server Generated
    Poster: User;                   //Server Generated

    Comments: Comment[];

    public constructor(posterUserId: number, content: string) {
        this.posterUserId = posterUserId;
        this.content = content;
    }
}