import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { PostService } from '../entities/post/post.service';
import { IPost, Post } from 'app/shared/model/post.model';
import { JhiEventManager, JhiAlertService, JhiDataUtils } from 'ng-jhipster';

import { LoginModalService, Principal, Account } from 'app/core';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.css']
})
export class HomeComponent implements OnInit {

    posts: Post[] = [];

    constructor(
        private postService: PostService,
        private jhiAlertService: JhiAlertService
    ) {}

    loadAll() {
        this.postService.query().subscribe(
            (res: HttpResponse<IPost[]>) => {
                this.posts = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
//        this.principal.identity().then(account => {
//            this.currentAccount = account;
//        });
//        this.registerChangeInPosts();
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
