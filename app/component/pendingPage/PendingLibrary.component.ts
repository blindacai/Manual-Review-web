import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {Library} from "../../service/model/library";
import {Router} from "@angular/router";
import {updateLibrary} from "../../service/model/updateLibrary";

@Component({
  selector: '[pending-lib]',
  template: `
              <td [id-field] = "library"></td>
              <td [lib-field] = "library.lib"></td>
              <td [sublib-field] = "library.sublib"></td>
              <td class="col-md-1" [limsprotocol-field] = "library.limsprotocol"></td>
              <td class="col-md-1" [status-field] = "library"></td>
              <td class="col-md-3" [comments-field] = "library" [updateLib] = "updateLib"></td>
              <td [alerts-field] = "library" [updateLib] = "updateLib"></td>
              
              <td align = "center" [update-button] = "library" [newfieldvalue] = "updateLib" (updatedLibs) = "updatedLibs($event)"></td>
              `
})

export class PendingLibraryComponent implements OnInit{

  @Input('pending-lib')
  library: Library;

  updateLib: updateLibrary = {
    addcomments: null,
    addalerts: []
  };

  private color: string;

  @Output()
  updatedLibraries = new EventEmitter<Library[]>();

  constructor(
      private router: Router) { }

  ngOnInit(){}

  updatedLibs(libs: Library[]) {
    this.updatedLibraries.emit(libs);
  }
}
