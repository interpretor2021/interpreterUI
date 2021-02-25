import { Component, OnInit, TemplateRef } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  files:any=[]
  fileURL=''
  
  modalRef!: BsModalRef;
  constructor(private searchService: SearchService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getFiles()
    this.getFile()
  }

  openModal(template: TemplateRef<any>, filename:string) {
    this.modalRef = this.modalService.show(template);
    this.fileURL= filename
  }

  getFiles(){
    this.searchService.getFiles().subscribe((data) =>{
      this. files= data;
      console.log('this:', this.files)
    })
  }

  getFile(){
    this.searchService.getFile().subscribe((data) =>{
      // this. files= data;
      console.log('this data is:', data)
    })
  }

  showText(){

  }

  

}
