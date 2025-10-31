"use server"
import { stackServerApp } from "@/stack/server";

export interface CreateArticleInput {
    title: string;
    content: string;
    authorId: string;
    imgUrl: string;
}

export interface UpdateArticleInput {
    title: string;
    content: string;
    imgUrl: string;
}

export async function createArticle(data: CreateArticleInput) {
    const user = await stackServerApp.getUser();
    if(!user) {
        throw new Error("Unauthorized");
    }
    console.log("Article created", data);
    return { success: true, message: "Article successfully created"};
}

export async function updateArticle(data: UpdateArticleInput) {
    const user = await stackServerApp.getUser();
    if(!user) {
        throw new Error("Unauthorized");
    }
    const authorId = user.id;

    console.log("Article updated", authorId, data);
    return { success: true, message: "Article successfully updated"};
}
