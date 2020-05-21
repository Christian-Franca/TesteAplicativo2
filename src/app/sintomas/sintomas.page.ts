import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sintomas',
  templateUrl: './sintomas.page.html',
  styleUrls: ['./sintomas.page.scss'],
})
export class SintomasPage implements OnInit {

    private soma:number=0;
    FS: number;
    FN: number;

    TSS: number;
    TSN: number;

    DIGS: number;
    DIGN: number;

    DRS: number;
    DRN: number;

    APS: number;
    APN: number;

    AOS: number;
    AON: number;

    SNES: number;
    SNEN: number;

    DCS: number;
    DCN: number;

    DS: number;
    DN: number;

    V14S: number;
    V14N: number;

    C14S: number;
    C14N: number;

    DCRS: number;
    DCRN: number;

  constructor() { }

  ngOnInit() {
  }

}
