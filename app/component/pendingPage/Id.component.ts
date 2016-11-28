import { Component, Input, OnInit, OnChanges } from '@angular/core';
import {Router} from "@angular/router";
import {Library} from "../../service/model/library";

@Component({
    moduleId: module.id,
    selector: '[id-field]',
    template: `
                <td align = "center"><span (click) = "onSelect(library.id)">
                                            <p [theHighlight] = "newstatus">{{library.id}}</p>
                                     </span>
                </td>
              `
})

export class IdField{

    @Input('id-field')
    library: Library;

    @Input()
    newstatus: string;

    constructor( private router: Router) { }

  onSelect(idfield: number){
    this.router.navigate(['/review', idfield]);
  }

}
