import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    template:
    `   <div class="container">
            <h1>New Events</h1>
            <hr>
            <div class="col-md-6">
                <h3>
                    [Create Event Form will go here]
                </h3>
                <br/>
                <br/>
                <button type="submit" class="btn btn-primary">Save</button>
                <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
            </div>
        </div>
    `
})

export class CreateEventComponent{
    isDirty:boolean = false
    constructor(private router:Router){

    }

    cancel(){
        this.router.navigate(['/events'])
    }
}