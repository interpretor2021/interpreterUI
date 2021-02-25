import { Component, OnInit, TemplateRef } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  files: any = []
  fileURL = ''
  filecontent = ''
  searchTxt: string = ''
  fileType: string = ''
  selectedFile: any

  types: any = [{ value: "all", title: 'ALL' },
  { value: "pdf", title: 'PDF' },
  { value: "txt", title: 'TXT' },
  { value: "jpg", title: 'JPG' }]

  modalRef!: BsModalRef;
  constructor(private searchService: SearchService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getFiles()
    this.getFile()
  }

  openModal(template: TemplateRef<any>, file: any) {
    this.modalRef = this.modalService.show(template);
    this.fileURL = file.filename
    this.selectedFile = file
    console.log('he---------', file, this.fileURL)
    //if(file.filetype !=)

    this.searchService.getFilePreview(this.fileURL).subscribe((data: any) => {
      this.filecontent = data.response;
      console.log('this:', this.files)
    })

  }

  getFiles() {
    this.searchService.getFiles().subscribe((data) => {
      this.files = data;
      console.log('this:', this.files)
    })
  }

  getFile() {
    this.searchService.getFile().subscribe((data) => {
      // this. files= data;
      console.log('this data:', data)
    })
  }

  searchText(text: string, type: string) {
    this.searchService.searchtext(this.searchTxt, type).subscribe((data) => {
      this.files = data;
      console.log('this:', this.files)
    })
  }



}
