import { BlogService } from './blog.service';
import { CreatePostDTO } from './dto/create-post.dto';
export declare class BlogController {
    private blogService;
    constructor(blogService: BlogService);
    getPosts(res: any): Promise<void>;
    getPost(res: any, postId: any): Promise<any>;
    addPost(res: any, createPostDto: CreatePostDTO): Promise<any>;
    editPost(res: any, postID: any, createPostDTO: CreatePostDTO): Promise<any>;
    deletePost(res: any, postID: any): Promise<any>;
}
