import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class DialogsEffectsService {
    public readonly addedSuccess$ = createEffect(() => this.addedSuccess(), {
        dispatch: false,
    });

    public readonly addedFailed$ = createEffect(() => this.addedFailed(), {
        dispatch: false,
    });

    public readonly removedSuccess$ = createEffect(() => this.removedSuccess(), {
        dispatch: false,
    });

    public readonly removedFailed$ = createEffect(() => this.removedFailed(), {
        dispatch: false,
    });

    constructor(private readonly actions: Actions) {}

    private addedSuccess(): Observable<unknown> {
        return this.actions.pipe(
            ofType('[Hero] @ngrx/data/save/add-one/success'),
            tap(() => {
                this.openSnackBar('Hero added success');
            })
        );
    }

    private addedFailed(): Observable<unknown> {
        return this.actions.pipe(
            ofType('[Hero] @ngrx/data/save/add-one/failed'),
            tap(() => {
                this.openSnackBar('Hero added failed');
            })
        );
    }

    private removedFailed(): Observable<unknown> {
        return this.actions.pipe(
            ofType('[Hero] @ngrx/data/save/delete-one/failed'),
            tap(() => {
                this.openSnackBar('Hero delete failed');
            })
        );
    }

    private removedSuccess(): Observable<unknown> {
        return this.actions.pipe(
            ofType('[Hero] @ngrx/data/save/delete-one/success'),
            tap(() => {
                this.openSnackBar('Hero delete success');
            })
        );
    }

    private openSnackBar(message: string): void {
        alert(message);
    }
}
