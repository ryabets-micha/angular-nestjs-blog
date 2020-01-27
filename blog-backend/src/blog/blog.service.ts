import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Post} from './interfaces/post.interface';
import {CreatePostDTO} from './dto/create-post.dto';

@Injectable()
export class BlogService {
    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) { }

    async getPosts(): Promise<Post[]> {
        return await this.postModel.find().exec();
    }

    async getPost(postId): Promise<Post> {
        return await this.postModel.findById(postId).exec();
    }

    async addPost(createPostDto: CreatePostDTO): Promise<Post> {
        const newPost = await this.postModel(createPostDto);
        return newPost.save();
    }

    async editPost(postId, createPostDto: CreatePostDTO): Promise<Post> {
        return await this.postModel.findByIdAndUpdate(postId, createPostDto, {new: true});
    }

    async deletePost(postId): Promise<any> {
        return await this.postModel.findByIdAndRemove(postId);
    }
}
