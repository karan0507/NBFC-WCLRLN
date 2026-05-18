import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dormant-stage',
  templateUrl: './dormant-stage.component.html',
  styleUrls: ['./dormant-stage.component.css']
})
export class DormantStageComponent implements OnInit {
  dormantList: any;
  apiLoader = {
    'getLoader': false,
    'onUpdate': false
  };

  selectedStageFilters: any;
  selectedDaysOfDormantStage: any;

  constructor(private http: HttpService, private message: NzMessageService) { }

  ngOnInit(): void {
    this.getDormatList();
  }


  getDormatList(){
    this.http.getDormatSupportedStageList().subscribe((res: any)=>{
      this.dormantList = res?.data
      console.log(res);
    })
  }

  getSelectedDormantStage(e){
    console.log(this.selectedStageFilters);
    this.selectedDaysOfDormantStage = e?.dormant_days
    console.log(e);
  }

  onClickUpdateDormantStage(){
    this.apiLoader['onUpdate'] = true;
    let data = {
      "stage" : this.selectedStageFilters?.id,
      "no_of_days" : this.selectedDaysOfDormantStage
  }
    this.http.updataeDormantStage(data).subscribe((res: any)=>{
      if(res?.success){
        this.message.success(res?.message);
        this.apiLoader['onUpdate'] = false;
      } else {
        this.message.error(res?.message);
        this.apiLoader['onUpdate'] = false;
      }
    }, error =>{
      this.apiLoader['onUpdate'] = false;
    })
    console.log(this.selectedDaysOfDormantStage);
    console.log(this.selectedStageFilters);
  }

}
