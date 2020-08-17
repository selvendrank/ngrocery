import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map, mergeMap } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import { ApiService } from '../../services/api.service'
import { ProductSubGroup } from '../../model/product-sub-group'
// TODO: Replace this with your own data model type




/**
 * Data source for the ProductSubGroup view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProductSubGroupDataSource extends DataSource<ProductSubGroup> {
    data: ProductSubGroup[];
    paginator: MatPaginator;
    sort: MatSort;
    private productSubGroups = new BehaviorSubject<ProductSubGroup[]>([]);

    constructor(private apiService: ApiService) {
        super();
    }
    // connect(collectionViewer: CollectionViewer): Observable<ProductSubGroup[]> {
    //     return this.productSubGroups.asObservable();
    // }



    loadProductSubGroups(filter = '',
        sortDirection = 'asc', pageIndex = 0, pageSize = 3) {

        this.apiService.getProductSubGroups().pipe(
            // catchError(() => of([])),
            // finalize(() => this.loadingSubject.next(false))
        )
            .subscribe((subGroups: ProductSubGroup[]) => {
                var data = this.getPagedData(this.getSortedData([...subGroups]));
                this.productSubGroups.next(data);
                this.data = data;
            });
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect(): Observable<ProductSubGroup[]> {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        const dataMutations = [
            observableOf(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];

        return this.productSubGroups.asObservable();


        // return merge(...dataMutations).pipe(map(() => {
        //     return this.getPagedData(this.getSortedData([...this.data]));            
        // }));
    }

    //     load(filter = '',
    //             sortDirection = 'asc', pageIndex = 0, pageSize = 3) {

    //     this.loading.next(true);

    //     this.coursesService.findLessons(courseId, filter, sortDirection,
    //         pageIndex, pageSize).pipe(
    //         catchError(() => of([])),
    //         finalize(() => this.loadingSubject.next(false))
    //     )
    //     .subscribe(lessons => this.lessonsSubject.next(lessons));
    // }

    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() {
        this.productSubGroups.complete();

    }

    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    private getPagedData(data: ProductSubGroup[]) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    }

    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    private getSortedData(data: ProductSubGroup[]) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }

        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'name': return compare(a.masterName, b.masterName, isAsc);
                case 'masterID': return compare(+a.masterID, +b.masterID, isAsc);
                default: return 0;
            }
        });
    }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
