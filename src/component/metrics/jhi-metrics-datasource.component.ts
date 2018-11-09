/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
import {Component, Input} from '@angular/core';

@Component({
    selector: 'jhi-metrics-datasource',
    template: `
        <h3 jhiTranslate="metrics.datasource.title">DataSource statistics (time in millisecond)</h3>
        <div class="table-responsive" *ngIf="!updating">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th><span jhiTranslate="metrics.datasource.usage">Usage</span> ({{datasourceMetrics.active.value}} / {{datasourceMetrics.max.value}})</th>
                    <th class="text-right" jhiTranslate="metrics.datasource.count">Count</th>
                    <th class="text-right" jhiTranslate="metrics.datasource.mean">Mean</th>
                    <th class="text-right" jhiTranslate="metrics.datasource.max">Max</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <div class="progress progress-striped">
                            <ngb-progressbar [max]="datasourceMetrics.max.value" [value]="datasourceMetrics.active.value" [striped]="true" [animated]="false" type="success">
                                <span>{{datasourceMetrics.active.value * 100 / datasourceMetrics.max.value | number:'1.0-0'}}%</span>
                            </ngb-progressbar>
                        </div>
                    </td>
                    <td class="text-right">{{datasourceMetrics.usage.count}}</td>
                    <td class="text-right">{{filterNaN(datasourceMetrics.usage.mean) | number:'1.0-2'}}</td>
                    <td class="text-right">{{filterNaN(datasourceMetrics.usage.max) | number:'1.0-2'}}</td>
                </tr>
                </tbody>
            </table>
        </div>`
})
export class JhiMetricsDatasourceComponent {

    /**
     * object containing all datasource related metrics
     */
    @Input() datasourceMetrics: {
        active: any;
        max: any;
        usage: any;
    };

    /**
     * boolean field saying if the metrics are in the process of being updated
     */
    @Input() updating: boolean;

    filterNaN(input) {
        if (isNaN(input)) {
            return 0;
        }
        return input;
    }
}
