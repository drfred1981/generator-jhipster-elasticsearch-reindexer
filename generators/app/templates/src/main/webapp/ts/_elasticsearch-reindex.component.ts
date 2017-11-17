import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
<%_ if (enableTranslation) { _%>
import { JhiLanguageService } from 'ng-jhipster';
<%_ } _%>

import { ElasticsearchReindexModalComponent } from './elasticsearch-reindex-modal.component';

@Component({
    selector: 'jhi-elasticsearch-reindex',
    templateUrl: './elasticsearch-reindex.component.html'
})
export class ElasticsearchReindexComponent {

    constructor(
        <%_ if (enableTranslation) { _%>
        private jhiLanguageService: JhiLanguageService,
        <%_ } _%>
        private modalService: NgbModal
    )<%_ if (enableTranslation) { %> {
        this.jhiLanguageService.setLocations(['elasticsearch-reindex']);
    }<%_ } else { %> { }<%_ } %>

    showConfirm() {
        this.modalService.open(ElasticsearchReindexModalComponent);
    }
}