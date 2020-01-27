import { Model } from 'mongoose';
import { Post } from './interfaces/post.interface';
import { CreatePostDTO } from './dto/create-post.dto';
export declare class BlogService {
    private readonly postModel;
    constructor(postModel: Model<Post>);
    getPosts(): Promise<Post[]>;
    getPost(postId: any): Promise<Post>;
    addPost(createPostDto: CreatePostDTO): Promise<Post>;
    editPost(postId: any, createPostDto: CreatePostDTO): Promise<Post>;
    deletePost(postId: any): Promise<any>;
}
