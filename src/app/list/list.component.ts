import { Component, OnInit } from '@angular/core';
/* Serviços */ 
import { Router } from '@angular/router'
import { DespesaService } from '../despesa.service'

/* Classes */
import { Despesa } from '../despesa'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {
  
  despesas: Despesa[] = new Array()

  constructor(private despesaService: DespesaService,  private router: Router) { }

  ngOnInit() {
    this.despesas = this.despesaService.getAll()
  }

  del(despesaId: number): void{
    this.despesaService.delete(despesaId)
  }

  add(): void {
    
    this.router.navigate(['/add'])
  }

}
